import React from 'react'

const SassOverview = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Sass Overview</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            What is Vim?
          </li> 
          <li className="module__list--item">
            Brief history of Vim
          </li> 
          <li className="module__list--item">
            What is the difference between Vim and Vi?
          </li> 
          <li className="module__list--item">
            What makes Vim special?
          </li> 
        </ul>
        <h3 className="module__objectives">
          What is Vim?
        </h3>
        <p className="module__text">
          Vim stands for Vi IMproved. Originally it used to be Vi IMitation, 
          but there are so many improvements that a name change was appropriate. 
          Vim is a text editor which includes almost all the commands from the 
          Unix program Vi but added numerous new ones as well.  All commands can 
          be given with the keyboard which has the advantage that you never need 
          to move your fingers off the 'home' position (index fingers on 'J' and 
          'F'). This is the largest reason that Vim has been listed as one of 
          the best text editors available for any system by non-Vim users for 
          over 15 years, and the greatest text editor ever created by actual Vim 
          users.
        </p>
        <h3 className="module__objectives">
          Vim is fast
        </h3>
        <p className="module__text">
          As web development continues to evolve, the size of projects are becoming 
          orders of magnitude larger. One of the largest issues that VScode is 
          currently faced with is the amount of memory it consumes just to open 
          even an boiler React app without spawning numerous memory error messages.
        </p>
        <p className="module__text">
          Vi was written in an era when sometimes it took seconds for a computer 
          to respond to a single keystroke, so there simply wasn't the resources 
          to create a memory-expensive editor. Because of this, it was essential 
          that Vi could complete complex tasks with just a single keystroke, 
          thus resulting in an editor that is not only lightweight but capable 
          of performing at lightning speeds.
        </p>
        <h3 className="module__objectives">
          Vim is powerful
        </h3>
        <p className="module__text">
          It would be logical to deduct that if Vim is so lightweight that it 
          uses just a fraction of the memory that other common editors use, then 
          other editors must be using that memory to offer more power. Yet, the 
          irony is that even the best rated editors like VScode, Atom, Sublime, 
          do not even approach what Vim can do before we begin adding our own 
          custom plugins, macros and key mappings.
        </p>
        <p className="module__text">
          Vi was written in an era when sometimes it took seconds for a computer 
          to respond to a single keystroke, so there simply wasn't the resources 
          to create a memory-expensive editor. Because of this, it was essential 
          that Vi could complete complex tasks with just a single keystroke, 
          thus resulting in an editor that is not only lightweight but capable 
          of performing at lightning speeds.
        </p>
        <h3 className="module__objectives">
          Vim is healthy
        </h3>
        <p className="module__text">
          One of the most traumatic injuries a programmer can develop is RSI 
          (repetitive strain injury). Akin to tendinitis for a concert pianist, 
          RSI is so damaging to a programmer that even in minor cases it can impact 
          the ability for us to code (either because we are forced to take additional 
          breaks or because the pain can interfere with our ability to think about 
          our code).  This is why severe cases of RSI can quite literally end 
          a professional career in programming.
        </p>
        <p className="module__text">
          With a nearly infinite number of shortcuts and programmability, Vim 
          not only reduces the number of keystrokes required to complete our 
          edits, but it also removes almost all of the horrifically awkward 
          stretches that accompany most editors (e.g. VScode's ctrl+shift+e to 
          enter the file browser that forces the hand to contort over your 
          pinky). Because nearly all standard editor functions can be completed 
          in Vim with just 1-2 keystrokes, Vim users end up performing millions 
          (if not billions) of fewer keystrokes over their careers.
        </p>
        <p className="module__text">
          If I sound biased in this manner, it is because I am, as I developed 
          RSI early on in my programming career.  My cure?  I learned Vim.
        </p>
        <h3 className="module__objectives">
          Vim is everywhere
        </h3>
        <p className="module__text">
          Vim runs on all Unix platforms as well as all Windows platforms that 
          are XP or later. In most cases you will find that it is already installed 
          just waiting to be used. Because of this, Vim users often have their 
          personal settings stored on GitHub and so whether you are working on 
          a new machine or you are using a SSH to interact with server files 
          remotely, all you have to do is perform a simple git clone from the 
          machine's home directory and without a single extra command Vim will 
          automatically import all of your settings and preferences.
        </p>
        <h3 className="module__objectives">
          Does Vim have any cons?
        </h3>
        <p className="module__text">
          Vim is not an IDE, so even with the endless customization options and 
          plugins available, if you have to have a true IDE like Visual Studio 
          or Xcode, Vim is only going to get you part of the way there. Vim is 
          purely a text editor.
        </p>
        <p className="module__text">
          Vim also comes with a learning curve. There is a joke that if you want 
          to slow down someone new to programming, open Vim and tell them to 
          close it.  Because Vim uses various modes, beginners to Vim can often 
          feel overwhelmed with their initial inability to perform tasks they 
          never imagined could vary from one editor to another (such as saving 
          or quitting).
        </p>
        <h3 className="module__objectives">
          Roadmap 
        </h3>
        <p className="module__text">
          This course will take you from a true Vim beginner to a place where 
          you are comfortable using Vim either as your main editor or as needed 
          when working with remote systems. The primary focus is to teach you 
          how to think in Vim so you can continue to grow and eventually become 
          a Vim power-user with time.
        </p>
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

export default SassOverview
