import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <>
        {!innerPage && <div className="text-2xl">Popular Product</div>}
      {/* <div className="products-container flex mt-0" required>
        <div className={`products ${innerPage ? "innerPage" : ""}`}>
          {Product?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
        </div>
      </div> */}
      <Product />
    </>
  );
};

export default Products;