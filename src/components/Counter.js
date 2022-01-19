import { useSelector, useDispatch, connect } from "react-redux";
import { DECREMENT, INCREMENT, INCREMENTBY, TOGGLE } from "../store/type";
import classes from "./Counter.module.css";

const Counter = ({
  increment,
  decrement,
  increase,
  toggle,
  showCounter,
  counter,
}) => {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  const incrementHandler = () => {
    increment();
    // dispatch({ type: "increment" });
  };
  const incrementByHandler = () => {
    increase(5);
    // dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    decrement();
    // dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    toggle();
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByHandler}>Increment by 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    showCounter: state.showCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    increase: (val) => dispatch({ type: INCREMENTBY, payload: val }),
    toggle: () => dispatch({ type: TOGGLE }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
