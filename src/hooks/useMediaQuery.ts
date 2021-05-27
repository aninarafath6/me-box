import { useState, useEffect } from "react";

interface Media {
  matches: boolean;
  media: string;
  onchange: any;
  addListener: any;
  removeListener: any;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media: Media = window.matchMedia(query);
    console.log(media);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return (): void => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
