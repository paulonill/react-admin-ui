import React from 'react';
import { SimpleForm, TextInput, LongTextInput, Create, DateInput, NumberInput } from 'react-admin';

export const ProdutoCreate = props => (
    <Create {...props}>
        <SimpleForm>
           <TextInput source="nome" />
           <LongTextInput source="descricao" />
           <NumberInput source="valor" />
           <DateInput source="dataCadastro" />
        </SimpleForm>
    </Create>
);