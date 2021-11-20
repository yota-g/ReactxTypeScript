import axios from "axios";
import { useState } from "react";
import { TodoType } from "./types/todo";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import "./styles.css";
import { User } from "./types/user";

const user: User = {
  name: "じゃけぇ",
  hobbies: ["映画", "ゲーム"]
};
//webAPIを使用したいのでaxios　をimportする。
//jsonplaceholderで今回はtodosを使用する。
// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };
export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        //  console.log(res)
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データの取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
//map使用時はkeyをつけるのを忘れないこと。
