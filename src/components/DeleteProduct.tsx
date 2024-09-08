import { deleteProduct } from "@/lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const DeleteProduct = ({ id }: { id: string }) => {
  const deleteProductWithId = deleteProduct.bind(null, id);
  return (
    <div>
      <div>
        <form action={deleteProductWithId}>
          <button>
            <TrashIcon className="w-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
