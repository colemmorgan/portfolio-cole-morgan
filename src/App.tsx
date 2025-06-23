import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [loaded, setloaded] = useState(true);
  return (
    <>
      <main className="mx-auto max-w-[1180px] px-10">
        <Nav />
        <Hero loaded={loaded}/>
        {!loaded && (
          <div
            className="absolute inset-0 z-50 bg-black"
            onClick={() => setloaded(true)}
          >
            gdfgdfg
          </div>
        )}{" "}
      </main>
    </>
  );
}

export default App;
