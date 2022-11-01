import { useState } from "react";
import { flushSync } from "react-dom";

const AutoBatchEventHandler = () => {
  // React17と同じ処理になることを確認済み。
  // イベントハンドラーでは、下記でステートを２つ更新しているが、このログは１回だけ出力される。
  // 下記ステートをすべて更新してから、このコンポーネントRenderingログが呼ばれる。==>バッチ処理
  console.log("AutoBatchEventHandler Rendered!");

  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  const onClickUpdateButton = () => {
    // setStateは、引数に関数を持たせることができる。
    // 直接下記のように値を更新しても問題ないが、
    // バッチ処理に関して確認するため、今のstate1値に対して更新するという処理を書いた。
    // setState1(state1 + 1);

    console.log(state1);
    // flushSync ==> 明示的にバッチング処理を止めることができる。
    // ほぼ利用しないので、この関数はほぼ使わない。
    flushSync(() => {
      setState1((state1) => state1 + 1);
    });

    console.log(state1);
    setState2((state2) => state2 + 1);
  };

  return (
    <div>
      <p>Automatic Batching確認用（イベントハンドラ）</p>
      <button onClick={onClickUpdateButton}>State更新!</button>
      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
    </div>
  );
};

export default AutoBatchEventHandler;
