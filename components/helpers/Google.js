import { signIn } from "next-auth/react";
import Image from "next/image";

const Google = () => {
  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <button onClick={handleGoogleSignIn}>
      <div>
        <Image
          src="/assets/icons/google.png"
          alt="Google"
          width={24}
          height={20}
        />
        <span>Google</span>
      </div>
    </button>
  );
};

export default Google;
