import React, { useEffect, useState } from 'react'
import { fetchJobs, updateJob, deleteJob } from './api'
import AddJobForm from './components/AddJobForm'
import JobList from './components/JobList'
import FilterBar from './components/FilterBar'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [filter, setFilter] = useState('')
  const [date, setDate] = useState('')

  const loadJobs = async () => {
    const { data } = await fetchJobs({
      status: filter || undefined,
      date: date || undefined
    })
    setJobs(data)
  }

  const handleUpdateStatus = async (id, updatedJob) => {
    await updateJob(id, updatedJob)
    loadJobs()
  }

  const handleDelete = async id => {
    await deleteJob(id)
    loadJobs()
  }

  useEffect(() => {
    loadJobs()
  }, [filter, date])

  return (
    <div className='App'>
      <h1>Student Job Tracker</h1>
      <AddJobForm onJobAdded={loadJobs} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        date={date}
        setDate={setDate}
      />
      <JobList
        jobs={jobs}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App;
