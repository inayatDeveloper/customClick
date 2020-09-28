import React, { useState } from "react";
import { Grid } from "@material-ui/core";


import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";

import { Button } from "../../components/Wrappers/Wrappers";

import Table from "./Table";
import socketIOClient from "socket.io-client";
import AddEmployeModal from "./modal/addEmployee";
import mock from "../dashboard/mock";

export default function Employee(props) {
  var classes = useStyles();
  const [data, setData] = useState(mock.Employee)
  //modal for add camera
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (info) => {

    if (info) {
      setData([...data, info])
    }
    setOpen(false);
  };
  return (
    <>
      <PageTitle title="Employee" />
      <Grid item xs={12}>
        <Widget>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Employee
            </Button>
          <AddEmployeModal handleClose={handleClose} open={open} />
          <Table data={data} />
        </Widget>
      </Grid>
    </>
  )
}