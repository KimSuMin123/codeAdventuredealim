import React, { useEffect, useState } from "react";
import styled from "styled-components";
import devil from "../img/devil_be.png";
import valla from "../img/valla/valla_idle_sw/1.png";
import quizBackground from "../img/quiz.jpg";
import { ModalButton } from "../style/quizstyle";

const LangStartContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  position: relative;
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
`;

const CharacterImage = styled.img`
  width: 250px;
  height: 300px;
`;

const DialogueBox = styled.div`
  background: url(${quizBackground}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  color: black;
  position: absolute;
  bottom: 0;
`;

const StageButton = styled.button`
  position: absolute;
  bottom: 320px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;

function LangStart({ setMode }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      import(`../img/${selectedLanguage}background.png`)
        .then((image) => setBackgroundImage(image.default))
        .catch((error) =>
          console.error("Error loading background image:", error)
        );
    }
  }, []);

  const handleStageNavigation = () => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    console.log("Navigating to stage for language:", selectedLanguage); // Debug log
    setMode(`${selectedLanguage}Stage`);
  };

  return (
    <LangStartContainer backgroundImage={backgroundImage}>
      <CharacterContainer>
        <CharacterImage src={valla} alt="Valla" />
        <CharacterImage src={devil} alt="Devil" />
      </CharacterContainer>
      <StageButton onClick={handleStageNavigation}>
        Go to {localStorage.getItem("selectedLanguage")} Stage
      </StageButton>
      <DialogueBox>
        <p>소피아: 여긴 정말 깊고 어두워...</p>
        <p>그레모리: 물속에는 예상치 못한 몬스터가 숨어있을 거야, 조심해.</p>
        <p>소피아: 알겠어.</p>
        <p>(갑자기 심해어가 나타났다!!)</p>
        <p>그레모리: 저기 무언가 나타났어!</p>
        <p>소피아: 전투 준비!</p>
      </DialogueBox>
      <ModalButton onClick={() => setMode("STAGE")}>전투하러가기</ModalButton>
    </LangStartContainer>
  );
}

export default LangStart;
