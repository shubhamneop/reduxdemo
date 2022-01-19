import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = ({}) => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const incrementByHandler = () => {
    dispatch(counterActions.incrementby(5));
    // dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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

export default Counter;
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//     showCounter: state.showCounter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: INCREMENT }),
//     decrement: () => dispatch({ type: DECREMENT }),
//     increase: (val) => dispatch({ type: INCREMENTBY, payload: val }),
//     toggle: () => dispatch({ type: TOGGLE }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
