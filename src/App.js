import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Notes from "./components/Notes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Landing />
            </>
          }
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
