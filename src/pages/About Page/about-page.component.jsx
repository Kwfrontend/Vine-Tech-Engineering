
import Footer from "../../components/Footer/footer.component";
import PageHero from "../../components/Page Hero/page-hero.component";
import HeroSection from "../../sections/hero-section/hero-section.component";
import "./about-page.styles.css";

const AboutPage = () => {
  return (
    <>
        <PageHero img={1}>About Us</PageHero>
        <div className="about-page-text-container">
          <h1 className="about-page-text-headline">Introduction</h1>
          <p className="about-page-text">
            <span className="about-page-text-1">
              VINE TECH ENGINEERING CC was established in 1997 with the main objective to deliver General Stainless Steel engineering and maintenance to the food and wine industry in the Boland and surrounding areas.
            </span><br/>
            <span className="about-page-text-2">
              In 2003 we took on the challenge of manufacturing stainless steel fittings for example: concentric & eccentric reducers, garollas, tee’s, press blanks and hose tails. We proud our self in the fact that we are one of only a very few such companies in the country.
            </span><br/>
            <span className="about-page-text-3">
            We at Vine Tech Engineering are committed to service excellence. We trust that we are well positioned to deliver a high level of service and satisfaction to our customers.
            </span><br/>
            <span className="about-page-text-4">Regards</span>
            <h4>Mark Lotter <br/>DIRECTOR</h4>
          </p>
        </div>
        <Footer />
    </>
  )
}

export default AboutPage;
