import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <img src="/images/head.jpg" alt="Kodi" />
    </Layout>
  );
};

export default FirstPost;
