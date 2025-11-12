import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="image-description">
        <h1>Do it with DIYMA</h1>
        <figure className="imgs">
          <img
            className="imgHP"
            src="public/images/HP1.jpg"
            alt="Man in window seal"
          />
          <img
            className="imgHP"
            src="public/images/HP2.jpg"
            alt="Man building crib"
          />
          <img
            className="imgHP"
            src="public/images/HP3.jpg"
            alt="Women hanging photos"
          />
          <img
            className="imgHP"
            src="public/images/HP4.jpg"
            alt="People painting"
          />
        </figure>
        <p className="description">
          Diyma is an intuitive do-it-yourself project management app designed
          to help homeowners and DIY enthusiasts plan and execute their home
          projects with ease. With Diyma, users can create an account to
          organize every detail of their projects — from setting a title,
          description, time frame, and budget to listing all the necessary
          materials. By streamlining project planning and tracking, Diyma
          empowers users to stay organized, manage resources effectively, and
          confidently complete every step of their DIY journey.
        </p>
      </div>
      <article className="register-ideas">
        <div id="register-homepage">
          <p className="text-boxes">
            Create and account and start using DIYMA for your home projects!
          </p>
          <Link to={"/register"} className="LinksHP">
            Register here!
          </Link>
        </div>
        <div id="ideas-homepage">
          <Link to={"/projects"} id="ideas-box">
            All Ideas
          </Link>
          <img id="ideas-image" src="public/images/HP6.jpg" alt="Lightbuld" />
          <img
            id="ideas-image"
            src="public/images/wooden-tray.jpg"
            alt="Lightbuld"
          />
        </div>
      </article>
      <article>
        <p className="description">
          Looking for inspiration? Visit our Ideas Page to explore creative
          project ideas and discover your next DIY adventure!
        </p>
      </article>
      <section className="forum-homepage">
        <p className="text-boxes">
          Checkout our Forums page to discuss your projects, learn new
          perspectives, techniques ideas and engage with the community!{" "}
        </p>

        <Link to={"/forum"} className="LinksHP">
          Forum
        </Link>
      </section>
    </div>
  );
}
