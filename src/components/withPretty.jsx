const withPretty = (WrappedComponent) => {
  return (props) => {
    const publishDate = new Date(props.date);
    const today = new Date();
    const diffInTime = today - publishDate;

    let prettyDate = "";

    if (diffInTime < 3600 * 1000) {
      prettyDate = "12 минут назад";
    } else if (diffInTime > 3600 * 1000 && diffInTime < 24 * 3600 * 1000) {
      prettyDate = "5 часов назад";
    } else if (diffInTime > 24 * 3600 * 1000) {
      prettyDate = `${parseInt(diffInTime / (24 * 3600 * 1000))} дней назад`;
    }

    props = { date: prettyDate };

    return <WrappedComponent {...props} />;
  };
};

export default withPretty;
