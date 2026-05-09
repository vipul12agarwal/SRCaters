const pad = (n: number) => String(n).padStart(2, "0");

/** Files under `public/gallery/main/` (08 and 14 are absent on disk). */
const MAIN_FILE_NUMS = [
  1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20,
] as const;

export const GALLERY = {
  main: MAIN_FILE_NUMS.map((n) => `/gallery/main/main-${pad(n)}.jpeg`),
  wedding: Array.from({ length: 8 }, (_, i) => `/gallery/wedding/wedding-${pad(i + 1)}.jpeg`),
  smallHome: Array.from({ length: 9 }, (_, i) => `/gallery/small-home/home-${pad(i + 1)}.jpeg`),
} as const;
