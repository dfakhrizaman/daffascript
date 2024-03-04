import { Box, Dialog, Fab, IconButton, Typography } from "@mui/material";
import {
  resetDetailModal,
  selectDetailModal,
} from "../../redux/detailModal.slice";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import useIsMobile from "../../hooks/useIsMobile";
import { Close } from "@mui/icons-material";

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

  const isMobile = useIsMobile();

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

    if (!modalState.content.markdownContent || modalState.content.markdownContent.length === 0) {
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
          width: isMobile ? '100vw' : '50vw',
          maxHeight: isMobile ? '100vh' : '80vh'
        }
      }}
      fullScreen
    >
      {
        isMobile && <Fab
          aria-label="close"
          sx={{
            position: 'fixed',
            top: '32px',
            alignSelf: 'end',
            backgroundColor: 'white',
            width: '42px',
            height: '42px'
          }}
          onClick={handleClose}
        >
          <Close />
        </Fab>
      }

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginY: isMobile ? '32px' : null
        }}
      >
        <IconButton
          sx={{
            alignSelf: 'end',
            visibility: isMobile ? 'hidden' : 'inherit'
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <Box sx={{ display: "flex" }}>
          {
            modalState.content.tags?.map((tag, index) => (
              renderTag(tag, index)
            ))
          }
        </Box>
        <Markdown>{content}</Markdown>
      </Box>
    </Dialog>
  );
};

export default DetailModal;
