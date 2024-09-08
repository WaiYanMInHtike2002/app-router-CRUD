"use client";
import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";
import SignIn from "./SignIn";
import { clsx } from "clsx";
import {
  BellAlertIcon,
  HomeIcon,
  RectangleGroupIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
const side_bar_pages = [
  {
    id: nanoid(10),
    name: "Home",
    href: "/apple-dashboard",
    svg: <HomeIcon className="w-6" />,
  },
  {
    id: nanoid(10),
    name: "Orders",
    href: "/apple-dashboard/order",
    svg: <BellAlertIcon className="w-6" />,
  },
  {
    id: nanoid(10),
    name: "Products",
    href: "/apple-dashboard/product",
    svg: <ShoppingBagIcon className="w-6" />,
  },
  {
    id: nanoid(10),
    name: "Product-Category",
    href: "/apple-dashboard/product-category",
    svg: <Squares2X2Icon className="w-6" />,
  },
  {
    id: nanoid(10),
    name: "Addon-Category",
    href: "/apple-dashboard/addon-category",
    svg: <SquaresPlusIcon className="w-6" />,
  },
  {
    id: nanoid(10),
    name: "Addon",
    href: "/apple-dashboard/addon",
    svg: <RectangleGroupIcon className="w-6" />,
  },
];
const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="h-full w-full">
      <div className="h-56 rounded-full">
        <Logo />
      </div>
      <div className="mt-3 rounded-lg pb-1 w-full">
        {side_bar_pages.map((item) => (
          <Link href={`${item.href}`} key={item.id} className="">
            <div
              className={clsx("flex p-3 mb-2 gap-2 rounded-md", {
                "bg-blue-500": pathName === item.href,
              })}
            >
              <div>{item.svg}</div>
              <div>{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="">
        <SignIn />
      </div>
    </div>
  );
};

export default SideBar;
