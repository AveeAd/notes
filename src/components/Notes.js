import classes from "./notes.module.css";

const Notes = () => {
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
          <select name="SelectLevel">
            <option value="">Level</option>
            <option value="NEB">NEB</option>
            <option value="Bachelors">Bachelor's</option>
            <option value="Masters">Master's</option>
          </select>
          <select name="SelectFaculty">
            <option value="">Faculty</option>
            <option value="Science">Science</option>
            <option value="Management">Management</option>
            <option value="Education">Education</option>
          </select>
          <select name="SelectYear">
            <option value="">Year</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
          </select>
          <select name="SelectSemester">
            <option value="">Semester</option>
            <option value="I">I</option>
            <option value="II">II</option>
          </select>
        </div>
        <button className={classes.btn}>Find Notes</button>
      </form>
    </main>
  );
};

export default Notes;
