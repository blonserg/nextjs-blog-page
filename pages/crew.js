import Head from "next/head";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12 pb-10">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Crews" {...a11yProps(0)} />
                  <Tab label="Lead Crews" {...a11yProps(1)} />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <h2 className="text-8xl text-black">
                    What Crew
                  </h2>
                  <p className="text-black">
                  Crews are where we pray for each other and support each other. These gatherings take place every other week. A Crew turns a crowd into a community!
                  </p>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <h2 className="text-8xl text-black">
                    Lead Crew
                  </h2>
                  <p className="text-black">
                  Crews are where we pray for each other and support each other. These gatherings take place every other week. A Crew turns a crowd into a community!
                  </p>
                </CustomTabPanel>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Crew;
