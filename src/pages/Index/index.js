import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdEdit, MdClose, MdAdd } from "react-icons/md";

import { Header, Card, Actions, AlertTitle, AddButon } from "./styles";
import { Container } from "./../../components/Layout/Container/index";
import { Row } from "./../../components/Layout/Row/index";
import { Column } from "./../../components/Layout/Column/index";
import { alertSetData, reloadAlerts } from "./../../store/alert/actions";
import { openModal } from "./../../store/modal/actions";
import api from "./../../services/api";

export default function Index() {
  const dispatch = useDispatch();

  const reload = useSelector(state => state.alert.reload);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    loadAlerts();
  }, [reload]);

  async function loadAlerts() {
    const { data } = await api.get("/alerts");
    setAlerts(data);
  }

  function handleEdit(alert) {
    dispatch(alertSetData(alert));
  }

  async function handleRemove({ id }) {
    await api.delete(`/alerts/${id}`);
    dispatch(reloadAlerts());
  }
  return (
    <Container>
      <Row>
        <Column justify="center" style={{ margin: 16 }}>
          <Header>Ebay Alerts</Header>
        </Column>
        {alerts.map(alert => (
          <Column
            key={alert.id}
            style={{ marginBottom: 16 }}
            md={6}
            lg={6}
            xl={4}
          >
            <Card>
              <Actions>
                <MdEdit
                  color="#0c1"
                  size={20}
                  onClick={() => handleEdit(alert)}
                />
                <MdClose
                  color="#c02"
                  size={20}
                  onClick={() => handleRemove({ id: alert._id })}
                />
              </Actions>
              <AlertTitle>{alert.keyword}</AlertTitle>
              <span>every {alert.interval} minutes</span>
              <span>
                to: <b>{alert.email}</b>
              </span>
            </Card>
          </Column>
        ))}
      </Row>

      <AddButon onClick={() => dispatch(openModal())}>
        <MdAdd size={25} color="#0D97C5" />
      </AddButon>
    </Container>
  );
}
