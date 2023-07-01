import React from 'react';
import '../Components/RecommendedCourses.css';
import course1 from '../Images/cource1.png';
import course2 from '../Images/cource2.webp';
import course3 from '../Images/cource3.jpg';

// Static data
const coursesData = [
  {
    image: course1,
    name: 'Course 1',
    duration: '3 months',
    skills: 'React, JavaScript',
  },
  {
    image: course2,
    name: 'Course 1',
    duration: '3 months',
    skills: 'React, JavaScript',
  },
  {
    image: course3,
    name: 'Course 1',
    duration: '3 months',
    skills: 'React, JavaScript',
  },
  {
    image: course2,
    name: 'Course 1',
    duration: '3 months',
    skills: 'React, JavaScript',
  },
];

function RecommendedCourses() {
  return (
    <div>
      {coursesData.map((course, index) => (
        <div key={index}>
          <img className = "imgg" src={course.image} alt={`Course ${index + 1}`} />
          <h3>{course.name}</h3>
          <p>Duration: {course.duration}</p>
          <p>Skills: {course.skills}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommendedCourses;