import { EdgeProps, getSmoothStepPath } from "reactflow";

export function Default({
  id,
  style,
  sourceX,
  sourceY,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  data,
  selected,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
  });
  return (
    <>
      <path
        id={id}
        style={style}
        className={`react-flow__edge-path stroke-2 stroke-zinc-300 ${
          selected ? "stroke-zinc-500" : ""
        }`}
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          className="text-xs"
          startOffset="50%"
          textAnchor="middle"
        >
          {data?.text}
        </textPath>
      </text>
    </>
  );
}
