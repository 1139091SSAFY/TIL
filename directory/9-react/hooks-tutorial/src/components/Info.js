// import React, { useEffect, useState } from "react";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   useEffect(() => {
//     // console.log("렌더링이 완료되었습니다!");
//     // console.log({
//     //   name,
//     //   nickname,
//     // });
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//     // }, [name]);
//   });

//   useEffect(() => {
//     console.log("effect");
//     return () => {
//       console.log("unmount");
//     };
//   }, []);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <br />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>

//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//       </div>
//       <div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;


///////////////////////////////////////////////////////////////

import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nicckname: '',
  });

  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  }

  return ();
}

export default Info;