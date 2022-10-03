import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";

const Form = ({ singlePost, id }) => {
  const [post, setPost] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const sendPost = () => {
    if (editMode) {
      setLoader(true);
      fetch(`https://servicepad-post-api.herokuapp.com/articles/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(post),
      })
        .then((res) => setLoader(false))
        .then(() => router.push("/articles"))
        .catch((err) => console.log(err));
    } else {
      setLoader(true);
      fetch("https://servicepad-post-api.herokuapp.com/articles", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(post),
      })
        .then((res) => setLoader(false))
        .then(() => router.reload())
        .catch((err) => console.log(err));
    }
  };

  const deletepost = () => {
    setLoader(true);
    fetch(`https://servicepad-post-api.herokuapp.com/articles/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => {
        setLoader(false)
      res.json()})
      .then((data) => router.push("/articles"))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (singlePost) {
      setPost({
        author: singlePost.author,
        content: singlePost.content,
        title: singlePost.title,
      });
      setEditMode(true);
    }
  }, []);

  return (
    <section className={styles.formContainer}>
      {loader ? (
        <form className={styles.formLoader}>
          <BeatLoader size={35} />
        </form>
      ) : (
        <form className={styles.form}>
          <label>Author</label>
          <input
            value={post.author}
            onChange={(e) => {
              setPost({ ...post, author: e.target.value });
            }}
          ></input>
          <label>Blog title</label>
          <input
            value={post.title}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          ></input>
          <label>Blog Content</label>
          <textarea
            value={post.content}
            onChange={(e) => {
              setPost({ ...post, content: e.target.value });
            }}
            rows={20}
          ></textarea>
          <div onClick={() => sendPost()} className={styles.btn}>
            <p>Save</p>
          </div>
          {editMode ? (
            <div onClick={() => deletepost()} className={styles.btnDelete}>
              <p>Delete</p>
            </div>
          ) : (
            ""
          )}
        </form>
      )}
    </section>
  );
};

export default Form;
