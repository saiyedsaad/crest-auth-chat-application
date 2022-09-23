import Image from "next/image";

const Google = () => {
  return (
    <button>
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
