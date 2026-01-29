interface Props {
  text: string;
}

function Paragraph({ text }: Props) {
  return (
    <p className="text-center md:text-left text-grey-1 font-normal">{text}</p>
  );
}

export { Paragraph };
