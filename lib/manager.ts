import { Graph, alg } from "graphlib";
import { Connection, Hallway, Room } from "./hallway";

type Spot = Hallway | Intersection;

type Intersection = "north" | "east" | "south" | "west";

interface Step {
    from: Spot,
    to: Spot,
}

export interface Manager {
    _graph: Graph,
    hallways: Hallway[],
}

function getRoomStringID({number, wing}: Room): string {
    return `${wing}${number}`;
}

function findRoomInHallways(target: string, hallways: Hallway[]): Hallway {
    let fromHallway;
    for (let hallway of hallways) {
        for (let room of hallway.rooms) {
            if (getRoomStringID(room) === target) {
                fromHallway = hallway;
            }
        }
    }
    return fromHallway!;
}  

export class Manager {
    constructor(_hallways: Hallway[], _connections: Connection[]) {
        this._graph = new Graph({
            directed: false
        });
        this._graph.setNode("A", {
            rooms: ["1A", "2A"]
        });
        this._graph.setNode("B", {
            rooms: ["1B", "2B"]
        });
        this._graph.setNode("C", {
            rooms: ["1C", "2C"]
        });
        this._graph.setNode("D", {
            rooms: ["1D", "2D"]
        });
        this._graph.setNode("E", {
            rooms: ["1E", "2E"]
        });
        this._graph.setEdge("A", "B", { direction: "right" });
        this._graph.setEdge("B", "C", { direction: "up" });
        this._graph.setEdge("C", "D", { direction: "left" });
        this._graph.setEdge("C", "E", {direction: "right"});
    }

    getRoute(from: string, to: string): string[] {

        // Loop through the hallways and find the room that matches `from` room
    
        let fromHallway = findRoomInHallways(from, this.hallways);
        let toHallway = findRoomInHallways(to, this.hallways);
    
        // Generate a path between the two hallways
    
        let steps: string[] = [];
        let lastStep = null; 
        for (let step in alg.dijkstra(this._graph, from)) {
            if (step === to) {
                lastStep = step;
            }
        }
        while (true) {
            steps.push(lastStep!);
            lastStep = this._graph.predecessors(lastStep!)![0];
            if (lastStep === from) {
                break;
            }
        }

        steps.push(from);

        // Code for turning given directions into readable directions such as "left" and "right."
        let directions: string[] = [];
        for (let i = 0; i < steps.length - 1; i++) {
            let from = steps[i];
            let to = steps[i + 1];
            let edge = this._graph.edge(from, to);
            if (edge) {
                directions.push(edge.direction);
            }
        }
        return directions.reverse();
    }
}