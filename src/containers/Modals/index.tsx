import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import EditForm from "./EditForm";
import DeleteAlert from "./DeleteAlert";
import { ModalsProps } from "./types";

export default function Modals(props: ModalsProps) {
  return (
    <Dialog
      open={props.openModal}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {props.selectedRow.edit ? "Editar" : "Borrar"}
      </DialogTitle>
      <DialogContent>
        {props.selectedRow.edit ? (
          <EditForm selectedRow={props.selectedRow} type="stock" />
        ) : (
          <DeleteAlert selectedRow={props.selectedRow} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
