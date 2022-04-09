function Main(props) {
  return (
    <div id="main-content-container">
      <div className="content-box">
        <h1>{props.showInfo.title}</h1>
        <p className="content">{props.showInfo.content}</p>
      </div>
    </div>
  );
}

export default Main;
