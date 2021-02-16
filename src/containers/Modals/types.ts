export interface ModalsProps {
  openModal: boolean;
  handleClose: () => void;
  selectedRow: any;
  type: string;
  setDetailID?: any
  billDetail?: any;
}
