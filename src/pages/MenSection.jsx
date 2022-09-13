// import { Announcement } from '@material-ui/icons'
import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { mobile } from "../responsive";
import CategorySection from '../components/CategorySection';
// import Men from '../components/Men';
import FilterWithCategoriesMen from '../components/filterItems/FilterWithCategoriesMen';
import MenProducts from '../components/MenProducts';
import Men from '../components/Men';

const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // flex-wrap: wrap;
    // justify-content: space-between;
`;
const Title = styled.div`
    font-weight: bold;
    font-size: 2em
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const MenSection = () => {
    return (
        <Container>
            <Navbar />
            {/* <Announcement /> */}
            <CategorySection />
            <Wrapper>
                <Title>
                    Men's Collection
                </Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select>
                            <Option disabled selected>
                                Color
                            </Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select>
                            <Option disabled selected>
                                Size
                            </Option>
                            <Option>7</Option>
                            <Option>8</Option>
                            <Option>9</Option>
                            <Option>10</Option>
                            <Option>11</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select>
                            <Option selected>Newest</Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                {/* <FilterWithCategoriesMen /> */}
                {/* <MenProducts /> */}
                {/* <Men /> */}
                {/* <FilterWithBrands /> */}
                <Men />
                <Footer />
            </Wrapper>
        </Container>
    )
}

export default MenSection;