import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import ContentRowTop from './ContentRowTop';
import Chart from './Chart';

import { Route, Switch } from 'react-router-dom';

function error(){
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-0 text-gray-800">Error 404</h1>
            <p>Page not found</p>
        </div>
    )
}

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Switch>
                        <Route path="/" exact component={ContentRowTop}></Route>
                        <Route path="/pages" component={ContentRowMovies}></Route>
                        <Route path="/charts" component={ContentRowCenter}></Route>
                        <Route path="/tables" component={Chart}></Route>
                        <Route path="*" component={error}></Route>
                    </Switch>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;