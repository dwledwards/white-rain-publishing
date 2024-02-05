import React from "react";

import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";

const ProductMenuItem = ({ link, text, textColor }) => {
    return (
        <Link href={link} underline="none" >
            <Box sx={{ "&:hover": { backgroundColor: "#007aff" }, display: "flex", width: "100%", justifyContent: "center" }}>
                <Typography sx={{ my: 2, fontSize: "1rem", color: textColor }}>{text}</Typography>
            </Box>            
        </Link>
    );
}

ProductMenuItem.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    textColor: PropTypes.string
}

export default ProductMenuItem;