export interface Room {
    floor: number,
    number: number,
    wing: string
}

function getRoomStringID({number, wing}: Room): string {
    return `${wing}${number}`;
}


// TODO: In order to successfully generate a path between two rooms, some sort of direction field must be given to the hallways.
export interface Connection {
    from: Hallway,
    to: Hallway
}


export interface Hallway {
    lowestNumber: number,
    highestNumber: number,
    rooms: Room[];
}

//** A class that represents a physical hallway. It contains rooms and has two fields, `lowestNumber` and `highestNumber` that refer to the smallest/highest room number in the hallway. This is to determine directions easier. */
export class Hallway {
    constructor(lowestNumber: number, highestNumber: number, rooms: Room[]) {
        if (lowestNumber >= highestNumber) {
            throw new Error("Lowest room number must be less than highest number.");
        }
        this.lowestNumber = lowestNumber;
        this.highestNumber = highestNumber;
        this.rooms = rooms;
    }

    addRoom(room: Room) {
        this.rooms.push(room);
    }
    sortRooms() {
        this.rooms.sort((a, b) => {
            return a.number - b.number;
        });
    }
    get getRooms() {
        return this.rooms;
    }
    get hallwayID() {
        // Merge all of the room ID's into one big string
        let hallwayID = "";
        for (let room of this.rooms) {
            hallwayID += getRoomStringID(room);
        }
        return Buffer.from(hallwayID).toString("base64");
    }
}