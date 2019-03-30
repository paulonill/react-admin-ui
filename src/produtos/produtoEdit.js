import React from 'react';
import { SimpleForm, DisabledInput, TextInput, LongTextInput, Edit, DateInput, NumberInput } from 'react-admin';

const ProdutoTitle = ({ record }) => {
      return <span>Produto {record ? `"Editando - ${record.nome}"` : ''}</span>;
};

export const ProdutoEdit = props => (
    <Edit title={<ProdutoTitle />} {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
           <TextInput source="nome" />
           <LongTextInput source="descricao" />
           <NumberInput source="valor" />
           <DateInput source="dataCadastro" />
        </SimpleForm>
    </Edit>
);