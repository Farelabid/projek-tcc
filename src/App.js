import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList";
import AddInventory from "./components/AddInventory";
import EditInventory from "./components/EditInventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/add" element={<AddInventory />} />
        <Route path="/edit/:id" element={<EditInventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
