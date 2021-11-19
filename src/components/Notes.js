import classes from "./notes.module.css";
import { useState, useEffect } from "react";

const faculties = {
  neb: ["Science", "Management", "Education"],
  bachelors: ["BSc", "BBA", "BBS", "BE", "BSW", "BHM", "BSc Ag", "BA"],
  masters: ["MSc", "MBA", "MBS", "ME", "MSW", "MHM", "MSc Ag", "MA"],
  semFaculty: [
    "BBA",
    "BE",
    "BHM",
    "BSc Ag",
    "MSc",
    "MBA",
    "MBS",
    "ME",
    "MSW",
    "MHM",
    "MSc Ag",
    "MA",
  ],
};

const Notes = () => {
  const [level, setLevel] = useState("");
  const [faculty, setFaculty] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [isSemester, setIsSemester] = useState(false);

  useEffect(() => {
    if (faculties.semFaculty.includes(faculty)) {
      setIsSemester(true);
    } else {
      setIsSemester(false);
    }
  }, [faculty]);

  return (
    <main className={classes.notes}>
      <div>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + "/images/searching.svg"}
          alt=""
        />
        <p className={classes.content}>Find Your Notes Here...</p>
      </div>
      <form className={classes.form}>
        <div className={classes.selectGroup}>
          <select name="SelectLevel" onChange={(e) => setLevel(e.target.value)}>
            <option value="">Level</option>
            <option value="NEB">NEB</option>
            <option value="Bachelors">Bachelor's</option>
            <option value="Masters">Master's</option>
          </select>
          {level ? (
            <select
              name="SelectFaculty"
              onChange={(e) => setFaculty(e.target.value)}
            >
              <option value="">Faculty</option>
              {level === "NEB" &&
                faculties.neb.map((faculty, index) => (
                  <option key={index} value={faculty}>
                    {faculty}
                  </option>
                ))}
              {level === "Bachelors" &&
                faculties.bachelors.map((faculty, index) => (
                  <option key={index} value={faculty}>
                    {faculty}
                  </option>
                ))}
              {level === "Masters" &&
                faculties.masters.map((faculty, index) => (
                  <option key={index} value={faculty}>
                    {faculty}
                  </option>
                ))}
            </select>
          ) : null}
          {faculty ? (
            <select
              name="SelectYear"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value="">Year</option>
              {level === "Bachelors" ? (
                <>
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
                  <option value="Fourth">Fourth</option>
                </>
              ) : (
                <>
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                </>
              )}
            </select>
          ) : null}

          {isSemester ? (
            <select
              name="SelectSemester"
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Semester</option>
              <option value="I">I</option>
              <option value="II">II</option>
            </select>
          ) : null}
        </div>
        <button className={classes.btn}>Find Notes</button>
      </form>
    </main>
  );
};

export default Notes;
