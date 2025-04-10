import React, { useState } from 'react';
import { addJob } from '../api';

const AddJobForm = ({ onJobAdded }) => {
  const [form, setForm] = useState({ company: '', role: '', status: 'Applied', date: '', link: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(form);
    onJobAdded();
    setForm({ company: '', role: '', status: 'Applied', date: '', link: '' });
  };

 return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="link" placeholder="Link" value={form.link} onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJobForm;