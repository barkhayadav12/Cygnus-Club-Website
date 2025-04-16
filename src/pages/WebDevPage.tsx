import React from 'react';

const WebDevPage = () => {
  return (
    <div
      className="pt-24 pb-16 px-4 md:px-8 flex flex-col items-center gap-10 bg-white min-h-screen"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      <div className="bg-white border border-gray-300 shadow-md p-6 md:p-10 max-w-3xl w-full text-black rounded-xl">
        <p>-Abhinav Patra (2nd Year, CSE)</p>
        <br />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 leading-snug max-w-xl">
          So You’re Trying to Make Web Development Work? Here’s Where You Start.
        </h1>

        <p className="mb-4">
          There is an immense amount of noise regarding web development courses. Anyone throwing terms at you —
          “full-stack,” “React,” “back-end,” “Next.js,” “APIs,” and on and on. Either way, you’re guaranteed to feel
          overwhelmed if you’re someone who is more of a newbie. Been there.
        </p>

        <p className="mb-4">
          This blog is not for people looking to master everything within 30 days; it is for beginners — especially
          students — willing to learn the basics properly for at least a month or two more.
        </p>

        <p className="mb-6">
          Here is what worked for me. Do with it what you will. But don’t sit around “researching roadmaps” forever.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 1: Learn HTML, CSS, and JavaScript (The Core)</h2>
        <p className="mb-4">
          Before you leap excitedly into React, MERN, backend, or any newly-anointed shiny thing, you must first have a
          proper grounding in the fundamentals.
        </p>

        <h3 className="font-semibold mb-2">Core Technology Stack That Comes First</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>HTML</strong> — The structure. The skeleton.</li>
          <li><strong>CSS</strong> — The style. The look-and-feel.</li>
          <li><strong>JavaScript</strong> — The behavior. The interactivity.</li>
        </ul>

        <p className="mb-4">
          And once you go advanced you realize that this is not really that true... but eh, close enough.
        </p>

        <p className="mb-4">
          Those three are your building blocks. And, no, they are not any “too basic” to matter. You should not even
          think about frameworks if you can’t build a static homepage with confidence using these three.
        </p>

        <p className="mb-4">
          I gave myself a period of about 1.5 months to cover the basics. More than feasible, even with college and
          classes, if you just actually sit down and code.
        </p>

        <p className="mb-4 font-medium italic">
          My target was simple: “Can I build a basic visual clone of Amazon’s homepage using plain HTML, CSS, and a bit
          of JS?”
        </p>

        <p className="mb-4">
          If yes, proceed. If no, keep building small projects and keep practicing. This is your signal of real
          progress, not finishing an intense 10-hour YouTube tutorial.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 2: Use AI Intelligently (Not Like a Newbie)</h2>
        <p className="mb-4">
          This is one of my secret weapons: ChatGPT, Claude, or Gemini.
          <br />
          But wait, not for coding.
        </p>
        <p className="mb-4">
          I tossed in things to these AIs to explain to me in the simplest of terms — like:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>“Explain Flexbox to me like I’m a ten-year-old.”</li>
          <li>“Break down JavaScript functions for a total novice.”</li>
        </ul>

        <p className="mb-4">
          It changed everything. Imagine having a private tutor anytime you needed one, practically.
        </p>

        <p className="mb-4">
          But for coding, do not do this. If you copy-paste code from ChatGPT, you destroy your own learning. You will
          never get to know why it works; and that is far more important than getting some output on a screen.
        </p>

        <p className="mb-4">
          So ask questions. Understand what you just read. Then write the code by yourself.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 3: Be Warned of Tutorial Hell</h2>
        <p className="mb-4">
          This trap, too, sees many people succumb. You watch 50 tutorials; you feel smart. But when it’s time to sit
          down and actually code something on your own, it suddenly goes blank.
        </p>

        <p className="mb-4 font-bold italic">Welcome to tutorial hell.</p>

        <h3 className="font-semibold mb-2">Solution:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Watch just enough to understand the concept.</li>
          <li>Then build something. Anything.</li>
          <li>Break. Fix. Repeat.</li>
        </ul>

        <p className="mb-4">
          The moment you shut the screen and start building in your own right is the moment that real learning starts.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 4: Begin with MERN or Whatever Stack That Just Feels Right</h2>

        <p className="mb-4 font-medium">MERN stack usually does wonders:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>MongoDB</strong> (database)</li>
          <li><strong>Express.js</strong> (server framework)</li>
          <li><strong>React</strong> (frontend)</li>
          <li><strong>Node.js</strong> (runtime)</li>
        </ul>

        <p className="mb-4">
          It is suitable for beginners, extremely trendy, and will give you a good bit of information on how full-stack
          applications function.
        </p>

        <p className="mb-4">If you’re not cool with MERN, here are some valid alternatives:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Next.js — React-based but more modern. Recommended.</li>
          <li>Spring Boot — Great if you’re into Java.</li>
          <li>Golang — Faster performance.</li>
          <li>Ruby or PHP — Old-school but simple and still relevant.</li>
          <li>Python — Multipurpose language.</li>
        </ul>

        <p className="mb-4 font-semibold">
          Pick the one that fits your vibe — but the golden rule? Build while learning.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 5: Follow These Three Creators Blindly (I Did)</h2>

        <p className="mb-2">
          Not all tutorials are made equal. Some just make you feel like you’ve learned something. These creators?
          They actually teach you to think like a developer:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li><strong>Harkirat Singh</strong> — Assignments that push you to build. No spoon-feeding. Just work.</li>
          <li><strong>Hitesh Choudhary</strong> — Breaks complex stuff into the simplest explanations.</li>
          <li><strong>Shreyians Coding School</strong> — Solid beginner-level content.</li>
        </ul>

        <p className="mb-4 italic">
          Follow them. Do their playlists. Trust the process. Even if it feels hard or confusing — keep going.
        </p>

        <h2 className="text-xl font-bold mb-2">TL;DR (But Don’t Be Lazy — Read the Whole Thing)</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Start with HTML, CSS, JS — nothing more.</li>
          <li>Give yourself 1.5 months (yes, even with college).</li>
          <li>Goal: Build a basic clone yourself, no tutorials.</li>
          <li>Use ChatGPT or Gemini for explanations, not for code.</li>
          <li>Less tutorials, more building.</li>
          <li>Once you’re ready: MERN, Next.js, or whatever stack fits you.</li>
          <li>Follow Harkirat, Hitesh, Shreyians — total goldmine of content.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Lastly</h2>
        <p className="mb-4">
          You don’t need a perfect roadmap. What you do need is momentum. The more you build, the faster everything
          starts making sense. The first few weeks? Pure pain. That’s normal.
        </p>

        <p className="mb-4 italic">
          But stay consistent, and one day you’ll think: “Are... I can actually build this stuff, and explain it sbko.”
        </p>

        <p className="font-bold mb-4">Build. Break. Learn. Repeat.</p>

        <p className="mb-4">
          …and yeah. For any interest or just to have a conversation about Web3, Solidity, Ethereum, app dev, or smart
          contracts — get in touch with me. <br />
          Otherwise, of course, don’t.
        </p>

        <p className="text-sm text-zinc-600">— Abhinav Patra</p>
        <a
          href="https://github.com/abhinavpatra"
          className="underline text-sm hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/abhinavpatra
        </a>
      </div>
      <div className="bg-white border border-gray-300 shadow-md p-6 md:p-10 max-w-3xl w-full mt-12 text-black rounded-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 leading-snug">
          ⚡ Electronics for People Who’ve Never Touched a Breadboard
        </h1>
        <p className="mb-6 italic">— Abhigyan Yadav</p>

        <p className="mb-4">
          Look, when you’re new to electronics, it’s easy to feel overwhelmed. You hear people casually dropping terms like “resistors,” “microcontrollers,” or “sensors,” and you’re just sitting there wondering if the LED is even supposed to blink like that.
        </p>

        <p className="mb-4">
          We have all been there, trust me. This blog is not for people trying to become robotics experts in 10 days. It’s for beginners — people who want to genuinely understand how things work at a basic level and are willing to give it a few weeks of focused effort.
        </p>
        <p className="mb-4">
          I'II break down what helped me understand hardware from scratch -
          expecially the basic electonic components we'll actually be using in our
          upcoming workshop.
        </p>
        <h1 className='mb-4 font-bold'>Here's what worked for me.</h1>
        <h2 className="text-xl font-bold mb-2">⚙️ Step 1: Touch the Components — Don’t Just Read About Them</h2>
        <p className='mb-4'>
          Reading about a resistor and actually using one are two very different things. Let’s fix that.
          Let’s start with the basics — the components you’ll actually use in your first few circuits.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Resistors</strong> –  They control how much current flows through your circuit.
            Think of them as traffic cops for electrons — slowing things down so stuff doesn’t burn out.
          </li>
          <li><strong>Capacitors</strong> - Little charge buckets. They store energy and release it when needed.
            You’ll use them </li>
          <li><strong>LEDs</strong> – They light up when current flows — your first reward in electronics.
            Use them to signal, alert, or just for aesthetics. Blinking them is basically the “Hello World” of hardware. </li>
          <li><strong>Diodes</strong> –They only allow current in one direction — kinda like a one-way street for electricity.
            Essential for protecting components from current flowing the wrong way
          </li>
          <li><strong>Transistors</strong> – They sound scary at first, but they’re just electronic switches or amplifiers.
            A small current at one end lets a bigger current flow through the other two.
            Imagine pressing a tiny button that activates a powerful motor — that’s what a transistor does.
          </li>
          <li><strong>Switches & Buttons</strong> – These are your inputs.
            You press them, and your circuit reacts.
            The first time you press a button and watch your code respond in real time — that’s when it all starts feeling real
          </li>
          <li><strong>Motors</strong> – Convert current into movement. One of the first fun projects is just spinning a fan.
          </li>
          <li><strong>Potentiometers</strong> –  A knob that controls voltage — twist it, and your circuit reacts.
            Perfect for adjusting brightness, volume, or feeding variable input into your Arduino.
          </li>
        </ul>
        <p className='mb-4'>
          Don’t memorize their definitions. Build with them. Break them. Google why.
          Then rebuild.

        </p>
        <h2 className="text-xl font-bold mb-2">🔌 Step 2: Build This First — An LED that Blinks When You Press a Button</h2>
        <p className='mb-4'>
          I know. It sounds simple. But this is your “Hello World” of hardware.
          <br />
          Here's what you’ll learn from it:

        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Wiring on a breadboard</li>
          <li>How a button actually works</li>
          <li>Pull-down resistor concept</li>
          <li>DigitalWrite, digitalRead basics</li>
          <li>That feeling of <i>"Ohhh I made it do something!"</i></li>
          <li>Modify it — blink two LEDs, add delay, react to button hold time</li>
        </ul>
        <p className='mb-4'>Once this works - try modifying it:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Blink two LEDs</li>
          <li>Add a delay</li>
          <li>Make the LED blink faster the longer you press the button
            Just play around.</li>
        </ul>
        <p className='mb-4'>
          This will teach you more than 3 hours of theoretical YouTube.
        </p>

        <h2 className="text-xl font-bold mb-2">🔋 Step 3: Learn What a Microcontroller Actually Is</h2>
        <p className="mb-4">
          Before you start using Arduino, let’s make sure you know what’s really going on.
          <br />
          <br />
          Think of a microcontroller like the brain of your project. It’s a tiny computer that tells everything else what to do. But how does it know what to do?
          <br />
          <br />
          To answer that, you can ask ChatGPT:<i> “How does an Arduino know what to do?”</i> and it will explain how it reads your instructions and controls things.
          <br />
          <br />
          Here are a few terms that will help you understand how it works:

        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>GPIO</strong> – These are little on/off switches. When you send a signal through them, they can turn things on or off, like lights or motors.</li>
          <li><strong>PWM (Pulse Width Modulation)</strong> – This is how you control brightness or speed. Imagine dimming a light or slowing down a motor—that’s PWM.
          </li>
          <li><strong>Analog vs Digital</strong> –  Analog is like a volume knob (lots of levels), and digital is like a light switch (on or off).
          </li>
          <li><strong>GND (Ground) :</strong> – This is where all your electronics need to connect back to. It’s like the "home" for your electricity.
          </li>
        </ul>
        <p className='mb-4 font-bold'>
          Once you can explain these terms to a friend who knows nothing about electronics, you’re good to go for the next step!

        </p>
        <h2 className="text-xl font-bold mb-2">🧠 Step 4: Understand Why Things Don’t Work</h2>
        <p className="mb-4">
          Things will break. That’s normal. Learning is in the fixing. Stay curious and experiment.
        </p>
        <p className='mb-4'>
          The key to learning electronics isn’t getting everything right on the first try. It’s about sticking with it, making mistakes, and asking questions. When you don’t understand something, ask! The more you ask, the clearer things become.
          <br />
          <br />
          The best learners aren’t those who get everything perfect—they’re the ones who stay curious, keep experimenting, and ask when they’re stuck. That’s how you grow.

        </p>
        <h2 className="text-xl font-bold mb-2">🚀 Step 5:  Do These Small Projects Before You Even Think of Robots
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Button →  LED (your first interaction)</li>
          <li>Potentiometer → LED brightness (learn analog input)</li>
          <li>LDR → Buzzer when dark (sensor response)
          </li>
          <li>DC motor → Controlled by switch or Arduino (learn external components)
          </li>
          <li>Simple traffic light system (multiple outputs + timing logic)</li>
        </ul>
        <p className='mb-4'>
          By the time you finish these, you’ll:

        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Understand wiring basics</li>
          <li>Know how to use breadboards
          </li>
          <li>LDR → Buzzer when dark (sensor response)
          </li>
          <li>Be comfortable with code + components
          </li>
          <li>Stop being afraid of “hardware”
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">🛠 Tools You’ll Thank Yourself for Getting Early On</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Multimeter – For checking voltages, continuity, etc.</li>
          <li>Breadboard – Obviously.</li>
          <li>Jumper wires – Get a whole pack, not just 4.
          </li>
          <li>Arduino Uno / Nano clone – Any will do for starters.


          </li>
          <li>Battery clips & resistors – Cheap but necessary
          </li>
          <li>Screwdriver set, maybe a small cutter
          </li>
        </ul>
        <p className='mb-4'>
          (Don't worry, we'll have all these in our labs.)

        </p>
        <h2 className="text-xl font-bold mb-2">📚 Step 6:  Learn From These Places (Skip the Boring Stuff)
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Paul McWhorter Arduino Series (YouTube) – Teaches step-by-step.


          </li>
          <li>GreatScott (YouTube) – Amazing for electronics theory + hacks
          </li>
          <li>The Arduino Docs – Actually readable.</li>
          <li>RandomNerdTutorials.com – Pure gold for ESP32, NodeMCU, WiFi-based projects
          </li>
          <li>Electronics StackExchange – Post dumb questions. People will help.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">TL;DR (But Read the Whole Thing Please)</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Touch components. Burn some. Learn.
          </li>
          <li>Start with blinking an LED via button input.
          </li>
          <li>Learn what the Arduino is actually doing.


          </li>
          <li>Don’t be afraid of breaking stuff.


          </li>
          <li>
            Build small projects first.
          </li>
          <li>
            Use YouTube & ChatGPT smartly — ask “why”, not “how to copy.”



          </li>
          <li>
            This is slow at first. Then it clicks.

          </li>
        </ul>

        <p className="mb-4 font-semibold italic">
          You don’t need a perfect “hardware roadmap.”<br />
          You need curiosity, a few components, and the willingness to get your hands dirty.
          <br /><br />The first few weeks will be frustrating.
          You’ll think:
          “Why is this wire not working? It was fine 2 seconds ago!”
          <br /><br />But keep building. Break stuff. Fix it. Understand it. Repeat.
          <br /><br />One day you’ll be building a sensor-based project for fun and realize:
          <br />“Damn. I get this now.”
          <br />And that’s all that matters.

        </p>

        <p className="text-sm text-gray-600">-Abhigyan Yadav <br />DM me if you’re stuck. Or just wanna chat about Arduino, IoT, or random project ideas.
        </p>
      </div>
    </div>
  );
};

export default WebDevPage;
