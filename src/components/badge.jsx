import clsx from "clsx";

export function Badge({ children, className }) {
  return (
    <div
      className={clsx(
        "rounded-full bg-blue-400 text-white text-xs flex font-medium px-2 py-1",
        className
      )}
    >
      {children}
    </div>
  );
}
