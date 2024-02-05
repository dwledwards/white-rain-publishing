import React from "react";

import PropTypes from "prop-types";

import Navigation from "./NavigationComponent";
import Footer from "./FooterComponent";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
                {children}
            <Footer />
        </>
        
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;