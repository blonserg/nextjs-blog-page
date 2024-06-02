import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/plugins.min.js" />
        <script type="text/javascript" src="/js/functions.js" />
      </Head>

      
        <div className="wrap">
          <Navbar />
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
          <Footer />
        </div>
    </>
  );
};

export default Layout;
