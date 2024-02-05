import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const MenuItem = ({ link, text, leftMargin }) => {
    return (
        <Link href={link} underline="none">
            <Typography sx={{ my: 2, fontSize: "1.3rem", color: "#424242", ml: parseInt(leftMargin) }} >{text}</Typography>
        </Link>
    )
}

MenuItem.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
    leftMargin: PropTypes.number
}

export default MenuItem;