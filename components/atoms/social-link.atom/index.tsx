interface Props {
  icon?: React.ReactElement;
}

function SocialLink({ icon }: Props) {
  return (
    <div className="w-[60px] h-[60px] rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-shade-2">
      {icon}
    </div>
  );
}

export { SocialLink };
