/** Short hero cuts from main event video (see `public/videos/main-event-clips/`). */
export const HERO_MAIN_EVENT_CLIPS = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/videos/main-event-clips/main-event-clip-${n}.mp4`;
}) as readonly string[];
