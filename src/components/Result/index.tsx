import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import {
  DEFAULT_SONG_DURATION,
  DEFAULT_SONG_START,
  scoreToEmoji,
} from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = Math.floor(
    (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60 /
      60
  );

  const textForTry = ["Wow!", "Great", "Super", "Not bad", "Okay"];

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const triesConjugation = currentTry === 1 ? "attempt" : "attempts";

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
          You guessed in {currentTry} {triesConjugation}
        </Styled.Tries>
        <YouTube
          id={todaysSolution.youtubeId}
          start={todaysSolution.start ?? DEFAULT_SONG_START}
          duration={todaysSolution.duration ?? DEFAULT_SONG_START}
        />
        <Button onClick={copyResult} variant="green">
          Copy
        </Button>
        <Styled.TimeToNext>
          Remember to come back tomorrow - the next song in {hoursToNextDay}{" "}
          hours
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>
          Unfortunately, it was not possible ...
        </Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube
          id={todaysSolution.youtubeId}
          start={todaysSolution.start ?? DEFAULT_SONG_START}
          duration={todaysSolution.duration ?? DEFAULT_SONG_DURATION}
        />
        <Styled.TimeToNext>
          Please try again tomorrow - next song in {hoursToNextDay} hours
        </Styled.TimeToNext>
      </>
    );
  }
}
