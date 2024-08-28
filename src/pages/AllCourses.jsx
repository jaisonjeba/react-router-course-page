import React from 'react';
import course from "../assets/All Course 1.png"

const AllCourses = () => {
  return (
    <div>
      <h2>All Courses</h2>
      <p>This is the content for All Courses.</p>
      <div style={{display:'flex'}}>
      <div style={{display:'flex',flexDirection:'column'}}><img src={course} alt="" />
      <p>Python Objects</p>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}><img src="src\assets\All Course 1.png" alt="" />
      <p>Machine Learning</p>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}><img src="src\assets\All Course 2.png" alt="" />
      <p>Unlocking the power of NLP</p>
      </div>
      </div>
    </div>
  );
};

export default AllCourses;
