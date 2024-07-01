import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    intialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIndetifier, newValue) {
    setUserInput((state) => {
      return {
        ...state,
        [inputIndetifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
