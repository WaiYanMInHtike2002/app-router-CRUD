import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const CreateNewProduct = () => {
  return (
    <div className=" flex justify-end">
      <Link
        href={"/apple-dashboard/product/create"}
        className="mr-3 w-fit p-2 flex bg-blue-500 rounded-sm"
      >
        <PlusIcon className="w-5 mr-1" /> NEW PRODUCT
      </Link>
    </div>
  );
};

export default CreateNewProduct;
