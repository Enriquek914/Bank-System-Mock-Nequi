import React from 'react';
import { jsonServerRestClient, Admin, Resource} from 'admin-on-rest';

import { AccountList, AccountEdit } from './models/accounts';
import { GoalList, GoalCreate } from './models/goals';
import { SavingList, SavingCreate, SavingEdit } from './models/saving';
import { PocketList, PocketCreate, PocketEdit } from './models/pockets';
import { dashboard } from './dashboard';
import authClient from './authClient';
import Login from './login';

const App = () => (
  <Admin title="Nequi - Codum" loginPage={Login} dashboard={dashboard} authClient={authClient} restClient={jsonServerRestClient('http://localhost:4000/api')}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} />
    <Resource name="goals" list={GoalList} create={GoalCreate} />
    <Resource name="savings" list={SavingList} create={SavingCreate} edit={SavingEdit} />
    <Resource name="pockets" list={PocketList} create={PocketCreate} edit={PocketEdit} />
  </Admin>
);

export default App;