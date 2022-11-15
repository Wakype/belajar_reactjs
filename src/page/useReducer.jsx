import React, { useReducer } from "react";
import 'animate.css';

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
      showText: state.showText,
    };
  }
  if (action.type === "toggleShowText") {
    return {
      count: state.count,
      showText: !state.showText,
    };
  }
  return state;
};

function ReducerMateri() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <section className="animate__animated animate__fadeInTopLeft">
      <div>
        <h1>count {state.count}</h1>
        <button
          onClick={() => {
            dispatch({
              type: "INCREMENT",
            });
            dispatch({
              type: "toggleShowText",
            });
          }}
        >
          Klik
        </button>
        <p>{state.showText && <p>Text ini Muncul</p>}</p>
      </div>
    </section>
  );
}

export default ReducerMateri;
