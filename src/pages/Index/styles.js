import styled from "styled-components";

export const Header = styled.h1`
  color: #fff;
`;
export const AddButon = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(2px 2px 1px #333);
  cursor: pointer;
  position: absolute;
  z-index: 3;
  bottom: 2rem;
  right: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  background: #eee;
  border-radius: 5px;
  filter: drop-shadow(2px 1px 2px #333);
  justify-content: center;
  align-items: center;
  span {
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;
export const AlertTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;
