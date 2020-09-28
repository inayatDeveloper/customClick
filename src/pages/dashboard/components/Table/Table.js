import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";
import AssignOrder from "../modal/assignOrder"
const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};


export default function TableComponent(props) {
  const { data, handleAssingOrder } = props;
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  //modal for assing order to.
  const [open, setOpen] = useState(false);
  const [cameraId, setCameraId] = useState("");
  const handleClickOpen = (cameraId) => {

    setCameraId(cameraId)
    setOpen(true);
  };

  const handleClose = (employeId) => {

    handleAssingOrder(cameraId, employeId)
    setOpen(false);
  };

  return (
    <>
      <AssignOrder open={open} handleClose={handleClose} />
      <Table className="mb-0">
        <TableHead>
          <TableRow>
            {keys.map(key => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((info) => (
            <TableRow key={info.id}>
              <TableCell className="pl-3 fw-normal">{info.partNumber}</TableCell>
              <TableCell>{info.quantity}</TableCell>
              <TableCell>{info.comment}</TableCell>

              <TableCell>
                <TableCell>
                  {

                    info.status == "assign" ? <Button
                      color={states[info.status.toLowerCase()]}
                      size="small"
                      className="px-2"
                      variant="contained"
                      onClick={() => handleClickOpen(info.id)}
                    >
                      {info.status}
                    </Button> : <sap>{info.status}</sap>
                  }

                </TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
