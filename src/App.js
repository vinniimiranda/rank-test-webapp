import React from "react";
import Index from "./pages/Index/index";
import GlobalStyles from "./styles/global";
import Modal from "./components/Modal/index";
function App() {
  return (
    <>
      <Modal />
      <GlobalStyles />
      <Index />
    </>
  );
}

export default App;
