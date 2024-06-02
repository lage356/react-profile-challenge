import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="container mt-5">
      <div ref={resumeRef} className="resume bg-white p-4 rounded shadow-sm">
        <header className="text-center mb-4">
          <h1 className="mb-1">Fernando Lage</h1>
          <p className="lead mb-0">Web Developer</p>
          <p>Email: fernando.lage356@gmail.com | Phone: (123) 456-7890 | Location: Tijuana,BC</p>
        </header>
        <section className="mb-4">
          <h2 className="h4 border-bottom pb-2">Summary</h2>
          <p>
            Experienced web developer with a strong background in front-end and back-end development. Skilled in
            HTML, CSS, JavaScript, React, Node.js, and other modern web technologies. Passionate about building
            user-friendly and responsive web applications.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="h4 border-bottom pb-2">Skills</h2>
          <ul className="list-unstyled">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Redux</li>
            <li>Node.js, Express</li>
            <li>MongoDB, SQL</li>
            <li>Git, GitHub</li>
            <li>Responsive Web Design</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="h4 border-bottom pb-2">Experience</h2>
          <div className="mb-3">
            <h3 className="h5">Senior Web Developer</h3>
            <p className="mb-1">ABC Company, San Francisco, CA</p>
            <p className="text-muted">June 2019 - Present</p>
            <ul className="list-unstyled">
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Led a team of 5 developers to create a responsive e-commerce website.</li>
              <li>Implemented RESTful APIs and integrated third-party services.</li>
            </ul>
          </div>
          <div>
            <h3 className="h5">Web Developer</h3>
            <p className="mb-1">XYZ Company, San Francisco, CA</p>
            <p className="text-muted">January 2017 - May 2019</p>
            <ul className="list-unstyled">
              <li>Worked on front-end development using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with designers to create user-friendly interfaces.</li>
              <li>Optimized web applications for maximum speed and scalability.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="h4 border-bottom pb-2">Education</h2>
          <div>
            <h3 className="h5">Electronics Engineer</h3>
            <p className="mb-1">Universidad Autonoma de Baja California, Tijuana</p>
            <p className="text-muted">Graduated: May 2016</p>
          </div>
        </section>
      </div>
      <button className="btn btn-primary mt-4" onClick={handlePrint}>Download Resume</button>
    </div>
  );
};

export default Resume;
