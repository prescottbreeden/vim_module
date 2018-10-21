import React from 'react'

const LiveServer = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Using Live-Server</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            What is the benefit of serving projects versus opening them locally
            with the browser
          </li> 
          <li className="module__list--item">
            How to install and 'live-server' from npm
          </li> 
        </ul>
        <h3 className="module__objectives">
          Why should we serve our files?
        </h3>
        <p className="module__text">
          When dealing with static content (i.e. html, css, js), there is no
          explicit necessity to use a server since there is no additional
          rendering logic needed beyond a browser (such as template logic or
          JavaScript/TypeScript compiling). However, necessity rarely
          dictates what is good-practice and serving your files also means
          that you can see notifications in your terminal when changes are
          detected in your code (very useful to tell if for instance your
          compiler stops running during development).
        </p>
        <h3 className="module__objectives">
          Installing 'npm' 
        </h3>
        <p className="module__text">
          Verify that Node.js is installed by executing:
        </p>
        <p className="module__terminal-code">
          $ npm
        </p>
        <p className="module__text">
          If you do not see a help menu appear then visit <a 
            href="https://nodejs.org">nodejs.org</a> and download either the
          latest version or the LTS for your operating system.
        </p>
        <h3 className="module__objectives">
          Installing 'live-server'
        </h3>
        <p className="module__text">
          Once you have npm installed, execute:
        </p>
        <p className="module__terminal-code">
          $ npm install -g live-server
        </p>
        <p className="module__text">
        </p>
        <h3 className="module__objectives">
          Running live-server
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Navigate to a directory that contains an html file and execute:
          </li> 
          <p className="module__terminal-code">
            $ live-server
          </p>
          <li className="module__list--item">
            If a browser window does not appear automatically, visit
            'localhost:8080' in a browser
          </li> 
          <li className="module__list--item">
            While the server is running, edit a file and save it, you should see
            a notification saying that changes were detected
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



export default LiveServer
