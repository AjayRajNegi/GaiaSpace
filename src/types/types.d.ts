import { ReactThreeFiber } from "@react-three/fiber";
import { Group, Mesh } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: ReactThreeFiber.Object3DNode<Group, typeof Group>;
      mesh: ReactThreeFiber.Object3DNode<Mesh, typeof Mesh>;
    }
  }
}
