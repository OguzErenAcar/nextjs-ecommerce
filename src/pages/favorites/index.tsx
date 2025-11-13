import React from "react"; 
import { Product } from "@/models/productModel"; 
import { styled } from "@mui/material";
import { useWindowSize } from 'usehooks-ts';
import ProductItem from "@/components/productItem";


function Favorites({ result }: { result: Product[] }) { 
  
  const {width,height}=useWindowSize();
  
  const Pr: Product = {
    id: 101,
    title: "Wireless Noise Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    price: 149.99,
    description:
      "High-fidelity over-ear headphones with active noise cancellation and 30-hour battery life.",
    category: {
      id: 5,
      name: "Electronics",
      image: "https://fakeimg.pl/300x200/?text=Electronics",
      slug: "electronics",
    },
    images: [
      "https://fakeimg.pl/400x400/?text=Headphone+1",
      "https://fakeimg.pl/400x400/?text=Headphone+2",
      "https://fakeimg.pl/400x400/?text=Headphone+3",
    ],
  };

  const arr: null[] = Array(10).fill(null);
  const itemWidth = 300;
  const itemHeight = 200;
 const columnCount = Math.trunc(width / (itemWidth + 14)); // gap = 14
const rowCount = Math.ceil(arr.length / columnCount);
  const GridDiv = styled('div')({
    display:'flex',
    alignItems:'center',
    height:(rowCount*itemHeight)+200,
  });
  const Grid = styled("div")({
    width: "100%",
    display: "grid",
    gap: 14,
    gridTemplateColumns: `repeat(auto-fill,minmax(${itemWidth}px,1fr))`,
    placeItems: "center",
  });

  return (
    <GridDiv>
      <Grid >
        {arr.map((_, i) => (
          <ProductItem
            key={i}
            width={itemWidth}
            height={itemHeight}
            product={Pr}
          />
        ))}
      </Grid>
    </GridDiv>
  );
}

export default Favorites;

export async function getServerSideProps() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const result = await response.json();

  return { props: { result } };
}
