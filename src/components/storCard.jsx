import React, { useState, useEffect } from "react";

export const StoreCard = ({ image, title, price, id }) => {
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice((price * quantity).toFixed(2));
    }, [price, quantity]);

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div key={id} className="ml-[290px] mt-[50px]">
            <div className="flex ">
                <div>
                    <img className="w-[137.85px] h-[150px] ml-[50px]" src={image} alt="img" />
                </div>
                <div className="w-[450px] mt-[50px]">
                    <h3 className="p-[10px] text-[18px] mt-[9px] font-extrabold text-[#223263] text-center font-roboto">
                        {title.length > 50 ? `${title.substring(0, 50)}...` : title}
                    </h3>
                </div>
                <div className="mt-[68px] ml-[130px]">
                    <span className="text-[18px] text-[#262626] font-normal font-roboto ">${totalPrice}</span>
                </div>
                <div className=" flex gap-[10px] mt-[57px] ml-[100px] w-[124.54px] h-[46px] bg-[#F6F7F8] rounded-[5px]">
                    <button className="w-full h-[46px] text-[25px] text-[#33A0FF] rounded-[5px] font-sans" onClick={handleDecrease}>-</button>
                    <strong className="w-full h-[46px] text-[18px] mt-[10px] text-[#000000] rounded-[5px] flex justify-center pt-[2px] font-roboto font-normal">{quantity}</strong>
                    <button className="w-full h-[46px] text-[25px] text-[#33A0FF] rounded-[5px] font-sans" onClick={handleIncrease}>+</button>
                </div>
                <div className="ml-[74px] mt-[60px]">
                    <h3>{price}</h3>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};
