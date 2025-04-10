import React from 'react'
import JobCard from './JobCard'

const JobList = ({ jobs, onUpdateStatus, onDelete }) => (
  <div className='job-list'>
    {jobs.map(job => (
      <JobCard
        key={job._id}
        job={job}
        onUpdateStatus={onUpdateStatus}
        onDelete={onDelete}
      />
    ))}
  </div>
)

export default JobList
