import React, { useState } from "react";
import { MdEdit, MdClose } from "react-icons/md";

import { Header, Card, Actions, AlertTitle } from "./styles";
import { Container } from "./../../components/Layout/Container/index";
import { Row } from "./../../components/Layout/Row/index";
import { Column } from "./../../components/Layout/Column/index";
export default function Index() {
  const data = [
    {
      id: 1,
      title: "Harry Potter",
      interval: 2,
      email: "vinniimiranda@gmail.com"
    },
    { id: 2, title: "Superman", interval: 2, email: "vinniimiranda@gmail.com" },
    { id: 4, title: "Avengers", interval: 2, email: "vinniimiranda@gmail.com" }
  ];
  return (
    <Container>
      <Row>
        <Column justify="center" style={{ margin: 16 }}>
          <Header>Ebay Alerts</Header>
        </Column>
        {data.map(alert => (
          <Column
            key={alert.id}
            style={{ marginBottom: 16 }}
            md={6}
            lg={6}
            xl={4}
          >
            <Card>
              <Actions>
                <MdEdit color="#0c1" size={20} />
                <MdClose color="#c02" size={20} />
              </Actions>
              <AlertTitle>{alert.title}</AlertTitle>
              <span>every {alert.interval} minutes</span>
              <span>
                to: <b>{alert.email}</b>
              </span>
            </Card>
          </Column>
        ))}
      </Row>
    </Container>
  );
}
