import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Notes from "./components/Notes";
import { Route, Routes } from "react-router-dom";
import Note from "./components/Note";
import Footer from "./components/Footer";

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
              <Footer />
            </>
          }
        />
        <Route path="/about" exact element={<h1>About</h1>} />
        <Route path="/notes" exact element={<Notes />} />
        <Route
          path="/note"
          exact
          element={
            <>
              <Header />
              <Note />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
