import { h } from "preact";

export function BigAvatar() {
  return (
    <div class="flex flex-row h-[111px] max-h-[111px]">
      <img
        src="https://ui-avatars.com/api/?name=John+Doe"
        alt=""
        class="w-[111px] h-[111px] rounded-full overflow-hidden min-w-fit mr-4"
      />
      <div>
        <h4 class="text-md text-neutral-600 dark:text-white">Janek Górski</h4>
        <p class="text-xs text-neutral-400 dark:text-white leading-[150%] font-sans">
          I am Ruby on Rails developer with skills in React.js and React Native,
          experienced in MySQL and Postgresql databases. I know what it takes to
          not only get the job done but to get it done with excellence on both
          back-end and front-end.
        </p>
      </div>
    </div>
  );
}

export function RegularAvatar() {
  return (
    <div class="flex flex-row h-[64px] max-h-[64px]">
      <img
        src="https://ui-avatars.com/api/?name=John+Doe"
        alt=""
        class="w-[64px] h-[64px]ounded-full overflow-hidden min-w-fit mr-2"
      />
      <div>
        <h4 class="text-md text-neutral-600 dark:text-white">Janek Górski</h4>
        <p class="text-xs text-neutral-400 dark:text-white leading-[150%]">
          CTO & Co-Founder
        </p>
      </div>
    </div>
  );
}

export function VerticalAvatar() {
  return (
    <div class="p-5">
      <img
        src="https://ui-avatars.com/api/?name=John+Doe"
        alt=""
        class="w-[64px] h-[64px] rounded-full overflow-hidden min-w-fit mb-2"
      />
      <div>
        <h4 class="text-md mb-1 text-neutral-600 dark:text-white">
          Janek Górski
        </h4>
        <p class="text-xs text-neutral-400 dark:text-white leading-[150%]">
          CTO & Co-Founder
        </p>
      </div>
    </div>
  );
}
