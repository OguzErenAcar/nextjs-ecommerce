import React from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { Product } from "@/models/productModel";
import Image from "next/image";
import Button from "@mui/material/Button";
function Productdetails({ result }: { result: Product }) {
  // const router = useRouter();
  // const {id} =router.query; 
  return (
    <>
      <div className="flex justify-around  ">
        <div className="">
          <Image src={result.images[0]} alt="" width={300} height={300} />
        </div>
        <div className=" flex items-center ">
          <div className=" ">
            <h3> {result.title}</h3>
            <h3>Price : {result.price}$</h3>
            <Button sx={{ backgroundColor: "#4caf50", color: "white" }}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetails;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products/" + id
  );
  const result = await response.json();

  return { props: { result } };
}
