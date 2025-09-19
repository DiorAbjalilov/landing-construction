import { Header, Footer } from "@/components/layout";
import {
  HomePage,
  ServicePage,
  BlogPage,
  FAQPage,
  ServicesOverviewPage,
  HeroPage,
  GalleryPage,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
      <ServicePage />
      <FAQPage />
      <ServicesOverviewPage />
      <HeroPage />
      <GalleryPage />
      <BlogPage />
      <Footer />
    </div>
  );
}
