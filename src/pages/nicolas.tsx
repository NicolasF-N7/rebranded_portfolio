import React from "react";
import Image from "next/image";
import Link from "next/link";
import Page from "@/components/utility/page";
import EnseeihtLogo from "/public/logos/enseeiht.webp"

function nicolas() {
  return (
    <Page
      currentPage="Nicolas"
      meta={{ title: "Qui est Nicolas?", desc: "Présentation de Nicolas" }}>
      
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-charcoal text-3xl font-bold">Qui suis-je?</h1>
      </div>
      
      {/* First section */}
      <div className="mx-[10%] text-black flex flex-col items-center m-4 p-8 bg-softZomp border-t-2 border-b-2 border-pumpkin">
        <h2 className="text-2xl font-bold mb-8">Parcour académique</h2>
        <div>
          <p className="text-left">Je suis un passionné d'informatique depuis mon plus jeune âge. Au collège, je m'amusais déjà à faire des pièges en écrivant des messages drôles sur les ordinateurs des personnes de mon entourage.</p>
          <br/>
          <div className="mt-8 flex flex-row justify-between">
            <p className="text-left">Lorsque j'ai compris que l'on pouvait faire bien plus que cela avec l'informatique, j'ai décidé d'entreprendre des études d'ingénieur en logiciel et développement web à l'Enseeiht, à Toulouse à la sortie de ma classe préparatoire maths spé.</p>
          
            <Image
              className="ml-8 w-[40%] h-[40%] rounded-md"
              src={EnseeihtLogo}
              alt="Logo of the Enseeiht engineering school"/>
          </div>
          <br />
          <p className="text-left">J'ai découvert la puissance de l'informatique pour la visibilité en ligne des entreprises et pour tester rapidement une idée de produit au cours de plusieurs expériences en startups à différent stages de développement dans plusieurs pays.</p>
        </div>
      </div>

      {/* Second section: pict + experience */}

    </Page>
)};

export default nicolas;