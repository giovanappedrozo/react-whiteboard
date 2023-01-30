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
import { Square } from "./components/nodes/Square";
import { useCallback } from "react";
import { Default } from "./components/edges/Default";
import * as Toolbar from "@radix-ui/react-toolbar";

const NODE_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: Default,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 800,
      y: 400,
    },
    data: {},
  },
] satisfies Node[];

function App() {
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);
  const [nodes, setNodes, onNodesChanges] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges));
    },
    [setEdges]
  );

  function addSquareNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "square",
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
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>
      <Toolbar.Root className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        <Toolbar.Button
          className="w-32 h-32 bg-violet-500 rounded transition-transform mt-6 hover:-translate-y-4"
          onClick={addSquareNode}
        />
      </Toolbar.Root>
    </div>
  );
}

export default App;
