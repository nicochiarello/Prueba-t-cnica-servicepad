import React, { useState, useEffect } from "react";
import styles from "./table.module.css";
import Link from 'next/link'

const Table = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://servicepad-post-api.herokuapp.com/articles/")
      .then((res) => res.json())
      .then((res) => {
        res.data.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        let pages = Math.ceil(res.data.length / 6);
        let itemPerPage = 6;
        let aux = {};
        for (let i = 0; i < pages; i++) {
          let items = [];
          for (let j = itemPerPage * i; j < itemPerPage * i + 6; j++) {
            if (res.data[j]) {
              items.push(res.data[j]);
            }
          }
          aux[i + 1] = items;
        }

        setPosts(aux);
      })
      .catch((err) => console.log(err));
  }, []);




  const cutPhrases = (string) => {
    if (string.length > 30) {
      return string.slice(0, 30) + "...";
    } else {
      return string;
    }
  };

  const parseDate = (string) => {
    const date = string.split("T")[0].split("-").reverse().join("/");
    return date;
  };

  return (
    <section className={styles.tableContainer}>
      <article>
        <h4>Previous Articles</h4>
        <p>
          Review and edit previous blog posts published on to the homepage.{" "}
        </p>
      </article>
      <article className={styles.table}>
        <div className={styles.tableDescription}>
          <span>Author Name</span>
          <span>Title</span>
          <span>Content</span>
          <span>date</span>
        </div>
        {posts[1]
          ? posts[page].map((i, key) => {
              if (key % 2 === 0) {
                return (
                  <div
                    key={key}
                    className={
                      styles.tableDescription + " " + styles.tableItemLight
                    }
                  >
                    <span className={styles.tableAuthor}>{i.author}</span>
                    <span>{cutPhrases(i.title.trim())}</span>
                    <span>{cutPhrases(i.content.trim())}</span>
                    <span>{parseDate(i.date)}</span>
                    <Link href={`/articles/edit/${i.id}`} className={styles.greenEdit}>edit</Link>
                  </div>
                );
              } else {
                return (
                  <div key={key} className={styles.tableDescription}>
                    <span>{i.author}</span>
                    <span>{cutPhrases(i.title.trim())}</span>
                    <span>{cutPhrases(i.content.trim())}</span>
                    <span>{parseDate(i.date)}</span>
                    <Link href={`/articles/edit/${i.id}`} className={styles.greenEdit}>edit</Link>
                  </div>
                );
              }
            })
          : ""}
      </article>
      <section className={styles.paginationContainer}>
        <p onClick={()=>{
            let size = Object.keys(posts).length;
            if(page === 1){
                setPage(size)
            }else{
                setPage(page - 1)
            }
        }} className={styles.counter}>
          <i className="bx bx-left-arrow-alt"></i>
          Previous
        </p>
        <ul className={styles.paginationNav}>
          {Object.entries(posts).map((i) => {
            if (i[0] == page) {
              return (
                <li onClick={() => setPage(+i[0])} className={styles.navItems + " " + styles.navItemsActive}>
                  {i[0]} <div className={styles.itemActive}></div>
                </li>
              );
            } else {
              return (
                <li onClick={() => setPage(+i[0])} className={styles.navItems}>
                  {i[0]}
                </li>
              );
            }
          })}
        </ul>
        <p onClick={()=>{
            let size = Object.keys(posts).length;
            if(page === size){
                setPage(1)
            }else{
                setPage(page + 1)
            }
        }} className={styles.counter}>
          Next
          <i className="bx bx-right-arrow-alt"></i>
        </p>
      </section>
    </section>
  );
};

export default Table;
