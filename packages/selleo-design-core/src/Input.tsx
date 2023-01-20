import { h } from "preact";

export function Input() {
  return (
    <label class="relative block">
      <input
        class="w-full py-2 px-[48px] bg-white text-neutral-600 hover:placeholder:text-neutral-600 focus:placeholder:text-neutral-600 border-2 rounded-lg border-neutral-200 outline-brand-primary-500 hover:border-neutral-300 peer disabled:bg-neutral-200 disabled:border-neutral-500 disabled:placeholder:text-neutral-500 invalid:border-danger"
        placeholder="Input placeholder"
      />
      <span class="absolute inset-y-0 left-0 flex items-center pl-2 stroke-neutral-300 peer-hover:stroke-neutral-600 peer-focus:stroke-neutral-600 peer-[&:not(:placeholder-shown)]:stroke-neutral-600 peer-disabled:stroke-neutral-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0034 20.0033L16.7521 16.752"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0962 6.90377C18.6346 9.44214 18.6346 13.5578 16.0962 16.0962C13.5579 18.6346 9.44215 18.6346 6.90378 16.0962C4.36541 13.5578 4.36541 9.44214 6.90378 6.90377C9.44215 4.3654 13.5579 4.3654 16.0962 6.90377"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <span class="absolute inset-y-0 right-0 flex items-center pr-2 stroke-neutral-300 peer-hover:stroke-neutral-600 peer-focus:stroke-neutral-600 peer-[&:not(:placeholder-shown)]:stroke-neutral-600 peer-disabled:stroke-neutral-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0034 20.0033L16.7521 16.752"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0962 6.90377C18.6346 9.44214 18.6346 13.5578 16.0962 16.0962C13.5579 18.6346 9.44215 18.6346 6.90378 16.0962C4.36541 13.5578 4.36541 9.44214 6.90378 6.90377C9.44215 4.3654 13.5579 4.3654 16.0962 6.90377"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </label>
  );
}

export function DisabledInput() {
  return (
    <label class="relative block">
      <input
        class="w-full py-2 px-[48px] bg-white text-neutral-600 hover:placeholder:text-neutral-600 focus:placeholder:text-neutral-600 border-2 rounded-lg border-neutral-200 outline-brand-primary-500 hover:border-neutral-300 peer disabled:bg-neutral-200 disabled:border-neutral-500 disabled:placeholder:text-neutral-500 invalid:border-danger"
        placeholder="Input placeholder"
        disabled
      />
      <span class="absolute inset-y-0 left-0 flex items-center pl-2 stroke-neutral-300 peer-hover:stroke-neutral-600 peer-focus:stroke-neutral-600 peer-[&:not(:placeholder-shown)]:stroke-neutral-600 peer-disabled:stroke-neutral-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0034 20.0033L16.7521 16.752"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0962 6.90377C18.6346 9.44214 18.6346 13.5578 16.0962 16.0962C13.5579 18.6346 9.44215 18.6346 6.90378 16.0962C4.36541 13.5578 4.36541 9.44214 6.90378 6.90377C9.44215 4.3654 13.5579 4.3654 16.0962 6.90377"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <span class="absolute inset-y-0 right-0 flex items-center pr-2 stroke-neutral-300 peer-hover:stroke-neutral-600 peer-focus:stroke-neutral-600 peer-[&:not(:placeholder-shown)]:stroke-neutral-600 peer-disabled:stroke-neutral-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0034 20.0033L16.7521 16.752"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0962 6.90377C18.6346 9.44214 18.6346 13.5578 16.0962 16.0962C13.5579 18.6346 9.44215 18.6346 6.90378 16.0962C4.36541 13.5578 4.36541 9.44214 6.90378 6.90377C9.44215 4.3654 13.5579 4.3654 16.0962 6.90377"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </label>
  );
}

export function ErrorInput() {
  return (
    <label class="relative block">
      <input
        class="w-full py-2 px-[48px] bg-white text-neutral-600 hover:placeholder:text-neutral-600 focus:placeholder:text-neutral-600 border-2 rounded-lg border-neutral-200 outline-brand-primary-500 hover:border-neutral-300 peer disabled:bg-neutral-200 disabled:border-neutral-500 disabled:placeholder:text-neutral-500 invalid:border-danger"
        placeholder="Input placeholder"
        required
      />
      <span class="absolute inset-y-0 left-0 flex items-center pl-2 stroke-neutral-300 peer-hover:stroke-neutral-600 peer-focus:stroke-neutral-600 peer-[&:not(:placeholder-shown)]:stroke-neutral-600 peer-disabled:stroke-neutral-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0034 20.0033L16.7521 16.752"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0962 6.90377C18.6346 9.44214 18.6346 13.5578 16.0962 16.0962C13.5579 18.6346 9.44215 18.6346 6.90378 16.0962C4.36541 13.5578 4.36541 9.44214 6.90378 6.90377C9.44215 4.3654 13.5579 4.3654 16.0962 6.90377"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <span class="absolute inset-y-0 right-0 flex items-center pr-2 stroke-neutral-300 peer-hover:stroke-neutral-600 peer-focus:stroke-neutral-600 peer-[&:not(:placeholder-shown)]:stroke-neutral-600 peer-disabled:stroke-neutral-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0034 20.0033L16.7521 16.752"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0962 6.90377C18.6346 9.44214 18.6346 13.5578 16.0962 16.0962C13.5579 18.6346 9.44215 18.6346 6.90378 16.0962C4.36541 13.5578 4.36541 9.44214 6.90378 6.90377C9.44215 4.3654 13.5579 4.3654 16.0962 6.90377"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </label>
  );
}
