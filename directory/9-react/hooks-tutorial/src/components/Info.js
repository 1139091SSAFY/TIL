import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log(`마운트될 때만 실행됩니다.`);
  // }, []);

  // useEffect(() => {
  //   console.log(`렌더링이 완료되었습니다.`);
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  useEffect(() => {
    console.log("effect");
  }, [name]);

  useEffect(() => {
    return () => {
      console.log("tceffe");
    };
  }, [name]);

  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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
