import React from 'react';
import './Projects.css';
import powerBiImage from './images/powerBi.png';
import ForestDrynessIndexImage from './images/ForestDrynessIndex.jpg';
import HotelRecommendationSystemImage from './images/HotelRecommendationSystem.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Forest Dryness Index Using Sentinel and Landsat Data',
      description: 'AForest Dryness Index Using Sentinel and Landsat Data is a comprehensive project that utilizes remote sensing data to analyze and monitor forest dryness levels. The project employs advanced algorithms and machine learning techniques to process satellite imagery, providing valuable insights into forest health and climate change impacts.',
      technologies: ['Remote Sensing', 'Python', 'GEE', 'Machine Learning'],
      imageUrl: ForestDrynessIndexImage,
      githubUrl: 'https://github.com/username/project1',
      liveUrl: 'https://project1demo.com',
    },
    {
      id: 2,
      title: 'Banking Transactions Analysis and Insights Using Power BI',
      description: 'This project focuses on analyzing bank transactions using Power BI to gain insights into customer spendingpatterns, transaction trends, fraud detection, and financial performance.',
      technologies: ['power Bi','Data Analysis', 'Data Visualization'],
      imageUrl: powerBiImage,
      githubUrl: 'https://github.com/username/project2',
      liveUrl: 'images/ForestDrynessIndex.jpg',
    },
    {
      id: 3,
      title: 'Hotel Recommendation System',
      description: 'A hotel recommendation system aims to predict which hotel a user is most likely to choose from among all hotels. So a recommendation system is required which will help the user to book the best hotel out of all the other hotels',
      technologies: ['Machine Learning', 'Python', 'Data Science'],
      imageUrl: HotelRecommendationSystemImage,
      githubUrl: 'https://github.com/username/project3',
      liveUrl: 'https://project3demo.com',   
    },
    {
      id: 4,
      title: 'Cryptocurrency Price Trends and Forecasting: Bitcoin vs. USDT',
      description: 'This study analyzes Bitcoin and USDT price trends using ARIMA, T-tests, and LSTM models. It assesses stationarity, forecasts future prices, and evaluates stability, highlighting Bitcoin\'s volatility and USDT’s consistency over time.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/images/project4.jpg',
      githubUrl: 'http://github.com/username/project4',
      liveUrl: 'https://project4demo.com',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Recent Work & Contributions</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl &&
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                  }
                  {project.liveUrl &&
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;