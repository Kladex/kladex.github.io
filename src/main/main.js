function Main(props) {
  function ReturnContent() {
    if (Array.isArray(props.showInfo.content)) {
      return (
        <div className="content-list-box">
          {props.showInfo.content.map((list) => {
            return <p className="content-list">{list}</p>;
          })}
        </div>
      );
    } else {
      return <p className="content">{props.showInfo.content}</p>;
    }
  }

  return (
    <div id="main-content-container">
      <div className="content-box">
        <h1 className="title">{props.showInfo.title}</h1>
        <ReturnContent />
      </div>
    </div>
  );
}

export default Main;
