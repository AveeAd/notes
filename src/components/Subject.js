import { FaBookOpen } from "react-icons/fa";
import classes from "./note.module.css";

const Subject = () => {
  return (
    <div className={classes.subject}>
      <div className={classes.iconContainer}>
        <FaBookOpen />
      </div>
      <div>
        <p className={classes.subjectName}>Subject Name</p>
      </div>
    </div>
  );
};

export default Subject;
