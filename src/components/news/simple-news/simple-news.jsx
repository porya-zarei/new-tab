import classes from "./simplenews.module.scss";

const limitText = (text = "") => {
    return text.slice(0, 60) + " ...";
};

const SimpleNews = ({
    height = "150px",
    width = "150px",
    borderRadius = "10px",
    news = {},
}) => {
    return (
        <div
            className={classes.container}
            style={{
                height,
                width,
                borderRadius,
                backgroundImage: `url(${news.imageUrl})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}>
            <a
                href={news.readMoreUrl}
                target={"_blank"}
                rel={"noreferrer"}
                className={classes.newsLink}>
                <div>{limitText(news.title)}</div>
            </a>
        </div>
    );
};

export default SimpleNews;
