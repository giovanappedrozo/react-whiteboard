import { Circle } from "../components/nodes/Circle";
import { Square } from "../components/nodes/Square";

export const NODE_TYPES = {
  square: Square,
  circle: Circle,
};

export type TNode = {
  id: keyof typeof NODE_TYPES;
  name: string;
  className: string;
};
