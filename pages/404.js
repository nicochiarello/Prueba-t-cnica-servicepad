import React from 'react'
import styles from '../styles/404.module.css'
import Head from 'next/head'

const error = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Error</title>
        </Head>
        Oops! La api no está funcionando en este momento o el id indicado no existe</div>
  )
}

export default error