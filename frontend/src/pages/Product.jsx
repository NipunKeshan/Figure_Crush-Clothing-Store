import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function normalizeImages(item) {
  if (Array.isArray(item.image)) return item.image;
  if (Array.isArray(item.images)) return item.images;
  if (typeof item.image === 'string' && item.image) return [item.image];
  return [];
}

function normalizeSizes(item) {
  // Try common keys: size, sizes, availableSizes; accept array or comma-separated string
  const raw =
    item.size ?? item.sizes ?? item.availableSizes ?? item.available_size ?? null;

  if (Array.isArray(raw)) return raw.filter(Boolean).map(String);
  if (typeof raw === 'string')
    return raw.split(',').map(s => s.trim()).filter(Boolean);
  return [];
}

const Product = () => {
  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (Array.isArray(products) && products.length) {
      const found = products.find(p => String(p._id) === String(productId));
      if (found) {
        setProductData(found);

        const imgs = normalizeImages(found);
        setImage(imgs[0] || '');

        const sz = normalizeSizes(found);
        setSize('');
      } else {
        setProductData(null);
        setImage('');
        setSize('');
      }
    }
  }, [productId, products]);

  if (!productData) return <div className="border-t-2 pt-10">Loading product...</div>;

  const images = normalizeImages(productData);
  const sizes  = normalizeSizes(productData);

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Image Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full gap-3 sm:gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product Image ${index + 1}`}
                onClick={() => setImage(img)}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border ${image === img ? 'border-black' : 'border-transparent'}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            {image ? <img src={image} alt="Selected Product" className="w-full h-auto" /> : null}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {sizes.length ? (
                sizes.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSize(s)}
                    className={`border py-2 px-4 bg-gray-100 transition-colors ${
                      s === size ? 'border-orange-500' : 'border-gray-300'
                    }`}
                  >
                    {s}
                  </button>
                ))
              ) : (
                <span className="text-sm text-gray-500">No sizes available</span>
              )}
            </div>
            <button
             onClick={() => addToCart(productData._id, size)} className='bg-black text-white py-3 px-8 text-sm active:bg-gray-700'
            >ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'></hr>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Authentic Products</p>
              <p>Free Shipping on orders over $100</p>
              <p>30 Days Return Policy</p>
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* Placeholder for related products or additional content */}
      <div className='mt-20'>
              <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews</p>
              </div>
              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>An e commerce product is a tangible item that is sold online through various platforms. These products can range from clothing and electronics to home goods and beauty products. The key characteristic of e commerce products is that they are available for purchase via the internet, allowing customers to browse and buy from the comfort of their own homes.</p>
              <p>Customer reviews play a crucial role in the e commerce ecosystem, as they provide valuable feedback and insights for both potential buyers and sellers. Positive reviews can enhance a product's credibility and encourage more sales, while negative reviews can highlight areas for improvement and help customers make informed decisions.</p>
              </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
