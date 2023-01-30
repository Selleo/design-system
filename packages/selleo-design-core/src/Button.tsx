import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { componentState } from "./componentState";

export function Button() {
  const test = useStore(componentState); // State change should rerender this component with useStore hook, but client:load flag is necessary for this component function call.
  console.log(test);
  return (
    <button class="inline-flex bg-orange-500 dark:bg-white">Button</button>
  );
}

export function ButtonExample() {
  return <button class="inline-flex bg-orange-700">Button</button>;
}
