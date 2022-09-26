import Image from "next/image";
import { signIn } from "next-auth/react";

const GitHub = () => {
  const handleGitHubSignIn = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <button onClick={handleGitHubSignIn}>
      <div>
        <Image
          src="/assets/icons/github.png"
          alt="GitHub"
          width={24}
          height={20}
        />
        <span>GitHub</span>
      </div>
    </button>
  );
};

export default GitHub;
