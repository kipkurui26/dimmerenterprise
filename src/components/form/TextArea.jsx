import "./form.css";

const TextArea = ({formLabel, formName, value, onChange, placeholder}) => {
  return (
    <div className="form__element">
      <label className="form__element--label">{formLabel}</label>
      <textarea
        name={formName}
        className="form__element--input textarea"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
