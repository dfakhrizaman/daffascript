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
import adventureCareMarkdown from '../../assets/adventure-care.md';
import bfiFinanceMarkdown from '../../assets/bfi-finance.md';
import iceHouseMarkdown from '../../assets/ice-house.md';
import uiMarkdown from '../../assets/universitas-indonesia.md';
import udeMarkdown from '../../assets/university-duisburg-essen.md';
import fitnessCoachMarkdown from '../../assets/virtual-fitness-coach.md';
import lingotalkMarkdown from '../../assets/lingo-talk.md';
import nusMarkdown from '../../assets/nus.md';
import uiIncubateMarkdown from '../../assets/ui-incubate.md';
import imeriMarkdown from '../../assets/imeri.md';
import iotechMarkdown from '../../assets/iotech.md';

const markdownMapper = {
  'bfi-finance.md': bfiFinanceMarkdown,
  'ice-house.md': iceHouseMarkdown,
  'universitas-indonesia.md': uiMarkdown,
  'university-duisburg-essen.md': udeMarkdown,
  'virtual-fitness-coach.md': fitnessCoachMarkdown,
  'adventure-care.md': adventureCareMarkdown,
  'lingo-talk.md': lingotalkMarkdown,
  'nus.md': nusMarkdown,
  'ui-incubate.md': uiIncubateMarkdown,
  'imeri.md': imeriMarkdown,
  'iotech.md': iotechMarkdown,
}

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
      if (!modalState.content.markdownContent) {
        return;
      }

      try {
        const markdownContent = modalState.content.markdownContent as keyof typeof markdownMapper;
        const response = await fetch(markdownMapper[markdownContent]);
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
          padding: '24px',
          width: isMobile ? '100vw' : '50vw',
          maxHeight: isMobile ? '100vh' : '80vh',
          borderRadius: '16px'
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: "flex" }}>
            {
              modalState.content.tags?.map((tag, index) => (
                renderTag(tag, index)
              ))
            }
          </Box>
          <IconButton
            sx={{
              alignSelf: 'end',
              visibility: isMobile ? 'hidden' : 'inherit'
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </Box>

        <Markdown>{content}</Markdown>
      </Box>
    </Dialog>
  );
};

export default DetailModal;
