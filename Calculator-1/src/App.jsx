import Display from "C:/Users/malvi/OneDrive/Desktop/React_Redux/Calculator-1/src/components/Display";
import ButtonsContainer from "C:/Users/malvi/OneDrive/Desktop/React_Redux/Calculator-1/src/components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;