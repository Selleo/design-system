import { atom } from "nanostores";

export const componentState = atom<"default" | "error" | "disabled">("default");

export function changeComponentState(state: "default" | "error" | "disabled") {
  componentState.set(state);
}
