// build your `Resource` model here
const db = require("../../data/dbConfig.js");
// const helpers = require("../../data/helpers/booleanHelpers.js");

const findResources = () => {
  return db("resources");
};

const createResources = async (project) => {
  const [resource_id] = await db("resources").insert(project);
  return findResources().where({ resource_id });
};

module.exports = {
  findResources,
  createResources,
};