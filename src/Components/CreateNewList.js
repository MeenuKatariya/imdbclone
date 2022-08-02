import { Box, Divider } from '@mui/material';
import Form from './Form';
const CreateNewList = () => {
    return <>
        <Box sx= {{backgroundColor: "#e3e3dc", padding:"50px"}}>
        <Box sx= {{backgroundColor: "#e3e3dc"}}>
        <Box sx={{  height: "100%", display: "flex", flexDirection: "row", padding: "60px", margin:"0px 50px"}}>
            <Box sx={{ backgroundColor: "white", width: "60%", textAlign: "left" }}  >
                <Form />
            </Box>
            <Box sx={{ backgroundColor: "#989899", width: "0.2%" }}></Box>
            <Box sx={{ backgroundColor: "#f1f0f1", width: "25%" }}>
            <p style={{marginLeft:"10px",marginRight:"5px"}}><strong>Feedback?</strong> Tell us What you think about this Feature.</p>
            </Box>
        </Box>
        </Box>
        </Box>
    </>
}
export default CreateNewList;