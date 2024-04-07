import { Edge, Graph, alg } from "graphlib";
import data from "../public/data.json";

export default function Home() {
  const graph = new Graph({directed: false});
  
  Array(12).fill(0).map((_, i) => graph.setNode((i + 1).toString()));

  graph.setEdge("1", "3", { distance: 1 });
  graph.setEdge("2", "3", { distance: 1 });
  graph.setEdge("3", "4", { distance: 1 });
  
  function weight(e: Edge) { return graph.edge(e); }

  const result = alg.dijkstra(graph, "1");
  console.log(result);

  return (
    <main>
      These are the nodes: {JSON.stringify(graph.edges())}
    </main>
  );
}
