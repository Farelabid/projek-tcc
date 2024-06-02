import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InventoryList = () => {
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    getInventories();
  }, []);

  const getInventories = async () => {
    const response = await axios.get("http://localhost:5000/inventories");
    setInventory(response.data);
  };

  const deleteInventory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/inventories/${id}`);
      getInventories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="hero has-background-primary-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Inventory Management</h1>
            <h2 className="subtitle">Manage your inventory efficiently</h2>
          </div>
        </div>
      </header>

      <div className="columns mt-5 is-centered">
        <div className="column is-three-quarters">
          <div className="box">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <Link to={`add`} className="button is-success">
                    <span className="icon is-small">
                      <i className="fas fa-plus"></i>
                    </span>
                    <span>Add New</span>
                  </Link>
                </div>
              </div>
            </div>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventories.map((inventory, index) => (
                  <tr key={inventory.id}>
                    <td>{index + 1}</td>
                    <td>{inventory.name}</td>
                    <td>{inventory.quantity}</td>
                    <td>{inventory.description}</td>
                    <td>
                      <Link to={`edit/${inventory.id}`} className="button is-small is-info">
                        <span className="icon is-small">
                          <i className="fas fa-edit"></i>
                        </span>
                        <span>Edit</span>
                      </Link>
                      <button onClick={() => deleteInventory(inventory.id)} className="button is-small is-danger">
                        <span className="icon is-small">
                          <i className="fas fa-trash"></i>
                        </span>
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Inventory Management</strong> by 123210076 and 123210173.
          </p>
        </div>
      </footer>
    </>
  );
};

export default InventoryList;
