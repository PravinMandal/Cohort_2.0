import React from 'react'
import Allcourses from "./Allcourses";

const Section2 = (props) => {
  // console.log(props.courseData)
  return (
    <div>
      Section2
      <Allcourses courseData = {props.courseData}/>
    </div>
  )
}

export default Section2;