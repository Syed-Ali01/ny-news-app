import React, { useEffect, useState, lazy, Suspense } from "react";
import "./styles.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { fetchArticles } from "../../api/apiSlice";
const ArticleSection = lazy(() => import("../../common/ArticleSection"));
const ArticleDetails = lazy(() => import("../../common/ArticleDetailSection"));

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState({});
  const [errorToast, setErrorToast] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileArticleDetail, setShowMobileArticleDetail] = useState(false);

  useEffect(() => {
    const checkForMobile = () =>
      window.matchMedia && window.matchMedia("(max-width: 480px)").matches;
    setIsMobile(checkForMobile());
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
    if (isMobile) {
      setShowMobileArticleDetail(true);
    }
  };

  const handleBack = () => {
    setShowMobileArticleDetail(false);
  };
  return (
    <>
      <section className="article-container p-4">
        <Suspense fallback={<p>Loading...</p>}>
          {!showMobileArticleDetail && (
            <div>
              <ArticleSection
                articleData={articles}
                callback={handleCallback}
                selectedArticles={selectedArticles}
                className={"articles-parent"}
              />
            </div>
          )}
          {!isMobile && (
            <div>
              {selectedArticles?.id && (
                <ArticleDetails
                  selectedArticles={selectedArticles}
                  className={"article-detail"}
                />
              )}
            </div>
          )}
          {isMobile && showMobileArticleDetail && (
            <div>
              <IoMdArrowRoundBack role="button" onClick={handleBack} />
              <ArticleDetails
                selectedArticles={selectedArticles}
                className={"article-detail"}
              />
            </div>
          )}
        </Suspense>
      </section>
      {errorToast && <p className="error-toast">Article Api failed...</p>}
    </>
  );
};

export default Articles;
