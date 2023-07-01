import React from 'react'
import MenteeNav from './MenteeNav';
import MyCourse from './MyCourse';
import RecommendedCourses from './RecommendedCourses';

function Mentee() {

    const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    // Fetch course information from backend here
    fetch('/api/course-info')
      .then(response => response.json())
      .then(data => setCourseInfo(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <MenteeNav />
        {courseInfo ? (
        <MyCourse progress={courseInfo.progress} />
      ) : (
        <RecommendedCourses />
      )}
    </div>
  )
}

export default Mentee