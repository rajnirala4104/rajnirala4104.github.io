// import NavBar from "../shared/NavBar";
// import { useLocation } from "react-router-dom";
import './css/Contect.css'

export const Contact = (props) => {
  // const location = useLocation();

  return (
    <>
      {/* <NavBar activeStatus={location.pathname} /> */}
      <div className="container">
        <div className="contactContent container d-flex flex-wrap">
          <section className="leftSection">
            <div className="leftSectionContent">
              <h2>Hey There...</h2>
              <p>As a passionate full stack developer, I thrive on crafting seamless digital experiences that engage and inspire. With expertise in front-end and back-end technologies, I bring ideas to life through clean code and intuitive design. Let's collaborate and create something remarkable together.</p>
              <div className="socialIcons">
                <a href="https://www.linkedin.com/in/raj-nirala/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/rajnirala4104/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/_raj_nirala_/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/917827424823/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </section>
          <section className="rightSection ">
            <form
              action="mailto:rajnirala910@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name here.."
                />
              </div>
              <div className="form-group">
                <label>Message Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Describe that Message"
                ></textarea>
              </div>
              <button type="button" className="btn btn-secondary">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
