import { fetchProducts } from "@/lib/datas";
import React from "react";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

const AppTable = async ({
  search,
  currentPage,
}: {
  search: string;
  currentPage: number;
}) => {
  const searchResult = await fetchProducts(search, currentPage);
  return (
    <div className="w-full">
      <div className="w-full mt-3 lg:hidden flex flex-wrap justify-center md:justify-evenly">
        {searchResult?.map((item, index) => (
          <div
            className="min-w-52 md:w-60 h-[220px] m-2 pl-3 pt-2 rounded-md shadow-sm text-xl bg-[#5355]"
            key={""}
          >
            <div className="mb-3">{index + 1}.</div>
            <label htmlFor="">Name:</label>
            <span className="mb-3 inline-block">{item.name}</span>
            <br />
            <label htmlFor="">Price:</label>
            <span className="mb-3 inline-block">{item.price}</span>
            <br />
            <label htmlFor="">Amount:</label>
            <span className="mb-3 inline-block">{item.amount}</span>
            <br />
            <div className="flex w-full justify-end mb-3 gap-2">
              <div>
                <UpdateProduct id={item.id} />
              </div>
              <div className="mr-2">
                <DeleteProduct id={item.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full bg-[#7173a1]">
              <th className="px-5 py-3 lg:py-5 text-left">No.</th>
              <th className="px-5 py-3 lg:py-5 text-left ">Product Name</th>
              <th className="px-5 py-3 lg:py-5 text-left">Price</th>
              <th className="px-5 py-3 lg:py-5 text-left">Amount</th>
              <th className="px-5 py-3 lg:py-5 text-left">Date</th>
              <th className="px-5 py-3 lg:py-5 text-left">Update</th>
              <th className="px-5 py-3 lg:py-5 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {searchResult?.map((item) => (
              <tr key={item.id} className="bg-[#53557f]">
                <td className="px-5 py-3 lg:py-5 border-b-2">{item.forNum}</td>
                <td className="px-5 py-3 lg:py-5 border-b-2">{item.name}</td>
                <td className="px-5 py-3 lg:py-5 border-b-2">{item.price}</td>
                <td className="px-5 py-3 lg:py-5 border-b-2">{item.amount}</td>
                <td className="px-5 py-3 lg:py-5 border-b-2">{`${
                  new Date(item.createdAt).toISOString().split("T")[0]
                }`}</td>
                <td className="px-5 py-3 border-b-2">
                  <UpdateProduct id={item.id} />
                </td>
                <td className="px-5 py-3 border-b-2">
                  <DeleteProduct id={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppTable;
