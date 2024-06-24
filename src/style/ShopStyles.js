import styled from "styled-components";
import background from "../img/background.png";

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
export const ShopTitle = styled.h2`
  margin-bottom: 20px;
  color: #d9b132;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: rgba(225, 225, 225, 0.7);
`;

export const TableHeader = styled.thead`
  background-color: #f4f4f4;

  th {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;

export const TableRow = styled.tr`
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }

  img {
    max-width: 100px;
    height: auto;
  }

  button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #007b9e;
  }
`;
