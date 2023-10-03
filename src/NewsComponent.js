import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div>
          <div className="my-3">
            <div className="card" style={{ width: "20rem" }}>
              <img
                src={
                  !imageUrl
                    ? "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/4d76038c-6587-11eb-9024-f0893c954548_1612351721711_1612351728244_1693659205839.jpg"
                    : imageUrl
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {!title ? "Latest News Right Here" : title}
                </h5>
                <p className="card-text">
                  {!description ? "NBN News Update" : description}
                </p>
                <a href={newsUrl} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsComponent;
