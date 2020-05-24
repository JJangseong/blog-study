import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 24rem);
  max-width: 184rem;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 95%;
  }
`;