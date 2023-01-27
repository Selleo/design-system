/** @jsxImportSource preact */
import type { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";

const MenuToggle: FunctionalComponent = () => {
  const [sidebarShown, setSidebarShown] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body")!;
    if (sidebarShown) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [sidebarShown]);

  return (
    <button
      type="button"
      aria-pressed={sidebarShown ? "true" : "false"}
      id="menu-toggle"
      onClick={() => setSidebarShown(!sidebarShown)}
      class="flex items-center py-[0.33em] px-[0.67em] border-0 text-sm justify-center rounded-full gap-0.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className="sr-only">Toggle sidebar</span>
    </button>
  );
};

export default MenuToggle;
