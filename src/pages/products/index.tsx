import React, { ChangeEvent } from "react";
import { Product } from "@/models/productModel";
import ProductItem from "@/components/productItem";
import { styled } from "@mui/material";

export default function Index({ data }: { data: Product[] }) {
  const onFocusSrch = (e: ChangeEvent<HTMLInputElement>) => {
    const y = e.currentTarget.getBoundingClientRect().top;
    window.scrollTo({
      top: y - 30,
      behavior: "smooth",
    });
  };
  const SearchContDiv = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  });

  const SearchBtn = styled("button")({
    marginLeft: "2%",
    textAlign: "center",
    fontSize: "24px",
  });

  const width=200;
  const gap="20px 40px";
  const Products = styled("div")({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${width-10}px, 1fr))`,
    placeItems:'center',
    gap: gap,
  });
  return (
    <div className="block">
      <div className="h-[100px]">
        {/* <SearchContDiv>
          <input
            onFocus={onFocusSrch}
            className="w-[30]"
            placeholder="entry text"
          ></input>
          <SearchBtn>start</SearchBtn>
        </SearchContDiv> */}
      </div>
      <>
        <div className="">
          <Products>
            {data.map((item, i) => (
              <ProductItem product={item} width={200} height={300} key={i} />
            ))}
          </Products>
        </div>
      </>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return { props: { data } };
}
