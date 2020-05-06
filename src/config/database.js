module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "new_project",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
