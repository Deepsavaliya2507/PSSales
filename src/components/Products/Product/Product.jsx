import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import image from "../../../assets/banner-img.png";

const Product = ({ data, id }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="product-card" onClick={() => navigate("/product/" + id)}> */}
      {/* <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_STRIPE_APP_DEV_URL +
            data.image.data[0].attributes.url
          }
        />
      </div>
      <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div> */}

      {/* </div> */}

      <div className="container flex border-black items-center">
        <div>
          <div className="max-w-sm space-x-4 rounded overflow-hidden shadow-lg">
            <img src={image} className="w-10" required />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={image} className="w-10" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
