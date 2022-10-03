import React, { useState, useEffect } from "react";
import Form from "../components/form/Form";
import Table from "../components/table/Table";
import styles from "../styles/Articles.module.css";
import Head from "next/head";
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
      <Head>
        <title>Articles</title>
      </Head>
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
        <section className={styles.latestArticlesCardsContainer}>
          {posts.length > 0 ? (
            posts
              .map((i) => {
                return (
                  <article className={styles.latesArticlesCard}>
                    <img src={i.image_url}></img>
                    <div className={styles.latesArticlesInfoContainer}>
                      <span>By {i.author}</span>
                      <h5>{i.titles}</h5>
                      <p>{i.content}</p>
                    </div>
                  </article>
                );
              })
              .slice(0, 4)
          ) : (
            <article className={styles.latesArticlesCard}>
              <img src="https://picsum.photos/800"></img>
              <div className={styles.latesArticlesInfoContainer}>
                <span>Api isn´t working</span>
                <h5>Api isn´t working</h5>
                <p>Api isn´t working...</p>
              </div>
            </article>
          )}
        </section>
      </section>
    </div>
  );
};

export default articles;
