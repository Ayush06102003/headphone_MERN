import React, { useContext, useEffect } from 'react';
import '../styling/style.css';
import DataItem from './DataItem';
import DataContext from '../context/data/dataContext';

function Allproducts(props) {
  const { data, getdata  } = useContext(DataContext);

  useEffect(() => {
    getdata();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className="all-products">
        <h2>All Products</h2>
        <div className="products">
          {data.length === 0 && 'No products to display'}
          {data.map((item) => {
            return <DataItem key={item._id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Allproducts;

