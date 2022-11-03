import type { Task } from "./Transition";
import { memo, useDeferredValue } from "react";

type Props = {
  taskList: Task[];
};

const TaskList = memo(({ taskList }: Props) => {
  // コンポーネントで分かれている場合など、遅延を発生させたいデータは以下で宣言
  const defferdTaskList = useDeferredValue(taskList);

  return (
    <>
      {defferdTaskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: "300px",
            margin: "auto",
            background: "lavender",
            // Traisition実行中はリストカードを少し薄く教示する。
            // opacity: isPending ? 0.5 : 1,
          }}
        >
          <p>タイトル：{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </>
  );
});

export default TaskList;
