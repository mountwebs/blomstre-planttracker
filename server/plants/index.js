const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const dbPath = `${__dirname}/plantdb.json`;
// const db = require('./plantdb.json');

const getDb = async () => {
  const dbContent = await fs.readFile(dbPath);
  return JSON.parse(dbContent);
};

const getPlantsFromDb = async () => {
  const db = await getDb();
  return db.plants;
};

const getPlants = async (req, res, next) => {
  const plants = await getPlantsFromDb();
  res.end(JSON.stringify(plants));
};

const getPlant = async (req, res, next) => {
  const plants = await getPlantsFromDb();
  const plant = plants.find((el) => el.id === Number(req.params.id));
  res.end(JSON.stringify(plant));
};

router.get('/', getPlants);

router.get('/:id', getPlant);

module.exports = router;
