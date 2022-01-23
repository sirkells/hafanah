import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>hafana - React Next.js Education LMS Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Hafana - Learn Pidgin" />
                <meta name="og:title" property="og:title" content="Hafana - Learn Pidgin"></meta>
                <meta name="twitter:card" content="Hafana - Learn Pidgin"></meta>
                <link rel="canonical" href="https://edemy-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;