import React from "react";

const BlogArticle = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-primary mb-3">
            <span className="fw-light text-dark">From Our</span> Blog Articles
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, erat non malesuada consequat, nibh erat tempus risus.
          </p>
        </div>
        <div className="row g-4">
          <BlogItem
            image="img/blog-1.jpg"
            title="Foods that are good for your hair growing"
            views="9999"
            comments="9999"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat."
          />
          <BlogItem
            image="img/blog-2.jpg"
            title="How to take care of hair naturally"
            views="9999"
            comments="9999"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat."
            dataDelay="0.3s"
          />
          <BlogItem
            image="img/blog-3.jpg"
            title="How to use our natural & organic shampoo"
            views="9999"
            comments="9999"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat."
            dataDelay="0.5s"
          />
        </div>
      </div>
    </div>
  );
};

const BlogItem = ({
  image,
  title,
  views,
  comments,
  description,
  dataDelay,
}) => {
  return (
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={dataDelay}>
      <div className="blog-item border h-100 p-4">
        <img className="img-fluid mb-4" src={image} alt="" />
        <a href="#" className="h5 lh-base d-inline-block">
          {title}
        </a>
        <div className="d-flex text-black-50 mb-2">
          <div className="pe-3">
            <small className="fa fa-eye me-1"></small>
            <small>{views} Views</small>
          </div>
          <div className="pe-3">
            <small className="fa fa-comments me-1"></small>
            <small>{comments} Comments</small>
          </div>
        </div>
        <p className="mb-4">{description}</p>
        <a href="#" className="btn btn-outline-primary px-3">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogArticle;
