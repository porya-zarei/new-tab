import classes from "./card.module.scss";
const Card = ({
    borderRadius,
    title,
    text,
    badgeLabel,
    imageSource,
    badgeClass = "alert alert-info",
    textClass = "alert alert-light",
    titleClass = "alert alert-light",
}) => {
    if (imageSource) {
        return (
            <div
                className={`card w-100 h-auto ${classes.card}`}
                style={{borderRadius}}>
                <div className="row p-0 m-0 justify-content-evenly align-items-center">
                    <div className="col-4 p-0 m-0">
                        <img
                            class="card-img-top"
                            src={imageSource}
                            width={"100%"}
                            height={"100%"}
                            alt={"card banner"}
                        />
                    </div>
                    <div className="col-8 m-0 p-0">
                        <div class="card-body w-100">
                            <h4
                                class={
                                    "card-title fw-bolder p-1 rounded-3 " +
                                    titleClass
                                }>
                                {title}
                            </h4>
                            <p
                                class={
                                    "card-text fw-bolder rounded-3 " + textClass
                                }>
                                {text}
                            </p>
                        </div>
                        <div className="card-footer row p-2 m-0 w-100">
                            <div
                                className={
                                    "col-12 p-2 px-4 m-0 fw-bold rounded rounded-pill " +
                                    badgeClass
                                }>
                                {badgeLabel}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={`card w-100 h-auto ${classes.card}`}
                style={{borderRadius}}>
                <img class="card-img-top" src="holder.js/100x180/" alt="" />
                <div class="card-body">
                    <h4 class={"card-title " + titleClass}>{title}</h4>
                    <p class={"card-text " + textClass}>{text}</p>
                </div>
                <div className="card-footer row p-0 m-0 w-100">
                    <div className={"col-3 p-0 m-0 " + badgeClass}>
                        {badgeLabel}
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;
