import React,{useContext} from 'react';
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";



const ThirdStep = () => {
    const { setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    

  return (
    <div>
      <div>
        <TextField value={userData['city']}
         onChange={(e) => setUserData({...userData, "city": e.target.value})}
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField value={userData['landmark']}
         onChange={(e) => setUserData({...userData, "landmark": e.target.value})}
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField value={userData['postalCode']}
         onChange={(e) => setUserData({...userData, "postalcode": e.target.value})}
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button variant="contained" color="secondary" onClick={() => setStep(2)}> Back</Button> <span>

      </span>
      <Button variant="contained" color="primary" onClick={submitData}>
        Submit
      </Button>
    </div>
  )
}

export default ThirdStep
