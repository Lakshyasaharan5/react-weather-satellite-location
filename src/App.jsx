import React from "react";
import { useState } from "react";
import carNames from "./cars";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { StyledEngineProvider } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';


function App() {

    const [newNote, setNewNote] = useState();
    const [list, setList] = useState([]);

    function handleAdd() {
        setList((prevValue) => {
            return [
                ...prevValue,
                newNote,
            ]
        });
    }
    function handleChange(event) {
        const obj = {
            note: event.target.value
        }
        setNewNote(obj);
    }

    function handleDelete(remove) {
        const newList = list.filter((obj, index) => index !== remove);
        setList(newList);
    }

    const [checkDraw, setcheckDraw] = useState(false);

    function handleDrawLine(){
        setcheckDraw(!checkDraw);
    }

    return <div>
        <div className="heading">
            <h1>TODO</h1>
        </div>
        <div className="center">
            <div className="center-div">
                <StyledEngineProvider injectFirst>
                    <TextField
                        id="filled-basic"
                        variant="outlined"
                        name="inputNote"
                        placeholder="Type Your Note"
                        onChange={handleChange}
                        size="small"
                        margin="normal"
                        className="inputNote"
                    />
                </StyledEngineProvider>
            </div>
            <div className="addBoxIcon">
                <AddBoxIcon onClick={handleAdd} fontSize="large" />
            </div>
        </div>
        <div className="todoItems">
            {list.map((item, index) => (
                <div key={index} className="todoItem">
                    <h1 key={index} onClick={handleDrawLine} style={{textDecorationLine: checkDraw?"line-through":"none"}}>{item.note}</h1>
                    <ClearIcon onClick={() => handleDelete(index)}/>
                </div>
            ))}
        </div>
    </div>;
}


export default App;
