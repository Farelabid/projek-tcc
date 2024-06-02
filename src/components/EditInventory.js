import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditInventory = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getInventoriesById();
  }, []);

  const updateInventory = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/inventories/${id}`, {
        name,
        quantity,
        description,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getInventoriesById = async () => {
    const response = await axios.get(`http://localhost:5000/inventories/${id}`);
    setName(response.data.name);
    setQuantity(response.data.quantity);
    setDescription(response.data.description);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 className="title">Edit Inventory</h1>
          <form onSubmit={updateInventory}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Quantity</label>
              <div className="control">
                <input type="number" className="input" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input type="text" className="input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-success">
                  <span className="icon is-small">
                    <i className="fas fa-save"></i>
                  </span>
                  <span>Update</span>
                </button>
              </div>
              <div className="control">
                <button className="button is-danger" onClick={() => navigate("/")}>
                  <span className="icon is-small">
                    <i className="fas fa-times"></i>
                  </span>
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditInventory;
