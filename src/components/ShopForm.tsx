import React, { useState } from 'react';
import { createShop, updateShop, fetchShopDetails } from '../APIServices/api';
import { useNavigate, useParams } from 'react-router-dom';

interface Shop {
  name: string;
  address: string;
  city: string;
  state: string;
  description: string;
  image: string;
}

const ShopForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [shop, setShop] = useState<Shop>({
    name: '',
    address: '',
    city: '',
    state: '',
    description: '',
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setShop(prevShop => ({ ...prevShop, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      // Update existing shop
      updateShop(Number(id), shop)
        .then(() => navigate(`/shop/${id}`))
        .catch(error => console.error('Error updating shop:', error));
    } else {
      // Create new shop
      createShop(shop)
        .then(response => navigate(`/shop/${response.data.id}`))
        .catch(error => console.error('Error creating shop:', error));
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Shop Name</label>
          <input type="text" className="form-control" id="name" name="name" value={shop.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={shop.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" value={shop.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control" id="state" name="state" value={shop.state} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={shop.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" name="image" value={shop.image} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ShopForm;

