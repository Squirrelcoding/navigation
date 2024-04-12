import { Graph } from "graphlib";
import { Connection, Hallway, Room, Staircase } from "./hallway";
import { NodeNextRequest } from "next/dist/server/base-http/node";

interface HallwayStep {
    from: Hallway | Staircase,
    to: Hallway,
    direction: "increasing" | "decreasing",
}

interface StaircaseStep {
    from: Hallway | Staircase,
    to: Staircase,
    side: "left" | "right",
    numberOfFloors: number,
}

type Step = HallwayStep | StaircaseStep;

export interface Manager {
    _graph: Graph
}

export class Manager {
    constructor(hallways: Hallway[], staircases: Staircase[], connections: Connection[]) {
        this._graph = new Graph();

        // Use the connections to create the graph
        for (let connection of connections) {
            // Set the edge based on the given source/destination in the Connection object

        }
    }

    getRoute(from: Room, to: Room): Step[] {

        // Loop through the hallways and find the room that matches `from` room

        // Loop through the hallways and find the room that matches `to` room

        // Generate a path between the two hallways

        return [];
    }
}