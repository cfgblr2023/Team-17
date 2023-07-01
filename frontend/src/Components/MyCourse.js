import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

function MyCourse({ courseName, mentorName, courseInfo, progress }) {
  return (
    <div>
      <h2>My Course</h2>
      <p>Course: {courseName}</p>
      <p>Mentor: {mentorName}</p>
      <p>Info: {courseInfo}</p>
      <LinearProgress variant="determinate" value={progress} />
      <p>Progress: {progress}%</p>
    </div>
  );
}

MyCourse.propTypes = {
  courseName: PropTypes.string.isRequired,
  mentorName: PropTypes.string.isRequired,
  courseInfo: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default MyCourse;