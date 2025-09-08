import * as THREE from "three";
import { CANNON } from "./physics";

export function threeFromCannonVec(v: CANNON.Vec3) {
  return new THREE.Vector3(v.x, v.y, v.z);
}

export function randRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function choice<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function clamp(v: number, a: number, b: number) {
  return Math.min(b, Math.max(a, v));
}

export function remap(v: number, a0: number, b0: number, a1: number, b1: number) {
  return a1 + ((v - a0) * (b1 - a1)) / (b0 - a0);
}
