import React from "react";
import { Provider } from "react-redux";
import Index from "./pages/Index/index";
import GlobalStyles from "./styles/global";
import Modal from "./components/Modal/index";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Modal />
      <GlobalStyles />
      <Index />
    </Provider>
  );
}

export default App;
