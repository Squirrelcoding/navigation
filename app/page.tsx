import { Graph } from "graphlib";
import { Hallway, Room } from "../lib/hallway";

export default function Home() {
  const graph = new Graph({directed: false});
  
  const roomOne: Room = {
    floor: 1,
    number: 1,
    wing: "A"
  }
  const roomTwo: Room = {
    floor: 1,
    number: 2,
    wing: "A"
  }
  const roomThree: Room = {
    floor: 1,
    number: 3,
    wing: "A"
  }

  let hallway: Hallway = new Hallway(0, 10, []);
  hallway.addRoom(roomOne);
  hallway.addRoom(roomThree);
  hallway.addRoom(roomTwo);
  hallway.sortRooms();

  return (
    <main>
      These are the nodes: {JSON.stringify(hallway.rooms)}
    </main>
  );
}
