import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchShopDetails } from '../APIServices/api';
import shopsData from '../APIServices/mockData/shops';

interface Shop {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  description: string;
  image: string;
}

const ShopDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [shop, setShop] = useState<Shop | null>(null);

  useEffect(() => {
    const shop = shopsData[0];
    setShop(shop);
    // fetchShopDetails(Number(id))
    //   .then(response => setShop(response.data))
    //   .catch(error => console.error('Error fetching shop details:', error));
  }, [id]);

  if (!shop) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={shop.image} className="card-img-top" alt={shop.name} />
        <div className="card-body">
          <h5 className="card-title">{shop.name}</h5>
          <p className="card-text">{shop.address}, {shop.city}, {shop.state}</p>
          <p className="card-text">{shop.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;

