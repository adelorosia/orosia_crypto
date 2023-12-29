import Link from "next/link";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
interface ILogin {
  className?: string;
}
const Login = ({ className }: ILogin) => {
  return (
    <div className={cn(className)}>
      <p className="text-3xl font-Viga mb-6">Login Page</p>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm ">Email</label>
        <Input type="email" placeholder="Email" />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm">Password</label>
        <Input type="password" placeholder="Password" />
      </div>
      <Button variant="default" className="my-4 uppercase font-Viga">
        Login
      </Button>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember Me</Label>
        </div>
        <div className="flex gap-2">
          <Link className=" underline" href="/">
            Forget Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
