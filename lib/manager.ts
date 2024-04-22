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
        this._graph.setNode("1");
        this._graph.setNode("2");
        this._graph.setNode("3");
        this._graph.setNode("4");
        this._graph.setNode("5");
        this._graph.setEdge("1", "2", { direction: "right" });
        this._graph.setEdge("2", "3", { direction: "up" });
        this._graph.setEdge("3", "4", { direction: "left" });
        this._graph.setEdge("3", "5", {direction: "right"});
    }

    getRoute(from: string, to: string): string[] {

        // Loop through the hallways and find the room that matches `from` room
    
        // let fromHallway = findRoomInHallways(from, this.hallways);
        // let toHallway = findRoomInHallways(to, this.hallways);
    
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