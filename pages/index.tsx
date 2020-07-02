import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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

    return <h1>Hello world</h1>
}

export default App;