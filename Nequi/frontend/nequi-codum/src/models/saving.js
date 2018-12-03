import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, NumberInput, TextInput, EditButton, SelectInput, Edit } from 'admin-on-rest';

export const SavingList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label="Name: " source="savingName" />
            <TextField label="Balance:" source="balance" />
            <EditButton label="Operate Saving" />
        </Datagrid>
    </List>
);

export const SavingCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            <TextInput label="Name: " source="savingName" />
            <TextInput label="Balance:" source="balance" />
            <NumberInput label="Account: " source="Account_id" />

        </SimpleForm>
    </Create>
);

export const SavingEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput label="Transaction Type: " source="transactionType" choices={
                [{ id: 'Insert', name: 'Insert' },
                { id: 'WithdrawAll', name: 'Withdraw All' }]
            } />
            <NumberInput label="Amount Money: " source="amount" />
        </SimpleForm>
    </Edit >
);