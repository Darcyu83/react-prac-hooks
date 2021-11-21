import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UsestateWClass, { Usestate } from "./components/Usestate";
import { Useinput } from "./components/Useinput";
import { Usetabs } from "./components/Usetabs";
import { Useeffect } from "./components/Useeffect";
import { Usetitle } from "./components/Usetitle";
import { Useclick } from "./components/Useclick";
import { Useconfirm } from "./components/Useconfirm";
import { Usepreventleave } from "./components/Usepreventleave";
import { Usebeforeleave } from "./components/Usebeforeleave ";
import { Usefadein } from "./components/Usefadein";
import { Usenetwork } from "./components/Usenetwork";
import { Usescroll } from "./components/Usescroll";
import { Usefullscreen } from "./components/Usefullscreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="usestatHook" element={<Usestate />}></Route>
            <Route path="usestateClass" element={<UsestateWClass />}></Route>
            <Route path="useinput" element={<Useinput />}></Route>
            <Route path="usetabs" element={<Usetabs />}></Route>
            <Route path="useeffect" element={<Useeffect />}></Route>
            <Route path="usetitle" element={<Usetitle />}></Route>
            <Route path="useclick" element={<Useclick />}></Route>
            <Route path="useconfirm" element={<Useconfirm />}></Route>
            <Route path="usepreventleave" element={<Usepreventleave />}></Route>
            <Route path="usebeforeleave" element={<Usebeforeleave />}></Route>
            <Route path="usefadein" element={<Usefadein />}></Route>
            <Route path="usenetwork" element={<Usenetwork />}></Route>
            <Route path="usescroll" element={<Usescroll />}></Route>
            <Route path="usefullscreen" element={<Usefullscreen />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
