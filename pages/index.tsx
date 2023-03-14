import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Posts from "./posts/[slug]";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export interface PostsInterface {
  slug: string;
}

export default function Home() {
  // const [posts, setPosts] = useState<PostsInterface[]>([
  //   {
  //     id: 1,
  //     heading: "Amit",
  //     content: "I am the content",
  //   },
  // ]);

  const [slug, setSlug] = useState<PostsInterface[]>([{ slug: "my-slug" }]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="main-section">
          <h1>Welcome to SSR Basics!</h1>
          <Posts slug={slug} />
        </section>
      </main>
    </>
  );
}
