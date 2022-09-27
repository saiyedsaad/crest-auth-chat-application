import Image from "next/image";

const Twitter = () => {
  const handleTwitterSignIn = () => {};

  return (
    <button onClick={handleTwitterSignIn}>
      <div>
        <Image
          src="/assets/icons/twitter.png"
          alt="Twitter"
          width={24}
          height={24}
        />
        <span>Twitter</span>
      </div>
    </button>
  );
};

export default Twitter;
