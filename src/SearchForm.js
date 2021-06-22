import React from 'react'
import { useGlobalContext } from './context'
import searchimg from './img/search.png'
const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h1>Search HeadStories</h1>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <img src={searchimg} alt="Search"
      className="search-logo"/>
    </form>
  )
}

export default SearchForm
