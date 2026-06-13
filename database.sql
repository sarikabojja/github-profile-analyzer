
CREATE DATABASE github_analyzer;

USE github_analyzer;

CREATE TABLE github_profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    followers INT,
    following INT,
    public_repos INT,
    public_gists INT,
    avatar_url TEXT,
    profile_url TEXT,
    github_created_at DATETIME,
    score INT,
    level VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);