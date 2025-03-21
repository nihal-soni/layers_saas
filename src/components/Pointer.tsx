import mousePointerImage from "@/assets/images/mouse-pointer.svg";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: { name: string; color?: "red" | "blue" }) {
  const { name, color } = props;

  return (
    <div className="relative inline-flex items-center">
      <img src={mousePointerImage.src} alt="mouse pointer" className="size-5 invert" />
      <div className="absolute top-full left-0 mt-1">
        <div
          className={twMerge(
            "inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none",
            color === "red" ? "bg-red-500" : "bg-blue-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
