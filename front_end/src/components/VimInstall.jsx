import React from 'react'
import image from './vim_success.png'

const SassInstall = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Vim Install</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            How to install and run Vim
          </li> 
        </ul>
        <h3 className="module__objectives">
          Installing Vim Globally 
        </h3>
        <p className="module__text">
          First, check if you have Vim already installed by opening a terminal 
          and executing:
        </p>
        <p className="module__terminal-code">
          $ vim 
        </p>
        <p className="module__text">
          If vim is installed you should see a screen that looks like this: 
        </p>
        <img 
          src={image}
          className="module__img" />
        <p className="module__text">
          To exit, type:
        </p>
        <p className="module__terminal-code">
          :q
        </p>
        <p className="module__text">
          and press 'Enter' and continue to next section.
        </p>

        <h3 className="module__objectives">
          Linux Install
        </h3>
        <h3 className="module__objectives">
          Mac OS X Install (Brew)
        </h3>
        <h3 className="module__objectives">
          Windwos Install (Chocolatey)
        </h3>
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

export default SassInstall
