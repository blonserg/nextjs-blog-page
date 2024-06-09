//import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

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
                <div 
                  className="page-intro mar-top-lg">
                  <h1 className="page-title">What You Got Going Big?</h1>
                  <p>Sharing super ideas in simple, minimal & elegant way.</p>
                </div>
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
                <Link  href="/">
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
          </div>
        </div>
        <div className="bg-light py-12">
          <div className="container-fluid">
            <div className="row">
              <motion.div 
                className="col-lg-6 offset-lg-3 col-md-10 offset-md-1"
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.8 }}
                >
                <h2 className="font-bold text-center ">
                  <p className="text-7xl bg-black d-inline mt-8 px-4">Our mission is</p>
                  <p className="d-block my-6"></p>
                  <p className="text-7xl bg-black d-inline mb-8 px-4">Church for city</p>
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-dark py-12">
          <div className="container-xl">
            <div className="row">
              <motion.div 
                className="col-lg-12"
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.8 }}
              >
                <h2 className="text-7xl pb-4">Our Pastors</h2>
              </motion.div>
            </div>
            <div className="row">
              <motion.div 
                className="col-lg-6 text-white"
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true, amount: 0 }}
              >
              <Image
                src="/img/pastor.jpg"
                alt="My Image"
                width={500}
                height={500}
              />
              </motion.div>
              <motion.div 
                className="col-lg-6"
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true, amount: 0 }}
              >
                <p className="d-block">
                Our church family is a beacon of hope in our community.  We are a place where people can find solace, connection, and spiritual growth.  But a church shouldn't be stagnant.  It should be a vibrant, ever-evolving organism, guided by a clear vision from God.
                </p>

                <p className="d-block mt-4">
                My vision for our church is one of inclusivity, outreach, and unwavering faith.
                </p>

                <p className="d-block mt-4">
                This vision is not mine alone.  It is a vision that I believe God has placed on all of our hearts.  Together, through prayer, dedication, and commitment, we can turn this vision into reality.
                </p>
              </motion.div>
            </div>
          </div>
            
        </div>
        <div className="bg-white py-12">
          <div className="spacer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-4xl pb-4 text-black">The latest at IRC</h2>
                </div>
              </div>
            </div>
          </div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="pt-12"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div>
              <div className="latest-vous-card">
                <img loading="eager" src="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg" alt="" sizes="350px" srcset="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web-p-500.jpg 500w, https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg 564w" className="_100-img" />
                <div className="latest-vous-text-wrap">
                  <div className="overline-meta-10">
                    COLLECTION
                  </div>
                  <h4 className="text-black">
                    Mature Church
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="latest-vous-card">
                <img loading="eager" src="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg" alt="" sizes="350px" srcset="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web-p-500.jpg 500w, https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg 564w" className="_100-img" />
                <div className="latest-vous-text-wrap">
                  <div className="overline-meta-10">
                    COLLECTION
                  </div>
                  <h4 className="text-black">
                    Mature Church
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="latest-vous-card">
                <img loading="eager" src="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg" alt="" sizes="350px" srcset="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web-p-500.jpg 500w, https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg 564w" className="_100-img" />
                <div className="latest-vous-text-wrap">
                  <div className="overline-meta-10">
                    COLLECTION
                  </div>
                  <h4 className="text-black">
                    Mature Church
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="latest-vous-card">
                <img loading="eager" src="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg" alt="" sizes="350px" srcset="https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web-p-500.jpg 500w, https://assets-global.website-files.com/5f26e92b7cfa446572ec9d92/6612a23be1b7d400ed93ef96_web.jpg 564w" className="_100-img" />
                <div className="latest-vous-text-wrap">
                  <div className="overline-meta-10">
                    COLLECTION
                  </div>
                  <h4 className="text-black">
                    Mature Church
                  </h4>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="spacer bg-black pb-6">
          <div className="container-xl pb-8">
            <div className="row">
              <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true, amount: 0 }}
                className="col-lg-12"
                >
                <h2 class="text-8xl pb-4 py-12">
                  Ways we give
                </h2>
                <p>
                  Generosity is our privilege because Jesus was first 
                </p>
                <Link href="/">
                  <div className="d-flex align-middle pb-8">
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
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-white py-12">
          <div className="spacer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-8xl pb-4 text-black">Our Values</h2>
                </div>
              </div>
            </div>
          </div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="pt-12"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div>
              <div class="value-wrapper white">
                <div class="value-header d-flex ">
                  <h3 class="value-heading-3 text-8xl text-black mr-2">01<br /></h3>
                  <h4 class="text-4xl text-black mt-3">Sacrificial  &nbsp;▽ &nbsp;relationship  <br />with God<br /></h4>
                </div>
                <div class="value-body">
                  <p class="p-value text-black mt-3">This concept implies that we give God the most precious thing we have, out of love and gratitude for His love and grace.<br/></p>
                </div>
              </div>
            </div>
            <div>
              <div class="value-wrapper white">
                <div class="value-header d-flex ">
                  <h3 class="value-heading-3 text-8xl text-black mr-2">02<br /></h3>
                  <h4 class="text-4xl text-black mt-3">Worship<br /></h4>
                </div>
                <div class="value-body">
                  <p class="p-value text-black mt-3">Worship is the expression of love, respect, and gratitude to God. It can happen both individually and within a community.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="value-wrapper white">
                <div class="value-header d-flex ">
                  <h3 class="value-heading-3 text-8xl text-black mr-2">03<br /></h3>
                  <h4 class="text-4xl text-black mt-3">Giving  &nbsp;▽ &nbsp;<br /></h4>
                </div>
                <div class="value-body">
                  <p class="p-value text-black mt-3">Giving is the voluntary surrender of our time, resources, and talents to God. It's not just about donating money, but also about being willing to share what is valuable to us.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="value-wrapper white">
                <div class="value-header d-flex ">
                  <h3 class="value-heading-3 text-8xl text-black mr-2">04<br /></h3>
                  <h4 class="text-4xl text-black mt-3">Honoring &nbsp;▽ &nbsp;others<br /></h4>
                </div>
                <div class="value-body">
                  <p class="p-value text-black mt-3">Honoring others is acknowledging their worth and dignity as God's creations. It means treating them with respect, kindness, and compassion, even if they are different from us.<br/></p>
                </div>
              </div>
            </div>
            <div>
              <div class="value-wrapper white">
                <div class="value-header d-flex ">
                  <h3 class="value-heading-3 text-8xl text-black mr-2">05<br /></h3>
                  <h4 class="text-4xl text-black mt-3">I am a blessing<br /></h4>
                </div>
                <div class="value-body">
                  <p class="p-value text-black mt-3">We can do this by using our gifts, talents, and resources to help others, make the world a better place, and glorify God.<br/></p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </main>
    </>
  );
};

export default Blog;
