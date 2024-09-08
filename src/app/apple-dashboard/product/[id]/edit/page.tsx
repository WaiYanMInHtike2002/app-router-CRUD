import UpdateProduct from "@/components/UpdateProduct";
import { relatedProduct, updateProduct } from "@/lib/actions";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const relatedOne = await relatedProduct(id);
  const updateProductWithId = updateProduct.bind(null, id);
  if (!relatedOne) throw new Error("Invalid");
  return (
    <div>
      <div className="text-2xl">Update Product</div>
      <div className="mt-7">
        <form
          action={updateProductWithId}
          className="bg-[#5355] pl-3 pt-4 pb-4 rounded-sm"
        >
          <label htmlFor="name" className="text-xl">
            Enter the new name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={relatedOne?.name}
            className="bg-transparent w-[90%] mt-2 ml-3 p-2 pl-4 border mb-2 rounded-sm"
          />
          <br />
          <label htmlFor="name" className="text-xl">
            Enter the new price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            defaultValue={relatedOne?.price}
            className="bg-transparent w-[90%] ml-3 mt-2 p-2 pl-4 border mb-2 rounded-sm"
          />
          <br />
          <label htmlFor="name" className="text-xl">
            Enter the new amount:
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            required
            defaultValue={relatedOne?.amount}
            className="bg-transparent w-[90%] ml-3 mt-2 p-2 pl-4 border mb-2 rounded-sm"
          />
          <br />
          <input
            type="submit"
            value="Update"
            className="p-2 border ml-3 mt-3 w-40 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Page;
