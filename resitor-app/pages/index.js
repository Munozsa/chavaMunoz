import { Container } from '@material-ui/core';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Resistor from './components/resistor';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resistor App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Resistor />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
