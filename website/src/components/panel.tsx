import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
  width: string;
};

export const Panel = (props: Props) => {
  return (
    <StyledContainer width={props.width}>
      <StyledHeading>{props.title}</StyledHeading>
      <StyledContentContainer>{props.children}</StyledContentContainer>
    </StyledContainer>
  );
};

const StyledHeading = styled.h2`
  padding: 10px 20px;
`;

const StyledContainer = styled.div<{ width: string }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  border: 1px solid gray;
`;

const StyledContentContainer = styled.div`
  overflow: auto;
  flex: 1 1 auto;
`;
