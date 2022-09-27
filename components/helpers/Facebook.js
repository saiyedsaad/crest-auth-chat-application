import Image from "next/image";
import { signIn } from "next-auth/react";

const Facebook = () => {
  const handleFaceBookSignIn = () => {
    signIn("facebook", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <button onClick={handleFaceBookSignIn}>
      <div>
        <Image
          src="/assets/icons/facebook.png"
          alt="Facebook"
          width={30}
          height={24}
        />
        <span>Facebook</span>
      </div>
    </button>
  );
};

export default Facebook;
