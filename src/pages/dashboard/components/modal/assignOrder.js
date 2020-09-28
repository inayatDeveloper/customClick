

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function AssignOrder(props) {
    const { handleClose, open } = props;

    const [employeList, setEmployeList] = useState([{ name: "Inayat", id: 1 }, { name: "ishaq", id: 2 }])
    const classes = useStyles();
    const [state, setState] = useState({
        id: '',
        name: 'hai',
    });

    const [selectedEmp, setSelectedEmp] = useState({})

    const handleChange = (event) => {
       
        const selectedEmp = employeList.filter((info) =>

            info.id == event.target.value
        )
        setSelectedEmp(selectedEmp[0])

        const name = event.target.name;
        setState({

            [name]: event.target.value,
        });
    };

   
    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Assign to</DialogTitle>
                <DialogContent>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Employe</InputLabel>
                        <Select
                            native
                            value={state.id}
                            onChange={handleChange}
                            inputProps={{
                                name: 'id',
                                id: "id"


                            }}
                        >
                            <option aria-label="None" value="" />
                            {

                                employeList.map(info =>
                                    <option value={info.id}>{info.name}</option>

                                )
                            }

                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => handleClose(null
                    )}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => handleClose(selectedEmp)}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
