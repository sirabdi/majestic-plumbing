interface Props {
  text: string;
  className?: string;
}

function SubTitle({ text, className }: Props) {
  return (
    <p
      className={`text-center md:text-left text-xs text-blue-1 font-extrabold tracking-[.08rem] uppercase ${className}`}
    >
      {text}
    </p>
  );
}

export { SubTitle };
