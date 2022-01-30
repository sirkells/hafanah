import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

import Footer from '../components/_App/Footer';

const library = () => {
 return (
    <React.Fragment>
        <Navbar />
        <PageBanner 
            pageTitle="Library" 
            homePageUrl="/" 
            homePageText="Home" 
            activePageText="Library" 
        />  

        <div className="profile-authentication-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h1>Music LIbrary here:</h1>
                    </div>
                    
                    {/* <div className="col-lg-6 col-md-12">
                        <RegisterForm />
                    </div> */}
                </div>
            </div>
        </div>

        <Footer />
    </React.Fragment>
//    <div>
//       <head>
//        <title>Library</title>
//        <meta name="keywords" content="music, streaming, entertainment"></meta>
//      </head>
//      <h1>Music LIbrary here:</h1>
//    </div>
);
};
export default library;