import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// chi từng breakpoint viết css

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
