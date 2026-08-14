export default function AuthForm({ children, onSubmit, loading = false, error = "" }) {
  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      {error && <p className="auth-form__error" role="alert">{error}</p>}
      {children}
      {loading && <p className="auth-form__status">Please wait...</p>}
    </form>
  );
}
