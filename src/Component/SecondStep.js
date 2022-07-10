import React, {useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

const SecondStep = () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);

  return (
    <div>
      <div>
        <TextField value={userData['email']}
         onChange={(e) => setUserData({...userData, "email": e.target.value})}
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField value={userData['country']}
         onChange={(e) => setUserData({...userData, "country": e.target.value})}
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField value={userData['district']}
         onChange={(e) => setUserData({...userData, "district": e.target.value})}
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button variant="contained" color="secondary" onClick={() => setStep(1)}> Back</Button> <span> </span>
      <Button variant="contained" color="primary" onClick={() => setStep(3)}>
        Next
      </Button>

    </div>
  );
};

export default SecondStep;
