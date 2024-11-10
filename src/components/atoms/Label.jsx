const Label = ({ text, htmlFor = null, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {text}
  </label>
);

export default Label;
