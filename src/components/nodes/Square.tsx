import { NodeProps, Handle, Position } from "reactflow";
import { NodeResizer } from "@reactflow/node-resizer";

import "@reactflow/node-resizer/dist/style.css";

export function Square({ selected }: NodeProps) {
  const handles = [
    {
      id: "right",
      position: Position.Right,
      className: "-right-5",
    },
    {
      id: "left",
      position: Position.Left,
      className: "-left-5",
    },
    {
      id: "top",
      position: Position.Top,
      className: "-top-5",
    },
    {
      id: "bottom",
      position: Position.Bottom,
      className: "-bottom-5",
    },
  ];

  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]">
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
