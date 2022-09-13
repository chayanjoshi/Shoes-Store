import { Link } from "react-router-dom";
import styled from "styled-components";
// import { popularProducts } from "../data";
import { productsKids } from "../data2";
import Product from "./Product";
// import FilterWithCategoriesMen from './filterItems/FilterWithCategoriesMen';

const Container = styled.div`
   padding: 5px;
   height: 100%;
   margin: 5px;
   border: 2px solid teal;
   position: relative;
//    left: 11%;
//    top: 5.5%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   flex-grow: 1;
   width: calc(1050px /3);
`;

const ProductsSection = styled.div`
    padding: 20px;
    display: flex;
    width: 100%;
    // width: 56%
    align-items: center;
    justify-content: center;
    // flex-direction: column;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    // justify-content: flex-end;
`;

const Title = styled.h1`
   font-weight: bold;
`;

// const InnerContainer = styled.div`
//     height: 100%;
//     width: 243px;
//     display: flex;
//     position: flex-start;
//     left: 0%;
// `;

const Button = styled.button`
`;

const MenProducts = () => {
    return (
        <ProductsSection>
            {/* <InnerContainer>
                <FilterWithCategoriesMen />
            </InnerContainer> */}

            <Container>
                {productsKids.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
            {/* </InnerContainer> */}
            {/* <Button>
                See More
            </Button> */}
        </ProductsSection>
    )
}

export default MenProducts