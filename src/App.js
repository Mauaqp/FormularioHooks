import React, {useState} from 'react';
import './App.css';
import UserForms from './Components/UserForms';
import Results from './Components/Results';

function App (){
  const [state, setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  });

  return (
    <div className='App'>
      <UserForms inputs={state} setInputs={setState}/>
      <Results data = {state}/>
    </div>
  );
}
export default App;
