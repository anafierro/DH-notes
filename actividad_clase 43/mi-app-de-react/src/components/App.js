import '../assets/css/app.css';
import React from 'react';
import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';

function App() {
  return (
    <div>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Dashboard DH-Movies - Admin</title>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
      </head>
      <body>
        <div id="wrapper">
		      <SideBar />
          <ContentWrapper />
		    </div>
      </body>
    </div>
  );
}

export default App;
