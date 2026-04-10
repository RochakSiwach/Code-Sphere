import React, { useState } from "react";
import './landing.css'

const welcomePage = () => {
  const [view, setView] = useState("one");

  return (
    <>
      <div className="pageOne" style={{ textAlign: "center" }}>
        <h3 className="pageOne-heading" style={{ fontSize: "5rem" }}>Code, chat and collaborate in </h3>
        <h1 style={{ fontSize: "4rem" }}>one place.</h1>
        <p>
          Code Sphere is a real-time collaborative coding platform where
          developers, students, and teams can write code together, communicate
          instantly, and build projects faster.
        </p>

        {/* inout signup and source code  */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
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
              style={{
                padding: "8px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <a
              href="/signup"
              style={{
                textDecoration: "none",
                backgroundColor: "black",
                color: "white",
                padding: "8px 16px",
                borderRadius: "5px",
              }}
            >
              Join now
            </a>
          </div>
          <a
            href="https://github.com/RochakSiwach"
            style={{
              background: "black",
              width: "fit-content",
              color: "white",
              height: "60px",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              alignContent: "center",
            }}
          >
            Our Source Code
          </a>
        </div>
        <div>
          <p>Built with</p>
          react, mongo, css, nodejs, express.js
        </div>
      </div>
    </>
  );
};

export default welcomePage;
