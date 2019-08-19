import styled from "styled-components";


const BodyContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "stats input filter"
    "stats messages filter";
  grid-template-rows: 0.5fr 1fr 3fr;
  grid-template-columns: 25% 50% 25%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
  width:100vw;
`;

const Header = styled.h1`
  grid-area: header;
  background-color: whitesmoke;
  text-align: center;
  font-size: 40px;
  width:100%;
`;

const NavButton = styled.button`

margin-right:30vw;

`


export { BodyContainer,Header, NavButton };
