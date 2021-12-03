import {useContext} from "react";
import {MainContext} from "../../contexts/main/main-context";
import Card from "../card/card";
import Container from "../switch-router/container";

const limitText = (text = "",limit=70) => {
    return text.slice(0, limit) + " ...";
};

const News = () => {
    const {allNews} = useContext(MainContext);
    return (
        <Container>
            <div className="col-12 p-2">
                <div className="row">
                    {allNews.map((news) => (
                        <div className="col-4 mb-2" key={news.date}>
                            <Card
                                imageSource={news.imageUrl}
                                borderRadius={"20px"}
                                title={limitText(news.title,30)}
                                text={limitText(news.content)}
                                titleClass={"fs-6"}
                                badgeLabel={
                                    <a
                                        href={news.readMoreUrl}
                                        className="outline-none text-decoration-none text-success h-auto p-0"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        More ...
                                    </a>
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default News;
