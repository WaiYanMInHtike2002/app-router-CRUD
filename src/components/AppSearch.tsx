"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
const AppSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div>
      <div className="relative">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter the product name"
          className="bg-transparent border outline-none p-2 w-full mt-2 pl-10"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <MagnifyingGlassIcon className="w-5 absolute top-[18px] left-3" />
      </div>
    </div>
  );
};

export default AppSearch;
