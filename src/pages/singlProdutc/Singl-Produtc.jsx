import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import ReactStars from "react-stars";
import { Link, useParams } from "react-router-dom";
import img from "../../assets/images/imgs.png";
import img1 from "../../assets/images/imgs1.png";
import { useGetSingleCategoryQuery } from "../../redux/api/categoreyApi";
import { IoCartOutline } from "react-icons/io5";

const SinglProdutc = () => {
  const { id } = useParams();
  const { data } = useGetSingleCategoryQuery(id);

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="container my-3 w-full flex items-center mt-6 mb-7">
        <Link to={"/products"}>
          <p className="text-[16px] font-[500]">Products / </p>
        </Link>
        <p className="text-[16px] font-[500]"> Gaming Headsets & Audio / </p>
        <p className="text-[18px] font-[500]">{data?.name}</p>
      </div>
      <div className="container grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
        <div>
          <img
            className="w-[400px] bg-[#f4f4f4] h-[500px] mb-4 object-contain"
            src={data?.image_url}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[24px] leading-[50px] font-integral sm:text-[34px] md:text-[30px] lg:text-[34px] font-[700]">
              {data?.name}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {data?.description}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {data?.name}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1">
              <ReactStars
                value={data?.ratings_stars}
                size={20}
                color1="white"
                color2="#FFC633"
                edit={false}
              />
            </div>
            <p className="text-[15px] text-[#0007]">{data?.ratings_stars}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-1">
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#000000]">
              ${data?.price}/or/month
            </p>
            <p className="text-[18px] font-bold">
              Suggested payments with 6 month special financing
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text-[24px] font-bold text-[#000000]">Choose color</p>
            <div className="flex  gap-4">
              {data?.color_options?.map((color, exs) => (
                <div key={exs}>
                  <button
                    className="w-[66px] border rounded-full h-[66px]"
                    style={{ background: color }}
                  ></button>
                </div>
              ))}
            </div>
          </div>
          x
          <hr />
          <div className="flex gap-[62px] mb-6">
            <div className="flex items-center border-green-500 border-2 justify-between rounded-2xl bg-[#F0F0F0] px-[10px] w-[30%] lg:w-[35%]">
              <button
                className="text-[22px]"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <p className="text-[18px]">{quantity}</p>
              <button className="text-[22px]" onClick={incrementQuantity}>
                +
              </button>
            </div>
            <div className="w-[150px]">
              <p className="text-[14px]">
                Only <span className="text-[#0BA42D]"> 16 items</span> left!
                Don’t miss it{" "}
              </p>
            </div>
          </div>
          <button
            className="w-[80%] rounded-2xl bg-[#0BA42D] text-white h-[52px] 
    hover:bg-[#08A12A] hover:shadow-lg hover:scale-105 
    active:bg-[#078B25] active:scale-95 active:shadow-sm 
    disabled:bg-[#0BA42D] disabled:opacity-80 disabled:cursor-not-allowed 
    focus:outline-none focus:ring-2 focus:ring-gray-500 
    transition-all duration-300 ease-in-out flex gap-3 items-center justify-center border-none"
            disabled={false} // Change to true to see the disabled state
          >
            <IoCartOutline className="text-[#fff]" />
            <p className="text-[15px] text-[#fff] font-[500]">Add to Cart</p>
          </button>
          <div className="border border-[#6A6969] border-dashed  rounded-2xl flex flex-col gap-8 mt-8 pl-[30px] p-[20px]">
            <div className="flex gap-4 items-center">
              <img
                className="w-[25px] h-[25px] object-contain"
                src={img}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-[18px] text-[#0D2612] font-[600]">
                  Free delivery
                </p>
                <a className="text-[15px] font-bold text-[#0D2612]" href="#">
                  Enter your Postal Code for Delivery Availability
                  <hr className="border border-[#0D2612]" />
                </a>
              </div>
              <p> </p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <img
                className="w-[25px] h-[25px] object-contain"
                src={img1}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-[18px] text-[#0D2612] font-[600]">
                  Return Delivery
                </p>
                <a className="text-[15px] font-bold text-[#0D2612]" href="#">
                  Free delivery 30 Days return
                  <hr className="border border-[#0D2612]" />
                </a>
              </div>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border border-[#6A6969] border-dashed mb-10 container" />
    </>
  );
};

export default SinglProdutc;
