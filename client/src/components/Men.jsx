import React from 'react';
import styled from "styled-components";
import FilterWithCategoriesMen from './filterItems/FilterWithCategoriesMen';
import MenProducts from './MenProducts';


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
        <FilterWithCategoriesMen />
      </WrapperOne>
      <Wrapper>
        <MenProducts />
      </Wrapper>
    </Container>
  )
}

export default Men