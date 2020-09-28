import React, { useState } from "react";
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@material-ui/core";

export default function TableComponent(props) {
    const { data, handleAssingOrder } = props;
    var keys = Object.keys(data[0]).map(i => i.toUpperCase());
    // keys.shift(); // delete "id" key
   
    return (
        <>
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
                            <TableCell>{info.id}</TableCell>
                            <TableCell className="pl-3 fw-normal">{info.name}</TableCell>

                            <TableCell>{info.email}</TableCell>
                            <TableCell>{info.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
