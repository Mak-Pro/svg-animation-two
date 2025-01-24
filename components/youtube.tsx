import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <iframe
    className="w-full aspect-video"
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;