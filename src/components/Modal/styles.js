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
  background: #212133;
  border-radius: 4px;
  filter: drop-shadow(3px 3px 3px #111125);
  display: flex;
  z-index: 99;
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
    background: #212133;
    justify-content: center;
    border-radius: 4px;

    label {
      padding-left: 5px;
      font-weight: bold;
      color: #7800ff;
    }
  }
`;

export const Close = styled(MdClose)`
  cursor: pointer;
`;

export const TextInput = styled.input`
  margin-bottom: 20px;
  border: none;
  height: 50px;
  border-radius: 4px;

  padding-left: 15px;
  background: #000014;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #fff;
`;
export const Select = styled.select`
  margin-bottom: 20px;
  border: none;
  height: 50px;
  border-radius: 4px;
  color: #fff;
  padding-left: 15px;
  background: #000014;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: #7800ff;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 15px;
  width: 90%;
  align-self: center;
  border-radius: 25px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px #7800ff88);
  transition: transform ease-in-out 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
