import { Card } from "antd";

function MovieCard(props) {
  return (
    <Card hoverable cover={props.img}>
      <Card.Meta title={props.title} description={props.year} />
    </Card>
  );
}

export default MovieCard;
