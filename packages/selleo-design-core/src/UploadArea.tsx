import { h } from "preact";

export function UploadAreaDefault() {
  return (
    <div class="border-dashed border-2 dark:border-neutral-400 rounded text-center p-1 dark:text-neutral-400">
      Attach file
    </div>
  );
}

export function UploadAreaHover() {
  return (
    <div class="border-dashed border-2 dark:border-neutral-300 rounded text-center p-1 dark:text-neutral-">
      Attach file
    </div>
  );
}

export function UploadAreaFilled() {
  return (
    <div class="border-solid border-2 dark:border-white rounded text-center p-1">
      Attach file
    </div>
  );
}

export function UploadAreaError() {
  return (
    <div class="border-dashed border-2 dark:border-neutral-400 rounded text-center p-1 text-danger">
      File weighs too much!
    </div>
  );
}
