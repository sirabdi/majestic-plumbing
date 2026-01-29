interface Props {
  text: string;
  className?: string;
}

function Paragraph({ text, className }: Props) {
  return (
    <p
      className={`text-center md:text-left text-grey-1 font-normal ${className}`}
    >
      {text}
    </p>
  );
}

export { Paragraph };
