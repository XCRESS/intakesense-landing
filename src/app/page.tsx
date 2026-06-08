"use client";

import { Header } from "@/components/ui/header";
import Hero from "@/components/sections/hero";
import Clients from "@/components/sections/clients";
import Manifesto from "@/components/sections/manifesto";
import Founder from "@/components/sections/founder";
import Process from "@/components/sections/process";
import Results from "@/components/sections/results";
import Testimonials from "@/components/sections/testimonials";
import ForSeekers from "@/components/sections/for-seekers";
import Product from "@/components/sections/product";
import Pricing from "@/components/sections/pricing";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import FormPage from "@/components/sections/FormPage";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { useFormContext } from "@/context/FormContext";

export default function Home() {
  const { showForm, closeForm } = useFormContext();

  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />

      {!showForm ? (
        <>
          <Header />
          <main>
            <Hero />
            <Clients />
            <Manifesto />
            <Process />
            <Results />
            <Testimonials />
            <Founder />
            <Pricing />
            <Product />
            <ForSeekers />
            <Cta />
          </main>
          <Footer />
        </>
      ) : (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <FormPage onClose={closeForm} />
        </div>
      )}
    </>
  );
}
