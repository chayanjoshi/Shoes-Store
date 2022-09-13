import React from 'react';
import styled from "styled-components";
import FilterWithCategoriesWomen from './filterItems/FilterWithCategoriesWomen';
import WomenProducts from './WomenProducts';


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

const Women = () => {
  return (
    <Container>
      <WrapperOne>
        <FilterWithCategoriesWomen />
      </WrapperOne>
      <Wrapper>
        <WomenProducts />
      </Wrapper>
    </Container>
  )
}

export default Women