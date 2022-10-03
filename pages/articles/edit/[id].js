import React, { useState } from "react";
import Form from "../../../components/form/Form";
import Table from "../../../components/table/Table";
import styles from "../../../styles/Articles.module.css";
const Edit = ({ singlePost, id }) => {
  return (
    <div>
      <section className={styles.infoContainer}>
        <h2>Edit Blog Article</h2>
        <p>Edit blog article to feature in the Easybank homepage.</p>
      </section>
      <Form singlePost={singlePost} id={id} />
      <Table />
      <section className={styles.latestArticlesContainer}>
        <article className={styles.latestArticlesInfo}>
          <h3>Latest Articles</h3>
        </article>
        <section className={styles.latestArticlesCardsContainer}>
          <article className={styles.latesArticlesCard}>
            <img src="https://picsum.photos/800"></img>
            <div className={styles.latesArticlesInfoContainer}>
              <span>By Clarie Robinson</span>
              <h5>Receive money in any currency with no fees</h5>
              <p>
                The world is getting smaller and we´re becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </article>
          <article className={styles.latesArticlesCard}>
            <img src="https://picsum.photos/800"></img>
            <div className={styles.latesArticlesInfoContainer}>
              <span>By Clarie Robinson</span>
              <h5>Receive money in any currency with no fees</h5>
              <p>
                The world is getting smaller and we´re becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </article>
          <article className={styles.latesArticlesCard}>
            <img src="https://picsum.photos/800"></img>
            <div className={styles.latesArticlesInfoContainer}>
              <span>By Clarie Robinson</span>
              <h5>Receive money in any currency with no fees</h5>
              <p>
                The world is getting smaller and we´re becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </article>
          <article className={styles.latesArticlesCard}>
            <img src="https://picsum.photos/800"></img>
            <div className={styles.latesArticlesInfoContainer}>
              <span>By Clarie Robinson</span>
              <h5>Receive money in any currency with no fees</h5>
              <p>
                The world is getting smaller and we´re becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://servicepad-post-api.herokuapp.com/articles/`
  );
  const data = await res.json();
  const singleProduct = data.data.find((e) => e.id == id);
  return {
    props: {
      singlePost: singleProduct,
      id: singleProduct.id,
    },
  };
}

export default Edit;
