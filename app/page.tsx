"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer/Footer";
import Donate from "@/components/donate/Donate";
import CarouselImmune from "@/components/carousel/CarouselImmune";
import React, { useEffect, useState } from "react";

export default function Home() {

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("transitioned");
      document.body.classList.add("show-content");
  
      // Check if footer element exists before accessing it
      const footer = document.getElementById("footer");
      if (footer) {
        footer.classList.add("show");
      }
  
      const content = document.getElementById("content");
      if (content) {
        content.style.opacity = "1";
      }
  
      const donateSection = document.querySelector(".donate-section") as HTMLElement;
      if (donateSection) {
        donateSection.style.display = "block";
      }
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="logo-container" id="logo-container">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
          id="logo"
        />
      </div>

      <div className="content" id="content">
        <div className="ml-[100px] text-left">
          <h1 className="text-white text-[24px] font-bold mt-5">
            «Իմուն» բարեգործական{" "}
            <span className="mobile-newline">հիմնադրամ</span>
          </h1>
        </div>
        <div className="content_id mt-[50px]" id="content_id">
          <div className="about-section">
            <div className="carousel">
              <CarouselImmune/>              
            </div>
            <div className="about-text">
              <h2>«Իմուն» բարեգործական հիմնադրամի մասին</h2>
              <p>
                Հիմնադրամը ստեղծվել է նպատակով աջակցել հասարակության տարբեր
                խմբերին՝ առողջապահական, սոցիալական և կրթական նախաձեռնությունների
                միջոցով։ Հիմնադրամը նպատակ ունի աջակցել հիվանդ երեխաներին և
                մեծահասակներին, օգնել կարիքավոր ընտանիքներին, և աջակցել կրթական
                ծրագրերի իրականացմանը։
              </p>

              <h3>Նպատակներ</h3>
              <ul>
                <li>
                  <strong>Առողջապահական աջակցություն:</strong> Աջակցություն
                  հիվանդանոցներին, դեղորայքային օգնություն հիվանդներին, բժշկական
                  սարքավորումների տրամադրում:
                </li>
                <li>
                  <strong>Սոցիալական աջակցություն:</strong> Օգնել կարիքավոր
                  ընտանիքներին, կազմակերպել բարեգործական միջոցառումներ և
                  դրամահավաքներ:
                </li>
                <li>
                  <strong>Կրթական աջակցություն:</strong> Նվիրատվություններ
                  դպրոցներին, կրթական նյութերի տրամադրում, կրթաթոշակներ
                  ուսանողներին:
                </li>
              </ul>

              <h3>Ծրագրեր</h3>
              <ul>
                <li>
                  <strong>Առողջապահական նախաձեռնություններ:</strong> Ֆինանսական
                  աջակցություն և դեղորայքային օգնություն հիվանդ երեխաներին և
                  մեծահասակներին:
                </li>
                <li>
                  <strong>Սոցիալական նախաձեռնություններ:</strong> Օգնություն
                  կարիքավոր ընտանիքներին, աջակցություն երեխաների և մեծահասակների
                  համար:
                </li>
                <li>
                  <strong>Կրթական ծրագրեր:</strong> Կրթական ծրագրերի և
                  նախաձեռնությունների ֆինանսավորում, ուսանողական կրթաթոշակների
                  տրամադրում:
                </li>
              </ul>

              <h3>Արժեքներ</h3>
              <ul>
                <li>
                  <strong>Անվտանգություն:</strong> Նպատակ է ապահովել
                  առողջապահական ապահովության բարձր մակարդակ:
                </li>
                <li>
                  <strong>Համագործակցություն:</strong> Համագործակցել տարբեր
                  հասարակական կազմակերպությունների և հաստատությունների հետ:
                </li>
                <li>
                  <strong>Սիրալիրություն:</strong> Օգնել կարիքավորներին սիրով և
                  հոգատարությամբ:
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Donate />
      <Footer />
    </div>
  );
}
