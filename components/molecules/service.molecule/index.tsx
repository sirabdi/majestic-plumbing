import { Paragraph } from "@/components/atoms";

interface Props {
  item: {
    id: number;
    icon: React.ReactElement;
    title: string;
    desc: string;
  };
}

function Service({ item }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="bg-blue-1 w-[54px] h-[54px] rounded-full flex items-center justify-center shrink-0">
          {item.icon}
        </div>
        <p className="text-[23px] font-extrabold text-blue-3">{item.title}</p>
      </div>
      <Paragraph text={item.desc} />
    </div>
  );
}

export { Service };
