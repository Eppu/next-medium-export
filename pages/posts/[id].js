import { getMediumData, getPostData } from "../../util/medium";
import parse from "html-react-parser";

export default function Post({ postData }) {
  console.log(postData);
  return (
    <>
      <article>
        <h1>{postData.title}</h1>
        <h2>Written by {postData["dc:creator"]}</h2>
        <h3>{postData.pubDate}</h3>
        {parse(postData["content:encoded"][0])}
        {/* dangerouslySetInnerHTML also works, but using html-react-parser is much neater. */}
        {/* <div dangerouslySetInnerHTML={{ __html: postData["content:encoded"] }} /> */}
      </article>
    </>
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
