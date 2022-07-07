/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  // 初期値を0で設定
  // クラスコンポーネントではなく、関数コンポーネントとして利用する
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEccectに空の配列を渡すと、最初の一回だけ通るようになる。
  // 配列に変数を入れると、変数が変化したときだけ通るようになる。
  useEffect(() => {
    // stateが変更されたら再レンダリングが走ってしまうので、useEffectを使う。
    // カウント3の倍数のときに顔がでるロジック
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">おげんきですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* trueの場合に右を返す */}
      {faceShowFlag && (
        <span role="img" aria-label="laugh">
          😂
        </span>
      )}
    </>
  );
};

export default App;
