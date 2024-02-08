import React, { useEffect, useState, lazy, Suspense } from "react";
import "./styles.css";
import { fetchArticles } from "../../api/apiSlice";
const ArticleSection = lazy(() => import("../../common/ArticleSection"));
const ArticleDetails = lazy(() => import("../../common/ArticleDetailSection"));

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState({});
  const [errorToast, setErrorToast] = useState(false);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticles(data?.results);
        setSelectedArticles(data?.results?.[0] || {});
      })
      .catch(() => {
        setErrorToast(true);
      });
  }, []);

  const handleCallback = (data) => {
    setSelectedArticles(data);
  };
  return (
    <>
      <section className="article-container p-4">
        <Suspense fallback={<p>Loading...</p>}>
          <div>
            <ArticleSection
              articleData={articles}
              callback={handleCallback}
              selectedArticles={selectedArticles}
              className={"articles-parent"}
            />
          </div>
          <div>
            {selectedArticles?.id && (
              <ArticleDetails
                selectedArticles={selectedArticles}
                className={"article-detail"}
              />
            )}
          </div>
        </Suspense>
      </section>
      {errorToast && <p className="error-toast">Article Api failed...</p>}
    </>
  );
};

export default Articles;
