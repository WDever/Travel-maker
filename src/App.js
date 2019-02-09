import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import GlobalStyle from './components/Cards/GlobalStyles';
import Card01 from './components/Cards/Card01';
import Card02 from './components/Cards/Card02';
import Test from './components/Test';
import Testest from './components/Testest';

const Container = styled.div`
  padding: 50px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 30px;
  grid-auto-rows: 400px;
  grid-template-rows: 260px 400px 400px;
  & > div {
    grid-column: span 2;
    &:nth-child(5),
    &:nth-child(6) {
      grid-column: span 1;
    }
    &:nth-child(8) {
      grid-column: span 4;
    }
    &:nth-child(14) {
      grid-column: span 4;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
    padding: 10px;
    & > div {
      grid-column: span 1 !important;
    }
  }
`;

const MultiCard = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 115px 255px;
  & > div:last-child {
    grid-column: span 2;
  }
`;

const TwoCards = styled(MultiCard)`
  grid-template-columns: 1fr;
  grid-column-gap: 0;
`;

class App extends React.Component {
  test = `https://images.unsplash.com/photo-1549571558-7ca00bbd1b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80`;


  render() {
    return (
      <>
        <Route exact path="/" component={Test} />
        <Route exact path="/test" component={Testest} />
      </>
    );
  }
}

export default App;
