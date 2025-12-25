import React from 'react'
import { useParams } from 'react-router-dom'

const ResumeBuilder = () => {
    const {resumeId} = useParams();
  return (
    <div className='w-full h-screen flex items-center justify-center bg-red-500'>{resumeId}</div>
  )
}

export default ResumeBuilder