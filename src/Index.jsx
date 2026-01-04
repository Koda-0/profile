import { use } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Index() {
  const [experience,setExperience] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);
  const [firstname,setFname] = useState("");
  const [lastname,setLname] = useState("");
  const [contact,setContact] = useState("");
  const [message,setMessage] = useState("");
  
  window.addEventListener("scroll" , function(){
     const nav = this.document.querySelector("nav");
     nav.classList.toggle('scrolled', this.window.scrollY > 50);
  });

  const start = 2024;

  const current = new Date().getFullYear();

  const experienceyears = current - start;

  function handlesubmit(e){
     e.preventDefault();

    axios.post("http://localhost:3000/message",{
      firstname:firstname.trim(),
      lastname:lastname.trim(),
      contact:contact.trim(),
      message:message.trim()
    }).then(
      function(response){
        alert(response.data.message);
        setFname("");
        setLname("");
        setContact("");
        setMessage("");
      }
    ).catch(function(error){
      if(error.response){
        alert(error.response.data.message);
      }
      else{
        alert("something went wrong");
      }
      console.log(error);
    })
  }
  

  return (
    <>
    <header className="navbar">
      <nav className="nav">
        <h2 className="logo">
          <a href="#">
            Sabri
          </a>
        </h2>

        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#">Home</a></li>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contacts</a></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>        
      </nav>
    </header>
   <section id="hero">
    <div className="welcome">


    <h1>👋 Hello everyone</h1>
    <h3>I am {' '}
    <span>
      <span>Developer</span>
      <span>Designer</span>
      <span>Gamer</span>
      <span>IT</span>
    </span>
  </h3>
    <p>
      Hi 👋, I am NGAMBA ISHIMWE SABRI, A Software Developer.
      I craft modern and responsive websites and applications.
    </p>

    <span className="info">
      <a href="#">
  <i style={{ color: "white" }}
 className="fa-brands fa-github"></i> Github
</a>

      <a href="#"><i style={{color:"white"}} className="fa-brands fa-linkedin"></i> Linkedin</a>
<a  href="mailto:example@gmail.com">
  <i style={{color:"white"}} className="fa-solid fa-envelope"></i> Gmail
</a>

<a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
  <i style={{color:"white"}} className="fa-brands fa-instagram"></i> Instagram
</a>

      <button style={{color:"white"}}>DOWNLOAD CV <i style={{color:"white"}} className="fas fa-download"></i></button>
    </span>

  </div>

  <div className="profile">
    <img src="./profile.png" alt="Profile picture" />
  </div>
</section>

<section id="about-me">
  <div className="desc">
    <h2>About Me</h2>

    <p className="title">
      Passionate Developer with {experienceyears}+ years of experience creating digital solutions that make a difference.
    </p>

    <p className="description">
      Hello, I'm Sabri, a student at INSTITUT DON BOSCO KABARONDO TSS with a passion for crafting innovative digital solutions from Rwanda.
      With experience in the tech industry, I’ve honed my skills in web development, UI/UX design, and IT consulting.
      <br /><br />
      My journey began with curiosity about how things work, leading me into coding and design.
      Today, I specialize in building responsive websites and applications that meet client needs and deliver exceptional user experiences.
      When I’m not coding, I enjoy gaming, exploring new technologies, and contributing to open-source projects.
    </p>
  </div>

  <div className="cards">
    <div className="card">
      <h3>2+</h3>
      <p>Projects Completed</p>
    </div>

    <div className="card">
      <h3>{experienceyears}+</h3>
      <p>Years of Experience</p>
    </div>

    <div className="card">
      <h3>100%</h3>
      <p>Client Satisfaction</p>
    </div>

    <div className="card">
      <h3>24/7</h3>
      <p>Support</p>
    </div>
  </div>
</section>

<section id="skills">
  <h2>Skills</h2> <br /> 
  <div className="container">
    <div className="skill">
      <h3>Web Development</h3>
      <p>HTML, CSS, JavaScript, Vue, React, Node.js,PHP</p>
    </div>
    <div className="skill">
      <h3>UI/UX Design</h3>
      <p>Figma</p>
    </div>
    <div className="skill">
      <h3>Database <br />Management</h3>
      <p>MySql</p>
    </div>
    <div className="skill">
      <h3>Version Control</h3>
      <p>Git, GitHub</p>
    </div>
    <div className="skill">
      <h3>Graphic Designing</h3>
      <p>Adobe Photoshop , Adobe Illustrator, Publisher</p>
    </div>
    <div className="skill">
      <h3>IT Consulting</h3>
      <p>System Analysis, Network Setup, Technical Support</p>
    </div>
    <div className="skill">
      <h3>Other</h3>
      <p>Microsoft Office, Excel, PowerPoint, Word</p>
    </div>
  </div>
</section>

<section id="projects">
  <h2>Projects</h2>
  <p>These are projects I have worked on!</p>

  <div className="project-container">
    <div className="project">
      <img
        src="./Home.png"
        alt="Portfolio Website Screenshot"
        className="project-image"
      />
      <div className="project-info">
        <h3>Sabri</h3>
        <p>
          This is my portfolio website that showcases my work. Built using
          React, CSS, JavaScript, and Express.js,Mysql Database.
        </p>
        <a
          href="https://sabriprofile.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          View Project{'      '}<i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
    <div className="project">
      <img
        src="./mat.png"
        alt="Portfolio Website Screenshot"
        className="project-image"
      />
      <div className="project-info">
        <h3>Maternalhub</h3>
        <p>
          This is A platform That help Women Who are pregnant To Track How Their Babies Are Growing Day To Day. It's Built using Node.js,React.JS,Tailwind Css. 
        </p>
        <a
          href="https://maternalhub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project {'      '}<i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>
</section>


<section id="services">
  <h2>Services</h2>
  <div className="services-container">
    <div className="service-card">
      <h3>Web Development</h3>
      <p>Building responsive websites and web applications using modern technologies.</p>
    </div>
    <div className="service-card">
      <h3>UI/UX Design</h3>
      <p>Creating intuitive and visually appealing user interfaces and experiences.</p>
    </div>
    <div className="service-card">
      <h3>Database Management</h3>
      <p>Designing and managing databases for efficient data storage and retrieval.</p>
    </div>
    <div className="service-card">
      <h3>IT Consulting</h3>
      <p>Providing expert advice on technology solutions and system optimization.</p>
    </div>
  </div>

</section>
    
   <section id="contact">
  <div className="contact-header">
    <h1 className="title">Let's Work Together</h1>
    <p className="description">
      Have a project in mind? I'd love to hear about it. Let's create something amazing together.
    </p>
  </div>

  <div className="container">
    {/* Left Side: Form */}
    <div className="form-card">
      <h1>Send Message</h1>
      <form onSubmit={handlesubmit} method="post">
        <div className="row">
          <div className="input-group">
            <label>First Name</label> <br /> <br />
            <input type="text" placeholder="John" name="firstname" value={firstname} onChange={(e)=>{
              setFname(e.target.value);
            }} required />
          </div>
          <div className="input-group">
            <label>Last Name</label> <br /> <br />
            <input type="text" placeholder="Doe" name="lastname" value={lastname} onChange={(e)=>{
              setLname(e.target.value);
            }} required />
          </div>
        </div>

        <div className="input-group">
          <label>Email or Phone</label> <br /> <br />
          <input type="text" placeholder="john@example.com or +1234567890" value={contact} onChange={(e)=>{
            setContact(e.target.value);
          }} name="contact" required />
        </div> <br />


        <div className="input-group">
          <label>Message</label> <br /> <br />
          <textarea rows="6" placeholder="Tell me about your project..." value={message} onChange={(e)=>{
            setMessage(e.target.value);
          }} name="message" required></textarea>
        </div> <br />

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>

    {/* Right Side: Contact Info */}
    <div className="info-side">
      <div className="info-card">
        <span className="icon"><i className="fas fa-envelope"></i></span>
        <div>
          <h4>Email</h4>
          <a href="mailto:ishimwengambasabri@gmail.com">ishimwengambasabri@gmail.com</a>
        </div>
      </div>

      <div className="info-card">
        <span className="icon"><i className="fas fa-phone"></i></span>
        <div>
          <h4>Phone</h4>
          <a href="tel:+250783993391">+250 783 993 391</a>
        </div>
      </div>

      <div className="info-card">
        <span className="icon"><i className="fa-solid fa-map-location-dot"></i>
</span>
        <div>
          <h4>Location</h4>
          <p>Kigali, Rwanda</p>
        </div>
      </div>

      <div className="info-card">
        <h4>Follow Me</h4> <br />
        <div className="social-links">
           <a href="https://github.com/Koda-0" title="Koda-0">Github</a>
           <a href="https://www.linkedin.com/in/ishimwengamba-sabri-8ab36737b/" title="Ishimwengamba sabri">LinkedIn</a>
           <a href="mailto:ishimwengambasabri@gmail.com" title="ishimwengambasabri@gmail.com">Gmail</a>
           <a href="https://www.instagram.com/smiler_sabri/" title="smiler_sabri">Instagram</a>
        </div>
      </div>

      <div className="info-card status-card">
        <div className="status-header">
          <span className="status-dot"></span>
          <h4>Available for Work</h4>
        </div>
        <p>I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can work together!</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

