import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import Head from './components/Head';
import ListButtons from './components/ListButtons';
import ListItems from './components/ListItems';
import NewButton from './components/NewButton';

//Tailwind
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4'>
      <Head></Head>
      <ListButtons></ListButtons>
      <ListItems></ListItems>
      <NewButton></NewButton>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
