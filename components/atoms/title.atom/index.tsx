interface Props {
  text: string;
}

function Title({ text }: Props) {
  return (
    <h2 className="text-center md:text-left text-[40px] text-blue-3 leading-[46px] font-extrabold">
      {text}
    </h2>
  );
}

export { Title };
