import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireStoreDb } from "../../../firebaseConfig";
// import { hover } from "@testing-library/user-event/dist/hover";

const Product = () => {
  // const [newItem, setNewProductName] = useState("");
  const [productname, setProductname] = useState([]);
  const [Price, setProductPrice] = useState("");
  const [Image, setProductImage] = useState("");

  const [Like, setLike] = useState([]);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const [updateProductName, setupdateProductName] = useState("");
  const [updatedProductPrice, setupdateProductPrice] = useState("");

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "products"));

    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().name) {
        data.push({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          image: doc.data().image,
        });
      }
    });
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(fireStoreDb, "products", id));
    fetchData();
  };

  const handleLike = async (data) => {
    // if(productname && Price && Image){
    await addDoc(collection(fireStoreDb, "addproducts"), {
      name: data.name,
      image: data.image,
      price: data.price,
      id: data.id,
    });
    fetchData();
    // }
  };

  return (
    <div>
      <ul className="flex grid grid-cols-4">
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <div className="pt-12 pb-12 flex justify-around border-black">
                <div className="max-w-sm relative rounded mr-4 w-1/4 overflow-hidden shadow-lg widthsize">
                  <div className="grid justify-items-center">
                    <img src={item.image} className="rounded imgchange" />
                  </div>
                  <span className="inline-block absolute top-0 right-0 text-sm font-semibold"></span>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      <div className="form">
                        <p>Name : {item.name}</p>
                      </div>
                    </div>
                    <p>Price : {item.price}</p>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block pr-2 rounded- text-sm font-semibold">
                      <button
                        className="px-2 py-1 rounded-full text-sm text-blue-700 font-semibold border border-blue-700 hover:text-black
               hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      >
                        Buy it Now
                      </button>
                    </span>
                    <span className="inline-block rounded-full text-sm font-semibold">
                      <button
                        onClick={() => handleLike(item)}
                        className="px-2 py-1 rounded-full text-sm text-blue-700 font-semibold border border-blue-700 hover:text-black
               hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      >
                        Add to Cart
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
