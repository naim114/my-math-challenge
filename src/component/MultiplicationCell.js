import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';

function MultiplicationCell(props) {
    const initialValue = props.initialValue;

    const [color, setColor] = React.useState('#f0f0f0');
    const [value, seValue] = React.useState('');

    const handleChange = (e) => {
        seValue(e.target.value);
        if (e.target.value == initialValue) {
            setColor('#34a853');
        } else {
            setColor('#ff8e8e');
        }
    }

    return (
        <TableCell>
            <TextField value={value} style={{ backgroundColor: color }} onChange={handleChange} />
        </TableCell>
    );
}

export default MultiplicationCell;