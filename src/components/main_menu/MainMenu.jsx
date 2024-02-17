import Motor from "./components/Motor";
import classes from "./styles/main_menu.module.css";
export default function MainMenu() {
  return (
    <div className={classes.background}>
      <h1 className={classes.titleText}>Hello World</h1>
      <Motor />
    </div>
  );
}
