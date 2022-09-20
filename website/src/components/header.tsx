import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h2 className="bg-black">ES HTML Parser</h2>
      <nav>
        <a href="https://github.com/yeonjuan/es-html-parser">Github</a>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #202020;
  color: #fff;
  display: flex;
  padding: 10px 20px;
  > nav {
    margin-left: auto;
  }
`;
