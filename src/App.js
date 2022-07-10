import "./App.css";
import React, {useContext} from "react";
import FirstStep from "./Component/FirstStep";
import SecondStep from "./Component/SecondStep";
import ThirdStep from "./Component/ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import DisplayData from "./Component/DisplayData";

function App() {
  const {currentStep, finalData} = useContext(multiStepContext);
  function showStep(step) {
    switch(step) {
      case 1 :
        return <FirstStep />
      case 2 :
        return <SecondStep />
      case 3 :
        return <ThirdStep />
        default:
          return <FirstStep/>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          {" "}
          ReactJS Multi Step Form
        </h3>
        <div className="center-stepper">
          <Stepper
            style={{ width: "30%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        {finalData.length > 0 ? <DisplayData/> : ''}
      </header>
    </div>
  );
}

export default App;
