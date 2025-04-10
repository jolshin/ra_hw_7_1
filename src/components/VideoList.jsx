import Video from "./Video";

function VideoList(props) {
  return props.list.map((item, index) => (
    <Video url={item.url} date={item.date} key={index} />
  ));
}

export default VideoList;
