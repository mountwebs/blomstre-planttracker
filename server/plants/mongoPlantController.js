const PlantModel = require("./plantModel");
const { v4: uuidv4 } = require("uuid");

const getPlants = async () => {
  const plants = await PlantModel.find();
  return plants;
};

const getPlant = async (id) => {
  const plant = await PlantModel.findById();
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
  console.log("id");
  const res = await PlantModel.findByIdAndUpdate(id, input, {
    useFindAndModify: false,
  });
  return input;
};

module.exports = { getPlants, getPlant, addPlant, deletePlant, updatePlant };
