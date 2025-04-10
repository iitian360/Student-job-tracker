import React from 'react'

const FilterBar = ({ filter, setFilter, date, setDate }) => (
  <div className='filter-bar'>
    <select value={filter} onChange={e => setFilter(e.target.value)}>
      <option value=''>All</option>
      <option value='Applied'>Applied</option>
      <option value='Interview'>Interview</option>
      <option value='Offer'>Offer</option>
      <option value='Rejected'>Rejected</option>
    </select>
    <input type='date' value={date} onChange={e => setDate(e.target.value)} />
  </div>
)

export default FilterBar;
