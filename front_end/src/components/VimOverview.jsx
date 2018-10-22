import React from 'react'

const SassOverview = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">The Vim Koolaid</h2> 
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
          'F').
        </p>
        <h3 className="module__objectives">
          A brief history of Vi
        </h3>
        <p className="module__text">
          Since Vim is built on the backbone of Vi, to understand the origin of 
          Vim we really need to understand the origin of Vi. Vi was created in 
          1976 and, up until then, some of the most popular editors, like 
          "qed", would appear completely alien to us today.  These "line-editors" 
          had no menus, and often required typing out regex strings in order to 
          navigate around because they could only view one line at a time. Take 
          a moment to imagine writing a program where you can only read one line 
          at a time and if you wanted to move to a new location you had to write 
          out a regex string on a basic teletype before telling the computer to 
          try and compile it down to machine code. 
        </p>
        <p className="module__text">
          Vi was created on a computer that had no arrow keys and a small 
          escape key that jutted out where our Tab-key is now. Because of this, 
          when Vi was being written, the movement keys were mapped to h, j, 
          k, and l, the same movement keys used in Vim to this day. Indeed the 
          vast majority of decisions that lead to the creation of Vi were purely 
          due to the constraints of computers at the time.  Thus it is with some 
          humor to remember that even Bill Joy, the guy who created Vi, jokes 
          that "People don't know that Vi was written for a world that doesn't 
          exist anymore." It is a testament to the software that it has remained 
          one of the most celebrated programs ever written and amongst the most 
          used editors in the world to this day, over 40 years later.
        </p>

        <h3 className="module__objectives">
          Vim is fast
        </h3>
        <p className="module__text">
          As web development continues to evolve, the size of projects are becoming 
          orders of magnitude larger. One of the largest issues that VScode is 
          currently faced with is the amount of memory it consumes just to open 
          even a boiler React app without spitting out memory error messages.
        </p>
        <p className="module__text">
          Vi was written in an era when sometimes it took seconds for a computer 
          to respond to a single keystroke, so there simply wasn't the resources 
          to create a memory-expensive editor. Because of this, it was essential 
          that Vi could complete complex tasks by writing out simple commands that 
          a computer could execute without requiring continuous feedback to the 
          user.
        </p>
        <h3 className="module__objectives">
          Vim is powerful
        </h3>
        <p className="module__text">
          It would be logical to deduct that if Vim is so lightweight (using  
          just a fraction of the memory that other standard editors use) then 
          other editors must be using that memory to offer more power. Yet, the 
          irony is that even the best rated editors like VScode, Atom, Sublime, 
          do not even approach what Vim can do before we begin adding our own 
          custom plugins, macros and key mappings. For instance, every programmer 
          is well acquainted with their clipboard for copying and pasting code. 
          Vim has the equivalent of nearly 40 clipboards (registries) which can append 
          text to them at any point in time. This means that you can scan down 
          your code line by line and grab specific lines related to a function you wish to
          refactor to be independent of its current function and just continue 
          adding them to the same registry, and then paste it all at once to the new 
          code block.
          If that doesn't sound cool to you, maybe it's programmable built-in spell 
          checker will get your attention, decreasing the amount of time you 
          spend copying and pasting text back and forth between your html and 
          a word document as you spell check website content for potentially 
          embarrassing typos. Powerful features like these, if they exist, can 
          typically be buried behind endless drop-down menus or unintuitive 
          shortcut keys that are laden with combinations of modifier keys in a 
          traditional editor. With Vim, its all just a keystroke away.
        </p>
        <p className="module__text">
          Vi was written in an era when sometimes it took seconds for a computer 
          to respond to a single keystroke, so there simply wasn't the resources 
          to create a memory-expensive editor. Because of this, it was essential 
          that Vi could complete complex tasks with as few keystrokes as possible, 
          thus resulting in an editor that is not only lightweight but capable 
          of multi-tasking to such an extent that Vim is perhaps more accurately 
          described, not as a text-editor, but as an actual programming 
          language for editing text.
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
          our code).  This is why severe cases of RSI can challenge the ability 
          of continuing to pursue programming.
        </p>
        <p className="module__text">
          With a nearly infinite number of shortcuts and programmability, Vim 
          not only reduces the number of keystrokes required to complete our 
          edits, but it also removes a great deal of hand contortions we often 
          are not even really cognizant of. The majority of shortcuts employed 
          by traditional text editors are typically loaded with combinations of 
          ctrl, alt, shift, and command. Vim on the other hand allows the use of 
          modes to differentiate between when we are performing operations, typing, 
          or selecting. If we wished to delete a word, we simply type "dw", if 
          we wish to delete 2 words, we type "2dw". An entire line of code, "dd", 
          or perhaps an entire block of code, "dap". If you think about how many 
          keystrokes it would take to perform these kinds of operations in a 
          traditional editor, you can probably begin to appreciate how 
          Vim users end up performing millions (if not billions) of fewer 
          keystrokes over their careers.
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
          or Xcode, Vim is only going to get you part of the way there.
        </p>
        <p className="module__text">
          Vim also comes with a learning curve. There is a joke that if you want 
          to slow down someone new to programming, open Vim and tell them to 
          close it.  Because Vim is modal, beginners to Vim can often feel 
          overwhelmed with their initial inability to perform tasks they never 
          imagined could vary from one editor to another (such as saving or 
          quitting). Because Vim is so programmatic, learning Vim will have the 
          same kind of learning curve when learning to use any new language. 
          Remember when you learned how to write for loops for the first time? 
          I'm sure that by now you don't even think about the construction 
          of a for loop, the same will be true with Vim.
        </p>
        <h3 className="module__objectives">
          And most importantly, Vim is <em>way</em> better than Emacs &#x1F601;
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

export default SassOverview
