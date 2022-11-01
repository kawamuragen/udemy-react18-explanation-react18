import React, { useEffect } from "react";
import "./App.css";
import AutoBatchEventHandler from "./components/AutoBatchEventHandler";
import AutoBatchOther from "./components/AutoBatchOther";

function App() {
  // useEffectの２引数を[]にするとコンポーネントを読み込んだ最初だけ実行される。
  useEffect(() => {
    console.log("Appがレンダリングされた。React18では2回呼ばれる。");
  }, []);

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
    </div>
  );
}

export default App;
