import React, { useState } from "react";
import "./landing.css";
import chat from "../assets/chat.png";
import editor from "../assets/Editor.png";

const LandingPage = () => {
  const [view, setView] = useState("chat");

  return (
    <>
      {/* page one */}
      <div className="pageOne">
        <h3 className="pageOne-heading">Code, chat and collaborate in </h3>
        <h1>one place.</h1>
        <p className="description">
          Code Sphere is a real-time collaborative coding platform where
          developers, students, and teams can write code together, communicate
          instantly, and build projects faster.
        </p>

        {/* inout signup and source code  */}
        <div className="connectCollection">
          <div
            className="inputBox"
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              borderRadius: "8px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="emailInput"
            />
            <a href="/signup" className="signUp">
              Join now
            </a>
          </div>
          <a href="https://github.com/RochakSiwach" className="sourceCode">
            Our Source Code
          </a>
        </div>
        <div className="built-with">
          <p>Built with</p>
          <div className="tech">
            <a href="https://react.dev/">React.js</a> <hr />
            <a href="https://nodejs.org/en">Node.js</a> <hr />
            <a href="https://www.mongodb.com/">MongoDB</a> <hr />
            <a href="https://socket.io/">Socket.io</a>
          </div>
        </div>
      </div>


      {/* page Two */}
      <div className="pageTwo">
        <section className="features">
          <h2>Features</h2>

          <div className="featureBoxButton">
            <button
              onClick={() => {
                setView("chat");
              }}
            >
              Real-Time Chat Collaboration
            </button>
            <button
              onClick={() => {
                setView("connections");
              }}
            >
              Live Connections
            </button>
            <button
              onClick={() => {
                setView("code");
              }}
            >
              Code Editor
            </button>
          </div>
          <div className="featureBox">
            {view === "chat" && (
              <div className="featureContent">
                <div className="content">
                  <h3>Real-Time Chat Collaboration</h3>
                  <p>Work on code together instantly.</p>
                </div>
                <img src={chat} alt="Real-Time_Chat_Collaboration_Image" />
              </div>
            )}

            {view === "connections" && (
              <div className="featureContent">
                <div className="content">
                  <h3>Live Connection</h3>
                  <p>Work on code together instantly.</p>
                </div>
                <img src="" alt="Live_Connection_Image" />
              </div>
            )}

            {view === "code" && (
              <div className="featureContent">
                <div className="content">
                  <h3>Code Editor</h3>
                  <p>Syntax highlighting and live updates.</p>
                </div>
                <img src={editor} alt="Code_Editor_Image" />
              </div>
            )}
          </div>
        </section>
      </div>


      {/* page Three */}
          <section className="usecases">
      <h2>Who is it for?</h2>

<div className="usecaseGrid">
  <div className="usecaseCard">
    <h3>👨‍💻 Developers</h3>
    <ul>
      <li>Build, debug, and ship code together in real-time.</li>
      <li>Collaborate seamlessly
      with your team.</li>
      <li>Share ideas instantly, and accelerate your development
      workflow without switching between tools.</li>

    </ul>

  </div>

  <div className="usecaseCard">
    <h3>🎓 Students</h3>
    <ul>
      <li>Learn coding interactively with friends and classmates.</li>
      <li>Practice problems.</li>
      <li>Work on assignments.</li>
      <li>And get instant help while coding together in a
      shared environment.</li>
    </ul>
  </div>

  <div className="usecaseCard">
    <h3>🧑‍💼 Interviewers</h3>
   <ul>
      <li>Conduct efficient and real-time coding interviews.</li>
      <li>Evaluate candidates
      with live coding sessions, track their problem-solving approach.</li>
      <li>Communicate instantly without external tools.</li>
      <li>And get instant help while coding together in a
      shared environment.</li>

    </ul>
  </div>
</div>
    </section>


    {/* page quote */}
    <section className="quote">
      <h1>Join Code Sphere and build together.</h1>
    </section>

    {/* footer */}
    <footer className="footer">
      <p>© 2026 Code Sphere</p>

      <div>
        <a href="/about">About</a>
        <a href="/docs">Docs</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>


    </>
  );
};

export default LandingPage;
