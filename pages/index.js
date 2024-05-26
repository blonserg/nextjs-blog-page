//import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";

export async function getStaticProps() {
  // const client = createClient({
  //   space: process.env.CONTENTFUL_SPACE_ID,
  //   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  // });

  // const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      //blogs: res.items,
    },
    revalidate: 1,
  };
}

const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blog | Codegrain</title>
      </Head>

      <main id="journal">
        <div className="spacer bg-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="page-intro mar-top-lg">
                  <h1 className="page-title">What You Got Going Big?</h1>
                  <p>Sharing super ideas in simple, minimal & elegant way.</p>
                </motion.div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                  <iframe width="100%" height="715" src="https://www.youtube.com/embed/lQcCKYkC6LM?si=d7v3DNCmE6w8_VPD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 mb-5">
                <h2 className="pb-2 mt-5">
                  Visit IRC
                </h2>
                <p className="mt-0">
                  Join us every Sunday
                </p>
                <Link href="/">
                  <div className="d-flex align-middle">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="large-link">
                      <p className="link-text-block m-0">Learn More</p>
                      <div className="link-arrow-wrapper">
                        <img src="https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5fa7f3b53a458fb6d5885efa_arrowwhite.svg" loading="lazy" width="32" alt="" class="link-arrow" />
                      </div>
                    </motion.div>
                  </div>
                </Link>

              </div>
            </div>
            {/* <div className="articles-list mar-top-lg">
              <div className="grids">
                {blogs.map((blog) => (
                  <BlogCard key={blog.sys.id} blog={blog} />
                ))}
              </div>
            </div> */}
          </div>
        </div>
        <div className="bg-light py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
                <h2 className="text-dark">
                  "Our mission is church for city"
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
