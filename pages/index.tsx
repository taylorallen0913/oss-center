import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Navbar from '../components/Navbar'

const TEST_QUERY = gql`
query { 
    viewer { 
      login
    }
  }
`;

const App = () => {
  const { data } = useQuery(TEST_QUERY);

  data ? console.log(data) : null;

  return <div>
    <Navbar />
  </div>
}

export default App;