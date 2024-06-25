import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(
    255,
    255,
    255,
    0.5
  ); /* Semi-transparent white background */
  padding: 20px 220px;
`;

export const Title = styled.h2`
  font-family: "PixelEmulator", sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const StageList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StageItem = styled.li`
  margin: 20px;
`;

export const StageButton = styled.button`
  font-family: "Noto", sans-serif;
  font-size: 25px;
  padding: 10px;
  width: 60px; /* Adjust the width to make it a perfect circle */
  height: 60px; /* Adjust the height to make it a perfect circle */
  border: none;
  border-radius: 50%; /* This makes the button round */
  cursor: pointer;
  color: white;
  background-color: ${({ completed }) => (completed ? "GOLD" : "transparent")};
  background-image: ${({ completed }) =>
    completed
      ? "none"
      : "url(https://drive.google.com/file/d/1BHOyhXXTiazuq4gziGLS1_Y6eBExkAGe/view?usp=drive_link)"};
  background-size: cover;
  background-position: center;
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
    background-image: none;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
`;
