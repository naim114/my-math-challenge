import { Button } from '@mui/material';
import React from 'react';

function AnswerButton(props) {
    return (
        <Button
            variant="contained"
            style={{
                fontSize: 40,
                paddingLeft: 30,
                paddingRight: 30,
                margin: 20
            }}
            onClick={props.onClick}
            color="secondary"
        >
            {props.label}
        </Button>
    );
}

export default AnswerButton;