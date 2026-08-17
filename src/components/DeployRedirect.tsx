type DeployRedirectProps = {
  url: string;
  className?: string;
  children: React.ReactNode;
};

export default function DeployRedirect({
  url,
  className,
  children,
}: DeployRedirectProps) {
  const openLiveDemo = (
    event: React.MouseEvent | React.KeyboardEvent<HTMLSpanElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <span
      className={className}
      role="link"
      tabIndex={0}
      onClick={openLiveDemo}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          openLiveDemo(event);
        }
      }}
    >
      {children}
    </span>
  );
}
