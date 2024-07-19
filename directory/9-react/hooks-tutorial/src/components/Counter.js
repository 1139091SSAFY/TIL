// // import { useState } from "react";

// // const Counter = () => {
// //   const [value, setValue] = useState(0);

// //   return (
// //     <div>
// //       <p>
// //         현재 카운터 값은 <b>{value}</b>입니다.
// //       </p>
// //       <button onClick={() => setValue(value + 1)}>+</button>
// //       <button onClick={() => setValue(value - 1)}>-</button>
// //     </div>
// //   );
// // };

// // export default Counter;

// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { value: state.value + 1 };
//     case "DECREMENT":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   // useReducer(reducer 함수, 해당 reducer의 기본값)
//   // useReducer 사용 시 state 값과 dispatch 함수를 도출함

//   // state: 현재 가리키고 있는 상태

//   // dispatch: 액션을 발생시키는 함수.
//   // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣으면 reducer 함수가 호출됨

//   const [state, dispatch] = useReducer(reducer, { value: 0 });

//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{state.value}</b>입니다.
//       </p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
//     </div>
//   );
// };

// export default Counter;

//////////////////////////////////////////////

import useCounter from "../useCounter";

const Counter = () => {
  const counter = useCounter();

  return (
    <div>
      <p>Count: {counter.getCount()}</p>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.reset}>reset</button>
    </div>
  );
};

export default Counter;
