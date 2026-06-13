const db = require("../config/db");

const saveProfile = (data, callback) => {
  const sql = `
    INSERT INTO github_profiles
    (
      username,
      name,
      followers,
      following,
      public_repos,
      public_gists,
      avatar_url,
      profile_url,
      github_created_at,
      score,
      level
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, data, callback);
};

const getAllProfiles = (callback) => {
  db.query("SELECT * FROM github_profiles", callback);
};

const getProfileByUsername = (username, callback) => {
  db.query(
    "SELECT * FROM github_profiles WHERE username = ?",
    [username],
    callback
  );
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getProfileByUsername
};