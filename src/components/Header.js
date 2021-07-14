import React from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <h3 className='header_title'>Courses</h3>
        <Button
          className='header_explore_btn'
          variant='contained'
          color='primary'
          size='medium'
          style={{
            margin: '5px',
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Explore
        </Button>
        <div className='header_search_box'>
          <input type='text' placeholder='Search' />
          <Button className='search_btn'>
            <SearchIcon />
          </Button>
        </div>
      </div>
      <div className='header_right'>
        <a href=''>
          <h3>For Enterprise</h3>
        </a>
        <a href=''>
          <h3>For Students</h3>
        </a>
        <div className="header_right_end">
        <a href=''>
          <h3 className='login_text'>Log In</h3>
        </a>
        <Button
          className='header_explore_btn'
          variant='contained'
          color='primary'
          size='medium'
          style={{
            margin: '5px',
          }}
        >
          Join for Free
        </Button>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
