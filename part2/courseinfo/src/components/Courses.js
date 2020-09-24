import React from 'react'
import Course from './Course'
import Header from './Header'

const Courses = ({ courses }) => {
  return (
    <div>
        <Header courseName='Web Development Curriculum' />
        {courses.map((course) => 
          <Course key={course.id} course={course} />
        )}
    </div>
  )
}

export default Courses