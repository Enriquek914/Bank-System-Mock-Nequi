import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, EditButton, Create } from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="password" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};


export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);
