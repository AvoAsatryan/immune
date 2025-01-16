import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="intro-text">
          <p>«Իմուն» բարեգործական հիմնադրամ | Կապ մեզ հետ:</p>
        </div>
        <div className="social-icons">
          <p>
            <a href="https://www.facebook.com" target="_blank">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={15}
                height={15}
              />
            </a>
            <a href="https://www.youtube.com/@immun-mf6jp" target="_blank">
              <Image
                src="/youtube.png"
                alt="Youtube"
                width={15}
                height={15}
              />
            </a>
            <a href="https://www.gmail.com" target="_blank">
              <Image
                src="/email.png"
                alt="Email"
                width={15}
                height={15}
              />
            </a>
            <Image
              src="/phone.png"
              alt="Phone"
                width={15}
                height={15}
            />{" "}
            +374 10 123456
          </p>
          <p className="additional-text">
            «Իմուն» հիմնադրամը հավատում է, որ յուրաքանչյուր մարդ արժանի է առողջ
            և լիարժեք կյանք ունենալու հնարավորության: Միացեք մեզ՝ մեր
            առաքելությունը կյանքի կոչելու համար։
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
