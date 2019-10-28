import React from 'react';
import './App.css';
import { Layout , Header , Navigation , Content , Drawer} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (

    <Layout fixedHeader>
        <Header className = "header-color" title = "Looking for the sunshine" scroll>
            <Navigation>
                <Link to ="/resume">Resume</Link>
                <Link to ="/aboutme">About Me</Link>
                <Link to ="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to ="/resume">Resume</Link>
                <Link to ="/aboutme">About Me</Link>
                <Link to ="/contact">Contact</Link>
            </Navigation>
        </Drawer>
      
          <div className="page-content" />
          <Main/>
        <Content/>
    </Layout>

  );
}

export default App;
