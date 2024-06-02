import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <img 
              src="./profile.jpeg" 
              alt="Profile" 
              className="rounded-circle mb-3" 
              style={{ width: '150px', height: '150px' }}
            />
            <h1 className="card-title">Fernando Lage's Website</h1>
            <p className="card-text">
              Welcome to Fernando Lage's personal website. Here you will find information about his projects, 
              interests, and professional background. Stay tuned for updates and feel free to reach out with any questions.
            </p>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p className="card-text">
              Hello! I'm Fernando Lage, a passionate developer with a keen interest in web technologies and software development. 
              I have worked on various projects that span different domains and technologies. In my free time, I enjoy reading, 
              hiking, and exploring new tech trends. Feel free to browse through my website to learn more about my work and interests.
            </p>
          </div>
        </div>
      </div>
    );
  }
