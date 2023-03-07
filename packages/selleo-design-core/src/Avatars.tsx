import { h } from "preact";
import cx from "classnames";

export type AvatarProps = {
  hideName?: boolean;
  size: "regular" | "big";
  image?: h.JSX.Element | null;
  username?: string;
  imageClass?: string;
  containerClass?: string;
};

export function Avatar({
  hideName = false,
  size,
  image,
  username,
  imageClass,
  containerClass,
}: AvatarProps) {
  const imageClasses = cx(
    `rounded-full overflow-hidden bg-white flex justify-center items-center`,
    {
      "mr-1": !hideName,
      "w-[24px] h-[24px]": size === "regular",
      "w-[32px] h-[32px]": size === "big",
    },
    imageClass
  );

  const containerClasses = cx(
    `flex flex-row items-center min-w-fit h-auto`,
    {
      "h-[24px]": size === "regular",
      "h-[32px]": size === "big",
      "h-auto": !image,
    },
    containerClass
  );

  const usernameClasses = cx(
    "text-xxs font-normal text-neutral-600 dark:text-white",
    {
      "text-xs": size === "big",
    }
  );

  const nameInitials = username?.split(" ").map((word) => word[0]);

  const nameInitialsClasses = cx("text-neutral-600", {
    "text-xs": size === "big",
    "text-xxxs": size === "regular",
  });

  const imageOrNameInitials = (
    <div className={imageClasses}>
      {image ??
        (nameInitials && (
          <span className={nameInitialsClasses}>
            {nameInitials[0]}
            {nameInitials[1]}
          </span>
        ))}
    </div>
  );

  return (
    <div className={containerClasses}>
      {imageOrNameInitials}
      {!hideName && <h4 className={usernameClasses}>{username}</h4>}
    </div>
  );
}
