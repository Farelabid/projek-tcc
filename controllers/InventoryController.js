import Inventory from "../models/InventoryModel.js";

export const getInventory = async (req, res) => {
  try {
    const response = await Inventory.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getInventoryById = async (req, res) => {
  try {
    const response = await Inventory.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createInventory = async (req, res) => {
  try {
    await Inventory.create(req.body);
    res.status(201).json({ msg: "Inventory Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateInventory = async (req, res) => {
  try {
    await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Inventory Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInventory = async (req, res) => {
  try {
    await Inventory.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Inventory Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
