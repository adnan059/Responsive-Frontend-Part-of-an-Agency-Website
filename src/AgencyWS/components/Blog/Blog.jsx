import React from "react";
import { blogData } from "../../data";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <section className="blog" id="blog">
        <h1 className="sectionTitle underline">Our Blog</h1>
        <div className="container">
          {blogData.map((blog, i) => (
            <div className="blogBox" key={i}>
              <img src={blog.image} alt="" className="blogImg" />
              <div className="blogContent">
                <h2>
                  Vestibulum massa arcu, consectetu pellentesque scelerisque.
                </h2>
                <p>
                  Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa
                  et, consequat laoreet erat nam ac imperdiet
                </p>
                <div className="date_comm">
                  <p>
                    <i className="fa-regular fa-clock"></i> 7 March, 2022
                  </p>
                  <p>
                    <i className="fa-regular fa-comment"></i> 15
                    <i className="fa-solid fa-share-nodes"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
