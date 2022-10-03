import Head from "next/head";
import ButtonComponent from "../components/button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>easybank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.mainInfoContainer}>
        <article className={styles.mainInfo}>
          <h2>Next generation digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving. budgeting, nvesting, and much
            more.
          </p>

          <ButtonComponent string={"Request Invite"} />
        </article>
        <article className={styles.mainInfoImagesContainer}>
          <img className={styles.mainInfoPhones} src="/phones.png"></img>
          <div className={styles.mainInfoTextureContainer}>
            <img className={styles.mainInfoTexture} src="/texture.png"></img>
          </div>
          {/* <Image src={mockup} objectPosition={100} alt="Main logo" width="770px" height="820px" /> */}
        </article>
      </section>
      <section className={styles.bankDetailsContainer}>
        <article>
          <h3>Why choose Easybank?</h3>
          <p>
            We leverage Open Banking to turn your bank acount into your
            financial hub. Control your finances like never before.
          </p>
        </article>
        <article className={styles.bankFeaturesContainer}>
          <article className={styles.featuresCard}>
            <div className={styles.featuresCardLogo}>
              <img src="/online.png"></img>
            </div>
            <h4>Online Banking</h4>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.{" "}
            </p>
          </article>
          <article className={styles.featuresCard}>
            <div className={styles.featuresCardLogo}>
              <img src="/simple.png"></img>
            </div>
            <h4>Simple Budgeting</h4>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </article>
          <article className={styles.featuresCard}>
            <div className={styles.featuresCardLogo}>
              <img src="/Fast.png"></img>
            </div>
            <h4>Fast Onboarding</h4>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.{" "}
            </p>
          </article>
          <article className={styles.featuresCard}>
            <div className={styles.featuresCardLogo}>
              <img src="/open.png"></img>
            </div>
            <h4>Open API</h4>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </article>
        </article>
      </section>
      <section className={styles.latestArticlesContainer}>
        <article className={styles.latestArticlesInfo}>
          <h3>Latest Articles</h3>
       
            <ButtonComponent string={"+ Add New Article"} href={"/articles"}/>
       
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
}
