import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { TbDeviceDesktopCog } from "react-icons/tb";

function ServiceSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center lg:px-8">

        <div className="text-black flex flex-col items-center m-4 p-8 bg-softZomp border-t-2 border-b-2 border-pumpkin">
          <h2 className="text-2xl font-bold mb-8">Site vitrine</h2>
          <IoStorefrontOutline className="mb-8 text-charcoal" size="10em"/>
          <p className="whitespace-pre-wrap">Je crée des sites vitrine avec le CMS Wordpress pour l'administration des données. Je peux réaliser l'interface utilisateur avec React-JS, ou bien avec l’éditeur de thème Elementor.</p>
        </div>

        <div className="text-black flex flex-col items-center m-4 p-8 bg-softZomp border-t-2 border-b-2 border-pumpkin">
          <h2 className="text-2xl font-bold mb-8">Site e-commerce</h2>
          <BsCart4 className="mb-8 text-charcoal" size="10em"/>
          <p className="whitespace-pre-wrap">J’utilise Shopify pour gérer les fiches produits, commandes et paiements. Je peux créer l’interface utilisateur en React-JS, ou bien utiliser l’éditeur de thème proposé par Shopify.</p>
        </div>

        <div className="text-black flex flex-col items-center m-4 p-8 bg-softZomp border-t-2 border-b-2 border-pumpkin">
          <h2 className="text-2xl font-bold  mb-8">Application web</h2>
          <TbDeviceDesktopCog className="mb-8 text-charcoal" size="10em"/>
          <p className="whitespace-pre-wrap">Pour la création de SaaS et autres applications web nécessitant des fonctionnalités sur-mesures, j’utilise React-JS pour faire l’interface utilisateur, et Node-JS pour créer le backend.</p>
        </div>

      </div>
    </>
  );
}

export default ServiceSection;
