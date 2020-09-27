

import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const{handleClose,open}=props;

    const [state, setState] = useState({
        partNumber: "",
        quantity: "",
        comment: "",
        id:12,
        status: "Sent"

    });

    const [errors,setErrors]=useState({})

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        });
    };


    const validatetor = (values) => {

        let errors = {};
        if (!values.partNumber) {
            errors.partNumber = 'PartNumber is required';
        }
        else if (!values.quantity) {
            errors.quantity = 'Quantity is required';
        }
        else if (!values.comment) {
            errors.comment = 'Comment is required';

        }

        return errors;
    };
    const handleClickValidator = () => {

        if (Object.keys(validatetor(state)).length > 0) {
            setErrors(validatetor(state))
            setTimeout(() => {
                setErrors({})
            }, 4000)

        }
        else {
            handleClose(state)
        }
    }

    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Add Camera</DialogTitle>
                <DialogContent>
                    {/*<DialogContentText>*/}
                       {/*Add Camera*/}
                    {/*</DialogContentText>*/}
                    <TextField

                        margin="dense"
                        name="partNumber"
                        label="Part number."
                        type="text"
                        onChange={handleChange}
                        value={state.partNumber}
                        fullWidth
                        helperText={errors.partNumber ? errors.partNumber : ""}
                        error={errors.partNumber}
                    />
                    <TextField

                        margin="dense"
                        name="quantity"
                        label="Quantity."
                        type="number"
                        onChange={handleChange}
                        value={state.quantity}
                        fullWidth
                        helperText={errors.quantity ? errors.quantity : ""}
                        error={errors.quantity}
                    />
                    <TextField

                        margin="dense"
                        name="comment"
                        label="Comment"
                        type="text"
                        onChange={handleChange}
                        value={state.comment}
                        fullWidth
                        helperText={errors.comment ? errors.comment : ""}
                        error={errors.comment}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=> handleClickValidator()} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
