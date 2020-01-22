import styled from "styled-components";

export const Header = styled.h1`
  color: #fff;
`;
export const AddButon = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(1px 1px 2px #7800ff);
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
  background: #212133;
  border-radius: 5px;
  filter: drop-shadow(-1px -1px 1px #fff);
  filter: drop-shadow(-1px -1px 1px #7800ff);
  justify-content: center;
  align-items: center;
  span {
    color: #eee;
    margin-bottom: 0.5rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;

  button {
    border: none;
    background: transparent;
    padding: 5px;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    &:hover {
      background: #00001488;
    }

    svg {
      cursor: pointer;
    }
  }
`;
export const AlertTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #7800ff;
  margin-bottom: 1rem;
`;
