# GroupSync Chat: Event-Driven Messaging with Polls and Reminders

GroupSync Chat is a real-time group chat application built with the MERN stack (MongoDB, Express, React, Node.js). It focuses on enhancing group engagement and decision-making through advanced collaboration tools like polls, reminders, and pinned messages.

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

GroupSync Chat is designed to facilitate effective group communication by providing advanced collaboration tools such as polls, reminders, and pinned messages. The application is built using the MERN stack:
- **MongoDB** for the database
- **Express.js** for the backend framework
- **React.js** for the frontend framework
- **Node.js** for the backend runtime environment

### Key Technologies

- **React Router DOM**: For smooth and dynamic navigation between different parts of the application.
- **React Context API**: For efficient state management across the application.
- **WebSocket**: For real-time updates and message synchronization in chat rooms.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4.4 or later)

### Installation

1. Clone the repository:
    ```bash
    git clone [https://github.com/Anirudhcheruvu/GroupSync-Chat.git]
    ```
   
2. Navigate to the project directory:
    ```bash
    cd groupsync-chat
    ```

3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

5. Set up your environment variables for the backend in a `.env` file:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm run start
    ```

2. Start the frontend server:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Features

- **Real-Time Group Chat**: Communicate with multiple users in real-time.
- **Event-Driven Chat Rooms**: Each chat room is centered around events to enhance focus and productivity.
- **Polls and Decision Making**: Create polls within chat rooms to facilitate group decision-making.
- **Reminders and Notifications**: Set reminders for important events directly within chat rooms.
- **Pinned Messages**: Highlight and pin important messages for easy reference.
- **Smooth Navigation**: Leveraging `react-router-dom` for a seamless user experience.
- **Efficient State Management**: Using React Context API for managing the application state.
- **WebSocket Integration**: Real-time updates using WebSocket for instant message delivery and synchronization.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - (Anirudh Cheruvu) - anirudhcheruvu2014@gmail.com

Project Link: [https://github.com/Anirudhcheruvu/GroupSync-Chat](https://github.com/Anirudhcheruvu/GroupSync-Chat)
