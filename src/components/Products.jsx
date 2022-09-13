import { Link } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

const ProductsSection = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h1`
   font-weight: bold;
`;

const Button = styled.button`
`;

const Products = () => {
  return (
    <ProductsSection>
      <Title>
        Products
      </Title>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
      <Button>
        See More
      </Button>
    </ProductsSection>
  );
};

export default Products;