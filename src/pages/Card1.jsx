import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreCard } from "../components/storCard";

export const Cards12 = () => {
    const { prodacts } = useSelector((states) => states.card);
    return (
        <>
            <div className="container">
                <div className="w-[1256.11px] flex mt-[50px]">
                    <div className="ml-[154px] ">
                        <h3 className="text-[20px] text-[#22262A] font-bold">PRODUCT</h3>
                    </div>
                    <div>
                        <ul className="flex gap-[115px] ml-[605px]">
                            <li className="text-[20px] text-[#22262A] font-bold">PRICE</li>
                            <li className="text-[20px] text-[#22262A] font-bold">QTY</li>
                            <li className="text-[20px] text-[#22262A] font-bold w-[113.8px]">UNIT PRICE</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                {prodacts.map((items) => (
                    <StoreCard key={items.id} image={items.image} title={items.title} description={items.description} price={items.price} />
                ))}
            </div>
        </>
    );
};
