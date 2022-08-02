import { Box, Divider, Stack, Button } from '@mui/material';
import Form from './Form';
const CreateNewList = () => {
    return <>
        <div>
            <Box sx={{ backgroundColor: "#e3e3dc", padding: "50px" }}>
                <Box sx={{ backgroundColor: "#e3e3dc" ,width:"1080px",margin:"auto"}}>
                    {/* --------------------------------------- */}
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "row", width:"100%" }}>
                {       /* -------------Form input---------------------------------------------- */}
                        <Box sx={{ backgroundColor: "white", width: "70%", textAlign: "left" }}  >
                            <Form />
                        </Box>
                        {/* ---------------------Divider Box----------------------------------------- */}
                        <Box sx={{ backgroundColor: "#989899", width: "0.5%" }}></Box>
                        {/* --------------------------Right Container------------------------------------------------------ */}
                        <Box sx={{ backgroundColor: "#f1f0f1", width: "29.5%" }}>
                            <p style={{ marginLeft: "10px", marginRight: "5px" }}><strong>Feedback?</strong> Tell us What you think about this Feature.</p>
                        </Box>
                    </Box>
                    <Divider />
                    {/* --------------------------------------Recent View---------------------------------------------------------------- */}
                    <Box p={1} height={"200px"} sx={{backgroundColor: "#f1f0f1"}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={1}
                        >
                            <p style={{ fontSize: "18px", color: "#5a5a5a", margin: "0px 10px" }}>Recently Viewed</p>
                            <Button variant="text" sx={{ fontSize: "10px", margin: "0px 10px" }}>Clear history</Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </div>
    </>
}
export default CreateNewList;