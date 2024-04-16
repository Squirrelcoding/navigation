import { Graph, alg } from "graphlib";
import { Connection, Hallway, Room } from "./hallway";

interface HallwayStep {
    from: Hallway,
    to: Hallway,
    direction: "increasing" | "decreasing",
}

function weight(e: any) { return 1; }


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
    constructor(hallways: Hallway[], connections: Connection[]) {
        this._graph = new Graph();
        this.hallways = hallways;
        // Use the connections to create the graph
        for (let hallway of hallways) {
            this._graph.setNode(hallway.hallwayID);
        }
    }

    getRoute(from: string, to: string): any {

        // Loop through the hallways and find the room that matches `from` room

        let fromHallway = findRoomInHallways(from, this.hallways);
        let toHallway = findRoomInHallways(to, this.hallways);
        

        // Generate a path between the two hallways

        return alg.dijkstra(this._graph, fromHallway.hallwayID);
    }
}