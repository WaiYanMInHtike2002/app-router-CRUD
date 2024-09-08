"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  forNum: z.number(),
  name: z.string(),
  price: z.coerce.number(),
  amount: z.coerce.number(),
  date: z.string(),
});

const create = formSchema.omit({ id: true, forNum: true, date: true });

export const createProduct = async (formData: FormData) => {
  const { name, price, amount } = create.parse({
    name: formData.get("name"),
    price: formData.get("price"),
    amount: formData.get("amount"),
  });
  try {
    await prisma.product.create({ data: { name, price, amount } });
  } catch (error) {
    console.error("Error", error);
  }
  revalidatePath("/apple-dashboard/product");
  redirect("/apple-dashboard/product");
};
export const relatedProduct = async (id: string) => {
  const valid = await prisma.product.findFirst({ where: { id } });
  console.log("valid", valid);
  if (!valid) return null;
  try {
    const updatedProduct = await prisma.product.findFirst({ where: { id } });
    return updatedProduct;
  } catch (error) {
    console.error("Error", error);
  }
};

export const updateProduct = async (id: string, formData: FormData) => {
  const { name, price, amount } = create.parse({
    name: formData.get("name"),
    price: formData.get("price"),
    amount: formData.get("amount"),
  });
  try {
    const valid = prisma.product.findFirst({ where: { id } });
    if (!valid) return null;
    await prisma.product.update({
      data: { name, price, amount },
      where: { id },
    });
  } catch (error) {
    console.error("Error", error);
  }
  revalidatePath("/apple-dashboard/product");
  redirect("/apple-dashboard/product");
};

export const deleteProduct = async (id: string, formData: FormData) => {
  try {
    const valid = prisma.product.findFirst({ where: { id } });
    if (!valid) return null;
    await prisma.product.update({ data: { isArchived: true }, where: { id } });
  } catch (error) {
    console.error("Error", error);
  }
  revalidatePath("/apple-dashboard/product");
  redirect("/apple-dashboard/product");
};
