import { Manager } from "@/lib/manager";

export default function TestLayout() {
  let manager: Manager = new Manager([], []);


  return <>
      {manager._graph.nodes().map(hallway => <li key={hallway}>{JSON.stringify(manager._graph.node(hallway)["rooms"])}</li>)};
  </>
}