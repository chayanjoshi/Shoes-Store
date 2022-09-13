import React from 'react';
import styled from "styled-components";
import { menCategory, brands, prices } from "../../data1";
import Categories from './Categories';
// import Checkbox from '@material-ui/core/Checkbox';
import { mobile } from "../../responsive";

const Container = styled.div`
    padding: 0px 0px;
`;

const Title = styled.h1`
   font-weight: 500;
   padding: 4px;
   border-bottom: 4px solid teal;
`;

const Wrapper = styled.a``;

const Left = styled.div`
height: 100%;
position: relative;
right: 0%;
// bottom: 177%;
padding: 10px;
border: 2px solid teal;
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const FilterWithCategories = () => {
    return (
        <Left>
            <Container>
                <Wrapper>
                    <Title>Categories</Title>
                    <CategoryContainer>
                        {menCategory.map((data) => (
                            <Categories data={data} key={data.id} />
                        ))}
                    </CategoryContainer>
                </Wrapper>

                <Wrapper>
                    <Title>Brands</Title>
                    <CategoryContainer>
                        {brands.map((data) => (
                            <Categories data={data} key={data.id} />
                        ))}
                    </CategoryContainer>
                </Wrapper>

                <Wrapper>
                    <Title>Price</Title>
                    <CategoryContainer>
                        {prices.map((data) => (
                            <Categories data={data} key={data.id} />
                        ))}
                    </CategoryContainer>
                </Wrapper>
            </Container>
        </Left>
    )
}

export default FilterWithCategories