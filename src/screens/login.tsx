import { login } from "@/api/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      await login(email, password);
      navigate("/modules");
    } catch {
      toast.error("Invalid credentials");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold">Fashion Marketplace</h1>
      <h3 className="text-lg">Business</h3>
      <form
        className="flex flex-col gap-4 justify-center mt-4"
        onSubmit={handleSubmit}
      >
        <Input type="text" placeholder="Email" name="email" />
        <Input
          type="password"
          placeholder="Password"
          name="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
}
