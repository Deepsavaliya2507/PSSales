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

  const handleCreate = async () => {
    if (productname && Price && Image) {
      await addDoc(collection(fireStoreDb, "products"), {
        name: productname,
        image: Image,
        price: Price,
      });
      fetchData();
      setProductname("");
      setProductPrice("");
      setProductImage("");
    }
    // Add a new document in collection "cities"
  };

  const handleUpdate = async (id, productname, Price , Image) => {
    if (productname && Price && Image) {
      await setDoc(doc(fireStoreDb, "products", id), {
        name: productname,
        image: Image,
        price: Price,
      });
      fetchData();
    }
    console.log(productname);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(fireStoreDb, "products", id));
    fetchData();
  };

  const handleLike = async (data) => {
    await addDoc(collection(fireStoreDb, "likeProducts"), {
      name: data.name,
      image: data.image,
      price: data.price,
    });
  };

  return (
    <div>
      <h2>CRUD App with Firebase</h2>
      <input
        type="text"
        style={{
          border: "2px solid black",
          padding: "10px 30px",
          marginBottom: "10px",
        }}
        placeholder="Please add Product Image"
        value={Image}
        onChange={(e) => setProductImage(e.target.value)}
      />
      <br />
      <input
        type="text"
        style={{ border: "2px solid black", padding: "10px 30px" }}
        placeholder="Please add Product Name"
        value={productname}
        onChange={(e) => setProductname(e.target.value)}
      />
      <br />
      <input
        type="number"
        style={{
          border: "2px solid black",
          margin: "10px 0px",
          padding: "10px 30px",
        }}
        placeholder="Please add Product Price"
        value={Price}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          handleCreate();
        }}
        style={{
          padding: "10px 30px",
          border: "2px solid black",
          backgroundColor: "wheat",
          margin: "0px 50px",
          borderRadius: "5px",
        }}
      >
        Add Product
      </button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className="pt-12 pb-12 flex justify-around border-black">
              <div className="max-w-sm relative rounded mr-4 w-1/4 overflow-hidden shadow-lg">
                <div className="grid justify-items-center">
                  <img
                    src={item.image}
                    alt=""
                    srcset=""
                    height={500}
                    width={300}
                  />
                </div>

                <span className="inline-block text-sm font-semibold">
                  <input
                    className="px-3 py-1 rounded-full text-xl text-black font-semibold hover:text-black
               hover:bg-white focus:outline-none hover:text-bg-black relative"
                    // onClick={() => handleCreate()}
                    type="text"
                    placeholder="Update Product Name"
                    defaultValue={item.name}
                    onChange={(e) => setupdateProductName(e.target.value)}
                  />
                  <p>{updateProductName}</p>
                  <span className=" absolute top-0 right-0">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span className="icon-space absolute top-0 right-0" required>
                    <i className="fa-solid fa-heart text-red-600"></i>
                  </span>
                </span>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <input
                      type="number"
                      placeholder="Update Product Price"
                      defaultValue={item.price}
                      onChange={(e) => setupdateProductPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <button
                      className="border border-blue-500 p-3 mr-2"
                      onClick={() =>
                        handleUpdate(
                          item.id,
                          updateProductName,
                          updatedProductPrice
                        )
                      }
                    >
                      Update Product
                    </button>
                  </div>
                </div>  

                <button
                  className="border border-blue-500 p-3 mr-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="border border-blue-500 p-3 hover:"
                  onClick={() => handleLike(item)}
                >
                  Like
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
