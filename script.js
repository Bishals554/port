// Sample project data (replace with your own projects)
const projectsData = [
    {
      title: 'Project 1',
      description: 'Brief description of project 1.',
      imageUrl: 'project-image-1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Brief description of project 2.',
      imageUrl: 'project-image-2.jpg',
    },
    {
      title: 'Project 3',
      description: 'Brief description of project 3.',
      imageUrl: 'project-image-3.jpg',
    },
    // Add more projects as needed
  ];
  
  // Generate dynamic project cards
  const projectsContainer = document.querySelector('.projects');
  
  projectsData.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
  
    const projectImage = document.createElement('img');
    projectImage.src = project.imageUrl;
    projectImage.alt = project.title;
  
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
  
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
  
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
  
    projectsContainer.appendChild(projectCard);
  });
  