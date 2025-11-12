import { Card } from "antd";
function ArticleCard(props) {
  return (
    <div>
      <Card title={props.title} cover={props.image}>
        <p>{props.description}</p>
      </Card>
    </div>
  );
}

export default ArticleCard;
