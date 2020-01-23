import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

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

  const keywordRef = useRef();
  const emailRef = useRef();
  const intervalRef = useRef();

  const [keyword, setKeyword] = useState("");
  const [email, setEmail] = useState("");
  const [interval, setIntervalValue] = useState(2);

  useEffect(() => {
    console.log(alertData);

    if (alertData) {
      setKeyword(alertData.keyword);
      setEmail(alertData.email);
      setIntervalValue(alertData.interval);
    } else {
      setKeyword("");
      setEmail("");
      setIntervalValue(2);
    }
  }, [alertData, open]);

  async function handleSubmit() {
    if (!keyword) {
      toast.error("Keyword is required");
      return keywordRef.current.focus();
    }
    if (!email) {
      toast.error("E-mail is required");
      return emailRef.current.focus();
    }
    if (!interval) {
      toast.error("Interval is required");
      return intervalRef.current.focus();
    }

    if (alertData && alertData._id) {
      await api
        .put(`alerts/${alertData._id}`, {
          keyword,
          email,
          interval: Number(interval)
        })
        .catch(err =>
          toast.error(`Error on update alert: ${err.response.data.message}`)
        );
    } else {
      await api
        .post("alerts", {
          keyword,
          email,
          interval: Number(interval)
        })
        .catch(err =>
          toast.error(`Error on create alert: ${err?.response?.data?.message}`)
        );
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
            ref={keywordRef}
            onKeyPress={e => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <label htmlFor="">E-mail</label>
          <TextInput
            value={email}
            onChange={e => setEmail(e.target.value)}
            ref={emailRef}
            onKeyPress={e => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <label htmlFor="">Interval</label>
          <Select
            value={interval}
            onChange={e => setIntervalValue(e.target.value)}
            ref={intervalRef}
            onKeyPress={e => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
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
