import React from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import { useContext } from "react";

const FirstStep = () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField value={userData['firstName']}
         onChange={(e) => setUserData({...userData, "firstName": e.target.value})}
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField value={userData['lastname']}
         onChange={(e) => setUserData({...userData, "lastname": e.target.value})}
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField value={userData['contact']}
         onChange={(e) => setUserData({...userData, "contact": e.target.value})}
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button variant="contained" color="primary" onClick={() => setStep(2)}>
        Next
      </Button>
    </div>
  );
};

export default FirstStep;
