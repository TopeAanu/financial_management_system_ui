// app/(auth)/login/page.jsx
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login - Horizon App",
  description: "Login to your Horizon account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm />
    </div>
  );
} 
