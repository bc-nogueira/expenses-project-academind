import "./NavButtons.css";

const NavButtons = (props) => {
  const yearlyClickHandle = () => {
    props.onNavClick(false);
  };

  const summaryClickHandle = () => {
    props.onNavClick(true);
  };

  return (
    <div className="nav-buttons">
      <button className={`nav-button ${!props.displaySummary ? "nav-button__selected" : ""}`} onClick={yearlyClickHandle}>Yearly</button>
      <button className={`nav-button ${props.displaySummary ? "nav-button__selected" : ""}`} onClick={summaryClickHandle}>Summary</button>
    </div>
  );
};

export default NavButtons;
