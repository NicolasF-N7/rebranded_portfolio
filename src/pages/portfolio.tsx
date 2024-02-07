import React from "react";
import Page from "@/components/utility/page";
import PortfolioSlide from '@/components/portfolio/portfolio_slide'
import { portfolio_proj_data } from '@/data/projects_data'

function portfolio() {
  return (
    <Page
      currentPage="Portfolio"
      meta={{ title: "Portfolio", desc: "Mes précédents projets de développement web" }}>

      <PortfolioSlide project_data={portfolio_proj_data[0]}/>

    </Page>
)};

export default portfolio;