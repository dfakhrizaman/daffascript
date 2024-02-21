import { Button, Dialog, DialogTitle, Typography } from "@mui/material";
import {
  resetDetailModal,
  selectDetailModal,
} from "../../redux/detailModal.slice";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";

const DetailModal = () => {
  const dispatch = useDispatch();
  const modalState = useAppSelector(selectDetailModal);

  const handleClose = () => {
    dispatch(resetDetailModal());
  };

  return (
    <Dialog open={modalState.open} onClose={handleClose}>
      <DialogTitle>{modalState.content.title}</DialogTitle>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>

      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
};

export default DetailModal;
