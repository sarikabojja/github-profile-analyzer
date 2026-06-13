# GitHub Profile Analyzer API

## Description

A Node.js + Express.js + MySQL backend service that analyzes GitHub profiles using GitHub Public API.

## Features

- Analyze GitHub profile
- Store profile insights in MySQL
- Fetch all analyzed profiles
- Fetch single profile details

## Technologies

- Node.js
- Express.js
- MySQL
- Axios
- GitHub API

## Installation

```bash
npm install
```

Create .env file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
```

Run:

```bash
node app.js
```

## API Endpoints

POST /api/profile/:username

GET /api/profiles

GET /api/profile-data/:username
