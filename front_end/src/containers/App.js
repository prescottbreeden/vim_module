import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// lessons
import Index from '../components/Index'
import CourseOverview from '../components/CourseOverview'
import VimOverview from '../components/VimOverview'
// import SassInstall from '../components/SassInstall'
// import RunningSass from '../components/RunningSass'


// assignments
import SassIntro from '../components/assignments/sass_intro/SassIntro'


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">Vim - Vi Improved</h1>
        </header>
        <div className="app__container">
          <nav className="nav">
              <a href="/" className="nav__link">
                <div className="nav__section--item">Intro</div>
              </a>
              <a href="/1" className="nav__link">
                <div className="nav__section--item">Course Overview</div>
              </a>
              <a href="/2" className="nav__link">
                <div className="nav__section--item">Vim Overview</div>
              </a>
              <a href="/3" className="nav__link">
                <div className="nav__section--item">Installing Vim</div>
              </a>
              <a href="/4" className="nav__link">
                <div className="nav__section--item">Vim Quickstart</div>
              </a>
              <a href="/5" className="nav__link">
                <div className="nav__section--item">Thinking In Vim</div>
              </a>
              <a href="/6" className="nav__link">
                <div className="nav__section--item">Vim Help</div>
              </a>
              <a href="/7" className="nav__link">
                <div className="nav__section--item">Transformations & Substitutions</div>
              </a>
              <a href="/7" className="nav__link">
                <div className="nav__section--item">Vim Macros</div>
              </a>

          </nav>
          <main className="main">
            <Switch>
              <Route path="/"  exact render={(props) => <Index page={0} />} />
              <Route path="/1" exact render={(props) => <CourseOverview page={1} />} />
              <Route path="/2" exact render={(props) => <VimOverview page={2} />} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

              // <Route path="/2" exact render={(props) => <VimOverview page={2} />} />
              // <Route path="/3" exact render={(props) => <InstallingVim page={3} />} />
              // <Route path="/4" exact render={(props) => <VimQuickstart page={4} />} />
              // <Route path="/5" exact render={(props) => <ThinkingInVim page={5} />} />
              // <Route path="/6" exact render={(props) => <VimHelp page={6} />} />
              // <Route path="/7" exact render={(props) => <TransformSubs page={7} />} />
