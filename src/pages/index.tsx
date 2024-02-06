import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/components/services/hero";
import Page from "@/components/utility/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page currentPage="Services" meta={{ desc: "Je suis Nicolas Foin, je crée des sites web pour les PME/TPE, commerces et startups" }}>
      <Hero />
      <div className="mt-20 space-y-32">
        
        {/*<Skills />
        <Testimonials />*/}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/*<CTA />*/}
    </Page>
  );
}
