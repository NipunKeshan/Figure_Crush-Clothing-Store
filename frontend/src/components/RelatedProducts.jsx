import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { ShopContext } from '../context/shopContext';

const RelatedProducts = ({category,subCategory }) => {
  const {products} = useContext(ShopContext)
  const [related, setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category );
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory );
            console.log(productsCopy.slice(0,4));
            setRelated(productsCopy);
        }
    }, [products]);


    return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
