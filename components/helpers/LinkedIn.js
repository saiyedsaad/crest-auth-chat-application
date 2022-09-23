import Image from "next/image";

const LinkedIn = () => {
  return (
    <button>
      <div>
        <Image
          src="/assets/icons/linkedin.png"
          alt="LinkedIn"
          width={24}
          height={20}
        />
        <span>LinkedIn</span>
      </div>
    </button>
  );
};

export default LinkedIn;
