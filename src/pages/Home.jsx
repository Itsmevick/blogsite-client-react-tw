import React from "react";
import BusinessBackground from "../assets/business_general_2.jpg";
import StockMarketImage from "../assets/stock_market.jpg";
import BitcoinImage from "../assets/bitcoin_mkt.png";
import NftMarketImage from "../assets/nft_mkt.png";
import { Link } from "react-router-dom";
import { IoMdPerson, IoIosTime } from "react-icons/io";
import { MdTopic } from "react-icons/md";

export default function Home() {
    

  return (
    <div className="py-8 flex flex-col">
      <div className="relative">
        <button className="py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest">
          Top news
        </button>
      </div>
      <div className="flex gap-16">
        <div className="flex-initial w-[70%] h-80 relative">
          <img
            src={BusinessBackground}
            alt="/"
            className="w-full h-full bg-cover"
          />
          <div className="absolute top-0 left-0  w-full h-full backdrop-blur-sm">
            <div className="absolute top-[60%] flex flex-col w-[90%] left-[5%] text-white">
              <h1 className="py-2 font-bold text-3xl">
                Some of the best businesses to venture in
              </h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, dolorum vero deleniti similique praesentium
                dolore reiciendis ...
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-64 bg-slate-900" />
        <div className="flex flex-col flex-auto">
          <h1 className="text-2xl pb-4">Categories</h1>
          <div className="flex flex-col gap-2 text-lg">
            <Link
              to="#"
              className="py-3 px-4 border-l-4 bg-slate-200 w-full border-slate-600 hover:border-slate-600 hover:scale-105 duration-200"
            >
              Blockchain
            </Link>
            <Link
              to="#"
              className="py-3 px-4 border-l-4 bg-slate-200 w-full border-slate-600 hover:border-slate-600 hover:scale-105 duration-200"
            >
              Leadership
            </Link>
            <Link
              to="#"
              className="py-3 px-4 border-l-4 bg-slate-200 w-full border-slate-600 hover:border-slate-600 hover:scale-105 duration-200"
            >
              Technology in Business
            </Link>
            <Link
              to="#"
              className="py-3 px-4 border-l-4 bg-slate-200 w-full border-slate-600 hover:border-slate-600 hover:scale-105 duration-200"
            >
              Marketing
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="tracking-widest font-bold text-2xl p-4">Trending</h1>
        <div className="w-full h-48 flex justify-between gap-4">
          <div className="w-[33%] h-full relative">
            <img src={StockMarketImage} alt="/" className="w-full h-full" />
            <div className="absolute left-[5%] top-[10%] w-[90%] text-white font-semibold">
              <div className="flex flex-col w-full h-full justify-center relative">
                <div className="absolute top-1 flex flex-col ">
                  <h1 className="text-bold text-xl text-gray-100">
                    What to expect in the stock market as the year ends
                  </h1>
                  <p className="text-semibold w-full h-12 text-md text-gray-200">Lorem, ipsum dolor sit ametm dolor sit ametm dolor sit amet ...</p>
                </div>
                <div className="absolute top-32">
                <div className="flex gap-8 text-sm font-bold tracking-normal text-gray-300">
                <div className="flex items-center gap-2">
                    <IoMdPerson />
                    <h3>John Doe</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosTime />
                    <h3>2 days ago</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdTopic />
                    <h3>Finance</h3>
                  </div>
                </div>  
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] h-full relative">
            <img src={BitcoinImage} alt="/" className="w-full h-full" />
            <div className="absolute left-[5%] top-[10%] w-[90%] text-white font-semibold">
              <div className="flex flex-col w-full h-full justify-center relative">
                <div className="absolute top-1 flex flex-col ">
                  <h1 className="text-bold text-xl text-gray-100">
                    Bitcoin hits new lows in November. What to expect.
                  </h1>
                  <p className="text-semibold w-full h-12 text-md text-gray-200">Lorem, ipsum dolor sit ametm dolor sit ametm dolor sit amet ...</p>
                </div>
                <div className="absolute top-32">
                <div className="flex gap-8 text-sm font-bold tracking-normal text-gray-300">
                <div className="flex items-center gap-2">
                    <IoMdPerson />
                    <h3>Marie Curie</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosTime />
                    <h3>1 week ago</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdTopic />
                    <h3>Blockchain</h3>
                  </div>
                </div>  
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] h-full relative">
            <img src={NftMarketImage} alt="/" className="w-full h-full" />
            <div className="absolute left-[5%] top-[10%] w-[90%] text-white font-semibold">
              <div className="flex flex-col w-full h-full justify-center relative">
                <div className="absolute top-1 flex flex-col ">
                  <h1 className="text-bold text-xl text-gray-100">
                    Simplifying NFT's to everyone
                  </h1>
                  <p className="text-semibold w-full h-12 text-md text-gray-200">Lorem, ipsum dolor sit ametm dolor sit ametm dolor sit amet ...</p>
                </div>
                <div className="absolute top-32">
                <div className="flex gap-8 text-sm font-bold tracking-normal text-gray-300">
                <div className="flex items-center gap-2">
                    <IoMdPerson />
                    <h3>Charlie smith</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosTime />
                    <h3>2 days ago</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdTopic />
                    <h3>BlockChain</h3>
                  </div>
                </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
