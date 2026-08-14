export default function AuthField({
  id,
  name = id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
  children,
  value,
  onChange,
}) {
  return (
    <div className="auth-form__field">
      <div className="auth-form__label-row">
        <label htmlFor={id}>{label}</label>
        {children}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}
