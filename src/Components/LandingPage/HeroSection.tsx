"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white md:pt-16 pt-8 pb-16 overflow-hidden relative">
      <div className="container mx-auto w-full flex flex-col gap-8 md:flex-row items-center justify-between px-6 lg:px-10">
        {/* Left Content */}
        <div className="relative space-y-6 lg:w-[46%] md:min-w-96 min-w-full z-10">
          {/* Background Decorative Shape for Left Content */}
          <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
            {/* Large Special Organic Shape - At Bottom of Content */}
            <svg
              className="absolute bottom-0 left-0 w-[110%] h-[80%]"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1000C50 950 120 900 200 880C280 860 360 870 450 900C540 930 620 980 680 1040C740 1000 780 940 800 870C820 800 820 720 800 650C780 580 740 520 690 470C640 420 580 380 510 360C440 340 370 350 300 380C230 410 170 460 120 520C70 580 40 650 30 720C20 790 30 860 60 920C90 980 0 1000 0 1000Z"
                fill="url(#leftSpecialGradient)"
                opacity="0.9"
              />
              <defs>
                <linearGradient
                  id="leftSpecialGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#054eb4" stopOpacity="0.5" />
                  <stop offset="25%" stopColor="#1f5cc9" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#3383ff" stopOpacity="0.4" />
                  <stop offset="75%" stopColor="#66a2ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#99c1ff" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Secondary Flowing Shape - Creates Depth at Bottom */}
            <svg
              className="absolute bottom-0 left-4 w-[95%] h-[70%]"
              viewBox="0 0 900 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 900C50 850 130 800 220 780C310 760 400 770 480 800C560 830 630 880 680 940C730 900 760 840 770 770C780 700 770 630 750 570C730 510 700 460 660 420C620 380 570 350 510 340C450 330 390 350 330 390C270 430 220 480 180 540C140 600 110 670 100 740C90 810 100 880 130 940C160 900 0 900 0 900Z"
                fill="url(#leftSecondaryGradient)"
                opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="leftSecondaryGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3383ff" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#66a2ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#99c1ff" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Accent Shape - Bottom Right Corner */}
            <svg
              className="absolute bottom-8 right-4 w-[40%] h-[35%]"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M200 400C250 370 290 320 310 260C330 200 330 130 310 70C290 10 250 0 200 20C150 40 100 80 60 130C20 180 0 240 0 300C0 360 30 400 100 400C150 400 180 400 200 400Z"
                fill="#66a2ff"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative space-y-6">
            <p className="text-gray-600 text-base md:text-lg font-medium">
              {t("hero.greeting")}
            </p>

            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-gray-900 leading-tight">
              <span className="text-primary">{t("hero.title")}</span>{" "}
              {t("hero.titleHighlight")}{" "}
              <span className="text-primary">{t("hero.subtitle")}</span>
            </h1>

            <p className="text-gray-600 xl:text-lg lg:text-base text-sm font-medium leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="space-y-4">
              <CustomButton href={"/contact"}>{t("hero.cta")}</CustomButton>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {t("hero.availability")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="relative lg:w-[54%] w-full max-w-[600px] h-[450px] md:h-[500px] flex items-center justify-center overflow-visible">
          {/* Background Organic Shapes - Primary Blue */}
          <div className="absolute inset-0 overflow-visible">
            {/* Main Large Primary Blue Organic Shape */}
            <svg
              className="absolute top-0 right-0 w-[75%] h-[70%]"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M400 0C480 40 550 100 600 180C650 260 680 350 690 440C700 530 680 620 630 700C580 780 520 800 460 760C400 720 340 650 290 570C240 490 200 400 170 300C140 200 120 100 120 0C120 -50 140 -80 180 -80C220 -80 260 -50 300 -20C320 -10 360 0 400 0Z"
                fill="url(#primaryGradient)"
                opacity="0.9"
              />
              <defs>
                <linearGradient
                  id="primaryGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#054eb4" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#3383ff" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#66a2ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#99c1ff" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Secondary Medium Blue Organic Shape - Bottom Left */}
            <svg
              className="absolute bottom-0 left-0 w-[50%] h-[45%]"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 400C40 380 90 360 140 350C190 340 240 350 290 380C340 410 380 450 400 500C420 500 450 480 480 450C500 420 500 380 480 340C460 300 420 260 370 230C320 200 260 180 200 170C140 160 80 160 40 180C0 200 -20 240 0 280C20 320 0 360 0 400Z"
                fill="#1f5cc9"
                opacity="0.5"
              />
            </svg>

            {/* Third Smaller Blue Shape - Top Right Accent */}
            <svg
              className="absolute top-6 right-6 w-[28%] h-[24%]"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M150 0C180 20 210 50 230 90C250 130 260 180 250 230C240 280 210 300 170 300C130 300 100 270 80 230C60 190 50 140 60 90C70 40 100 0 150 0Z"
                fill="#3383ff"
                opacity="0.4"
              />
            </svg>

            {/* Fourth Small Accent Shape - Middle Right */}
            <svg
              className="absolute top-1/2 right-8 w-[20%] h-[16%] transform -translate-y-1/2"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0C120 15 135 40 140 70C145 100 140 130 120 150C100 170 70 175 50 160C30 145 20 120 25 90C30 60 50 30 80 15C90 10 95 0 100 0Z"
                fill="#66a2ff"
                opacity="0.35"
              />
            </svg>

            {/* Decorative Dots Pattern - Concentrated in Top Right */}
            <div className="absolute top-0 right-0 w-[35%] h-[35%] opacity-20 pointer-events-none">
              <div className="grid grid-cols-6 grid-rows-6 h-full w-full gap-2 p-3">
                {Array.from({ length: 36 }).map((_, i) => {
                  const shouldShow = Math.random() > 0.3;
                  return shouldShow ? (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gray-600"
                      style={{
                        opacity: Math.random() * 0.5 + 0.3,
                      }}
                    />
                  ) : null;
                })}
              </div>
            </div>

            {/* Decorative Dots Pattern - Concentrated in Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] opacity-20 pointer-events-none">
              <div className="grid grid-cols-5 grid-rows-5 h-full w-full gap-2 p-3">
                {Array.from({ length: 25 }).map((_, i) => {
                  const shouldShow = Math.random() > 0.3;
                  return shouldShow ? (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gray-600"
                      style={{
                        opacity: Math.random() * 0.5 + 0.3,
                      }}
                    />
                  ) : null;
                })}
              </div>
            </div>

            {/* Subtle Dots Scattered Across Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-3 p-4">
                {Array.from({ length: 144 }).map((_, i) => {
                  const shouldShow = Math.random() > 0.7;
                  return shouldShow ? (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-gray-500"
                      style={{
                        opacity: Math.random() * 0.4 + 0.2,
                      }}
                    />
                  ) : null;
                })}
              </div>
            </div>
          </div>

          {/* Hyundai Ioniq 5 Car Image - Proportionally Sized */}
          <div className="relative z-10 w-full h-full max-w-[550px] max-h-[450px] flex items-center justify-center overflow-visible">
            <div className="relative w-full h-full transform translate-x-2 md:translate-x-4">
              <Image
                src="/img/hyundai.png"
                alt="Hyundai Ioniq 5 VTC Premium Service"
                className="object-contain drop-shadow-2xl"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority
              />
            </div>
          </div>

          {/* Floating Stat Cards */}
          {/* Top Left Card */}
          <div className="absolute top-6 left-2 md:top-8 md:left-4 bg-white rounded-xl shadow-lg p-3 z-20 animate-bounce-vertical">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {t("hero.stats.projects")}
                </p>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div
            className="absolute top-12 right-4 md:top-16 md:right-8 bg-white rounded-xl shadow-lg p-4 z-20 animate-bounce-vertical"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {t("hero.stats.satisfaction")}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div
            className="absolute bottom-12 right-4 md:bottom-16 md:right-8 bg-white rounded-xl shadow-lg p-4 z-20 animate-bounce-vertical"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {t("hero.stats.experience")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
