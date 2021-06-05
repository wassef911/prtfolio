import React from "react";
import TimeAgo from "react-timeago";
import useFetchArticles from "../hooks/useFetchArticles";
import Spinner from "./Spinner";
import "./Card.style.scss";

function ArticlesCard() {
  const { isLoading, isError, data, error } = useFetchArticles();
  console.log(data);
  if (isLoading) return <Spinner />;
  return data.map((article) => (
    <div
      onClick={() => window.open(article.url, "_blank")}
      className="card project-card d-flex flex-column align-items-center m-5 "
      style={{ width: "19rem", height: "18rem" }}
    >
      <div className="card-body">
        <img
          className="card-img-top"
          src={article.cover_image}
          alt="articles card"
        />
        <h6 className="card-title project-card-title">{article.title}</h6>
        <h6 className="card-subtitle mb-2 text-muted date">
          {" "}
          <TimeAgo date={article.published_at} />
        </h6>
        <hr style={{ color: "white" }} />

        <p className="card-text">{article.description}</p>
      </div>
    </div>
  ));
}

export default ArticlesCard;
