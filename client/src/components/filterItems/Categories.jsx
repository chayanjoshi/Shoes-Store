import React from 'react';
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Container = styled.div``;

const Wrapper = styled.a``;

const CategoryItem = styled.div`
    display:flex;
    // align-items: flex-start;
    // justify-content: center;
    margin: 0px 8px;
`;

const CategoryName = styled.div`
    padding: 11px 48px;  
`;

const Category = ({data}) => {
    return (
        <Container>
            <Wrapper>
                <CategoryItem>
                    <Checkbox />
                    <CategoryName>
                        {data.title}
                    </CategoryName>
                </CategoryItem>
            </Wrapper>
        </Container>
    )
}

export default Category