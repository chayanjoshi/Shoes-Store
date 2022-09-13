import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.h1`
font-weight: bold;
span{
  font-size: 34px;
  color: #0D7D77
}
`;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img`
      width: 50%;
  `;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    border-bottom: 2px solid teal;
  }

`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>sole<span>MATES</span></Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <NavLink to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/cart">
              Cart
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/men-collection">
              Man Fashion
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/women-collection">
              Woman Fashion
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/kids-collection">
              Kids Section
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/my-account">
              My Account
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">
              Order Tracking
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">
              Wishlist
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">
              Wishlist
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">
              Terms
            </NavLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 666, SoleMates.Inc, Cyber City, Gurugram
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> solemates@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;