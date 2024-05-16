import React from "react";
import { Cards } from "../components/cards";
import { Link } from "react-router-dom";
import korzinka from "../../public/korzinka.svg"

export const Card1 = () => {
    const [data, setData] = React.useState([]);

   React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            console.log("Received data:", data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}, []);

    return (
        <>
            <div className="container">

                <Link to="/card">
                    <div className=" ml-[1300px] mt-[50px] w-[50px] h-[50px] flex justify-center rounded-full border-[3px] border-[#33a0ff86] bg-[#ffffffed]">
                        <img className="w-[30px] h-[30px] mt-[9px]" src={korzinka} alt="" />
                    </div>
                </Link>
                <div>
                    <h2 className="text-center text-[35px] text-[#22262A] font-roboto font-semibold">BEST SELLER</h2>
                </div>
                <div className="grid grid-cols-3 gap-[34px]">
                    {data.map((items) => <Cards key={items.id} image={items.image} title={items.title} description={items.description} price={items.price} />)}
                </div>
            </div>
        </>
    )
}