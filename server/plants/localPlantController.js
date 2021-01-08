const fs = require("fs").promises;
const dbPath = `${__dirname}/plantdb.json`;
const { v4: uuidv4 } = require("uuid");

// Helper functions

const createPlantObj = (input) => {
  return {
    id: uuidv4(),
    name: input.name,
    wateringInterval: input.wateringInterval || 0,
    wateringWindow: input.wateringWindow || 1,
    watered: [],
  };
};

const getDb = async () => {
  const dbContent = await fs.readFile(dbPath);
  return JSON.parse(dbContent);
};

const writeToDb = async (newDb) => {
  await fs.writeFile(dbPath, JSON.stringify(newDb));
};

// const findPlant = (id, plants) => plants.find((plant) => plant.id === id);

// Exported functions

const getPlants = async () => {
  const db = await getDb();
  return db.plants;
};

const getPlant = async (id) => {
  const plants = await getPlants();
  const plant = plants.find((el) => el.id === id);
  return plant;
};

const addPlant = async (plant) => {
  const db = await getDb();
  const newPlant = createPlantObj(plant);
  db.plants.push(newPlant);
  await writeToDb(db);
  return newPlant;
};

const deletePlant = async (id) => {
  const db = await getDb();
  const plantIndex = db.plants.findIndex((el) => el.id === id);
  if (plantIndex > -1) {
    db.plants = db.plants.filter((plant) => plant.id !== id);
    await writeToDb(db);
    return true;
  }
  return false;
};

const updatePlant = async (id, input) => {
  const db = await getDb();
  const plantIndex = db.plants.findIndex((el) => el.id === id);
  if (plantIndex > -1) {
    db.plants[plantIndex] = input;
    await writeToDb(db);
    return input;
  }
  return null;
};

module.exports = { getPlants, getPlant, addPlant, deletePlant, updatePlant };
