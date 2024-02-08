import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ArticleDetailSection = ({ selectedArticles, className }) => {
  return (
    <section className={className}>
      <p>
        {selectedArticles?.published_date &&
          moment(selectedArticles?.published_date)?.format("MMM DD, YYYY")}
      </p>
      <section className="detail-subheading">
        {selectedArticles?.abstract}
      </section>
    </section>
  );
};

ArticleDetailSection.propTypes = {
  selectedArticles: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default ArticleDetailSection;
