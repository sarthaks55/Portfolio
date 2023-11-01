import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import SomeProjects from "../components/SomeProjects";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Hero />
      <div className="homeMain">
        <div className="timecard">
        <section className="edutimeline">
        <h3 className="head">Education</h3>
          <ul className="timeline-with-icons">
            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="fas fa-rocket text-primary fa-sm fa-fw"></i>
              </span>

              <h5 className="fw">Bachelor of Engineering- Information Technology (Mumbai University)</h5>
              <p className="time mb-2 fw">Present</p>
              <p className="location">
              📌 Terna Engineering College , Nerul
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="fas fa-hand-holding-usd text-primary fa-sm fa-fw"></i>
              </span>
              <h5 className="fw">Class 12th , State Board </h5>
              <p className="time mb-2 fw">May2019-June2021 </p>
              <p className="location">
              📌 Narayana Junior College , Thane
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="fas fa-users text-primary fa-sm fa-fw"></i>
              </span>
              <h5 className="fw">Class 10th , State Board</h5>
              <p className="time mb-2 fw">June2008-March2019 </p>
              <h5 className="percentage">Percentage- 92.67%</h5>
              <p className="location">
              📌 The Scholars English High School And Jr.College , Bhiwandi
              </p>
            </li>
          </ul>
        </section>
        </div>
        <div className="introductionMain">
          <div className="abt">
            <p>About Me</p>
          </div>
          <div className="intro">
            <h3>Hello! I'm Sarthak Sambare</h3>
          </div>
          <div>
            <h5> Third-Year Engineering Student </h5>
          </div>
          <div>
            <p>
              I'm a Third-year IT engineering student who is eager to learn and
              develop in the field of technology. As I continue my journey in
              the field of technology, I am committed to continuous learning and
              professional development. I stay up-to-date with the latest trends
              and advancements, attending workshops, seminars, and online
              courses to broaden my horizons. I believe that a growth mindset is
              essential in an ever-evolving field like technology, and I am
              eager to embrace new challenges that come my way.
            </p>
          </div>
        </div>
      </div>
      <Technologies />
      <SomeProjects />
      <Footer />
    </div>
  );
};

export default Home;
