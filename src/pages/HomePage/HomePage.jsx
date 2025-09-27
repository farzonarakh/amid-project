import { Header } from "../../components/Header";
import { FeaturesPage } from "../FeaturesPage";
import { PortfolioPage } from "../PortfolioPage";
import { ReviewsPage } from "../ReviewsPage";
import { Brands } from "./Brands";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <FeaturesPage />
      <PortfolioPage />
      <ReviewsPage />
      <Footer />
    </>
  )
}