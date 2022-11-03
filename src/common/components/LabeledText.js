import { Typography } from "@mui/material";
import React from "react";



function LabeledText({multiline, label, text, labelVariant, textVariant}){

    return(
        <>
            {multiline ? 
                <>
                    <Typography
                        className='bold'
                        gutterBottom 
                        variant={labelVariant ? labelVariant : 'body1'}
                        component='div'>
                        {label}
                    </Typography>
                    <Typography 
                        variant={textVariant ? textVariant : 'body2'}
                        color="text.secondary">
                            {text}
                    </Typography>
                </>
            : 
            <Typography 
                variant={textVariant ? textVariant : 'body2'}
                color="text.secondary">
                    <span className="bold">{label}</span> {text}
            </Typography>}
        </>
    )

}


export default LabeledText;