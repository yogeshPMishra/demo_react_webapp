import {React,useCallback,useContext, useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import appContext from '../../context/appcontext';
import Card from '@mui/material/Card';
import TablePaginationActions from '../../minicomponents/TablePaginationActions';
import Breadcumb from '../../minicomponents/Breadcumb';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4e73df',
    color: 'white',
    fontSize:15,
    textAlign:'center',
    paddingLeft:'10px',
    paddingRight:'10px',
    width:"180px"

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign:"center",
    paddingLeft:'10px',
    paddingRight:'10px',
    width:"180px"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TablePaginationStyle = styled(TablePagination)(() => ({
  '&:nth-of-type(odd) p': {
    margin : 0
  }
}));

const WrapperCard = styled(Card)(() =>({
      'boxShadow': '2px 2px 10px 1px rgba(0,0,0,0.5)'
}))

const StyledButton = styled(Button)(()=>({
  padding:'3px',
  minWidth:0,
  margin:'5px',
  'a': {
    color:'white'
  },
}));


export default function About() {
 const {aboutus, deleteAbout} = useContext(appContext);
 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(5);
 let data = [];
 if(Object.keys(aboutus).length != 0){
    let get_aboutus = aboutus.data.aboutus;
    get_aboutus.map((elem,index)=>{
        data.push({
            _id:elem._id,
            id: index+1 ,
            sideType: elem.about_type,
            leftTitle: elem.left_title,
            left_content_type : elem.left_content_type,
            left_content_text : elem.left_content_text,
            rightTitle :elem.right_title,
            right_content_type : elem.right_content_type,
            right_content_text : elem.right_content_text,
            left_content_image : elem.left_content_image,
            right_content_image : elem.right_content_image
          });
    })
 }
 const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(parseInt(event.target.value, 10));
   setPage(0);
 };

 const HandleDelete = (id)=>{
      deleteAbout(id);
 }

  return (
    <>
      <Breadcumb/>
      <WrapperCard>
      <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Side Type</StyledTableCell>
                <StyledTableCell align="right">Left Title</StyledTableCell>
                <StyledTableCell align="right">Left Content Type</StyledTableCell>
                <StyledTableCell align="right">Left Content</StyledTableCell>
                <StyledTableCell align="right">Right Title</StyledTableCell>
                <StyledTableCell align="right">Right Content Type</StyledTableCell>
                <StyledTableCell align="right">Right Content</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{maxHeight:400}}>
              {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((elem) => (
                <StyledTableRow key={elem.id}>
                  <StyledTableCell component="th" scope="row">
                    {elem.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{elem.sideType}</StyledTableCell>
                  <StyledTableCell align="right">{elem.leftTitle}</StyledTableCell>
                  <StyledTableCell align="right">{elem.left_content_type}</StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.left_content_text != ""? elem.left_content_text:
                        <StyledButton color='success' variant="contained">
                          <ImageIcon/>
                        </StyledButton>
                    }
                  </StyledTableCell>
                  <StyledTableCell align="right">{elem.rightTitle}</StyledTableCell>
                  <StyledTableCell align="right">{elem.right_content_type}</StyledTableCell>
                  <StyledTableCell align="right">
                    {
                      elem.right_content_text != "" ? elem.right_content_text :
                        <StyledButton color='success' variant="contained">
                          <ImageIcon/>
                        </StyledButton>
                    }
                  </StyledTableCell>
                  <StyledTableCell align="right">
                      <StyledButton color='success' variant="contained">
                        <Link to={'/demo_react_webapp/add-aboutus'}><EditIcon /></Link>
                      </StyledButton>
                      <StyledButton color='error' variant="contained">
                        <Link onClick={()=>HandleDelete(elem._id)}><DeleteForeverIcon/></Link>
                      </StyledButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
            <TableRow >
              <TablePaginationStyle
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={9}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
          </Table>
        </TableContainer>
    </WrapperCard>
    </>
    
  );
}
