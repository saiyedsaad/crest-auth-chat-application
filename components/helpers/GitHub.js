import Image from "next/image";

const GitHub = () => {
  return (
    <button>
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
