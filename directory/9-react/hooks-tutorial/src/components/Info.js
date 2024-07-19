// import { useReducer } from "react";

// const reducer = (state, action) => {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// };

// const Info = () => {
//   // useReducer(reducer 함수, 해당 reducer의 기본값)
//   // useReducer 사용 시 state 값과 dispatch 함수를 도출함

//   // state: 현재 가리키고 있는 상태

//   // dispatch: 액션을 발생시키는 함수.
//   // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣으면 reducer 함수가 호출됨

//   const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
//   const { name, nickname } = state;
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="nickname" value={nickname} onChange={onChange} />
//       </div>
//       <div>
//         <b>이름: </b>
//         {name}
//       </div>
//       <div>
//         <b>닉네임: </b>
//         {nickname}
//       </div>
//     </div>
//   );
// };

// export default Info;

import useInputs from "../useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>

      <div>
        <b>이름: </b>
        {name}
      </div>
      <div>
        <b>닉네임: </b>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
