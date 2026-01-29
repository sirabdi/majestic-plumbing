interface Props {
  text: string;
  className?: string;
}

function Title({ text, className }: Props) {
  return (
    <h2
      className={`text-center md:text-left text-[40px] text-blue-3 leading-[46px] font-extrabold ${className}`}
    >
      {text}
    </h2>
  );
}

export { Title };
