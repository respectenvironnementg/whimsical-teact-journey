import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import { calculateFinalPrice } from '@/utils/priceCalculations';
import { PenLine } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const hasDiscount = product.discount_product !== "" && 
                     !isNaN(parseFloat(product.discount_product)) && 
                     parseFloat(product.discount_product) > 0;

  const finalPrice = calculateFinalPrice(
    product.price,
    product.discount_product
  );

  return (
    <div 
      className="h-full hover:shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/product/${product.id_product}`)}
    >
      <div className="h-[300px] bg-transparent overflow-hidden mb-3 relative">
        {hasDiscount && (
          <div className="absolute top-2 right-2 bg-[#700100] text-white px-2 py-1 rounded-full text-sm font-medium">
            -{product.discount_product}%
          </div>
        )}
        <img
          src={product.img_product}
          alt={product.nom_product}
          className="w-full h-full object-contain mix-blend-normal"
          loading="eager"
          decoding="sync"
        />
      </div>
      <div className="p-2 md:p-4">
        <div className="text-base font-['WomanFontRegular'] text-[#591C1C]">
          {product.nom_product}
        </div>
        <div className="text-sm text-gray-600 uppercase">
          {product.type_product}<br />
          {product.color_product}
        </div>
        <div className="mt-2 font-['WomanFontRegular']">
          {hasDiscount ? (
            <div className="space-y-1">
              <span className="text-[#700100] font-bold">
                {finalPrice} TND
              </span>
              <span className="text-gray-500 line-through block">
                {product.price_product} TND
              </span>
            </div>
          ) : (
            <span className="text-black">
              {product.price_product} TND
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;