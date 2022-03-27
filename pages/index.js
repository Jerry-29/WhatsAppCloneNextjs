import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Join } from './api/Join';

export default function Home() {
  return (
    <div className={styles.container}>
      <Join/>
    </div>
  );
}
