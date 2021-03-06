const express = require("express");
const router = express.Router();
const plantController =
  process.env.DB === "mongo"
    ? require("./mongoPlantController")
    : require("./localPlantController");
const routeBasePath = "/api/plants/";
const { errorHandler } = require("../utils/errorHandler");

const getPlants = async (req, res, next) => {
  const plants = await plantController.getPlants();
  res.end(JSON.stringify(plants));
};

const getPlant = async (req, res, next) => {
  const plant = await plantController.getPlant(req.params.id);
  res.end(JSON.stringify(plant));
};

const addPlant = async (req, res, next) => {
  newPlant = await plantController.addPlant(req.body);
  res.end(JSON.stringify(newPlant));
};

const deletePlant = async (req, res, next) => {
  const deleted = await plantController.deletePlant(req.params.id);
  if (deleted) {
    return res.status(200).end("");
  }
  return res.status(404).end("");
};

const updatePlant = async (req, res, next) => {
  const updated = await plantController.updatePlant(req.params.id, req.body);
  if (updated) {
    res.location(`${routeBasePath}${req.params.id}`);
    return res.status(200).end(JSON.stringify(updated));
  }
  return res.status(404).end("");
};

router.route("/").get(errorHandler(getPlants)).post(errorHandler(addPlant));

router
  .route("/:id")
  .get(errorHandler(getPlant))
  .put(errorHandler(updatePlant))
  .delete(errorHandler(deletePlant));

module.exports = router;
