//import logo from "./logo.svg";
import "./App.css";
import { ChildA } from "./components/Context/ContextChildren";
import ContextParent from "./components/Context/ContextParent";
//import ParentFour from "./components/Incorrent Optimizations/ParentFour";
//import ParentThree from "./components/Incorrent Optimizations/ParentThree";
//import GrandParent from "./Optimization/GrandParent";
//import ParentTwo from "./Optimization/ParentTwo";
//import ChildOne from "./Optimization/ChildOne";
//import Parent from "./components/Parent Child/parent";
//import ParentOne from "./Optimization/ParentOne";
//import UseReducer from "./components/UseReducer";
//import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
