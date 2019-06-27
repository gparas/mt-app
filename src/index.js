import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import DefaultLayout from './layouts/Default';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <DefaultLayout />
    </Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
