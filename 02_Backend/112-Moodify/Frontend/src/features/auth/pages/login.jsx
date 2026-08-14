import { Link } from "react-router";
import AuthForm from "../components/AuthForm";
import AuthField from "../components/AuthField";
import AuthCheckbox from "../components/AuthCheckbox";
import AuthLayout from "../components/AuthLayout";
import useAuthForm from "../hooks/useAuthForm";
import "../styles/auth.scss";

export default function Login() {
  const { values, loading, error, handleChange, handleSubmit } = useAuthForm({
    mode: "login",
  });

  return (
    <AuthLayout
      pageClassName="login-page"
      eyebrow="Welcome back"
      title="Return to your rhythm."
      description="Sign in to pick up where your mood left off."
      footer={
        <>
          New to Moodify? <Link to="/register">Create an account</Link>
        </>
      }
    >
      <AuthForm onSubmit={handleSubmit} loading={loading} error={error}>
        <AuthField
          id="login-email"
          name="email"
          label="Email address"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <AuthField
          id="login-password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
        >
          <button type="button" className="button button--text">
            Forgot password?
          </button>
        </AuthField>

        <AuthCheckbox name="remember">Keep me signed in</AuthCheckbox>

        <button type="submit" className="button button--primary auth-form__submit" disabled={loading}>
          <span>{loading ? "Signing in..." : "Sign in"}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </AuthForm>
    </AuthLayout>
  );
}
