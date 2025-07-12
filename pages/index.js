import Head from "next/head";
import Front from "./components/Front";
import Layout from "./components/Layout";
import Produit from "./components/Produit";
import Partie from "./components/Partie";
import Quotes from "./components/Quotes";
import Voirplus from "./components/Voirplus";
import Map from "./components/Map";

export default function Home() {
  return (
      <Layout>
      <div>
        <Head>
          <title>Casa - Fleur et Deco </title>
          <meta name="description" content="Flower website" />
          <link rel="icon" href="/logoF.png" />
        </Head>
        
        
        {/* body */}
        <main>
          <Front/>
          <Produit/>  
          <Partie/>
          <Quotes/>
          <Voirplus/>
          <Map/>
        </main>
      </div>
      </Layout>
  );
}

