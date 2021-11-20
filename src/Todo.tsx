import { VFC } from "react";
import { TodoType } from "./types/todo";
//idが必要ないのでそのままimportすると不要なものもimportしてしまう。
//そこをimportしないようにもできる。
//Pick<ある型名,"プロパティ名"　>である型の中の特定のものだけを抽出することができる。複数の時は|で区切る
//明示的に示すことでエラーが表示されなくなる。
//Pickの逆でOmitも存在する。Omitでは、Pickとは逆で除くものを記載する。
// type TodoType = {
//   userId: number,
//   title: string,
//   completed?: boolean
// }
//オプションの場合は、デフォルト値を作成しておいてあげるといい。
//親コンポからくる型を指定することできているかきてないかも判断可能。
//型の定義の共通管理を実施
// export const Todo = (props: Pick<TodoType,"userId" | "title" | "completed">) => {
// export const Todo = (props: Omit<TodoType,"id">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
