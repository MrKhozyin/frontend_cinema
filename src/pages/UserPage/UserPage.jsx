import React from "react"; 
import { Typography, Row, Col } from "antd";
import MovieCard from "../../components/MovieCard/MovieCard";
import { userData } from "../../utils/mockData"
import { moviesData } from "../../utils/mockData";
import "./UserPage.css"

function UserPage(){
    let data = [];
    for (const key in userData) {
         data.push({"left": key, "right": userData[key]});
    }
    return (
        <div id="user-page">
            <div>
                <Typography.Title level={3}>Обо мне</Typography.Title>
                <div className="container-user-info">
                    {data.map(({ left, right }) => (
                        <React.Fragment key={left}>
                            <Typography.Text>{left}</Typography.Text>
                            <Typography.Text>{right}</Typography.Text>
                        </React.Fragment>))}
                </div>
            </div>
            <div>
                <Typography.Title level={3}>Сохранненый фильмы</Typography.Title>
                <Row gutter={[40, 40]}>
                    {moviesData.map((item) => (
                        <Col span={8}>
                        <MovieCard title={item.title} year={item.year} />
                        </Col>
                    ))}
                </Row>
        </div>
      </div>
    );
}

export default UserPage;