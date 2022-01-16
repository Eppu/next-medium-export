import { getMediumData, getPostData } from "../../util/medium";
import parse from "html-react-parser";
import Head from "next/head";
import Footer from "../../components/footer";

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>{postData.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <article>
          <h1>{postData.title}</h1>
          <h2>Written by {postData["dc:creator"]}</h2>
          <h3>{postData.pubDate}</h3>
          {parse(postData["content:encoded"][0])}
          {/* dangerouslySetInnerHTML also works, but using html-react-parser is much neater. */}
          {/* <div dangerouslySetInnerHTML={{ __html: postData["content:encoded"] }} /> */}
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await getMediumData();
  const paths = res.posts.map((post) => ({
    params: { id: post.path },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
