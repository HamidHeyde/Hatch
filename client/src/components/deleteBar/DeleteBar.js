import React, { useContext } from "react";
import Button from "@mui/material/Button";
import "./DeleteBar.scss";
import { TodoListContext } from "../../context/TodoListContext";
import Dialog from "@mui/material/Dialog";
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DeleteBar() {
  const { SetTodoList } = useContext(TodoListContext);

  const handleDelete = async () => {
    setOpen(false);
    const res = await axios.delete('http://localhost:8000/todos');
    if (res.status === 200){
      SetTodoList([]);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="deleteBarWrapper">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete all the items in the todo list"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete}>Agree</Button>
        </DialogActions>
      </Dialog>
      <Button
        className="deleteButton"
        variant="contained"
        onClick={handleOpen}
      >
        Delete All Items
      </Button>
    </div>
  );
}
