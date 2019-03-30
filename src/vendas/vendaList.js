import React from 'react';
import { List, Datagrid, TextField, EditButton, Filter, TextInput, NumberField } from 'react-admin';

const VendaFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);


export const VendaList = props => (
    <List {...props} filters={<VendaFilter />} >
        <Datagrid rowClick="edit">
            <TextField label="Código" source="id" />
            <NumberField source="quantidade" />
            <TextField label="Produto" source="produto.nome" />
            <NumberField 
                label="Valor unitário" 
                source="produto.valor"
                options={{
                    style: 'currency',
                    currency: 'BRL',
                 }}  />
            <NumberField 
                label="Valor total" 
                source="valorTotal"
                options={{
                    style: 'currency',
                    currency: 'BRL',
                 }} 
                /> 
            <EditButton />
        </Datagrid>
    </List>
);