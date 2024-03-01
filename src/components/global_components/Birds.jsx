import styled from "styled-components";
import Bird from "./Bird";
const StyledBirds = styled.section`
  position: relative;
`;

export default function Birds() {
  return (
    <StyledBirds>
      <Bird initialPosX={-100} initialPosY={-100} moveSpeed={0.75} />
      <Bird initialPosX={500} initialPosY={-100} moveSpeed={0.6} />
      <Bird initialPosX={800} initialPosY={75} moveSpeed={0.35} />
      <Bird initialPosX={500} initialPosY={350} moveSpeed={0.7} />
      <Bird initialPosX={30} initialPosY={200} moveSpeed={0.35} />
      <Bird initialPosX={500} initialPosY={75} moveSpeed={0.65} />
      <Bird initialPosX={400} initialPosY={390} moveSpeed={0.8} />
      <Bird initialPosX={900} initialPosY={500} moveSpeed={0.35} />
    </StyledBirds>
  );
}
