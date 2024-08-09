import "./styles.css";

import { useState } from "react";

export default function App(){

  const [show, setShow] = useState(true);

  return(
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> SHOW/HIDE</button>
      {show ? <h1>Welcome to React Challenge</h1> : null}
    </div>
  );
}