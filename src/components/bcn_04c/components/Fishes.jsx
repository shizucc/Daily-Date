import styled from "styled-components";
import Fish from "./Fish";
import fish1Img from "../assets/fish1.png";
import fish2Img from "../assets/fish2.png";
import fish3Img from "../assets/fish3.png";
import fish4Img from "../assets/fish4.png";
import fish5Img from "../assets/fish5.png";
import fish6Img from "../assets/fish6.png";
const StyledFishes = styled.section`
  position: relative;
  z-index: 1;
`;
export default function Fishes() {
  return (
    <StyledFishes>
      <Fish
        img={fish1Img}
        initialPosX={400}
        initialPosY={500}
        moveSpeed={0.5}
        isMoveForward={true}
      />
      <Fish
        img={fish2Img}
        initialPosX={600}
        initialPosY={700}
        moveSpeed={0.2}
        isMoveForward={false}
      />
      <Fish
        img={fish3Img}
        initialPosX={900}
        initialPosY={300}
        moveSpeed={0.4}
        isMoveForward={true}
      />
      <Fish
        img={fish4Img}
        initialPosX={900}
        initialPosY={950}
        moveSpeed={0.9}
        isMoveForward={false}
      />
      <Fish
        img={fish5Img}
        initialPosX={900}
        initialPosY={1000}
        moveSpeed={0.9}
        isMoveForward={true}
      />
      <Fish
        img={fish6Img}
        initialPosX={900}
        initialPosY={350}
        moveSpeed={0.9}
        isMoveForward={false}
      />
    </StyledFishes>
  );
}
