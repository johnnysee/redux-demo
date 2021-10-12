import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state);
  const [newGreeting, setNewGreeting] = useState();
  const dispatchGreeting = () => {
    dispatch({
      type: "CHANGE_GREETING",
      payload: newGreeting,
    });
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        placeholder="Type your Greeting"
        onChange={(event) => setNewGreeting(event.target.value)}
      />
      <button onClick={() => dispatchGreeting()}>Click Me</button>
    </div>
  );
};

export default App;
