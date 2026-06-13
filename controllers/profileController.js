const {
  saveProfile,
  getAllProfiles,
  getProfileByUsername
} = require("../models/profileModel");

const { fetchGithubProfile } = require("../services/githubService");

const analyzeProfile = async (req, res) => {
  try {
    const username = req.params.username;

    const user = await fetchGithubProfile(username);

    const score =
      (user.followers * 2) +
      (user.public_repos * 5);

    let level = "Beginner";

    if (score > 500) {
      level = "Expert";
    } else if (score > 200) {
      level = "Intermediate";
    }

    const profileData = [
      user.login,
      user.name,
      user.followers,
      user.following,
      user.public_repos,
      user.public_gists,
      user.avatar_url,
      user.html_url,
      new Date(user.created_at)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      score,
      level
    ];

    saveProfile(profileData, (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Profile analyzed successfully",
        username: user.login,
        score,
        level
      });
    });

  } catch (error) {
    res.status(404).json({
      message: "GitHub user not found"
    });
  }
};

const fetchAllProfiles = (req, res) => {
  getAllProfiles((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
};

const fetchSingleProfile = (req, res) => {
  const username = req.params.username;

  getProfileByUsername(username, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    res.json(results[0]);
  });
};

module.exports = {
  analyzeProfile,
  fetchAllProfiles,
  fetchSingleProfile
};