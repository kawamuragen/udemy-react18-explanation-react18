import { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const AutoBatchOther = () => {
  // React17の動き
  // イベントハンドラー以外では、下記でステートを３つ更新しているため、このログは３回出力される。
  // React18の動き
  // ステートを３つ更新しているが、自動バッチングが行われこのログは１回だけ出力される。
  console.log("AutoBatchOther Rendered!");

  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
  const [state3, setState3] = useState<number>(0);

  const onClickExecuteApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsFinishApi(true);
        setState3(state3 + 1);
      });
  };

  return (
    <div>
      <p>Automatic Batching確認用（その他）</p>
      <button onClick={onClickExecuteApi}>API実行!</button>
      <p>isFinishApi: {isFinishApi ? "true" : "false"}</p>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};

export default AutoBatchOther;
