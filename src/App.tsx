import { Suspense, useEffect } from "react";
import "./App.css";
import AutoBatchEventHandler from "./components/AutoBatchEventHandler";
import AutoBatchOther from "./components/AutoBatchOther";
import ReactQuery from "./components/ReactQuery";
import Transition from "./components/Transition";

function App() {
  // useEffectの２引数を[]にするとコンポーネントを読み込んだ最初だけ実行される。
  useEffect(() => {
    console.log("Appがレンダリングされた。React18では2回呼ばれる。");
  }, []);

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <Suspense fallback={<p>ローディング中です。。。</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
