import classes from "./note.module.css";
import Subject from "./Subject";

const Note = () => {
  return (
    <main className={classes.note}>
      <p>Find your note here</p>
      <div className={classes.subjects}>
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
      </div>
    </main>
  );
};

export default Note;
