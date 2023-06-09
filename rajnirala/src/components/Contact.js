import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import './css/Contect.css'

export default function Contact(props) {
  const location = useLocation();

  return (
    <>
      <NavBar activeStatus={location.pathname} />
      <div className="container">
        <div className="contactContent container flex-wrap">
          <section className="leftSection">
            <div className="leftSectionContent">
              <h2>Hey There...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos ullam tempora expedita fuga possimus minus laboriosam odio totam voluptate fugit, quo voluptatum officia iste quas, iusto nihil ab perspiciatis!</p>
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
              <button type="button" class="btn btn-secondary">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
