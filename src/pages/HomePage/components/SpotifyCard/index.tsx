import { Box } from "@mui/material";

const SpotifyCard = () => {
  return (
    <Box
      sx={{ height: "246px", backgroundColor: "#0080AA", borderRadius: "10px" }}
    >
      <iframe
        title="Spotify Embed"
        src="https://open.spotify.com/embed/track/6VoIBz0VhCyz7OdEoRYDiA?utm_source=generator"
        width="100%"
        height="235px"
        style={{
          // display: "block",
          borderRadius: 0,
          overflow: "hidden",
          scrollbarWidth: "none",
        }}
        frameBorder={0}
        scrolling="no"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
};

export default SpotifyCard;
