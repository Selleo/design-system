import { h } from "preact";

export function PrimaryButtonSmall() {
  return <button class="inline-flex py-1 px-2 gap-0.5 transition duration-300 justify-center text-xs text-white font-bold leading-7 tracking-normal bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:bg-brand-primary-600 focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-brand-primary-600 rounded disabled:bg-brand-primary-500 disabled:opacity-30">Text</button>;
}

export function PrimaryButton() {
  return <button class="inline-flex py-1 px-3 gap-1 transition duration-300 justify-center text-sm text-white font-bold leading-7 tracking-normal bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:bg-brand-primary-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-brand-primary-600 focus-visible:outline-offset-2 rounded disabled:bg-brand-primary-500 disabled:opacity-30">Text</button>;
}

export function PrimaryOutlinedButtonSmall() {
  return <button class="inline-flex py-1 px-2 gap-0.5 transition duration-300 justify-center text-xs font-bold text-brand-primary-500 border border-solid border-brand-primary-500 hover:bg-brand-primary-100 focus-visible:bg-brand-primary-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-500 rounded disabled:opacity-30">Text</button>;
}

export function PrimaryOutlinedButton() {
  return <button class="inline-flex py-1 px-3 gap-1 transition duration-300 justify-center text-sm font-bold text-brand-primary-500 border border-solid border-brand-primary-500 hover:bg-brand-primary-100 focus-visible:bg-brand-primary-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-500 rounded disabled:opacity-30">Text</button>;
}

export function LinkButtonSmall() {
  return (
    <button 
      class="flex flex-col py-1 px-3 transition-all duration-300 justify-center items-start text-xs font-bold text-neutral-500 rounded group
        hover:text-brand-primary-500
        focus-visible:outline-0
        after:w-[30%] after:h-[2px] after:bg-neutral-500 after:transition-all after:duration-300 after:rounded after:mt-[2px]
        hover:after:bg-brand-primary-500 hover:after:w-full 
        focus-visible:after:bg-brand-primary-500 focus-visible:after:w-full 
        disabled:after:bg-brand-primary-400"
    >
      <div 
        class="flex items-center justify-center gap-0.5 px-0.5 rounded leading-4
          group-focus-visible:bg-brand-primary-500 group-focus-visible:text-white"
      >
        Text link
      </div>
    </button>
  );
}

export function LinkButton() {
  return (
    <button 
      class="
        flex flex-col py-1 px-3 transition-all duration-300 justify-center items-start text-sm font-bold text-neutral-500 rounded group
        hover:text-brand-primary-500
        focus-visible:outline-0
        after:w-[30%] after:h-[2px] after:bg-neutral-500 after:transition-all after:duration-300 after:rounded after:mt-[2px]
        hover:after:bg-brand-primary-500 hover:after:w-full 
        focus-visible:after:bg-brand-primary-500 focus-visible:after:w-full 
        disabled:after:bg-brand-primary-400
      "
    >
      <div 
        class="flex items-center justify-center gap-0.5 px-0.5 rounded leading-4
          group-focus-visible:bg-brand-primary-500 group-focus-visible:text-white"
      >
        Text link
      </div>
    </button>
  );
}
