import { NodeProps, Handle } from "reactflow";
import { NodeResizer } from "@reactflow/node-resizer";

import "@reactflow/node-resizer/dist/style.css";
import { handles } from "../../mock/handles";

export function Circle({ selected }: NodeProps) {
  return (
    <div className="bg-red-500 rounded-full w-full h-full min-w-[200px] min-h-[200px]">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      {handles.map((handle) => (
        <Handle
          id={handle.id}
          type="source"
          position={handle.position}
          className={`${handle.className} w-3 h-3 bg-blue-400/80`}
          key={handle.id}
        />
      ))}
    </div>
  );
}
