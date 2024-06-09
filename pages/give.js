import Head from "next/head";
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "next/link";
import { motion } from "framer-motion";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 1,
  };
}

const Crew = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Give</title>
      </Head>

      <main id="journal">
        <div className="spacer bg-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <h1 className="text-9xl">Generosity<br /> is our<br />privilege</h1>
                <p className="py-12 text-4xl">
                because JESUS<br /> was first generous<br/> towards us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-12">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12 pb-10">
                <div className="text-6xl mb-6">Ways We Give</div>
                <div className="d-flex text-black">
                  <div className="border-4 border-black p-4 mr-6">
                    <h4 className="text-black pb-2 text-2xl">Assets</h4>
                    <p className="text-black">
                    Contributions of Stock and Cryptocurrency are some of the most tax-efficient ways to give. A direct  donation of the asset can result in up to 20% more value for your donation because of the capital gains tax savings.
                    </p>
                    <Link href="/">
                  <div className="d-flex align-middle">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="large-link">
                      <p className="link-text-block m-0 text-black">Learn More</p>
                      <div className="link-arrow-wrapper">
                        <img src="https://assets-global.website-files.com/5f0cd5fb99f5470b194d3979/5fa7f3b53a458fb6d5885efa_arrowwhite.svg" loading="lazy" width="32" alt="" class="link-arrow" />
                      </div>
                    </motion.div>
                  </div>
                </Link>
                  </div>
                  <div className="border-4 border-black p-4">
                    <h4 className="text-black pb-2 text-2xl">Assets</h4>
                    <p className="text-black">
                    Contributions of Stock and Cryptocurrency are some of the most tax-efficient ways to give. A direct  donation of the asset can result in up to 20% more value for your donation because of the capital gains tax savings.
                    </p>
                    <Link href="/">
                  <div className="d-flex align-middle">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="large-link">
                      <p className="link-text-block m-0 text-black border-black">Learn More</p>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Crew;
