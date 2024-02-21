import classes from "../styles/bcn_02.module.css";
import Cloud from "./Cloud";
export default function Clouds() {
  return (
    <section className={classes.clouds}>
      <Cloud initialPosX={-100} initialPosY={-100} moveSpeed={0.2} />
      <Cloud initialPosX={500} initialPosY={-100} moveSpeed={0.1} />
      <Cloud initialPosX={800} initialPosY={75} moveSpeed={0.35} />
      <Cloud initialPosX={500} initialPosY={350} moveSpeed={0.1} />
      <Cloud initialPosX={30} initialPosY={200} moveSpeed={0.35} />
    </section>
  );
}
