import React from 'react';


import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>

        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>BookSite.Com.BD </h2><br />
          <h2 className='header-title text-capitalize'>Find A Book !</h2><br />
          <h3 className=''>Remon Rifat!</h3><br />
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header