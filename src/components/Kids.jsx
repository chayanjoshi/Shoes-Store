import React from 'react';
import styled from "styled-components";
import FilterWithCategoriesKids from './filterItems/FilterWithCategoriesKids';
import KidsProducts from './KidsProducts';


const Container = styled.div`
    border: 2px solid teal;
    display: flex;
    width: 95%;
`;

const Wrapper = styled.div`
    padding: 22px 55px;
    width: 75%;
`;

const WrapperOne = styled.div`
    padding: 70px 30px;
    width: 20%;
    height: 50%;
`;

const Men = () => {
  return (
    <Container>
      <WrapperOne>
        <FilterWithCategoriesKids />
      </WrapperOne>
      <Wrapper>
        <KidsProducts />
      </Wrapper>
    </Container>
  )
}

export default Men