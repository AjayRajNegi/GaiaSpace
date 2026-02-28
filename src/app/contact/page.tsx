"use client";

import ContactForm from "@/src/components/contact/ContactForm";
import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function contact() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <CTA />
      <Footer />
    </>
  );
}
