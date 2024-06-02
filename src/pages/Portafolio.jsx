import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather forecasting app with real-time data.',
    imageUrl: './weather.jpg',
  },
  {
    title: 'Task Manager',
    description: 'An app to manage daily tasks and to-do lists.',
    imageUrl: './task.jpg',
  },
  {
    title: 'E-commerce Store',
    description: 'A full-featured e-commerce store with payment integration.',
    imageUrl: './ecommerce.jpg',
  },
  {
    title: 'Fitness Tracker',
    description: 'An app to track workouts and fitness goals.',
    imageUrl: './fitness.jpg',
  },
];

export default function Portafolio() {
  return (
    <div className="container">
      <h1 className="text-center my-4">My Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100">
              <div className="card-img-top" style={{ height: '200px', overflow: 'hidden' }}>
                <img src={project.imageUrl} alt={project.title} className="w-100 h-100 object-fit-cover" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
