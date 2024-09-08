import AppPagination from "@/components/AppPagination";
import AppSearch from "@/components/AppSearch";
import AppTable from "@/components/AppTable";
import CreateNewProduct from "@/components/CreateNewProduct";
import { fetchPages } from "@/lib/datas";
import { Pagination } from "@mui/material";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { search: string; page: number };
}) => {
  const search = searchParams.search || "";
  const currentPage = Number(searchParams.page) || 1;
  const totalPages = await fetchPages(search);
  return (
    <div className="w-full">
      <div className="text-2xl mb-3 ">Products</div>
      <div>
        <CreateNewProduct />
      </div>
      <AppSearch />
      <div className="w-full">
        <AppTable search={search} currentPage={currentPage} />
      </div>
      <div className="flex justify-end mt-3">
        <AppPagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default page;
