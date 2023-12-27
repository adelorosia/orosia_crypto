import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IMaxWithWrapperProps {
  children: ReactNode;
  className?: string;
}
const MaxWithWrapper = ({ children, className }: IMaxWithWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
