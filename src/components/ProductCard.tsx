import React from 'react';
import { Product } from '../types/product';
import { calculateFinalPrice, formatPrice } from '@/utils/priceCalculations';
import { PenLine } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const finalPrice = calculateFinalPrice(product.price, product.discount_product);
  const hasDiscount = product.discount_product !== "" && 
                     !isNaN(parseFloat(product.discount_product)) && 
                     parseFloat(product.discount_product) > 0;

  const isPersonalizable = Boolean(
    product.personalization ? true : false
  );

  return (
    <div 
      className="h-full hover:shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-white rounded-lg">
        {hasDiscount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            -{product.discount_product}%
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-normal"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-2 md:p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <div>
            {hasDiscount ? (
              <>
                <p className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price)} TND
                </p>
                <p className="text-sm font-medium text-[#700100]">
                  {formatPrice(finalPrice)} TND
                </p>
              </>
            ) : (
              <p className="text-sm font-medium text-[#700100]">
                {formatPrice(product.price)} TND
              </p>
            )}
          </div>
          {isPersonalizable && (
            <div className="text-gray-500">
              <PenLine size={16} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;