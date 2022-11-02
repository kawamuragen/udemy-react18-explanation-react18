import { useState } from "react";
import Avatar from "./Avatar";

type Task = {
  id: number;
  title: string;
  assignee: string;
};

const member = {
  a: "A",
  b: "B",
  c: "C",
};

// アンダーバーのみの変数の意味
// https://ja.stackoverflow.com/questions/65430/%E3%82%A2%E3%83%B3%E3%83%80%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E3%81%BF%E3%81%AE%E5%A4%89%E6%95%B0%E3%81%AE%E6%84%8F%E5%91%B3
// 「単純に引数として書く必要があるため、記述はされたが特に使われていない」から気にしないでOKという意味
const generateDummyTasks = (): Task[] => {
  return Array(10000)
    .fill("")
    .map((_, index) => {
      const addedIndex: number = index + 1;
      return {
        id: addedIndex,
        title: `タスク${addedIndex}`,
        assignee:
          addedIndex % 3 === 0
            ? member.a
            : addedIndex % 2 === 0
            ? member.b
            : member.c,
      };
    });
};

const tasks = generateDummyTasks();
// console.log(tasks);
// 10,000件のタスクリストが出力される

const filteringAssignee = (assignee: string) => {
  if (assignee === "") return tasks;
  return tasks.filter((task) => task.assignee === assignee);
};

const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const onClickAssignee = (assignee: string) => {
    // alert(assignee);
    setSelectedAssignee(assignee);
    setTaskList(filteringAssignee(assignee));
  };

  return (
    <div>
      <p>transition</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          isSelected={selectedAssignee === member.a}
          onClick={onClickAssignee}
        >
          {member.a}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.b}
          onClick={onClickAssignee}
        >
          {member.b}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.c}
          onClick={onClickAssignee}
        >
          {member.c}
        </Avatar>
      </div>
      <br />
      <button onClick={() => onClickAssignee("")}>リセット</button>

      {taskList.map((task) => (
        <div
          key={task.id}
          style={{ width: "300px", margin: "auto", background: "lavender" }}
        >
          <p>タイトル：{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </div>
  );
};

export default Transition;
