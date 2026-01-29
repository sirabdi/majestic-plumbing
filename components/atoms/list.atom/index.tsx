import { ChevronRight } from "lucide-react";

interface Props {
  text: string;
}

function List({ text }: Props) {
  return (
    <div className="h-20 w-full flex items-center justify-between cursor-pointer rounded-[15px] group hover:bg-blue-3 p-5 transition duration-150">
      <p className="text-blue-3 group-hover:font-extrabold group-hover:text-white-7 text-xl">
        {text}
      </p>
      <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-1">
        <ChevronRight className="text-blue-1 group-hover:text-white" />
      </div>
    </div>
  );
}

export { List };
