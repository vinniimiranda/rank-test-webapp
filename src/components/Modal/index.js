import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  CardModal,
  Close,
  TextInput,
  Select,
  Button
} from "./styles";

import { closeModal } from "../../store/modal/actions";
import api from "./../../services/api";
import { reloadAlerts } from "./../../store/alert/actions";

export default function Modal() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.modal.open);
  const alertData = useSelector(state => state.alert.data);

  const [keyword, setKeyword] = useState();
  const [email, setEmail] = useState();
  const [interval, setIntervalValue] = useState(2);

  useEffect(() => {
    if (alertData) {
      setKeyword(alertData.keyword);
      setEmail(alertData.email);
      setIntervalValue(alertData.interval);
    } else {
      setKeyword(null);
      setEmail(null);
      setIntervalValue(2);
    }
  }, [alertData, open]);

  async function handleSubmit() {
    if (alertData && alertData._id) {
      await api.put(`alerts/${alertData._id}`, {
        keyword,
        email,
        interval: Number(interval)
      });
    } else {
      await api.post("alerts", {
        keyword,
        email,
        interval: Number(interval)
      });
    }

    dispatch(closeModal());
    dispatch(reloadAlerts());
  }

  return open ? (
    <Container>
      <CardModal>
        <div>
          <Close
            color="#c02"
            size={20}
            onClick={() => dispatch(closeModal())}
          />
        </div>

        <form>
          <label htmlFor="">Keyword</label>
          <TextInput
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <label htmlFor="">E-mail</label>
          <TextInput value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor="">Interval</label>
          <Select
            value={interval}
            onChange={e => setIntervalValue(e.target.value)}
          >
            <option value="2">2</option>
            <option value="10">10</option>
            <option value="30">30</option>
          </Select>

          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </CardModal>
    </Container>
  ) : (
    <></>
  );
}
