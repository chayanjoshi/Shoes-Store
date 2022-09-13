import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import '../components/categorySection.css';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 22px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Section = styled.div`
    flex: 1;
    // display: flex;
    align-items: center;
    // flex-direction: column;

`;

const SectionCenter = styled.div`
    display: flex;
    flex: 1;
  text-align: center;
`;

// const link = {
//     textDecoration: "none",
//     color: "inherit",
// }

const NavvLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        border-bottom: 4px solid teal;
    }
`;


const CategorySection = () => {
    return (
        <Container>
            <Wrapper>
                <SectionCenter>
                    <Section>
                        <NavvLink as={NavLink} to="/men-collection" activeclassName="active">
                            Men
                        </NavvLink>
                    </Section>
                    <Section>
                        <NavvLink as={NavLink} to="/women-collection" activeclassName="active">
                            Women
                        </NavvLink>
                    </Section>
                    <Section>
                        <NavvLink as={NavLink} to="/kids-collection" activeclassName="active">
                            Kids
                        </NavvLink>
                    </Section>
                </SectionCenter>
            </Wrapper>
        </Container>
    )
}

export default CategorySection