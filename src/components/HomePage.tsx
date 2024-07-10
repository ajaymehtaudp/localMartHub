import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
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

const HomePage: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    state: '',
    city: '',
  });

  useEffect(() => {
    // Fetch shop data
    setShops(shopsData);
    // axios.get('/api/shops')
    //   .then(response => setShops(response.data))
    //   .catch(error => console.error('Error fetching shops:', error));
  }, []);

  // Extract unique values for filters
  const uniqueStates = Array.from(new Set(shops.map(shop => shop.state)));
  const uniqueCities = Array.from(new Set(shops.map(shop => shop.city)));

  // Convert to options for react-select
  const stateOptions = uniqueStates.map(state => ({ value: state, label: state }));
  const cityOptions = uniqueCities.map(city => ({ value: city, label: city }));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleStateChange = (selectedOption: any) => {
    setFilters({ ...filters, state: selectedOption ? selectedOption.value : '' });
  };

  const handleCityChange = (selectedOption: any) => {
    setFilters({ ...filters, city: selectedOption ? selectedOption.value : '' });
  };

  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.description.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(shop =>
    (!filters.state || shop.state === filters.state) &&
    (!filters.city || shop.city === filters.city)
  );

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search by shop name or product name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <Select
            options={stateOptions}
            isClearable
            placeholder="Select State"
            onChange={handleStateChange}
          />
        </div>
        <div className="col-md-6 mb-2">
          <Select
            options={cityOptions}
            isClearable
            placeholder="Select City"
            onChange={handleCityChange}
          />
        </div>
      </div>
      <div className="row">
        {filteredShops.map(shop => (
          <div className="col-md-4 mb-4" key={shop.id}>
            <div className="card">
              <img src={shop.image} className="card-img-top" alt={shop.name} />
              <div className="card-body">
                <h5 className="card-title">{shop.name}</h5>
                <p className="card-text">{shop.address}, {shop.city}, {shop.state}</p>
                <p className="card-text">{shop.description}</p>
                <Link to={`/shop/${shop.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
