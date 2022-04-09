import useToggle from "../Hooks/useToggle";
import resumeDatas from "../data/resumeData";

function NavigatorBox(props) {
  const { toggle, isOpen } = useToggle();

  return (
    <nav className="side-navigator-box">
      <button className="side-navigator-menu" onClick={toggle}>
        MENU
      </button>
      {isOpen ? (
        <>
          {resumeDatas.map((data) => {
            return (
              <button
                key={data.id}
                className="side-navigator-child"
                onClick={() => props.clicked(data.id)}
              >
                {data.title}
              </button>
            );
          })}
        </>
      ) : null}
    </nav>
  );
}

export default NavigatorBox;
