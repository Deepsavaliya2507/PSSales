import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="products-container flex">
            {!innerPage && <div className="">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {/* {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))} */}
                <Product />
            </div>
        </div>
    );
};

export default Products;