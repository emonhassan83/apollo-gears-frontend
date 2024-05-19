/* eslint-disable react/no-unescaped-entities */
import { Input } from "@nextui-org/react";
import Link from "next/link";

const LoginFrom = () => {
  return (
    <div>
      <form>
        <Input name="email" type="email" label="Email" variant="bordered" />
        <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <small>If you don't have account{" "}
          <Link href="/register">{"\t"}<span className="font-semibold">sign up</span></Link></small>
        </div>
        <div className="flex justify-end ">{/* <ActionSubmitButton /> */}</div>
      </form>
    </div>
  );
};

export default LoginFrom;
