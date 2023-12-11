import Link from "next/link";
import React from "react";
import styles from '@/styles/Home.module.css';
import { GiProcessor } from "react-icons/gi";
import { BsMotherboard } from "react-icons/bs";
import { MdStorage } from "react-icons/md";
import { GiPowerRing } from "react-icons/gi";
import { MdOutlineSdStorage,MdOutlineMonitor  } from "react-icons/md";


const Category = () => {
  return (
    <div className="bg-white my-5 pt-2 py-7">
      <div className="w-full mx-auto px-5">
        <div className="border-b-2 border-black flex justify-between items-center">
          <h3 className={`bg-black text-white text-lg font-bold ${styles.category_title}` }>Top Categories</h3>
          <Link href='/' className="font-bold text-green-500">See all categories</Link>
        </div>
        {/* -----------category------------- */}
        <div className="flex justify-between items-center flex-wrap text-center mt-5">
          {/* ----------c-1-------- */}
          <Link href='/featured/Processor'><GiProcessor className="text-6xl mx-auto text-green-500" /><h2 className="text-sm font-extrabold">Processor</h2></Link>
          {/* ----------c-2-------- */}
          <Link href='/featured/Motherboard' className="px-2"><BsMotherboard className="text-6xl mx-auto text-green-500"/><h2 className="text-sm font-extrabold">Motherboard</h2> </Link>
          {/* ----------c-3-------- */}
          <Link href='/'><MdStorage className="text-6xl mx-auto text-green-500"/><h2 className="text-sm font-extrabold">RAM</h2></Link>
          {/* ----------c-4-------- */}
          <Link href='/' className="px-2"><GiPowerRing className="text-6xl mx-auto text-green-500"/><h2 className="text-sm font-extrabold ">Power Supply Unit</h2></Link>
          {/* ----------c-5-------- */}
          <Link href='/'><MdOutlineSdStorage className="text-6xl mx-auto text-green-500"/><h2 className="text-sm font-extrabold">Storage Device</h2></Link>
          {/* ----------c-6-------- */}
          <Link href='/'><MdOutlineMonitor className="text-6xl mx-auto text-green-500"/><h2 className="text-sm font-extrabold">Monitor</h2></Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
