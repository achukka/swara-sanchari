import React from "react";
import { default as YouTubePlayer } from "react-youtube";

interface Props {
  id: string;
  start: number;
  duration: number;
}

export function YouTube({ id, start, duration }: Props) {
  return (
    <div style={{ margin: "5% 0" }}>
      <YouTubePlayer
        videoId={id}
        opts={{
          width: "536",
          height: "189",
          playerVars: {
            start: start,
            end: start + duration,
            autoplay: 1,
            playsinline: 1,
          },
        }}
      />
    </div>
  );
}
