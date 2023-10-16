const Input = ({
  type = "text",
  placeholder,
  onInputChange,
  value,
  errorMsg,
  className = "",
}) => {
  return (
    <div className='input-container'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`input ${className ? className : ""} 
        ${errorMsg ? "invalid" : ""}`}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {errorMsg && (
        <span className='error-msg' style={{ color: "#ED4337" }}>
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default Input;
