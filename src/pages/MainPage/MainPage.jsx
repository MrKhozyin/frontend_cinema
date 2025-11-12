import { Typography, Row, Col, Statistic } from "antd";
import { articleData, genreData } from "../../utils/mockData";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import GenreCard from "../../components/GenreCard/GenreCard";
import { useState } from "react";
import "./MainPage.css";

// map, filter, forEach

const MainPage = () => {
  const [moviesCount, setMoviesCount] = useState(12345);
  const [reviewsCount, setReviewCount] = useState(3456);
  const data = articleData;

  return (
    <div id="main-page">
      <div className="logo-container">
        <img src="logo_cinema.svg" />
      </div>
      <div className="description-container">
        <Typography.Text>
          Добро пожаловать в <b>CinemaBlog</b> – место, где кино становится
          страстью! Мы анализируем, обсуждаем и вдохновляемся лучшими фильмами
          всех времен. От голливудских блокбастеров до независимого арт-хауса –
          здесь есть кино для каждого.
        </Typography.Text>
      </div>
      <div className="articles-container">
        <Typography.Title level={3}>Главное сегодня</Typography.Title>
        <Row gutter={[60, 60]}>
          {articleData.map((item) => (
            <Col span={8}>
              <ArticleCard title={item.title} description={item.description} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="articles-container">
        <Typography.Title level={3}>Жанры</Typography.Title>
        <Row gutter={[60, 60]}>
          {genreData.map((item) => (
            <Col span={6}>
              <GenreCard label={item.label} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="statistic-container">
        <Statistic title={"Фильмов в блоге"} value={moviesCount} />
        <Statistic title={"Фильмов в блоге"} value={reviewsCount} />
      </div>
    </div>
  );
};

export default MainPage;
