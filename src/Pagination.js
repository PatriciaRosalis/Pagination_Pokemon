import React from 'react';
import './Pagination.css'

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="container">
      <h2>Pokemon List</h2>
      <div className="button-container">
        { goToPrevPage && <button onClick={ goToPrevPage }> Previous </button> }
        { goToNextPage && <button onClick={ goToNextPage }> Next </button> }
      </div>
    </div>
  )
}
