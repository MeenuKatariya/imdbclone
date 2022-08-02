import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
const Form = () => {

    return <>
        <div style={{margin:"20px"}}>

            <h1>Create a new list</h1>
            <p>List your movie, TV & celebrity picks. </p>
            <Box sx={{width:"70%"}}>
            <form>
                <Box>
                <label >
                    <span style={{marginBottom:"10px", marginTop:"20px"}}>List Title*</span>
                </label>
                <br />
                
                <TextField required fullWidth id="standard-basic"  variant="standard" marginBottom="20px" />
                     </Box>
                <br />
                <Box>
                <label >
                    <span style={{marginBottom:"10px", marginTop:"20px"}}>List Description</span>
                </label>
                <br />
                <TextField required fullWidth id="standard-basic"  variant="standard" />
                </Box>
                <br />
                <Box>
                <label >
                    <span style={{marginBottom:"10px", marginTop:"20px"}}>Type of List*</span>
                </label>
                <br />
                <select  style={{border:"None", borderBottom:"1px solid black", width:"100%" ,fontSize:"17px"}}>
                    <option>Titles</option>
                    <option>People</option>
                    <option>Images</option>
                </select>
                </Box>
                <br />
                
                <Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, marginBottom:"0px"}} />
                <label>
                    <span>Public List</span>
                    <p style={{marginTop:"0px", marginLeft:"25px"}}>Make the list visible to others</p>
                </label>
                <br />
                <Button variant="contained" size="medium">Create</Button>
            </form>
            </Box>
        </div>

    </>
}
export default Form;