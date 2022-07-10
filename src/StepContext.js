import React, { useState } from "react";
import App from "./App";

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({firstName: "", lastname: "", contact:"",email:"", country:"", district:"",city:"", landmark:"", postalcode:""});
  const [finalData, setFinalData] = useState([]);

  function submitData(){
    setFinalData([...finalData, userData]);
    setUserData({firstName: "", lastname: "", contact:"",email:"", country:"", district:"",city:"", landmark:"", postalcode:""});
    setStep(1);
  }
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData
        }}>
        <App/>
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
