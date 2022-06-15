import { Button, Grid, Grow, Typography } from '@mui/material';
import React from 'react';

function FinishQuiz(props) {
    return (
        <div>
            <Grow in={true}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Typography variant="h5" gutterBottom component="div" style={{ marginBottom: 20, textAlign: 'center' }}>
                        Your final score is...
                    </Typography>
                    <Typography variant="h1" gutterBottom component="div" style={{ marginBottom: 20, textAlign: 'center' }}>
                        {props.finalScore} / {props.length}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div" style={{ marginBottom: 20, textAlign: 'center' }}>
                        Press PLAY AGAIN to go back answer the quiz.
                    </Typography>
                    <Button
                        style={{
                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 20,
                            paddingRight: 20,
                            fontSize: 20,
                        }}
                        onClick={props.onSubmit}
                        variant="contained"
                    >
                        Play again
                    </Button>
                </Grid>
            </Grow>
        </div>
        // <p>Your final score is {props.finalScore}</p>
    );
}

export default FinishQuiz;