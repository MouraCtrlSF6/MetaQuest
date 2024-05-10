import "./Button.scss";

function Button({
  onClick,
  text,
  disabled
}) {
  return (
    <div className="button-component">
      <button
        type="button"
        className="btn default-btn"
        disabled={disabled}
        onClick={($event) => onClick($event)}
      >{text}</button>
    </div>
  )
}

export default Button;