import React, { useContext, useEffect } from 'react';
import '../styling/style.css';
import DataItem from './DataItem';
import DataContext from '../context/data/dataContext';

function Allproducts({ category, showAlert }) {
  const { data, getdata } = useContext(DataContext);
 
  useEffect(() => {
    getdata();
    // eslint-disable-next-line
  }, []);

  const type = category === 'all' ? 
  data : data.filter(item => item.category === category);

  return (
    <div>
      <section className="all-products">
        <h2>{category === 'all' ? 'All Products' : `${category.charAt(0).toUpperCase() + category.slice(1)} Products`}</h2>
        <div className="products">
          {type.length === 0 && 'No products to display'}
          {type.map((item) => {
            return <DataItem key={item._id} item={item} showAlert={showAlert} />;
          })}
        </div>
      </section>
    </div>
  );
}


export default Allproducts;

