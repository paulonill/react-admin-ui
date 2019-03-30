import React from 'react';
import { SimpleForm, DisabledInput, Edit, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

const VendaTitle = ({ record }) => {
      return <span>Produto {record ? `"Editando - ${record.nome}"` : ''}</span>;
};

export const VendaEdit = props => (
    <Edit title={<VendaTitle />} {...props}>
        <SimpleForm>
           <DisabledInput label="Código" source="id" />
           <NumberInput source="quantidade" />
           <ReferenceInput label="Produto" source="produto.id" reference="produtos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);