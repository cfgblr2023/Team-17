import React, { useEffect, useState } from "react";
import "../Components/RecommendedCourses.css";
import course1 from "../Images/cource1.png";
import course2 from "../Images/cource2.webp";
import course3 from "../Images/cource3.jpg";
import api from "../http";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";

// Static data
const coursesData = [
  {
    image: course1,
    name: "Course 1",
    duration: "3 months",
    skills: "React, JavaScript",
  },
  {
    image: course2,
    name: "Course 1",
    duration: "3 months",
    skills: "React, JavaScript",
  },
  {
    image: course3,
    name: "Course 1",
    duration: "3 months",
    skills: "React, JavaScript",
  },
  {
    image: course2,
    name: "Course 1",
    duration: "3 months",
    skills: "React, JavaScript",
  },
];

function RecommendedCourses() {
  const navigate = useNavigate();
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      console.log("No User");
      navigate("/");
    }

    try {
      user = JSON.parse(user).user;
    } catch (error) {
      console.log("Invalid user data in localStorage");
      navigate("/");
    }
    if (!user.institutionStudying) {
      console.log("No mentee");
      navigate("/");
    }

    api
      .get(`/mentee/course/${user.id}`)
      .then((res) => {
        localStorage.setItem("recommended-courses", res.data);
        setRecommendedCourses(res.data.recommendCourses);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        {recommendedCourses.map((course, index) => (
          <div key={index} style={{ flex: "50%" }}>
            <img
              className="imgg"
              src={
                coursesData[Math.floor(Math.random() * coursesData.length)]
                  .image
              }
              // style={{ maxWidth: "300px" }}
              alt={`Course ${index + 1}`}
            />
            <p>{course.name}</p>
            <p>Duration: {course.duration}</p>
            <p>
              {" "}
              {`Skills: ${course.skills.map((skill) => skill.name).join(", ")}`}
            </p>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default RecommendedCourses;
