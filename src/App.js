import "./App.css";

import Bussiness from "./Components/Bussiness/Bussiness";
import WhyUs from "./Components/whyUs/WhyUs";
import Research from "./Components/research/Research";

import Header from "./Components/header/Header";
import Main from "./Components/main/Main";

function App() {
  return (
    <div class="theFirm">
      <Header />
      <Main />
      <Bussiness />
      <WhyUs />
      <Research />
    </div>
  );
}

export default App;
