import React from 'react';
import { List, Datagrid, TextField, Edit, EditButton, NumberInput, SimpleForm, SelectInput } from 'admin-on-rest';


export const AccountList = (props) => (

    <div>
        <p div = "As">To make transactions click on "Operate"</p>
        <List {...props}>
            <Datagrid>
                <TextField label="Name:" source="nameAccount" />
                <TextField label="Number:" source="number" />
                <TextField label="Expiration Date: " source="expirationDate" />
                <TextField label="Account Type: " source="accountTypeName" />
                <TextField label="Minimum Balance: " source="minBalance" />
                <TextField label="Available Balance: " source="availableBalance" />
                <TextField lable="Total Balance: " source="totalBalance" />
                <EditButton label={"Operate Money"} />
            </Datagrid>
        </List>
        < br></br>

        < br></br>
        <input type="button" onclick="history.back()" name="GoBack" value="GoBack"/>
    </div>
);

export const AccountEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput label="Transaction Type: " source="transactionType" choices={
                [{ id: 'Deposit', name: 'Deposit' },
                { id: 'Withdraw', name: 'Withdraw' }]
            } />
            <NumberInput label="Amount Money: " source="amount"/>
        </SimpleForm>
    </Edit >
);
