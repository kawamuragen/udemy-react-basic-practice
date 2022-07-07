import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // オブジェクトのプロパティ名が同じ場合はコロンを省略できる
    color,
    fontSize: "18px"
  };

  // propsの特別な要素である「children」を表示する
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
// デフォルトexportしてもいいし、3行目のようにexportしても良い
// そのばあい、App.jsは「ColorfulMessage」ではなくて、分割代入の「 { ColorfulMessage }」と記載する。
