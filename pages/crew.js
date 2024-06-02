//import { createClient } from "contentful";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 1,
  };
}

const Crew = () => {
  return (
    <>
      <Head>
        <title>Crew</title>
      </Head>

      <main id="journal">
        <div className="spacer bg-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <h1 className="text-center text-9xl">Find Community</h1>
                <p className="text-center py-12">
                We believe that real life change and growth happens through authentic relationships. You can’t do life with everyone, but we can create a world where everyone has someone to do life with.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-12">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
                <h2 className="font-bold text-center ">
                  <p className="text-7xl bg-black d-inline mt-8 px-4">Our mission is</p>
                  <p className="d-block my-6"></p>
                  <p className="text-7xl bg-black d-inline mb-8 px-4">Church for city</p>
                </h2>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Crew;
