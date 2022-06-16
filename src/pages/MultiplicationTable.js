import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import MultiplicationCell from '../component/MultiplicationCell';

function MultipilicationTable() {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', height: '100%', paddingBottom: 50, overflow: 'hidden' }}
        >
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableBody>
                        <TableRow
                            key={1}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={1} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={2} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={3} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={4} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={5} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={6} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={7} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={8} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={9} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={10} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={11} />
                            </TableCell>
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={12} />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            key={2}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={2} />
                            </TableCell>
                            <MultiplicationCell initialValue={4} />
                            <MultiplicationCell initialValue={6} />
                            <MultiplicationCell initialValue={8} />
                            <MultiplicationCell initialValue={9} />
                            <MultiplicationCell initialValue={10} />
                            <MultiplicationCell initialValue={12} />
                            <MultiplicationCell initialValue={14} />
                            <MultiplicationCell initialValue={16} />
                            <MultiplicationCell initialValue={18} />
                            <MultiplicationCell initialValue={20} />
                            <MultiplicationCell initialValue={22} />
                        </TableRow>
                        <TableRow
                            key={3}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={3} />
                            </TableCell>
                            <MultiplicationCell initialValue={6} />
                            <MultiplicationCell initialValue={9} />
                            <MultiplicationCell initialValue={12} />
                            <MultiplicationCell initialValue={15} />
                            <MultiplicationCell initialValue={18} />
                            <MultiplicationCell initialValue={21} />
                            <MultiplicationCell initialValue={24} />
                            <MultiplicationCell initialValue={27} />
                            <MultiplicationCell initialValue={30} />
                            <MultiplicationCell initialValue={33} />
                            <MultiplicationCell initialValue={36} />
                        </TableRow>
                        <TableRow
                            key={4}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={4} />
                            </TableCell>
                            <MultiplicationCell initialValue={8} />
                            <MultiplicationCell initialValue={12} />
                            <MultiplicationCell initialValue={16} />
                            <MultiplicationCell initialValue={20} />
                            <MultiplicationCell initialValue={24} />
                            <MultiplicationCell initialValue={28} />
                            <MultiplicationCell initialValue={32} />
                            <MultiplicationCell initialValue={36} />
                            <MultiplicationCell initialValue={40} />
                            <MultiplicationCell initialValue={44} />
                            <MultiplicationCell initialValue={48} />
                        </TableRow>
                        <TableRow
                            key={5}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={5} />
                            </TableCell>
                            <MultiplicationCell initialValue={10} />
                            <MultiplicationCell initialValue={15} />
                            <MultiplicationCell initialValue={20} />
                            <MultiplicationCell initialValue={25} />
                            <MultiplicationCell initialValue={30} />
                            <MultiplicationCell initialValue={35} />
                            <MultiplicationCell initialValue={40} />
                            <MultiplicationCell initialValue={45} />
                            <MultiplicationCell initialValue={50} />
                            <MultiplicationCell initialValue={55} />
                            <MultiplicationCell initialValue={60} />
                        </TableRow>
                        <TableRow
                            key={6}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={6} />
                            </TableCell>
                            <MultiplicationCell initialValue={12} />
                            <MultiplicationCell initialValue={18} />
                            <MultiplicationCell initialValue={24} />
                            <MultiplicationCell initialValue={30} />
                            <MultiplicationCell initialValue={36} />
                            <MultiplicationCell initialValue={42} />
                            <MultiplicationCell initialValue={48} />
                            <MultiplicationCell initialValue={54} />
                            <MultiplicationCell initialValue={60} />
                            <MultiplicationCell initialValue={66} />
                            <MultiplicationCell initialValue={72} />
                        </TableRow>
                        <TableRow
                            key={7}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={7} />
                            </TableCell>
                            <MultiplicationCell initialValue={14} />
                            <MultiplicationCell initialValue={21} />
                            <MultiplicationCell initialValue={28} />
                            <MultiplicationCell initialValue={35} />
                            <MultiplicationCell initialValue={42} />
                            <MultiplicationCell initialValue={49} />
                            <MultiplicationCell initialValue={56} />
                            <MultiplicationCell initialValue={63} />
                            <MultiplicationCell initialValue={70} />
                            <MultiplicationCell initialValue={77} />
                            <MultiplicationCell initialValue={84} />
                        </TableRow>
                        <TableRow
                            key={8}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={8} />
                            </TableCell>
                            <MultiplicationCell initialValue={16} />
                            <MultiplicationCell initialValue={24} />
                            <MultiplicationCell initialValue={32} />
                            <MultiplicationCell initialValue={40} />
                            <MultiplicationCell initialValue={48} />
                            <MultiplicationCell initialValue={56} />
                            <MultiplicationCell initialValue={64} />
                            <MultiplicationCell initialValue={72} />
                            <MultiplicationCell initialValue={80} />
                            <MultiplicationCell initialValue={88} />
                            <MultiplicationCell initialValue={96} />
                        </TableRow>
                        <TableRow
                            key={9}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={9} />
                            </TableCell>
                            <MultiplicationCell initialValue={18} />
                            <MultiplicationCell initialValue={27} />
                            <MultiplicationCell initialValue={36} />
                            <MultiplicationCell initialValue={45} />
                            <MultiplicationCell initialValue={54} />
                            <MultiplicationCell initialValue={63} />
                            <MultiplicationCell initialValue={72} />
                            <MultiplicationCell initialValue={81} />
                            <MultiplicationCell initialValue={90} />
                            <MultiplicationCell initialValue={99} />
                            <MultiplicationCell initialValue={108} />
                        </TableRow>
                        <TableRow
                            key={10}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={10} />
                            </TableCell>
                            <MultiplicationCell initialValue={20} />
                            <MultiplicationCell initialValue={30} />
                            <MultiplicationCell initialValue={40} />
                            <MultiplicationCell initialValue={50} />
                            <MultiplicationCell initialValue={60} />
                            <MultiplicationCell initialValue={70} />
                            <MultiplicationCell initialValue={80} />
                            <MultiplicationCell initialValue={90} />
                            <MultiplicationCell initialValue={100} />
                            <MultiplicationCell initialValue={110} />
                            <MultiplicationCell initialValue={120} />
                        </TableRow>
                        <TableRow
                            key={11}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={11} />
                            </TableCell>
                            <MultiplicationCell initialValue={22} />
                            <MultiplicationCell initialValue={33} />
                            <MultiplicationCell initialValue={44} />
                            <MultiplicationCell initialValue={55} />
                            <MultiplicationCell initialValue={66} />
                            <MultiplicationCell initialValue={77} />
                            <MultiplicationCell initialValue={88} />
                            <MultiplicationCell initialValue={99} />
                            <MultiplicationCell initialValue={110} />
                            <MultiplicationCell initialValue={121} />
                            <MultiplicationCell initialValue={132} />
                        </TableRow>
                        <TableRow
                            key={12}
                        >
                            <TableCell>
                                <TextField style={{ backgroundColor: '#cccccc' }} value={12} />
                            </TableCell>
                            <MultiplicationCell initialValue={24} />
                            <MultiplicationCell initialValue={36} />
                            <MultiplicationCell initialValue={48} />
                            <MultiplicationCell initialValue={60} />
                            <MultiplicationCell initialValue={72} />
                            <MultiplicationCell initialValue={84} />
                            <MultiplicationCell initialValue={96} />
                            <MultiplicationCell initialValue={108} />
                            <MultiplicationCell initialValue={120} />
                            <MultiplicationCell initialValue={132} />
                            <MultiplicationCell initialValue={144} />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MultipilicationTable;