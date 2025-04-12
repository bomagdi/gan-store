import { SignUp } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="h-screen w-full grid place-content-center">
      <SignUp />
    </div>
  );
};

export default SignInPage;
