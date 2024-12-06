import React from "react";
import { Logo } from "./Logo";
import ellipse1 from "./ellipse-1.svg";
import ellipse2 from "./ellipse-2.svg";
import ellipse3 from "./ellipse-3.svg";
import ellipse4 from "./ellipse-4.svg";
import ellipse5 from "./ellipse-5.svg";
import icon2 from "./icon-2.svg";
import icon3 from "./icon-3.svg";
import icon from "./icon.svg";
import image1 from "./image.png";
import image from "./image.svg";
import materialSymbolsAdsClick from "./material-symbols-ads-click.svg";
import materialSymbolsDashboardOutline from "./material-symbols-dashboard-outline.svg";
import mesh5271 from "./mesh-527-1.png";
import "./style.css";
import union from "./union.svg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="mesh" alt="Mesh" src={mesh5271} />

            <img className="ellipse" alt="Ellipse" src={ellipse5} />

            <img className="img" alt="Ellipse" src={ellipse3} />

            <div className="insightful-dashboard" />

            <div className="personalized" />

            <div className="AI-powered-assistant" />

            <div className="smart" />

            <div className="header-background" />

            <img className="ellipse-2" alt="Ellipse" src={ellipse1} />

            <img className="ellipse-3" alt="Ellipse" src={ellipse4} />

            <img className="ellipse-4" alt="Ellipse" src={ellipse2} />

            <Logo className="logo-instance" />
            <p className="main-heading">
              <span className="text-wrapper">Save Your Energy with </span>

              <span className="span">Tezla</span>

              <span className="text-wrapper-2">&nbsp;</span>

              <span className="text-wrapper">
                Save <br />
                Money and Environment{" "}
              </span>
            </p>

            <button className="button">
              <button className="button-text">Sign up</button>
            </button>

            <img className="icon" alt="Icon" src={icon} />

            <div className="AI-chat-bot-promo">
              <div className="new-badge-container">
                <div className="new-badge-text">New</div>
              </div>

              <p className="div">Try our AI Chat Bot</p>

              <img className="icon-2" alt="Icon" src={icon3} />
            </div>

            <p className="lorem-ipsum-text">
              Are you ready to take control of your energy consumption and save
              money while helping the planet? Tezla is yourall-in-
              <br />
              one solution for smart energy management.Sign up now and start
              your journey to a smarter, greener, and more <br />
              cost-effective energy future.
            </p>

            <div className="button-container">
              <button className="button-text-wrapper">
                <div className="button-text-2">Try it free</div>
              </button>

              <div className="learn-more-link">Learn More</div>
            </div>

            <div className="image-container">
              <div className="overlap-group-2">
                <img className="union" alt="Union" src={union} />

                <img className="image" alt="Image" src={image1} />
              </div>
            </div>

            <div className="energy-track-link">Energy Track</div>

            <div className="personalization-link">Personalization</div>

            <div className="tez-calc-link">Tez Calc</div>

            <div className="about-us-link">About Us</div>

            <div className="section-heading">Why Choose Tezla?</div>

            <div className="insightful-dashboard-2">Insightful Dashboard</div>

            <div className="personalized-2">Personalized Recommendations</div>

            <div className="AI-powered-assistant-2">AI-Powered Assistant</div>

            <div className="smart-2">Smart Recommendations</div>

            <p className="p">
              Get a crystal-clear view of your energy usage with our intuitive
              dashboard.
            </p>

            <p className="personalized-3">
              Receive tailored tips to slash your energy bills.
            </p>

            <p className="AI-powered-assistant-3">
              Our intelligent chatbot is always ready to answer your energy
              questions.
            </p>

            <p className="smart-3">
              Get actionable advice based on your unique usage patterns.
            </p>

            <img
              className="material-symbols"
              alt="Material symbols"
              src={materialSymbolsDashboardOutline}
            />

            <img
              className="material-symbols-ads"
              alt="Material symbols ads"
              src={materialSymbolsAdsClick}
            />

            <img className="icon-3" alt="Icon" src={image} />

            <p className="description">
              <span className="text-wrapper-3">Tezla</span>

              <span className="text-wrapper-4">
                {" "}
                is an innovative web application designed to make energy
                management simple, engaging, and impactful. Acting as your
                personal energy assistant, Tezla tracks your energy usage,
                explains your bills in easy-to-understand visuals, and provides
                personalized tips to help you save money and reduce consumption.
                With its AI-powered chatbot, interactive lessons, and quizzes,
                Tezla not only helps you take control of your energy habits but
                also empowers you with the knowledge to build a more sustainable
                future.
              </span>
            </p>

            <footer className="footer">
              <div className="overlap-2">
                <div className="footer-about-us">About Us</div>

                <div className="footer-explore">Explore</div>

                <div className="footer-support">Support</div>

                <p className="footer-about-us-2">
                  At Tezla, we are committed to empowering users to take control
                  of their energy consumption with ease. Our mission is to
                  simplify the complexities of energy management, providing
                  insights and solutions as unique as your habits. Whether
                  you&#39;re decoding energy bills, seeking personalized tips,
                  or learning about sustainability, Tezla ensures your
                  experience is intuitive, engaging, and impactful. Together, we
                  can create smarter, more energy-efficient lifestyles.
                </p>

                <div className="footer-law-insights">Energy Track</div>

                <div className="footer-FAQ">FAQ</div>

                <div className="footer-document">Personalization</div>

                <div className="footer-contact-us">Contact Us</div>

                <div className="footer-location">Tez Calc</div>

                <div className="footer-privacy">Privacy Policy</div>

                <div className="footer-announcements">Learning Hub</div>

                <div className="footer-terms-of">Terms of Service</div>

                <p className="footer-copyright">
                  Copyright © 2024 Tezla Inc. All rights reserved.
                </p>

                <div className="footer-logo">Tezla.</div>
              </div>
            </footer>

            <img className="icon-4" alt="Icon" src={icon2} />
          </div>

          <div className="main-heading-2">What is Tezla?</div>
        </div>
      </div>
    </div>
  );
};
