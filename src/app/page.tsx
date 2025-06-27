"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

function Preloader() {
  return (
    <div className="preloader">
      <button className="vs-btn preloaderCls">Önyükleyiciyi İptal Et</button>
      <div className="preloader-inner">
        <Image src="/assets/img/logo-white.png" width={250} height={80} alt="logo" style={{ width: 250, height: "auto" }} />
        <span className="loader"></span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="vs-header header-layout1 style2">
      <div className="header-top style2">
        <div className="main-container2">
          <div className="row justify-content-md-between justify-content-center align-items-center">
            <div className="col-auto d-md-block d-none">
              <div className="header-links">
                <ul>
                  <li><i className="far fa-envelope"></i><a href="mailto:info@haliyikatma.com">info@haliyikatma.com</a></li>
                  <li className="d-lg-inline d-none"><i className="far fa-clock"></i>Pazartesi - Cumartesi 8:00 - 21:00</li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="social-style1">
                <span className="social-title">Bizi takip edin :</span>
                <div className="social-icon">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, or use actual data loading logic
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <h1>Halıyıkatma Halı Yıkama Fabrikası</h1>
          <p>İstanbul'un tüm illerine hizmet veren Halı Yıkama Fabrikası. Halılarınızı profesyonel ekipmanlarımızla yıkıyoruz. Hızlı, güvenilir ve uygun fiyatlarla hizmet veriyoruz.</p>
        </motion.section>
      </main>
    </>
  );
}
