import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  padding: 100px;
  margin: 0 auto;
  max-width: 960px;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  justify-items: center;
  min-height: calc(100vh - 235px);

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;
