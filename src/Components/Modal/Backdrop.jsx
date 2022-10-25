import "../../Styles/Backdrop.css";

const Backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return <div className={cssClasses.join(" ")} onClick={props.hideModal}></div>;
};

export default Backdrop;
