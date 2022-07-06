import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-[montserrat] text-white">
      <Head>
        <title>Arizonna</title>
        <script
          src="https://kit.fontawesome.com/880ed11170.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
