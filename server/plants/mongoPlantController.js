const PlantModel = require("./plantModel");

const getPlants = async () => {
  const plants = await PlantModel.find();
  return plants;
};

const getPlant = async (id) => {
  const plant = await PlantModel.findById(id);
  return plant;
};

const addPlant = async (plant) => {
  const res = await PlantModel.create(plant);
  return res;
};

const deletePlant = async (id) => {
  const plant = await PlantModel.deleteOne({ _id: id });
  return true;
};

const updatePlant = async (id, input) => {
  const res = await PlantModel.findByIdAndUpdate(id, input);
  return input;
};

module.exports = { getPlants, getPlant, addPlant, deletePlant, updatePlant };
