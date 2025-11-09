"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";

export default function ToursServicePage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("services.touristTransport.name")}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("services.touristTransport.description")}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("services.page.serviceDetails")}
              </h2>
              <p className="text-gray-600 mb-8">
                {t("services.detail.touristTransport.description")}
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                {t("services.page.bookNow")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
