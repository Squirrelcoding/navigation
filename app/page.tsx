import { Graph } from "graphlib";
import { Hallway, Room } from "../lib/hallway";
import { Manager } from "@/lib/manager";

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
    wing: "B"
  }
  const roomThree: Room = {
    floor: 1,
    number: 32,
    wing: "Cjidwe"
  }

  let hallway: Hallway = new Hallway(0, 10, []);
  hallway.addRoom(roomOne);
  hallway.addRoom(roomThree);
  hallway.addRoom(roomTwo);

  const roomOneA: Room = {
    floor: 124,
    number: 124,
    wing: "ABB"
  }
  const roomTwoA: Room = {
    floor: 0.5,
    number: 22,
    wing: "234fB"
  }
  const roomThreeA: Room = {
    floor: 81,
    number: 2,
    wing: "Cjidwfwefe"
  }

  let hallwayA: Hallway = new Hallway(0, 10, []);
  hallwayA.addRoom(roomOneA);
  hallwayA.addRoom(roomThreeA);
  hallwayA.addRoom(roomTwoA);

  const manager = new Manager([hallway, hallwayA], [{from: hallway, to: hallwayA}]);

  return (
    <main>
      <p>Hallway 1 ID: {hallway.hallwayID}</p>
      <p>Hallway 2 ID: {hallwayA.hallwayID}</p>
      These are the nodes: {JSON.stringify(manager.getRoute("A1", "A124"))}
    </main>
  );
}
