import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { AccountList, AccountEdit, AccountShow } from './models/accounts';
import { GoalList, GoalCreate } from './models/goals';
import { SavingList, SavingCreate } from './models/saving';
import { PocketList, PocketCreate } from './models/pockets';
import { dashboard } from './dashboard';
import authClient from './authClient';

const App = () => (
  <Admin title="Nequi - Codum" dashboard={dashboard} authClient={authClient} restClient={jsonServerRestClient('http://localhost:4000/api')}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} show={AccountShow} />
    <Resource name="goals" list={GoalList} create={GoalCreate} />
    <Resource name="savings" list={SavingList} create={SavingCreate} />
    <Resource name="pockets" list={PocketList} create={PocketCreate} />
  </Admin>
);

export default App;