import styled from "styled-components";

const Container = styled.div`
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
`;

const Header = styled.div`
  grid-area: header;
  background-color: whitesmoke;
  text-align: center;
  font-size: 40px;
`;
const GetDataContainer = styled.div`
  text-align: center;
  grid-area: nav;
  background-color: lightgreen;
`;
const InputLayout = styled.div`
  text-align: center;
  grid-area: input;
  background-color: pink;
`;

const MessageLayout = styled.div`
  text-align: left;
  grid-area: messages;
  background-color: lightblue;
`;
const FilterLayout = styled.div`
  text-align: left;
  grid-area: filter;
  background-color: lightgreen;
`;
const StatsLayout = styled.div`
  text-align: left;
  grid-area: stats;
  background-color: lightyellow;
`;
export {
  StatsLayout,
  MessageLayout,
  FilterLayout,
  Container,
  Header,
  GetDataContainer,
  InputLayout
};
