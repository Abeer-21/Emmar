import {useState, useEffect} from "react";
import CloseIcon from "@mui/icons-material/Close"
import { Typography, Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
 

export default function AddClient({closeEvent})
{
    const [ID, setID] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nationalID, setNationalID] = useState("");
    const [carInfo, setCarInfo] = useState("");
    const [rows, setRows] = useState([]);
    const empCollectionRef = collection(db, "products");
    const [isOpen, setIsOpen] = useState(false);


    const handleIDChange = (event) =>
    {
        setID(event.target.value);
    };
    const handleNameChange = (event) =>
    {
        setName(event.target.value);
    };
    const handlePhoneChange = (event) =>
    {
        setPhone(event.target.value);
    };
    const handleNationalIDChange = (event) =>
    {
        setNationalID(event.target.value);
    };
    const handleCarInfoChange = (event) =>
    {
        setCarInfo(event.target.value);
    };

    

    const createUser = async ()=>{
        await addDoc (empCollectionRef,
            {
                ID: ID,
                name: name,
                phone: phone,
                nationalID: nationalID,
                carInfo: carInfo
            });
            getUsers();
            closeEvent();
           
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    return(
        <div>
        <Box sx= {{m:2}}/>
        <Typography variant="h5" align="center">
            Add Client
        </Typography>

        <IconButton
        style = {{position: "absolute", top:"0", right: "0"}}
        onClick = {closeEvent} >
        <CloseIcon/>
        </IconButton>
            
        <Box height={20}/>
        <Grid container spacing={2}>
        <Grid item xs = {12}>
        <TextField id="ID-basic" label="ID" variant="outlined" size="small" 
        onChange={handleIDChange} Value ={ID} sx = {{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs = {12}>
        <TextField id="name-basic" label="name" variant="outlined" size="small" 
        onChange={handleNameChange} Value ={name} sx = {{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs = {12}>
        <TextField id="phone-basic" label="phone" variant="outlined" size="small" 
        onChange={handlePhoneChange} Value ={phone} sx = {{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs = {12}>
        <TextField id="nationalID-basic" label="nationalID" variant="outlined" size="small" 
        onChange={handleNationalIDChange} Value ={nationalID} sx = {{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs = {12}>
        <TextField id="carInfo-basic" label="carInfo" variant="outlined" size="small" 
        onChange={handleCarInfoChange} Value ={carInfo} sx = {{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs ={12}>
            <Typography component={'div'} variant="h5" align="center">
                <Button variant="contained" onClick={createUser}>
                    Submit
                </Button>
            </Typography>
        </Grid>
        </Grid>
        <Box sx = {{m:4}}/>
        </div>
    );
}