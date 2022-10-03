import React, { useState, useEffect } from "react";
import Form from "../components/form/Form";
import Table from "../components/table/Table";
import styles from "../styles/Articles.module.css";

const articles = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://servicepad-post-api.herokuapp.com/articles/")
      .then((res) => res.json())
      .then((res) => {
        res.data.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <section className={styles.infoContainer}>
        <h2>Add New Blog Article</h2>
        <p>Publish a new blog article to feature in the Easybank homepage.</p>
      </section>
      <Form />
      <Table />
      <section className={styles.latestArticlesContainer}>
        <article className={styles.latestArticlesInfo}>
          <h3>Latest Articles</h3>
        </article>
        {posts.length > 0 ? (
          <section className={styles.latestArticlesCardsContainer}>
            {posts.map((i, key) => {
              return (
                <article key={key} className={styles.latesArticlesCard}>
                  <img src={i.image}></img>
                  <div className={styles.latesArticlesInfoContainer}>
                    <span>By {i.author}</span>
                    <h5>{i.title}</h5>
                    <p>{i.content}</p>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <p>API is not responding...</p>
        )}
      </section>
    </div>
  );
};

export default articles;
