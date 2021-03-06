import { useState } from "react";

const Recommendations = ({ recommendations }) => {
  const [seeRecommendations, setSeeRecommendations] = useState(6);

  return (
    <>
      <div className="recommendations">
        <div className="recommendations__info">
          <h2 className="recommendations__info__title">Recommendations</h2>
          <p
            onClick={() =>
              seeRecommendations === 6
                ? setSeeRecommendations(recommendations.length)
                : setSeeRecommendations(6)
            }
            className="recommendations__info__trigger"
          >
            {recommendations.length < 7
              ? ""
              : seeRecommendations === 6
              ? `View all ${recommendations.length} recommendations`
              : "View Less"}
          </p>
        </div>
        <div className="recommendations__info__pictures">
          {recommendations &&
            recommendations.map(
              (recommendation, i) =>
                i <= seeRecommendations && (
                  <div key={recommendation.node.id}>
                    <div
                      className="recommendations__info__pictures__item"
                      style={{
                        backgroundImage: `url(${recommendation.node.mediaRecommendation.coverImage.large})`,
                      }}
                    ></div>
                    <p className="recommendations__info__pictures__title">
                      {recommendation.node.mediaRecommendation.title.romaji
                        .length <= 30
                        ? recommendation.node.mediaRecommendation.title.romaji
                        : recommendation.node.mediaRecommendation.title.romaji.substring(
                            0,
                            recommendation.node.mediaRecommendation.title.romaji.lastIndexOf(
                              " ",
                              30
                            )
                          ) + "..."}
                    </p>
                  </div>
                )
            )}
        </div>
      </div>
      <style jsx>{`
        .recommendations {
          width: 100%;
          margin-top: 16px;
        }

        .recommendations__info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .recommendations__info__title {
          font-size: 14px;
          font-weight: 600;
          color: rgb(92, 114, 138);
          margin: 0 0 8px 0;
        }

        .recommendations__info__trigger {
          font-size: 13px;
          font-weight: 600;
          color: rgb(92, 114, 138);
          cursor: pointer;
        }

        .recommendations__info__pictures {
          display: grid;
          grid-template-columns: repeat(auto-fill, 8.25rem);
          grid-gap: 34px;
        }

        .recommendations__info__pictures__item {
          height: 188px;
          border-radius: 3px;
          background-size: cover;
          cursor: pointer;
        }

        .recommendations__info__pictures__title {
          margin: 11px 0 0 0;
          font-size: 13px;
          color: #748899;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Recommendations;
