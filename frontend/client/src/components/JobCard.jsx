import React from 'react'

const JobCard = ({ job, onUpdateStatus, onDelete }) => (
  <div className='job-card'>
    <h3>{job.company}</h3>
    <p>
      <strong>Role:</strong> {job.role}
    </p>
    <p>
      <strong>Status:</strong> {job.status}
    </p>
    <p>
      <strong>Date:</strong> {job.date}
    </p>
    {job.link && (
      <a href={job.link} target='_blank' rel='noreferrer'>
        Job Link
      </a>
    )}
    <select
      value={job.status}
      onChange={e => onUpdateStatus(job._id, { status: e.target.value })}
    >
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
    <button onClick={() => onDelete(job._id)}>Delete</button>
  </div>
)

export default JobCard;
