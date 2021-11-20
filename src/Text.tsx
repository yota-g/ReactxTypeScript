// import {FC} from "react";
import { VFC } from "react";
//functional componentの略で関数コンポーネント
type Props = {
  color: string;
  fontSize: string;
};
//これを関数コンポーネントの型を明示的に記載するようにする。
// export const Text = (props: Props) => {
//関数コンポーネントの場合は、引数に型指定を渡すのではなく、FCに対して渡す。
//関数コンポーネントではこれが適切な型指定方法
//関数コンポーネントでは暗黙的にchildrenを受け取れるようになっている。
// childrenを渡してもエラーになっていないが、ver18から暗黙的にchildrenを含まないうようになるので注意が必要。
//それまではVFCでchildrenを含まないものにできる。暫定的なもの。
// export const Text: FC<Props> = (props) => {
export const Text: VFC<Props> = (props) => {
  // const {color, fontSize, children} = props;
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです。</p>;
};
