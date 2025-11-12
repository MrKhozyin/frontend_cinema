import { Avatar } from "antd";

function GenreCard(props) {
  return (
    <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
      <Avatar>{props.label[0]}</Avatar>
      <p>{props.label}</p>
    </div>
  );
}

export default GenreCard;
