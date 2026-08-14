export default function AuthCheckbox({ name, children }) {
  return (
    <label className="auth-form__check">
      <input type="checkbox" name={name} />
      <span>{children}</span>
    </label>
  );
}
