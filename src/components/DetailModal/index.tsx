import { Box, Dialog, Typography } from "@mui/material";
import {
  resetDetailModal,
  selectDetailModal,
} from "../../redux/detailModal.slice";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import TextButton from "../TextButton";

function renderTag(tag: string, index: number) {
  return <Box key={tag} sx={{ display: "flex" }}>
    {index === 0 ? null : (
      <Typography
        sx={{
          color: "#A1A1A1",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "IBM Plex Mono",
          marginX: "6px",
        }}
      >
        {" · "}
      </Typography>
    )}
    <Typography
      onClick={() => console.log("test")}
      sx={{
        color: "#A1A1A1",
        fontSize: "14px",
        fontWeight: "600",
        fontFamily: "IBM Plex Mono",
      }}
    >
      {tag}
    </Typography>
  </Box>;
}

const DetailModal = () => {
  const dispatch = useDispatch();
  const modalState = useAppSelector(selectDetailModal);
  const [content, setContent] = useState('');

  const handleClose = () => {
    dispatch(resetDetailModal());
  };

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const module = await import(/* @vite-ignore */ '../../assets/' + modalState.content.markdownContent);
        const response = await fetch(module.default);
        const text = await response.text();

        setContent(text)
      } catch (err) {
        console.log(err);
      }
    };

    if (!modalState.content.markdownContent) {
      return;
    }

    fetchMarkdownContent();
  }, [modalState]);

  return (
    <Dialog
      open={modalState.open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          padding: '32px',
          width: '50vw',
          maxHeight: '80vh'
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: "flex" }}>
          {
            modalState.content.tags?.map((tag, index) => (
              renderTag(tag, index)
            ))
          }
        </Box>
        <Markdown>{content}</Markdown>
        <TextButton sx={{ alignSelf: 'center' }} onClick={handleClose}>Close</TextButton>
      </Box>
    </Dialog>
  );
};

export default DetailModal;
