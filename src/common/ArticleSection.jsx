import React from "react";
import PropTypes from "prop-types";

const ArticleSection = ({
  selectedArticles,
  articleData,
  callback,
  className,
}) => {
  return (
    <section className={className}>
      {articleData?.map((article, index) => (
        <section
          data-testid={`article-title-${index}`}
          className={`${selectedArticles?.id === article.id ? "active" : ""}`}
          key={article.id}
          onClick={() => callback(article)}
        >
          {article.title}
        </section>
      ))}
    </section>
  );
};

ArticleSection.propTypes = {
  selectedArticles: PropTypes.object.isRequired,
  articleData: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default ArticleSection;
