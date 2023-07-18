import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { fireStoreDb } from "../../../firebaseConfig";
import { React, useState , useEffect } from "react";
import "./Product.scss";
import image from "../../../assets/banner-img.png";

const Product = () => {
  // const navigate = useNavigate();

  // const validateEmail = (e) => {
  //   if (e.target?.value) {
  //     EmailSub(false);
  //     setEmailSub(e.target.value);
  //   } else {
  //     EmailSub(true);
  //   }
  // };

  return <>{Array(1).fill(<Post />)}</>;
};

function Post() {
  const [Like, setLike] = useState("");
  // const productname = event.target.Value;

  // const handleCreate = async () => {
  //   await addDoc(collection(fireStoreDb, "like"), {
  //     first:
  //     // productname.e.target.Value
  //     "",
  //     last: Like,
  //     born: 1234,
  //   });
  //   setLike("");
  // };

  const [data, setData] = useState([]);
  const [newItem, setNewProductName] = useState("");
  const [newPrice, setNewProductPrice] = useState("");
  const [newImage, setNewProductImage] = useState("");

  const [onItemChange, updateProductName] = useState("");
  const [updatedProductPrice, updateProductPrice] = useState("");

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "like"));

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
    if (newItem && newPrice && newImage) {
      await addDoc(collection(fireStoreDb, "like"), {
        name: Like,
        image: "newImage",
        price: "newPrice",
      });
      fetchData();
      setNewProductName("");
      setNewProductPrice("");
      setNewProductImage("");
    }
    // Add a new document in collection "cities"
  };

  const handleUpdate = async (id, newText, newPrice) => {
    if (newText && newPrice) {
      await setDoc(doc(fireStoreDb, "like", id), {
        name: Like,
        image: "",
        price: newPrice,
      });
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(fireStoreDb, "like", id));
    fetchData();
  };

  const handleLike = async (data) => {
    await addDoc(collection(fireStoreDb, "like"), {
      name: data.name,
      image: data.image,
      price: data.price,
    });
  };

  return (
    <div>
      <div className="pt-12 pb-12 flex justify-around  border-black">
        <div className="max-w-sm relative rounded mr-4 w-1/4 overflow-hidden shadow-lg">
          <div className="grid justify-items-center">
            <img src={image} className="w-32 pt-6" />
          </div>
          <span className="inline-block absolute top-0 right-0 text-sm font-semibold">
            <button
              className="px-3 py-1 rounded-full text-xl text-black font-semibold hover:text-black
               hover:bg-white focus:outline-none hover:text-bg-black"
              onClick={() => handleCreate()}
            >
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-heart text-red-600"></i>
            </button>
          </span>

          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2"
              //  Value={productname.event.target.Value}
            >
              The Coldest Sunset
            </div>
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
                className="px-2 py-1 rounded-full text-sm text-blue-700 font-semibold border border-blue-700 hover:text-black
               hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>

        <div className="max-w-sm relative mr-4 w-1/4 rounded overflow-hidden shadow-lg">
          <div className="grid justify-items-center">
            <img src={image} className="w-32 pt-6" />
          </div>
          <span className="inline-block absolute top-0 right-0 text-sm font-semibold">
            <button
              className="px-3 py-1 rounded-full text-xl text-black font-semibold hover:text-black
               hover:bg-white focus:outline-none hover:text-bg-black"
            >
              <i class="fa-regular fa-heart"></i>
            </button>
          </span>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
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
                className="px-2 py-1 rounded-full text-sm text-blue-700 font-semibold border border-blue-700 hover:text-black
               hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>

        <div className="max-w-sm relative mr-4 w-1/4 rounded overflow-hidden shadow-lg">
          <div className="grid justify-items-center">
            <img src={image} className="w-32 pt-6" />
          </div>
          <span className="inline-block absolute top-0 right-0 text-sm font-semibold">
            <button
              className="px-3 py-1 rounded-full text-xl text-black font-semibold hover:text-black
               hover:bg-white focus:outline-none hover:text-bg-black"
            >
              <i class="fa-regular fa-heart"></i>
            </button>
          </span>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
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
                className="px-2 py-1 rounded-full text-sm text-blue-700 font-semibold border border-blue-700 hover:text-black
               hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>

        <div className="max-w-sm relative mr-4 w-1/4 rounded overflow-hidden shadow-lg">
          <div className="grid justify-items-center">
            <img src={image} className="w-32 pt-6" />
          </div>
          <span className="inline-block absolute top-0 right-0 text-sm font-semibold">
            <button
              className="px-3 py-1 rounded-full text-xl text-black font-semibold hover:text-black
               hover:bg-white focus:outline-none hover:text-bg-black"
            >
              <i class="fa-regular fa-heart"></i>
            </button>
          </span>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
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
  );
}

export default Product;
