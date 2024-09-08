"use server";
import { prisma } from "@/utils/prisma";
const productPerPage = 6;
export const fetchProducts = async (search: string, currentPage: number) => {
  const offset = (currentPage - 1) * productPerPage;
  try {
    const products = await prisma.product.findMany({
      orderBy: { forNum: "asc" },
      take: productPerPage,
      skip: offset,
      where: {
        name: { contains: search, mode: "insensitive" },
        isArchived: false,
      },
    });
    return products;
  } catch (error) {
    console.error("Error", error);
  }
};

export async function fetchPages(search: string) {
  try {
    const count = await prisma.product.count({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    const totalPages = Math.ceil(count / productPerPage);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}
