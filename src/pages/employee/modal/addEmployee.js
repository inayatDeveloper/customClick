

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
    const { handleClose, open } = props;

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",


    });

    const [errors, setErrors] = useState({})

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
        if (!values.name) {
            errors.name = 'Name is required';
        }
        else if (!values.email) {
            errors.email = 'Email is required';
        }
        else if (!values.password) {
            errors.password = 'Password is required';

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
                <DialogTitle id="form-dialog-title"> Add Employee</DialogTitle>
                <DialogContent>
                    {/*<DialogContentText>*/}
                    {/*Add Camera*/}
                    {/*</DialogContentText>*/}
                    <TextField

                        margin="dense"
                        name="name"
                        label="Name."
                        type="text"
                        onChange={handleChange}
                        value={state.name}
                        fullWidth
                        helperText={errors.name ? errors.name : ""}
                        error={errors.name}
                    />
                    <TextField

                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        onChange={handleChange}
                        value={state.email}
                        fullWidth
                        helperText={errors.email ? errors.email : ""}
                        error={errors.email}
                    />
                    <TextField

                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        value={state.password}
                        fullWidth
                        helperText={errors.password ? errors.password : ""}
                        error={errors.password}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleClickValidator()} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
