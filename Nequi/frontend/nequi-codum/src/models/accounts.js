import React from 'react';
import { List, Datagrid, TextField, Edit, DisabledInput, TextInput, SimpleForm, Show, SimpleShowLayout } from 'admin-on-rest';

export const AccountList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label="Name:" source="name" />
            <TextField label="Number:" source="number" />
            <TextField label="Expiration Date: " source="expirationDate" />
            <TextField label="Account Type: " source="typeName" />
            <TextField label="Minimum Balance: " source="minBalance" />
            <TextField label="Available Balance: " source="availableBalance" />
            <TextField lable="Total Balance: " source="totalBalance" />
        </Datagrid>
    </List>
);

export const AccountEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput label="Name:" source="name" />
            <TextInput label="Number:" source="number" />
            <TextInput label="Expiration Date: " source="expirationDate" />
            <TextInput label="Minimum Balance: " source="minBalance" />
            <TextInput label="Available Balance: " source="availableBalance" />
            <TextInput lable="Total Balance: " source="totalBalance" />
            <TextInput label="Account Type: " source="typeName" />
        </SimpleForm>
    </Edit >
);

export const AccountShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="Name:" source="name" />
            <TextField label="Number:" source="number" />
            <TextField label="Expiration Date: " source="expirationDate" />
            <TextField label="Account Type: " source="typeName" />
            <TextField label="Minimum Balance: " source="minBalance" />
            <TextField label="Available Balance: " source="availableBalance" />
            <TextField lable="Total Balance: " source="totalBalance" />
        </SimpleShowLayout>
    </Show>
);