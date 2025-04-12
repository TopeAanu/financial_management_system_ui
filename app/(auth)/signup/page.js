// app/(auth)/signup/page.jsx
import SignupForm from "@/components/auth/SignupForm";

export const metadata = {
  title: "Sign Up - Horizon App",
  description: "Create your Horizon account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-black dark:text-dark">
      <SignupForm />
    </div>
  );
}
