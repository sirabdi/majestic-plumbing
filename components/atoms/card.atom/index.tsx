interface Props {
  key: number;
  item: {
    icon: React.ReactElement;
    value: string;
    desc: string;
  };
}

function Card({ item }: Props) {
  return (
    <div className="w-full p-[30px] h-[219px] bg-blue-3 rounded-[15px]">
      <div className="flex flex-col gap-2">
        {item.icon}
        <div>
          <p className="text-white font-extrabold text-[44px]">{item.value}</p>
          <p className="text-white text-xl">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export { Card };
