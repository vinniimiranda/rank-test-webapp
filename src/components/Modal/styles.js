import styled from "styled-components";
import { MdClose } from "react-icons/md";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
`;

export const CardModal = styled.div`
  width: 400px;
  height: 400px;
  background: #eee;
  border-radius: 4px;
  filter: drop-shadow(3px 3px 3px #333);
  display: flex;
  flex-direction: column;

  > div {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
  }

  form {
    display: flex;
    flex: 1;
    padding: 15px;
    flex-direction: column;
    background: #fff;
    justify-content: center;
    border-radius: 4px;
  }
`;

export const Close = styled(MdClose)`
  cursor: pointer;
`;

export const TextInput = styled.input`
  margin-bottom: 20px;
  border: none;
  height: 50px;
  border-radius: 25px;

  padding-left: 15px;
  background: #eee;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: #0d97c5;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 15px;
  width: 90%;
  align-self: center;
  border-radius: 25px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px #0d97c588);
  transition: transform ease-in-out 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
