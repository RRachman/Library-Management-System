import axios from 'axios';

class InventoryService {
  getInventories() {
    return axios.get('/inventory');
  }

  createInventory(inventory) {
    return axios.post('/inventory', inventory);
  }

  getInventoryById(inventoryId) {
    return axios.get(`/inventory/${inventoryId}`);
  }

  updateInventory(inventory, inventoryId) {
    return axios.put(`/inventory/${inventoryId}`, inventory);
  }

  deleteInventory(inventoryId) {
    return axios.delete(`/inventory/${inventoryId}`);
  }
}

export default new InventoryService();
