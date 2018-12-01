import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, NumberInput, ReferenceField, TextInput } from 'admin-on-rest';

export const PocketList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label="Name: " source="name" />
            <TextField label="Balance:" source="balance" />
            <ReferenceField label="Account: " source="Account_id" reference="accounts">
                <TextField source="number" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const PocketCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            <TextInput label="Name: " source="name" />
            <TextInput label="Balance:" source="balance" />
            <NumberInput label="Account: " source="Account_id" />

        </SimpleForm>
    </Create>
);

