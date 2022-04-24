import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Hello! 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>
            Swara Sanchari is a daily music game based on{" "}
            <a href="https://heardle.app">Heardle</a>. It includes Telugu works
            from various genres and periods.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          <p>
            Every day a new track is generated and the task is to guess it as
            soon as possible.
          </p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Close it
        </Button>
        <Styled.Contact>
          Contact - <a href="mailto:achukka92@gmail.com">achukka92@gmail.com</a>{" "}
        </Styled.Contact>
      </Styled.PopUp>
    </Styled.Container>
  );
}
