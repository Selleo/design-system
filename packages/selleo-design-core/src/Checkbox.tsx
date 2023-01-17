import { h } from 'preact'

export function Checkbox() {
  return <div class="flex items-center">
    <input id="checkbox-id" type='checkbox' class='hidden peer' value='' />
    <label htmlFor='checkbox-id' class='flex justify-center text-base text-neutral-300 cursor-pointer before:rounded-sm before:w-2 before:h-2 before:mr-2 before:outline before:outline-2 before:outline-offset-2 before:outline-neutral-300 hover:before:outline-brand-primary-500 peer-checked:before:bg-brand-primary-500 peer-checked:before:outline-brand-primary-500'>
      <span>I accept the <a class='text-brand-primary-500 hover:no-underline'>Privacy Policy</a></span>
    </label>
  </div>
}

export function CheckboxWithError() {
  return <div class="flex items-center">
  <input id="checkbox-error-id" type='checkbox' class='hidden peer' value='' />
  <label htmlFor='checkbox-error-id' class='flex justify-center text-base text-white cursor-pointer before:rounded-sm before:w-2 before:h-2 before:mr-2 before:outline before:outline-2 before:outline-offset-2 before:outline-danger hover:before:outline-brand-primary-500 peer-checked:before:bg-brand-primary-500 peer-checked:before:outline-brand-primary-500'>
    <span>I <span class='text-danger'>accept</span> the <a class='text-white hover:no-underline'>Privacy Policy</a></span>
  </label>
</div>
}