import '../styles/globals.css';
import '../styles/admin.css';  // Add this line
import type { AppProps } from 'next/app';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <div className="min-h-screen bg-white text-gray-800 antialiased">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Piyush Chauhan portfolio - Full Stack Developer specializing in modern web technologies" />
          <title>Piyush Chauhan | Portfolio</title>
          <meta property="og:title" content="Piyush Chauhan - Web Developer Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://piyush-chauhan.netlify.app/" />
          <meta property="og:image" content="https://piyush-chauhan.netlify.app/preview-image.png" />
          <meta property="og:description" content="Explore my portfolio showcasing web development projects, skills, and contact information." />
          <meta property="og:site_name" content="Piyush Chauhan Portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Piyush Chauhan - Web Developer Portfolio" />
          <meta name="twitter:description" content="Explore my portfolio showcasing web development projects, skills, and contact information." />
          <meta name="twitter:image" content="https://piyush-chauhan.netlify.app/preview-image.png" />
          {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3N8S9ZV3CF"></script>
<script>
  {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3N8S9ZV3CF');
  `}
</script>
        </Head>
        {pageProps.isAdminPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}