import "./form.css";

const TextInput = ({formLabel, type, formName, value, onChange, placeholder}) => {
  return (
    <div className="form__element">
      <label className="form__element--label">{formLabel}</label>
      <input
        type={type}
        name={formName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form__element--input"
      />
    </div>
  );
};

export default TextInput;
