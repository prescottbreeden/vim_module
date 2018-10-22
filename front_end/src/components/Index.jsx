import React from 'react'

const Index = (props) => {
  const page = 0
  const nextPage = page+1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Introduction</h2> 
        <h3 className="module__objectives">Course Description:</h3>
        <p className="module__text">
          Crash course on how to get up and running with the most powerful and 
          expressive text editor ever created: Vim! (No, not Emacs...) 
          This micro-course will teach you everything you need to become 
          comfortable with Vim and to begin your journey towards becoming a Vim 
          power-user.
        </p>
        <h4 className="module__sub-title">
          Here is a sampling of some of the questions we will address:
        </h4>
        <ul className="module__list">
          <li className="module__list--item u-list-circle">
            What is Vim and what are its pros and cons?
          </li> 
          <li className="module__list--item u-list-circle">
            What are the modes of Vim? 
          </li> 
          <li className="module__list--item u-list-circle">
            What are the various ways to navigate in Vim? 
          </li> 
          <li className="module__list--item u-list-circle">
            What is the "Vim-way" of thinking?
          </li> 
          <li className="module__list--item u-list-circle">
            How do you customize Vim with a .vimrc file? 
          </li> 
          <li className="module__list--item u-list-circle">
            How can you add plugins to Vim? 
          </li> 
          <li className="module__list--item u-list-circle">
            How do you create macros with Vim? 
          </li> 
        </ul>
        <h4 className="module__sub-title">
          Prerequisites:
        </h4>
        <ul className="module__list">
          <li className="module__list--item u-list-circle">
            Comfort using the command line
          </li> 
          <li className="module__list--item u-list-circle">
            A desire to be awesome (optional)  
          </li> 
        </ul>
      </div>
      <div className="module__buttons">
        <a 
          href={nextPage}
          className="btn u-center u-width-50">
          Start Course!
        </a>
      </div>
    </div>
  )
}

export default Index
