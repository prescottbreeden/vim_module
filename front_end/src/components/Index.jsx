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
          expressive text editor ever created: Vim! This micro-course will teach 
          you everything you need to become a Vim power-user.
        </p>
        <h4 className="module__sub-title">
          Here is a sampling of some of the questions we will address:
        </h4>
        <ul className="module__list">
          <li className="module__list--item">
            What is Sass and what are its pros and cons?
          </li> 
          <li className="module__list--item">
            How do we modularize and make a component-based CSS structure?
          </li> 
          <li className="module__list--item">
            How can we use utility classes to <em>'DRY'</em> up our CSS?
          </li> 
          <li className="module__list--item">
            How does Sass create variables, mixins, and functions?
          </li> 
          <li className="module__list--item">
            How can we use Sass inheritance with the Extend decorator?
          </li> 
          <li className="module__list--item">
            How can Sass help create reusable media-query functions?
          </li> 
          <li className="module__list--item">
            How can we implement the use of scripting in our dev workflow?
          </li> 
        </ul>
        <h4 className="module__sub-title">
          Prerequisites:
        </h4>
        <ul className="module__list">
          <li className="module__list--item">
            Basic understanding of CSS and specificity
          </li> 
          <li className="module__list--item">
            Comfort using the command line
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
