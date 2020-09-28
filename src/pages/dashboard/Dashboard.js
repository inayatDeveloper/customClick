import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,

} from "@material-ui/core";


// styles
import useStyles from "./styles";
import mock from "../dashboard/mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import Table from "../dashboard/components/Table/Table";
import socketIOClient from "socket.io-client";
import AddCamerModal from "./components/modal/addCamera";
import Button from '@material-ui/core/Button';
import { callApi } from "../../utils/callApis";
import { subUrl } from "../../constants/apiSubUrl";
export default function Dashboard(props) {
  let classes = useStyles();

  const [state, setState] = useState({
    response: false,
    endpoint: "http://127.0.0.1:4001"
  })

  const [data, setData] = useState(mock.table)
  //modal for add camera
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (info) => {
    if (info) {
      console.log("infoooooooooooooo", info)
      callApi(subUrl.addCamera, "post", null, info).then((res) => {

        // setPosts(res)
      }).catch((error) => {
        alert("Error occure" + error)
      })

      setData([...data, info])
    }
    setOpen(false);
  };

  const handleAssingOrder = (cameraId, employe) => {

    data.map((info) => {
      if (info.id == cameraId) {
        info.status = employe.name

      }
    })

  };

  useEffect(() => {
    const { endpoint } = state;

    axios.get("http://127.0.0.1:4001/").then((res) => {

    }).catch((error) => {

    })
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => setState({ response: data }));

  }, [])

  const { response } = state;

  console.log("responseisssssss", response, "dataaaaaaaaaaaaa", data)
  return (
    <>
      <PageTitle title="Dashboard" />

      <Grid item xs={12}>
        <Widget>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Camera
            </Button>
          <AddCamerModal handleClose={handleClose} open={open} />
          <Table data={data} handleAssingOrder={handleAssingOrder} />
        </Widget>
      </Grid>
    </>
  );
}


