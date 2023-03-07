import { useState } from "preact/hooks";
import cx from "classnames";

type Props = {
  HTMLString?: Element;
  reactString?: Element;
  preview?: Element;
};

export function PreviewSwitch({ HTMLString, reactString, preview }: Props) {
  const [selectedTab, setSelectedTab] = useState<"preview" | "html" | "react">(
    "preview"
  );

  const getCodeTabClasses = (tab: "html" | "react") => {
    return cx(
      "inline-block p-1 rounded-t-lg focus-visible:outline-brand-primary-500",
      {
        "hover:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-neutral-300":
          tab !== selectedTab,
        "text-neutral-200 bg-code rounded-t-lg dark:text-white":
          tab === selectedTab,
      }
    );
  };

  const previewTabClasses = cx(
    "inline-block p-1 rounded-t-lg focus-visible:outline-brand-primary-500",
    {
      "hover:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-300":
        selectedTab !== "preview",
      "text-black bg-neutral-200 rounded-t-lg dark:bg-neutral-800 dark:text-white":
        selectedTab === "preview",
    }
  );

  const htmlTabClasses = getCodeTabClasses("html");
  const reactTabClasses = getCodeTabClasses("react");

  const wrapperClasses = cx({
    "p-3 block bg-neutral-200 dark:bg-neutral-800 rounded":
      selectedTab === "preview",
    "bg-code text-neutral-200 rounded": selectedTab == "html",
    "rounded-l bg-code text-neutral-200": selectedTab === "react",
  });

  const handleTabChange = (tab: "preview" | "html" | "react") => (e: Event) => {
    if ("key" in e) {
      if (e.key === "Enter") {
        setSelectedTab(() => tab);
      }
    } else {
      setSelectedTab(() => tab);
    }
  };

  return (
    <div class="mb-5">
      <ul class="flex mt-2 justify-end text-sm font-medium text-center text-gray-500 dark:text-gray-400 cursor-pointer">
        <li
          onClick={handleTabChange("preview")}
          onKeyDown={handleTabChange("preview")}
          class={previewTabClasses}
          id="tab-preview"
          role="button"
          tabIndex={0}
        >
          Preview
        </li>
        <li
          onClick={handleTabChange("html")}
          onKeyDown={handleTabChange("html")}
          class={htmlTabClasses}
          id="tab-html"
          role="button"
          tabIndex={0}
        >
          HTML
        </li>
        <li
          onClick={handleTabChange("react")}
          onKeyDown={handleTabChange("react")}
          class={reactTabClasses}
          id="tab-react"
          role="button"
          tabIndex={0}
        >
          React
        </li>
      </ul>

      <div class={wrapperClasses}>
        {selectedTab === "preview" && preview}
        {selectedTab === "html" && HTMLString}
        {selectedTab === "react" && reactString}
      </div>
    </div>
  );
}
