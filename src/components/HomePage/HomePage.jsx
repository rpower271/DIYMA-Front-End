import "./HomePage.css";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="home-page ">
      <div className="image-description">
        <h1 className="  bg-white rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
          Do it with DIYMA
        </h1>
        <figure className="imgs">
          <img
            className="imgHP shadow-md"
            src="/public/images/HP1.jpg"
            alt="Man in window seal"
          />
          <img
            className="imgHP shadow-md "
            src="/public/images/HP2.jpg"
            alt="Man building crib"
          />
          <img
            className="imgHP shadow-md "
            src="/public/images/HP3.jpg"
            alt="Women hanging photos"
          />
          <img
            className="imgHP shadow-md"
            src="/public/images/HP4.jpg"
            alt="People painting"
          />
        </figure>
        <p className="description bg-white  rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
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
        <div className="register-homepage rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
          <p className="text-boxes">
            Create and account and start using DIYMA for your home projects!
          </p>
          <Link to={"/register"} className="LinksHP">
            Register here!
          </Link>
        </div>
        <div id="ideas-homepage">
          <Link to={"/ideas"} id="ideas-box">
            All Ideas
          </Link>
          <img id="ideas-image" src="/images/HP6.jpg" alt="Lightbuld" />
          <img id="ideas-image" src="/images/wooden-tray.jpg" alt="Lightbuld" />
        </div>
      </article>
      <article>
        <p className="description  rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
          Looking for inspiration? Visit our Ideas Page to explore creative
          project ideas and discover your next DIY adventure!
        </p>
      </article>
      <section className="forum-homepage rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
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
