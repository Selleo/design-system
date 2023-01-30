import { h } from "preact";
import { changeComponentState } from "./componentState";

export function SwitchComponentState() {
  return (
    <div>
      <input
        onInput={() => changeComponentState("default")}
        type="radio"
        name="componentState"
      />{" "}
      Default
      <input
        onInput={() => changeComponentState("error")}
        type="radio"
        name="componentState"
      />{" "}
      Error
      <input
        onInput={() => changeComponentState("disabled")}
        type="radio"
        name="componentState"
      />{" "}
      Disabled
    </div>
  );
}
