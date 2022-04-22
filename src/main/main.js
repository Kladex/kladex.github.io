function Main(props) {
  function ReturnContent() {
    if (Array.isArray(props.showInfo.content)) {
      return (
        <div className="content-list-box">
          {props.showInfo.content.map((list) => {
            if (!list.includes("http")) {
              return (
                <p key={list.id} className="content-list">
                  {list}
                </p>
              );
            } else {
              return <img id="technical-skills" src={list} alt="mySkills" />;
            }
          })}
        </div>
      );
    } else if (
      typeof props.showInfo.content === "string" &&
      !Array.isArray(props.showInfo.content) &&
      props.showInfo.content != null
    ) {
      return <p className="content">{props.showInfo.content}</p>;
    }
  }
  return (
    <div id="main-content-container">
      {props.showInfo.length === 0 ? (
        <>
          <h1 style={{ color: "ivory" }}>
            Hello !! My name is Suwatcharin Issariyakasem
          </h1>
          <h1 style={{ color: "ivory" }}>This is my training logic page!!</h1>
        </>
      ) : null}
      <div className="content-box">
        <h1 className="title">{props.showInfo.title}</h1>
        <ReturnContent />
      </div>
    </div>
  );
}

export default Main;
