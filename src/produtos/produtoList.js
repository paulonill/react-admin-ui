import React from 'react';
import { List, Datagrid, TextField, EditButton, Filter, TextInput, NumberField, DateField } from 'react-admin';

const ProdutoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);


export const ProdutoList = props => (
    <List {...props} filters={<ProdutoFilter />} >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="descricao" />
            <NumberField 
                source="valor"
                options={{
                    style: 'currency',
                    currency: 'BRL',
                 }}  /> 
            <DateField source="dataCadastro" />
            <EditButton />
        </Datagrid>
    </List>
);