import { Alert, Button, Checkbox, FormControlLabel, FormGroup, Grid, Grow, TextField, Typography } from '@mui/material';
import React from 'react';

function QuizSettings(props) {
    const [quizSettings, setQuizSettings] = React.useState({
        questionNo: '',
        numDigits: '',
        timeLimit: '', // in seconds
        operation: {
            add: false,
            subs: false,
            multi: false,
            div: false,
        }
    });

    const [err, setErr] = React.useState(null);

    const handleSubmit = () => {
        if (
            quizSettings["timeLimit"] === "" ||
            quizSettings["numDigits"] === "" ||
            quizSettings["questionNo"] === ""
        ) {
            setErr("Please enter all field");
            return false
        }
        if (
            quizSettings["operation"]["add"] === false &&
            quizSettings["operation"]["subs"] === false &&
            quizSettings["operation"]["multi"] === false &&
            quizSettings["operation"]["div"] === false
        ) {
            setErr("At least one operation has to be checked");
            return false;
        }

        props.onSubmit(quizSettings);
    }

    return (
        <div>
            <Grow in={true}>
                <Grid
                    container
                >
                    <Typography variant="h4" gutterBottom component="div" style={{ marginBottom: 50 }}>
                        Quiz Settings
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                    >
                        {
                            err === null
                                ?
                                <span></span>
                                :
                                <Grid item xs={12} md={12}>
                                    <Alert severity="error">{err}</Alert>
                                </Grid>
                        }
                        <Grid item xs={4} md={4}>
                            Question No:
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <TextField onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} onChange={(e) => setQuizSettings({ ...quizSettings, questionNo: e.target.value })} value={quizSettings["questionNo"]} fullWidth={true} label="Enter number of question" variant="filled" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            Number digits:
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <TextField onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} onChange={(e) => setQuizSettings({ ...quizSettings, numDigits: e.target.value })} value={quizSettings["numDigits"]} fullWidth={true} label="Enter maximum digits" variant="filled" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            {"Time Limit (seconds):"}
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <TextField onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} onChange={(e) => setQuizSettings({ ...quizSettings, timeLimit: e.target.value })} value={quizSettings["timeLimit"]} fullWidth={true} type='number' label="Enter time limit" variant="filled" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            Operation:
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuizSettings({ ...quizSettings, operation: { ...quizSettings["operation"], add: e.target.checked } })} checked={quizSettings["operation"]["add"]} />} label="Add" />
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuizSettings({ ...quizSettings, operation: { ...quizSettings["operation"], subs: e.target.checked } })} checked={quizSettings["operation"]["subs"]} />} label="Substract" />
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuizSettings({ ...quizSettings, operation: { ...quizSettings["operation"], multi: e.target.checked } })} checked={quizSettings["operation"]["multi"]} />} label="Multiply" />
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuizSettings({ ...quizSettings, operation: { ...quizSettings["operation"], div: e.target.checked } })} checked={quizSettings["operation"]["div"]} />} label="Division" />
                            </FormGroup>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Button style={{ marginTop: 20 }} onClick={handleSubmit} variant="contained">Start Answer</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grow>
        </div>
    );
}

export default QuizSettings;