import { updateProduct } from "@/lib/actions";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const UpdateProduct = ({ id }: { id: string }) => {
  return (
    <div>
      <Link href={`/apple-dashboard/product/${id}/edit`}>
        <PencilSquareIcon className="w-6" />
      </Link>
    </div>
  );
};

export default UpdateProduct;
