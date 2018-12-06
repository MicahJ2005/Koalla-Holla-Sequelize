import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';


const mapReduxStateToProps = reduxState => ({
   reduxState
});


 class NewBear extends React.Component {
 state = {
   open: false,
   name: '',
   gender: '',
   age: 0,
   ready_to_transfer: 'N',
   notes: '',
 };

 handleClickOpen = () => {
   this.setState({ open: true });
 };

 handleCancel = () => {
   this.setState({ 
     open: false, 
    });
 };
 handleSave = () => {
  this.setState({ 
    open: false, 
   });
   this.props.dispatch({type: 'ADD_KOALLA', payload: this.state});
};

 handleChange = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   })
 }

 render() {
   return (
     <div>
       <Button onClick={this.handleClickOpen}>Add A Bear</Button>
       <Dialog
         open={this.state.open}
         onClose={this.handleClose}
         aria-labelledby="form-dialog-title"
       >
         <DialogTitle id="form-dialog-title">Add A Bear</DialogTitle>
         <DialogContent>
           <DialogContentText>
             To add a bear, please fill out this form.
           </DialogContentText>
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="Name"
             type="text"
             fullWidth
             name="name"
             value={this.state.name}
             onChange={this.handleChange}
           />
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="Gender"
             type="text"
             fullWidth
             name="gender"
             value={this.state.gender}
             onChange={this.handleChange}
           />
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="Age"
             type="number"
             fullWidth
             name="age"
             value={this.state.age}
             onChange={this.handleChange}
           />
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="Ready To Transfer"
             type="text"
             fullWidth
             name="ready_to_transfer"
             value={this.state.ready_to_transfer}
             onChange={this.handleChange}
           />
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="Notes"
             type="text"
             fullWidth
             name="notes"
             value={this.state.notes}
             onChange={this.handleChange}
           />
         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleCancel} color="primary">
             Cancel
           </Button>
           <Button onClick={this.handleSave} color="primary">
             Save
           </Button>
         </DialogActions>
       </Dialog>
     </div>
   );
 }
}

export default connect(mapReduxStateToProps)(NewBear)