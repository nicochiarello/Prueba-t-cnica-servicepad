import React, { useState } from "react";
import Form from "../../../components/form/Form";
import Table from "../../../components/table/Table";
import styles from "../../../styles/Articles.module.css";
import Head from 'next/head'
const Edit = ({ singlePost, id }) => {
  return (
    <div>
      <Head>
        <title>Edit page</title>
      </Head>
      <section className={styles.infoContainer}>
        <h2>Edit Blog Article</h2>
        <p>Edit blog article to feature in the Easybank homepage.</p>
      </section>
      <Form singlePost={singlePost} id={id} />
      <Table />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://servicepad-post-api.herokuapp.com/articles/`
  );


  const data = await res.json();
  
  if (!data.data) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }




  const singleProduct = data.data.find((e) => e.id == id);
  return {
    props: {
      singlePost: singleProduct,
      id: singleProduct.id,
    },
  };
}

export default Edit;
