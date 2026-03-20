import React from 'react'
import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const params = useParams();
  return (
    <div className="flex capitalize justify-center whitespace-nowrap p-10 text-5xl">
        <h1> {params.courseId} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetails