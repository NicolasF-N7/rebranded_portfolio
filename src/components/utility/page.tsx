import Footer from "@/components/shared/footer";
import Head from "next/head";
import MobileNavbar from "@/components/shared/mobile_navbar";
import Navbar from "@/components/shared/navbar";
import React, { ReactChildren } from "react";

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Accueil"
      ? "Nicolas Foin - Développeur web fullstack"
      : `${currentPage} - Nicolas Foin`
  }`;
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        {/* Google adsense tag */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2850313560784722"
        crossOrigin="anonymous"></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon-180.png"/>

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32.png"/>

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16.png"/>

        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foin-dev-web/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://foin-dev-web.fr/previews/social_media_thumbnail.png"/>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://foin-dev-web/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta
          property="twitter:image"
          content="https://foin-dev-web.fr/previews/social_media_thumbnail.png">
        </meta>
        
      </Head>
      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
