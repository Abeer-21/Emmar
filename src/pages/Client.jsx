import { useEffect, useState, } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../firebase/firebase-config";
import {collection,getDocs,deleteDoc,doc,} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import ClientAdd from "../pages/InfoClient/AddClient";
import ClientEdit from "../pages/InfoClient/EditClient";
//import firebaseConfig from "../firebase/firebase-config";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ClientList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  //const empCollectionRef = collection(db, "products");
  const empCollectionRef = collection(db, "clients");
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen (true);
  const handleEditClose = () => setEditOpen (false);


  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [empCollectionRef]);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    console.log(data); // Check the data in the console
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    deleteApi(id);
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };

  const editData = (id, ID, name, phone, nationalID, carInfo) => {
    const data = {
      id : id,
      ID : ID,
      name : name,
      phone : phone,
      nationalID : nationalID,
      carInfo : carInfo
    };
    setFormid(data);
    handleEditOpen();
  };
  

  return (
    <div>
      <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClientAdd closeEvent={handleClose}/>
        </Box>
      </Modal>

      <Modal
        open={editOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClientEdit closeEvent={handleEditClose} fid = {formid}/>
        </Box>
      </Modal>

    </div>
    
      {rows.length > 0 && (
        <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
           <div className="font-bold">Client List</div>
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Client" />
              )}
            />
            
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button id="AddButton" variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    ID
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Phone
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    National ID
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Car Info
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        
                        <TableCell key= {row.id} align="left">{row.ID}</TableCell>
                        <TableCell key= {row.id} align="left">{row.name}</TableCell>
                        <TableCell key= {row.id} align="left">{row.phone}</TableCell>
                        <TableCell key= {row.id} align="left">{row.nationalID}</TableCell>
                        <TableCell key= {row.id} align="left">{row.carInfo}</TableCell>
                        
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{fontSize: "20px", color: "blue", cursor: "pointer",}}
                              className="cursor-pointer"
                              onClick={() => {
                                editData(row.id, row.ID, row.name, row.phone, row.nationalID, row.carInfo);
                                }}
                            />
                            <DeleteIcon
                              style={{ fontSize: "20px", color: "darkred", cursor: "pointer",}}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </div>
  );
}