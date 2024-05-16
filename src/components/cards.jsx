// Cards.js
import React, { useState } from "react";
import { add } from "../redux/reducer/card";
import { useDispatch } from "react-redux";
import star from "../../public/star.svg"
import korzinka from "../../public/korzinka1.svg"

export const Cards = ({ title, image, price, description }) => {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    const addStore = (id) => {
        dispatch(add({ id, title, image, price, description }));
    }

    const handleAddToCart = () => {
        if (!addedToCart) {
            setAddedToCart(true);
            const newId = Date.now();
            addStore(newId);
        }
    };
    return (
        <>
            <div>
                <div>
                    <div>
                        <div className="w-[340px] h-[400px] border-[3px] border-[#F6F7F8] rounded-[4px] mt-[35px]">
                            <div>
                                <div onClick={handleAddToCart} className="w-[45px] h-[45px] flex justify-center rounded-full absolute z-[20] ml-[280px] mt-[10px] hover:border-[#33A0FF] duration-300 cursor-pointer border-[2px] border-[#33a0ff37]">
                                    <img className="w-[17.77px] h-[17.77px] mt-[12px] " src={korzinka} alt="" />
                                </div>
                                <div className="flex justify-center">
                                    <img className="h-[272.5px] p-[10px]" src={image} alt={title} />
                                </div>
                                <h3 className="p-[10px] text-[18px] mt-[9px] font-extrabold text-[#223263] text-center font-roboto">
                                    {title.length > 18 ? `${title.substring(0, 18)}...` : title}
                                </h3>

                            </div>
                            <div className="flex justify-center mt-[6px]">
                                <img src={star} alt="star" />
                            </div>
                            <div className="flex justify-center gap-[20px] mt-[8px]">
                                <p className="text-[18px] text-[#40BFFF] font-bold font-roboto">$ {price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
