import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, CardModal, Close, TextInput, Button } from "./styles";

import { closeModal } from "../../store/modal/actions";

export default function Modal() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.modal.open);

  return open ? (
    <Container>
      <CardModal>
        <div>
          <Close
            color="#333"
            size={20}
            onClick={() => dispatch(closeModal())}
          />
        </div>

        <form>
          <TextInput placeholder="Search" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Interval" />

          <Button>Submit</Button>
        </form>
      </CardModal>
    </Container>
  ) : (
    <></>
  );
}
