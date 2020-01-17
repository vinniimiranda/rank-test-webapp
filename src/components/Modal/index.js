import React from "react";

import { Container, CardModal, Close, TextInput, Button } from "./styles";

export default function Modal() {
  return (
    <Container>
      <CardModal>
        <div>
          <Close color="#333" size={20} />
        </div>

        <form>
          <TextInput placeholder="Search" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Interval" />

          <Button>Submit</Button>
        </form>
      </CardModal>
    </Container>
  );
}
