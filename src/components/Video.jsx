import DateTime from "./DateTime";

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTime date={props.date} />
    </div>
  );
}

export default Video;
