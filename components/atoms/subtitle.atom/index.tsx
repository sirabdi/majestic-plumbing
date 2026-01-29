interface Props {
  text: string;
}

function SubTitle({ text }: Props) {
  return (
    <p className="text-center md:text-left text-xs text-blue-1 font-extrabold tracking-[.08rem] uppercase">
      {text}
    </p>
  );
}

export { SubTitle };
