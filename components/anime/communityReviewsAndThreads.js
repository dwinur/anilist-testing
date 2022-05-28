const CommunityReviewsAndThreads = ({ reviews }) => (
  <>
    <div className="community">
      <div className="community__reviews">
        <h2>Reviews</h2>
        {reviews.map(
          (review, i) =>
            i < 2 && (
              <div className="community__reviews__item" key={i}>
                <img src={review.node.user.avatar.medium} />
                <div className="community__reviews__item__textbox">
                  <em>
                    <p>{review.node.summary}</p>
                  </em>
                  <div className="community__reviews__item__textbox__votes">
                    <img src="/images/upvote.svg" />
                    <p>{review.node.rating}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
    <style jsx>{`
      .community {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 219px;
        grid-gap: 32px;
        margin-top: 24px;
        position: relative;
      }

      h2 {
        font-size: 0.95rem;
        font-weight: 600;
        color: rgb(92, 114, 138);
        margin: 0 0 8px 0;
      }

      .community__reviews__item {
        display: flex;
        flex-direction: row;
        height: 59px;
        margin-bottom: 16px;
      }

      .community__reviews__item img {
        width: 59px;
        height: 59px;
        border-radius: 3px;
      }

      .community__reviews__item__textbox {
        height: 100%;
        width: 100%;
        margin-left: 24px;
        border-radius: 14px;
        background-color: rgb(250, 250, 250);
        color: rgba(92, 114, 138, 0.9);
        font-size: 0.98rem;
        font-weight: 400;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .community__reviews__item__textbox p {
        text-align: center;
        font-size: 0.9rem;
      }

      .community__reviews__item__textbox:hover {
        box-shadow: 0 2px 20px 0 rgba(6, 13, 34, 0.05);
      }

      .community__reviews__item__textbox__votes {
        position: absolute;
        margin-left: 416px;
        margin-top: 32px;
        display: flex;
      }

      .community__reviews__item__textbox__votes p {
        margin: 0 0 0 5px;
        font-size: 0.85rem;
      }

      .community__reviews__item__textbox__votes img {
        height: 5px;
        width: 5px;
      }

      @media screen and (max-width: 1350px) {
        .community {
          display: flex;
          justify-content: center;
        }

        .community__reviews__item__textbox__votes {
          margin-left: 304px;
        }
      }

      @media screen and (max-width: 500px) {
        .community__reviews__item__textbox__votes {
          margin-left: 192px;
        }
      }
    `}</style>
  </>
);

export default CommunityReviewsAndThreads;
