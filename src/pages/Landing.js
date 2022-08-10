import React, { useState, useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import './Landing.css';
function Landing() {
  return (
    <div>
      <div>
        <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.png" alt=""> */}
              <h1>
                mariages<span>.</span>io
              </h1>
            </a>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="#hero">Mon mariage</a>
                </li>
                <li>
                  <a href="#about">Réception</a>
                </li>
                <li>
                  <a href="#menu">Prestataires</a>
                </li>
                <li>
                  <a href="#events">Mariée</a>
                </li>
                <li>
                  <a href="#chefs">Marié</a>
                </li>
                <li>
                  <a href="#gallery">Robes</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Idées</span> <i className="bi bi-chevron-down dropdown-indicator" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        <span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#contact">communauté</a>
                </li>
              </ul>
            </nav>
            {/* .navbar */}
            <a className="btn-book-a-table" href="/login">
              <Link to={'/login'} className="nav-link">
                Connexion
              </Link>
            </a>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center section-bg bg-white">
          <div className="container ">
            <div className="row justify-content-between gy-5 ">
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ">
                <h2 data-aos="fade-up">
                  Tout pour organiser <br />
                  votre mariage
                </h2>
                <p data-aos="fade-up" data-aos-delay={100}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum
                  quaerat.
                </p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <a href="#book-a-table" className="btn-book-a-table">
                    Inscription
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle" />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2 text-center text-lg-start " style={{ margin: 0 }}>
                <div className=" " id="heart"></div>
                <img
                  src="assets/img/1.jpg"
                  id="img1"
                  className="img-fluid "
                  alt=""
                  style={{ width: '768px', height: '500px' }}
                  data-aos="zoom-out"
                  data-aos-delay={300}
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>About Us</h2>
                <p>
                  Learn More <span>About Us</span>
                </p>
              </div>
              <div className="row gy-4">
                <div
                  className="col-lg-7 position-relative about-img"
                  style={{ backgroundImage: 'url(assets/img/about.jpg)' }}
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  <div className="call-us position-absolute">
                    <h4>Book a Table</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay={300}>
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Duis aute irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat
                        nulla pariatur.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident
                    </p>
                    <div className="position-relative mt-4">
                      <img src="assets/img/about-2.jpg" className="img-fluid" alt="" />
                      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="why-box">
                    <h3>Why Choose Yummy?</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et.
                      Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </p>
                    <div className="text-center">
                      <a href="#" className="more-btn">
                        Learn More <i className="bx bx-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Why Box */}
                <div className="col-lg-8 d-flex align-items-center">
                  <div className="row gy-4">
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-clipboard-data" />
                        <h4>Corporis voluptates officia eiusmod</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-gem" />
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-inboxes" />
                        <h4>Labore consequatur incidid dolore</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                      </div>
                    </div>
                    {/* End Icon Box */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Why Us Section */}
          {/* ======= Stats Counter Section ======= */}
          <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="zoom-out">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={232}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Clients</p>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={521}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Projects</p>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={1453}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Hours Of Support</p>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={32}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Workers</p>
                  </div>
                </div>
                {/* End Stats Item */}
              </div>
            </div>
          </section>
          {/* End Stats Counter Section */}
          {/* ======= Menu Section ======= */}
          <section id="menu" className="menu">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Prestataires</h2>
                <p>
                  Découvrez les professionnels du mariage <span>par catégorie </span>
                </p>
              </div>
              <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                    <h4>Negafa</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                    <h4>Traiteur</h4>
                  </a>
                  {/* End tab nav item */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                    <h4>Wedding-planner</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Orchestre et DJ</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Photograph mariage</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Makeup Artiste</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Animation Mariage</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Wedding Cake Designer</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Décoration Mariage</h4>
                  </a>
                </li>
                {/* End tab nav item */}
              </ul>
              <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
                <div className="tab-pane fade active show" id="menu-starters"></div>
              </div>
            </div>
          </section>
          {/* End Menu Section */}
          {/* ======= Testimonials Section ======= */}
          <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Testimonials</h2>
                <p>
                  What Are They <span>Saying About Us</span>
                </p>
              </div>
              <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay={100}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                              Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at
                              semper.
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img
                            src="assets/img/testimonials/testimonials-1.jpg"
                            className="img-fluid testimonial-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum
                              eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim
                              culpa.
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img
                            src="./assets/img/testimonials/testimonials-2.jpg"
                            className="img-fluid testimonial-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam
                              duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img
                            src="assets/img/testimonials/testimonials-3.jpg"
                            className="img-fluid testimonial-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                              enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore
                              nisi cillum quid.
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img
                            src="assets/img/testimonials/testimonials-4.jpg"
                            className="img-fluid testimonial-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* End Testimonials Section */}
          {/* ======= Events Section ======= */}
          <section id="events" className="events">
            <div className="container-fluid" data-aos="fade-up">
              <div className="section-header">
                <h2>Events</h2>
                <p>
                  Share <span>Your Moments</span> In Our Restaurant
                </p>
              </div>
              <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: 'url(assets/img/events-1.jpg)' }}
                  >
                    <h3>Custom Parties</h3>
                    <div className="price align-self-start">$99</div>
                    <p className="description">
                      Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim
                      facilis veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                  </div>
                  {/* End Event item */}
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: 'url(assets/img/events-2.jpg)' }}
                  >
                    <h3>Private Parties</h3>
                    <div className="price align-self-start">$289</div>
                    <p className="description">
                      In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est
                      ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                    </p>
                  </div>
                  {/* End Event item */}
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: 'url(assets/img/events-3.jpg)' }}
                  >
                    <h3>Birthday Parties</h3>
                    <div className="price align-self-start">$499</div>
                    <p className="description">
                      Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse
                      quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                  </div>
                  {/* End Event item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* End Events Section */}
          {/* ======= Chefs Section ======= */}
          <section id="chefs" className="chefs section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Chefs</h2>
                <p>
                  Our <span>Proffesional</span> Chefs
                </p>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Master Chef</span>
                      <p>
                        Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum
                        exercitationem iure minima enim corporis et voluptate.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Chefs Member */}
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Patissier</span>
                      <p>
                        Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit
                        corporis. Voluptate sed quas reiciendis animi neque sapiente.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Chefs Member */}
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>Cook</span>
                      <p>
                        Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim
                        aut architecto porro aspernatur molestiae modi.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Chefs Member */}
              </div>
            </div>
          </section>
          {/* End Chefs Section */}
          {/* ======= Book A Table Section ======= */}
          <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Book A Table</h2>
                <p>
                  Book <span>Your Stay</span> With Us
                </p>
              </div>
              <div className="row g-0">
                <div
                  className="col-lg-4 reservation-img"
                  style={{ backgroundImage: 'url(assets/img/reservation.jpg)' }}
                  data-aos="zoom-out"
                  data-aos-delay={200}
                />
                <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
                  <form
                    action="forms/book-a-table.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Your Phone"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="text"
                          name="date"
                          className="form-control"
                          id="date"
                          placeholder="Date"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="time"
                          id="time"
                          placeholder="Time"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          name="people"
                          id="people"
                          placeholder="# of people"
                          data-rule="minlen:1"
                          data-msg="Please enter at least 1 chars"
                        />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        placeholder="Message"
                        defaultValue={''}
                      />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your booking request was sent. We will call back or send an Email to confirm your reservation.
                        Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Book a Table</button>
                    </div>
                  </form>
                </div>
                {/* End Reservation Form */}
              </div>
            </div>
          </section>
          {/* End Book A Table Section */}
          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>gallery</h2>
                <p>
                  Check <span>Our Gallery</span>
                </p>
              </div>
              <div className="gallery-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.jpg">
                      <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.jpg">
                      <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.jpg">
                      <img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.jpg">
                      <img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.jpg">
                      <img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.jpg">
                      <img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.jpg">
                      <img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.jpg">
                      <img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* End Gallery Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Contact</h2>
                <p>
                  Need Help? <span>Contact Us</span>
                </p>
              </div>
              <div className="mb-3">
                <iframe
                  style={{ border: 0, width: '100%', height: '350px' }}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
              {/* End Google Maps */}
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-map flex-shrink-0" />
                    <div>
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center">
                    <i className="icon bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-share flex-shrink-0" />
                    <div>
                      <h3>Opening Hours</h3>
                      <div>
                        <strong>Mon-Sat:</strong> 11AM - 23PM;
                        <strong>Sunday:</strong> Closed
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
              <form action="forms/contact.php" method="post" role="form" className="php-email-form p-3 p-md-4">
                <div className="row">
                  <div className="col-xl-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-xl-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    defaultValue={''}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
              {/*End Contact Form */}
            </div>
          </section>
          {/* End Contact Section */}
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon" />
                <div>
                  <h4>Address</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022 - US
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-telephone icon" />
                <div>
                  <h4>Reservations</h4>
                  <p>
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-clock icon" />
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    <strong>Mon-Sat: 11AM</strong> - 23PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright{' '}
              <strong>
                <span>Yummy</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* End Footer */}
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short" />
        </a>
        <div id="preloader" />
      </div>
    </div>
  );
}
export default Landing;
