import { h } from "preact";

export function PrimaryButtonSmall() {
  return <button class="inline-flex justify-center text-sm text-white font-extrabold leading-7 tracking-normal min-w-[124px] min-h-[32px] bg-brand-primary hover:bg-brand-primary-600 focus:bg-brand-primary-600 focus:outline focus:outline-offset-1 focus:outline-1 focus:outline-brand-primary-600 rounded disabled:bg-brand-primary-500 disabled:opacity-30">Text</button>;
}

export function PrimaryButton() {
  return <button class="inline-flex justify-center text-base text-white font-extrabold leading-7 tracking-normal min-w-[160px] min-h-[48px] bg-brand-primary hover:bg-brand-primary-600 focus:bg-brand-primary-600 focus:outline focus:outline-1 focus:outline-brand-primary-600 focus:outline-offset-2 rounded disabled:bg-brand-primary-500 disabled:opacity-30">Text</button>;
}

export function PrimaryOutlinedButtonSmall() {
  return <button class="inline-flex justify-center text-sm font-extrabold min-w-[124px] min-h-[32px] text-brand-primary border border-solid border-brand-primary bg-white hover:bg-brand-primary-100 focus:bg-brand-primary-100 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-brand-primary rounded disabled:bg-white disabled:opacity-30">Text</button>;
}

export function PrimaryOutlinedButton() {
  return <button class="inline-flex justify-center text-base font-extrabold min-w-[160px] min-h-[48px] text-brand-primary border border-solid border-brand-primary bg-white hover:bg-brand-primary-100 focus:bg-brand-primary-100 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-brand-primary rounded disabled:bg-white disabled:opacity-30">Text</button>;
}

export function ButtonSmall() {
  return <button class="flex flex-col justify-center text-sm font-extrabold text-neutral-500 min-w-[124px] min-h-[32px] hover:text-brand-primary focus:text-brand-primary focus:outline focus:outline-1 focus:outline-brand-primary focus:bg-brand-primary-100 rounded disabled:text-brand-primary-400 disabled:opacity-30 after:w-[76px] after:h-[1px] after:bg-neutral-500 hover:after:bg-brand-primary-500 focus:after:bg-brand-primary disabled:after:bg-brand-primary-400">Text</button>;
}

export function Button() {
  return <button class="flex flex-col justify-center text-base font-extrabold text-neutral-500 min-w-[160px] min-h-[48px] hover:text-brand-primary focus:text-brand-primary focus:outline focus:outline-1 focus:outline-brand-primary focus:bg-brand-primary-100 rounded disabled:text-brand-primary-400 disabled:opacity-30 after:w-[112px] after:h-[1px] after:bg-neutral-500 hover:after:bg-brand-primary-500 focus:after:bg-brand-primary disabled:after:bg-brand-primary-400">Text</button>;
}
