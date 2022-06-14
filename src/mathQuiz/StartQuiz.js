import { Button, Grid, Grow, Typography } from '@mui/material';
import React from 'react';
import mathGif from '../assets/math.gif'

function StartQuiz(props) {

    return (
        <div>
            <Grow in={true}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Typography variant="h4" gutterBottom component="div" style={{ marginBottom: 20 }}>
                        MATH QUIZ
                    </Typography>
                    <img style={{ height: '10%', margin: 20 }} src={mathGif} alt="loading..." />
                    <Typography variant="h5" gutterBottom component="div" style={{ marginBottom: 20 }}>
                        Press start if you ready.
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
                        Start
                    </Button>
                </Grid>
            </Grow>
        </div>
    );
}

export default StartQuiz;