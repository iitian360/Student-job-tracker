import axios from 'axios'

const API = axios.create({ baseURL: 'https://localhost:5000/api/jobs' })

export const fetchJobs = () => API.get('/')
export const addJob = newJob => API.post('/', newJob)
export const updateJob = (id, updatedJob) => API.put(`/${id}`, updatedJob)
export const deleteJob = id => API.delete(`/${id}`)

