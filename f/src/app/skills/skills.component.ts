import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
  skillsData = [
    {
      category: 'Front-End',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Angular Material', icon: 'devicon-angularjs-plain colored' },
        { name: 'Ionic', icon: 'devicon-ionic-original colored' }
      ]
    },
    {
      category: 'Back-End',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original colored' },
        { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
        { name: '.NET Core', icon: 'devicon-dotnetcore-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'GraphQL', icon: 'devicon-graphql-plain colored' }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original colored' },
        { name: 'Netlify', icon: 'devicon-netlify-plain colored' },
        // Fallback for Render/Pages if no specific icon exists in user's set
        { name: 'Render', icon: 'fas fa-server text-blue-500' }, 
        { name: 'GitHub Pages', icon: 'devicon-github-original colored' },
        { name: 'Jira', icon: 'devicon-jira-plain colored' },
        { name: 'Miro', icon: 'fas fa-project-diagram text-yellow-400' },
        { name: 'ChatGPT', icon: 'fas fa-robot text-teal-400' },
        { name: 'Cursor', icon: 'fas fa-terminal text-white' },
        { name: 'Antigravity', icon: 'fas fa-rocket text-purple-500' }
      ]
    }
  ];
}
