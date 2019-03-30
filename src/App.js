import React from 'react';

import portugueseMessages from 'ra-language-portuguese'

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { ProdutoList } from './produtos/produtoList.js';
import { ProdutoEdit } from './produtos/produtoEdit.js';
import { ProdutoCreate } from './produtos/produtoCreate.js';

import { VendaList } from './vendas/vendaList.js';
import { VendaEdit } from './vendas/vendaEdit.js';

import ProdutoIcon from '@material-ui/icons/List';
import VendaIcon from '@material-ui/icons/AddToQueue';

import Dashboard from './Dashboard';
import authProvider from './authProvider';

//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const dataProvider = jsonServerProvider('http://localhost:8080');

const messages = {
  'pt': portugueseMessages,     
};

const i18nProvider = locale => messages[locale];


const App = () => (
  <Admin title="React UI" locale="pt" i18nProvider={i18nProvider} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="produtos" list={ProdutoList} edit={ProdutoEdit} create={ProdutoCreate} icon={ProdutoIcon} />
      <Resource name="vendas" list={VendaList} edit={VendaEdit} icon={VendaIcon} />
  </Admin>
);

export default App;
