import React from "react";
import './Documentation.css'

const Documentation = () => {
  const docs = [
    {
      id: "chapter-1",
      heading: "CHAPTER 1 - SOFTWARE PROJECT PLANNING",
      sections: [
        {
          title: "1. Description of the System :",
          content: `Code Sphere is a web-based collaborative coding platform that allows multiple users to work together in a shared environment. The system integrates coding, communication, and collaboration features into a single platform. The main purpose of the system is to provide developers and students with an environment where they can collaborate on coding projects in real time.`,
          subpoints: [
            {
              subTitle: "Main Features",
              subContent: `• Real-time collaborative code editing
• Chat communication between users
• Video/audio communication
• File sharing
• Room-based collaboration`,
            },
            {
              subTitle: "Users of the System",
              subContent: `• Students
• Developers
• Teams / Organizations`,
            },
          ],
        },
        {
          title: "2. Data Collection :",
          content: `The development of this system is based on studying existing collaborative tools and technologies.`,
          subpoints: [
            {
              subTitle: "GitHub Collaboration Tools",
              subContent: `GitHub provides version control and collaborative development features. These features were studied to understand how developers manage projects and collaborate effectively.`,
            },
            {
              subTitle: "Online Coding Platforms (CodePen, Replit)",
              subContent: `These platforms provide real-time coding environments. They were analyzed to understand user interaction, interface design, and real-time synchronization.`,
            },
            {
              subTitle: "WebRTC Documentation",
              subContent: `WebRTC provides APIs for real-time communication such as video and audio calling. It was studied to implement communication features within the system.`,
            },
            {
              subTitle: "Socket.IO Documentation",
              subContent: `Socket.IO enables real-time communication between client and server. It was studied to implement live chat and real-time code synchronization.`,
            },
          ],
        },
        {
          title: "3. Tools / Platforms :",
          content: `The system is developed using modern web technologies.`,
          subpoints: [
            {
              subTitle: "Hardware Specifications",
              subContent: `Minimum system requirements:
RAM : 4 GB
Hard Disk : 20 GB free space
Processor : Intel i3 or higher`,
            },
            {
              subTitle: "Software Specifications",
              subContent: `Operating System:
• Windows / Linux / Mac OS`,
            },
            {
              subTitle: "Frontend Technologies",
              subContent: `• HTML
• CSS
• JavaScript
• React.js`,
            },
            {
              subTitle: "Backend Technologies",
              subContent: `• Node.js
• Express.js`,
            },
            {
              subTitle: "Database",
              subContent: `• MongoDB`,
            },
            {
              subTitle: "Real-Time Technologies",
              subContent: `• Socket.IO
• WebRTC`,
            },
            {
              subTitle: "Security",
              subContent: `• JWT Authentication`,
            },
          ],
        },
        {
          title: "4. Project Planning :",
          content: `Project planning ensures systematic development and timely completion of the project. The development process is divided into different phases:`,
          subpoints: [
            {
              subTitle: "UI Design",
              subContent: `The user interface and layout of the system are designed to ensure easy navigation and usability.`,
            },
            {
              subTitle: "Backend Setup",
              subContent: `Server configuration, API development, and database connections are established in this phase.`,
            },
            {
              subTitle: "Real-Time Integration",
              subContent: `Socket.IO is integrated to enable real-time chat and collaborative code editing.`,
            },
            {
              subTitle: "Communication Integration",
              subContent: `WebRTC is used to implement audio and video communication between users.`,
            },
            {
              subTitle: "Testing",
              subContent: `The system is tested to detect errors and ensure that all modules function correctly.`,
            },
          ],
        },
        {
          title: "5. Methodology",
          content: `The project follows the Agile Software Development Life Cycle (SDLC) Model.`,
          subpoints: [
            {
              subTitle: "Agile Model",
              subContent: `The development process is divided into small iterations. Each iteration focuses on implementing specific features, testing them, and improving the system based on feedback.`,
            },
            {
              subTitle: "Justification",
              subContent: `Agile is suitable for this project because it supports flexible development, continuous testing, and quick improvements. Since the system includes real-time communication features, iterative development helps in refining functionality effectively.`,
            },
          ],
        },
      ],
    },
    {
      id: "chapter-2",
      heading: "CHAPTER 2 - SOFTWARE REQUIREMENT SPECIFICATION (SRS)",
      sections: [
        {
          title: "1. Description of Information System (Block Diagram)",
          content: `Code Sphere is a web-based collaborative coding system that allows multiple users to work together on the same code in real time. The system integrates coding, communication, and collaboration features into a single platform. The main purpose of the system is to provide a unified environment where developers and students can collaborate efficiently without using multiple tools. The system receives input from users such as login credentials, code edits, chat messages, and room creation requests. These inputs are processed by the application server and stored in the database. The system then generates outputs such as synchronized code updates, chat messages, and communication streams.`,
          subpoints: [
            {
              subTitle: "External Entities",
              subContent: `• User / Developer
• Admin`,
            },
            {
              subTitle: "Main System",
              subContent: `• Code Sphere System`,
            },
            {
              subTitle: "Internal Components",
              subContent: `• Authentication Module
• Room Management Module
• Code Editor Module
• Chat Module
• Video Communication Module
• Report Generation Module`,
            },
            {
              subTitle: "Data Storage",
              subContent: `• User Database
• Room Database
• Message Database`,
            },
            {
              subTitle: "Diagram Note",
              subContent: `The diagram illustrates how user inputs flow into the system, how processing occurs through different modules, and how outputs are delivered back to users. Fig 2.1 Block Diagram of Code Sphere System`,
            },
          ],
        },
        {
          title: "1.1 Product Features",
          content: `The main processes of the Code Sphere system are:`,
          subpoints: [
            {
              subTitle: "User Authentication",
              subContent: `Allows users to register and log in securely using authentication mechanisms.`,
            },
            {
              subTitle: "Room Management",
              subContent: `Allows users to create, join, and manage collaboration rooms.`,
            },
            {
              subTitle: "Real-Time Code Editor",
              subContent: `Allows multiple users to edit code simultaneously with instant synchronization.`,
            },
            {
              subTitle: "Chat Communication",
              subContent: `Allows users to send and receive real-time messages during collaboration.`,
            },
            {
              subTitle: "Video Communication",
              subContent: `Allows users to communicate through audio/video calls and screen sharing.`,
            },
            {
              subTitle: "Report Generation",
              subContent: `Generates reports related to user activities and room sessions.`,
            },
          ],
        },
        {
          title: "1.2 Input / Output Data Elements",
          content: `The main input and output data elements of the system are as follows:`,
          subpoints: [
            {
              subTitle: "User Registration",
              subContent: `Name, Email, Password`,
            },
            {
              subTitle: "Login Request",
              subContent: `Email, Password`,
            },
            {
              subTitle: "Room Creation",
              subContent: `Room ID, Room Name, Creator ID`,
            },
            {
              subTitle: "Code Input",
              subContent: `Code Text, Language Type, Timestamp`,
            },
            {
              subTitle: "Chat Message",
              subContent: `Sender ID, Message Text, Time`,
            },
            {
              subTitle: "Report Output",
              subContent: `User Activity, Room ID, Session Time`,
            },
          ],
        },
        {
          title: "1.3 Procedures / Rules / Mathematical Relationships",
          content: `The system follows several processing rules to convert input data into output information.`,
          subpoints: [
            {
              subTitle: "Authentication Rule",
              subContent: `User credentials are verified using secure authentication mechanisms before granting access.`,
            },
            {
              subTitle: "Room Management Rule",
              subContent: `Only authenticated users can create or join collaboration rooms.`,
            },
            {
              subTitle: "Code Synchronization Rule",
              subContent: `When a user edits code, the changes are instantly synchronized with all other users in the room through real-time communication technology.`,
            },
            {
              subTitle: "Message Delivery Rule",
              subContent: `Chat messages are transmitted instantly to all users present in the collaboration room.`,
            },
            {
              subTitle: "Report Generation Rule",
              subContent: `User activity logs are processed and converted into reports for monitoring system usage.`,
            },
          ],
        },
        {
          title: "1.4 Decision Table",
          content: `The following decisions are handled by the system:`,
          subpoints: [
            {
              subTitle: "Valid Login Credentials",
              subContent: `User Access Granted`,
            },
            {
              subTitle: "Invalid Login Credentials",
              subContent: `Access Denied`,
            },
            {
              subTitle: "User Creates Room",
              subContent: `Room Generated`,
            },
            {
              subTitle: "User Sends Message",
              subContent: `Message Delivered`,
            },
            {
              subTitle: "User Leaves Room",
              subContent: `Session Ended`,
            },
          ],
        },
        {
          title: "2. Use Case Diagram",
          content: `The Use Case Diagram shows the interaction between users and the system.`,
          subpoints: [
            {
              subTitle: "User / Developer",
              subContent: `Functions performed by the user include:
• Register / Login
• Create Room
• Join Room
• Edit Code
• Send Chat Message
• Start Video Call
• Share Files`,
            },
            {
              subTitle: "Admin",
              subContent: `Admin is responsible for monitoring the system and generating reports.
Main use cases include:
• Manage Users
• Monitor System
• Generate Reports`,
            },
            {
              subTitle: "Diagram Note",
              subContent: `The Use Case Diagram visually represents the interaction between these actors and system processes. Fig 2.2 Use Case Diagram of Code Sphere`,
            },
          ],
        },
        {
          title: "3. Software Product Constraints",
          content: `The development of Code Sphere is affected by several constraints:`,
          subpoints: [
            {
              subTitle: "Internet Dependency",
              subContent: `The system requires a stable internet connection for real-time communication and synchronization.`,
            },
            {
              subTitle: "Browser Compatibility",
              subContent: `The application must be compatible with modern web browsers such as Chrome, Edge, and Firefox.`,
            },
            {
              subTitle: "Real-Time Communication Technologies",
              subContent: `The implementation of real-time communication requires technologies such as Socket.IO and WebRTC.`,
            },
            {
              subTitle: "Hardware Limitations",
              subContent: `Low system memory or processing power may affect the performance of real-time collaboration features.`,
            },
            {
              subTitle: "Security Requirements",
              subContent: `The system must implement secure authentication mechanisms to protect user data.`,
            },
          ],
        },
      ],
    },
    {
  id: "chapter-3",
  heading: "CHAPTER 3 - SYSTEM DESIGN",
  sections: [
    {
      title: "1. Data Flow Diagram (DFD)",
      content: `Data Flow Diagram (DFD) is used to represent the flow of data within the Code Sphere system. It shows how data moves from input to processing and finally to output. DFD helps in understanding system functionality, data processing, and interaction between different components.`,
      subpoints: [
        {
          subTitle: "1.1 Level 0 DFD (Context Diagram)",
          subContent: `The Level 0 DFD represents the entire system as a single process and shows the interaction between external entities and the system.

In Code Sphere, the main process is “Code Sphere System”, which interacts with the following external entities:

• User / Developer
Provides inputs such as login credentials, room requests, code edits, chat messages, and call requests. Receives outputs such as synchronized code, chat responses, and video/audio communication.

• Admin
Monitors user activities, manages reports, and receives system-related outputs.

The system processes the inputs and returns outputs through a centralized web-based environment.

Fig No: 3.1 – Level 0 DFD of Code Sphere`,
        },
        {
          subTitle: "1.2 Level 1 DFD",
          subContent: `The Code Sphere system is divided into the following major processes:

• Authentication Process
Handles user registration and login by validating credentials.

• Room Management Process
Manages creation, joining, and maintenance of collaboration rooms.

• Real-Time Code Editor Process
Synchronizes code changes among users in real time.

• Chat Communication Process
Handles sending and receiving of chat messages.

• Video Communication Process
Manages video/audio calls and screen sharing.

• Report Generation Process
Generates activity logs and usage reports for admin.

Data Stores:
• User Database
• Room Database
• Message Database
• Code Session Database
• Report Database

Fig No: 3.2 – Level 1 DFD of Code Sphere`,
        },
        {
          subTitle: "1.3 Level 2 DFD",
          subContent: `Level 2 DFD provides a detailed breakdown of the major processes of the system.

Authentication Process
• User enters email and password
• System validates input
• Database is checked for matching records
• If valid → access granted
• If invalid → error message displayed

Room Management Process
• Create room
• Generate room ID
• Store room details
• Allow users to join room

Code Editor Process
• User enters code
• Code is synchronized using Socket.IO
• Updated code is displayed to all users in the room

Chat Communication Process
• User sends message
• Message is broadcast to room participants
• Chat history is stored in database

Video Communication Process
• User starts call
• System establishes connection using WebRTC
• Audio/video stream is shared among participants

Fig No: 3.3 – Level 2 DFD of Code Sphere`,
        },
      ],
    },
    {
      title: "2. Entity – Relationship Diagram",
      content: `The Entity Relationship Diagram (ER Diagram) represents the database structure of the Code Sphere system. It shows the entities involved, their attributes, and the relationships between them.`,
      subpoints: [
        {
          subTitle: "2.1 Entities and Attributes",
          subContent: `User
• user_id – Unique identifier of the user
• name – Name of the user
• email – User email for login
• password – Encrypted password

Room
• room_id – Unique identifier of room
• room_name – Name of collaboration room
• created_by – ID of room creator

Message
• message_id – Unique identifier of message
• content – Message text
• timestamp – Time of message
• sender_id – User who sent message
• room_id – Room in which message is sent

Code Session
• session_id – Unique identifier of code session
• code_content – Shared code text
• language – Programming language
• room_id – Room linked with code session

Report
• report_id – Unique identifier of report
• user_id – User related to report
• activity – Recorded activity
• timestamp – Time of activity`,
        },
        {
          subTitle: "Relationships",
          subContent: `• User creates Room
• User joins Room
• Room contains Messages
• Room contains Code Sessions
• User generates Reports

Fig No: 3.4 – ER Diagram of Code Sphere`,
        },
      ],
    },
    {
      title: "3. Database Specifications",
      content: `The database “CodeSphereDB” is used to store all data related to users, rooms, messages, code sessions, and reports in the system.`,
      subpoints: [
        {
          subTitle: "3.1 Collection Name: users",
          subContent: `Fields:
• user_id – Alphanumeric, Size: 24 – Unique identifier of user
• name – Alphabetic, Size: 50 – Name of the user
• email – Alphanumeric, Size: 100 – Email used for login
• password – Alphanumeric, Size: 100 – Encrypted password
• role – Alphabetic, Size: 20 – Role of user (Admin/User)

Table No: 3.1`,
        },
        {
          subTitle: "3.2 Collection Name: rooms",
          subContent: `Fields:
• room_id – Alphanumeric, Size: 24 – Unique identifier of room
• room_name – Alphabetic, Size: 100 – Name of room
• created_by – Alphanumeric, Size: 24 – User ID of room creator
• room_type – Alphabetic, Size: 20 – Type of room
• created_at – DateTime – Room creation time

Table No: 3.2`,
        },
        {
          subTitle: "3.3 Collection Name: messages",
          subContent: `Fields:
• message_id – Alphanumeric, Size: 24 – Unique identifier of message
• room_id – Alphanumeric, Size: 24 – Room reference
• sender_id – Alphanumeric, Size: 24 – User who sent message
• content – Text, Size: 500 – Message text
• timestamp – DateTime – Time of message

Table No: 3.3`,
        },
        {
          subTitle: "3.4 Collection Name: code_sessions",
          subContent: `Fields:
• session_id – Alphanumeric, Size: 24 – Unique session identifier
• room_id – Alphanumeric, Size: 24 – Room reference
• code_content – Text, Size: 5000 – Shared code content
• language – Alphabetic, Size: 30 – Programming language
• last_updated – DateTime – Last update time

Table No: 3.4`,
        },
        {
          subTitle: "3.5 Collection Name: reports",
          subContent: `Fields:
• report_id – Alphanumeric, Size: 24 – Unique identifier of report
• user_id – Alphanumeric, Size: 24 – User related to report
• activity – Text, Size: 200 – Activity performed
• timestamp – DateTime – Time of activity
• room_id – Alphanumeric, Size: 24 – Related room ID

Table No: 3.5`,
        },
      ],
    },
    {
      title: "4. Validation Specifications",
      content: `Validation specifications define the rules applied to input and output data to ensure correctness, completeness, and security of the system.`,
      subpoints: [
        {
          subTitle: "4.1 Validation Rules",
          subContent: `• User Registration Validation
All required fields such as name, email, and password must be filled. Email format is validated and password must satisfy minimum length requirements.

• Login Validation
Entered email and password are checked against stored records. Invalid credentials generate an error message.

• Room Creation Validation
Room name must not be empty. Only authenticated users can create rooms.

• Room Join Validation
Room ID must exist in the database before joining is allowed.

• Code Input Validation
Code editor should not accept empty code submission for synchronization or storage.

• Chat Message Validation
Empty messages are not allowed. Only valid text messages are broadcast.

• Video Session Validation
Only authenticated and connected users can start or join video sessions.

• Report Access Validation
Only admin or authorized users can generate and view system reports.`,
        },
      ],
    },
  ],
}
  ];

  return (
    <div>
      <h1>Documentation of Code Sphere</h1>

      {docs.map((data, id) => {
        return (

          <div key={id}>
            <h2>{data.heading}</h2>

            {data.sections.map((sectionsData,index)=>{
              return(

                <div key={index}>
                  <h4>{sectionsData.title}</h4>
                  <p>{sectionsData.content}</p>

                {sectionsData.subpoints.map((subpointsData, idx)=>{
                    <ul key={idx}>
                      <p>{subpointsData.subTitle}</p>
                      <li>{subpointsData.subContent}</li>
                    </ul>
                })}

                </div>
              )
            })}

          </div>
        );
      })}
    </div>
  );
};

export default Documentation;
