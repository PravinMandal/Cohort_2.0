import { Link } from "react-router";
import AuthForm from "../components/AuthForm";
import AuthField from "../components/AuthField";
import AuthLayout from "../components/AuthLayout";
import useAuthForm from "../hooks/useAuthForm";
import "../styles/auth.scss";

export default function Register() {
  const { values, loading, error, handleChange, handleSubmit } = useAuthForm({
    mode: "register",
  });

  return (
    <AuthLayout
      pageClassName="register-page"
      eyebrow="Start your journey"
      title="Make every mood sound better."
      description="Create your Moodify account and find your next favorite feeling."
      footer={
        <>
          Already have an account? <Link to="/login">Sign in</Link>
        </>
      }
    >
      <AuthForm onSubmit={handleSubmit} loading={loading} error={error}>
        <AuthField
          id="register-username"
          name="username"
          label="Username"
          value={values.username}
          onChange={handleChange}
          placeholder="Choose a username"
          autoComplete="username"
        />

        <AuthField
          id="register-email"
          name="email"
          label="Email address"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <AuthField
          id="register-password"
          name="password"
          label="Create a password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="At least 8 characters"
          autoComplete="new-password"
        />

        <button type="submit" className="button button--primary auth-form__submit" disabled={loading}>
          <span>{loading ? "Creating account..." : "Create account"}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </AuthForm>
    </AuthLayout>
  );
}
