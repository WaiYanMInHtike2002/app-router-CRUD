import { createProduct } from "@/lib/actions";
import React from "react";

const Page = async () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%]">
        <div className="text-2xl mb-7 -ml-7">Create Product</div>
        <form
          action={createProduct}
          className="bg-[#5355] pt-3 pb-3 pl-4 rounded-sm "
        >
          <label htmlFor="name" className=" text-xl">
            Enter the product name:
          </label>
          <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="..."
            className="p-2 pl-3 ml-3 mt-1 bg-transparent border rounded-md w-[95%] mb-3 outline-none placeholder:text-gray-300"
          />{" "}
          <br />
          <label htmlFor="price" className="mb-1 text-xl">
            Enter the product price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            placeholder="..."
            className="p-2 pl-3 ml-3  mt-1 bg-transparent border rounded-md w-[95%] mb-3 outline-none placeholder:text-gray-300"
          />{" "}
          <br />
          <label htmlFor="amount" className="mb-1 text-xl">
            Enter the item amount:
          </label>
          <input
            type="number"
            name="amount"
            required
            id="amount"
            placeholder="..."
            className="p-2 pl-3 ml-3 mt-1 bg-transparent border rounded-md w-[95%] mb-3 outline-none placeholder:text-gray-300"
          />{" "}
          <br />
          <input
            type="submit"
            value="Create"
            className="border p-2 rounded-md ml-3 mt-2 w-40 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Page;
