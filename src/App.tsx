import ReactFlow, {
  Background,
  Controls,
  Node,
  ConnectionMode,
  useEdgesState,
  useNodesState,
  Connection,
  addEdge,
} from "reactflow";
import { zinc } from "tailwindcss/colors";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import { NODE_TYPES } from "./types/nodes";
import { EDGE_TYPES } from "./types/edges";
import { nodes as mockedNodes } from "./mock/nodes";

function App() {
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);
  const [nodes, setNodes, onNodesChanges] = useNodesState([] satisfies Node[]);

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges));
    },
    [setEdges]
  );

  function addNode(type: string) {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: type,
        position: {
          x: 600,
          y: 200,
        },
        data: {},
      },
    ]);
  }

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        connectionMode={ConnectionMode.Loose}
        edgeTypes={EDGE_TYPES}
        edges={edges}
        onEdgesChange={onEdgesChanges}
        onConnect={onConnect}
        onNodesChange={onNodesChanges}
        defaultEdgeOptions={{ type: "default" }}
        deleteKeyCode={["Delete", "Backspace"]}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>
      <Toolbar.Root className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        {mockedNodes.map((node) => (
          <Toolbar.Button
            className={`${node.className} transition-transform mt-6 hover:-translate-y-4`}
            onClick={() => addNode(node.id)}
            key={node.id}
            title={node.name}
          />
        ))}
      </Toolbar.Root>
    </div>
  );
}

export default App;
