import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Property images are stored as full-size Unsplash URLs in the database;
// serve them compressed and in a modern format without touching the data.
export function optimizeImageUrl(url: string, width = 800): string {
  if (!url || !url.includes("images.unsplash.com")) return url;
  try {
    const u = new URL(url);
    u.searchParams.set("w", String(width));
    u.searchParams.set("q", "70");
    u.searchParams.set("auto", "format");
    return u.toString();
  } catch {
    return url;
  }
}
