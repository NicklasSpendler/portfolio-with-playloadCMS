import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function replaceSpaces(str: string) {
  return str.replaceAll(' ', '_')
}

export function replaceSlashes(str: string) {
  return str.replace('/', '');
}

export function replaceLines(str: string) {
  return str.replaceAll('_', '')
}