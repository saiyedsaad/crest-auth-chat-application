import Image from "next/image";

const Facebook = () => {
  return (
    <button>
      <div>
        <Image
          src="/assets/icons/facebook.png"
          alt="Facebook"
          width={24}
          height={20}
        />
        <span>Facebook</span>
      </div>
    </button>
  );
};

export default Facebook;
