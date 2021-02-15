import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export default function index(props: any) {
  return (
    <Dialog
      open={props.openModal}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Exito</DialogTitle>
      <DialogContent>Creado con exito</DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
