import { Button } from "@mui/material";
import React from "react";



function Buttons(props) {
    return (
        <Button
            type={props.type}
            variant={props.variant}
            color={props.color}
            size={props.size}
        
            sx={{mt: 3, mb: 1}}
            >
            
            {props.label}
        </Button>
    );
}

export default Buttons;