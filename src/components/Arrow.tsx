interface ArrowProps {
  src: string;
  onClick?: () => void;
  alt: string;
}

export default function Arrow({ src, onClick, alt }: ArrowProps) {
  return (
    <img
      src={src}
      onClick={onClick}
      alt={alt}
      width={"50px"}
      height={"150px"}
      style={{ zIndex: 1, backgroundColor: "hsl(0, 0%, 50%)" }}
    />
  );
}
