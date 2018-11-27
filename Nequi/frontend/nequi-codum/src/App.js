import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { UserList, UserEdit, UserCreate } from './users';

const App = () => (
  <Admin restClient={jsonServerRestClient('http://localhost:4000/api')}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default App;