import React from "react";
import { IoHeart } from "react-icons/io5";

import * as Styled from "./index.styled";

export function Footer() {
  return (
    <footer>
      <Styled.Text>
        Made with <IoHeart /> by{" "}
        <Styled.Link href="https://github.com/adityac-addepar">
          Aditya Chukka
        </Styled.Link>
      </Styled.Text>
    </footer>
  );
}
