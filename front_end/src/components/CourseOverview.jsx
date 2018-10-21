import React from 'react'

const CourseOverview = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Course Overview</h2> 
        <h3 className="module__objectives">Course Objectives:</h3>
        <p className="module__text">
          By the end of this course, you will have a solid understanding of: 
        </p>
        <ul className="module__list">
          <li className="module__list--item u-list-circle">
            What is Vim
          </li> 
          <li className="module__list--item u-list-circle">
            What is the availability of Vim
          </li> 
          <li className="module__list--item u-list-circle">
            What are Vim modes
          </li> 
          <li className="module__list--item u-list-circle">
            Navigating with Vim
          </li> 
          <li className="module__list--item u-list-circle">
            Changing directories 
          </li> 
          <li className="module__list--item u-list-circle">
            Using the Vim help builtin
          </li> 
          <li className="module__list--item u-list-circle">
            Standard file operation equivalents (e.g. 'Save as')
          </li> 
          <li className="module__list--item u-list-circle">
            Switching between multiple files and buffers
          </li> 
          <li className="module__list--item u-list-circle">
            Creating a profile and customizing your Vim with .vimrc file
          </li> 
          <li className="module__list--item u-list-circle">
            Using search, replace, transform, and substitutions
          </li> 
          <li className="module__list--item u-list-circle">
            What are Vim registers and how to use them
          </li> 
        </ul>
      </div>    
      <div className="module__buttons">
        <a 
          href={prevPage}
          className="btn">
          Prev
        </a>
        <a 
          href={nextPage}
          className="btn">
          Next
        </a>
      </div>
    </div>
  )
}

export default CourseOverview
