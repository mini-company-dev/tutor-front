import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniImageCard from "@/mini-components/ui/miniImageCard";

export default function MainSub2CardComponent({
  picture,
  children,
}: {
  picture: string;
  children?: React.ReactNode;
}) {
  return (
    <MiniBox
      ui={MiniUiType.NONE}
      className="p-3 flex flex-col items-center justify-center text-center group relative"
    >
      <MiniImageCard
        className="h-[300px] rounded-2xl w-full transition-transform duration-300 group-hover:scale-105"
        image={picture}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center 
             bg-black/40 text-white rounded-2xl 
             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {children}
      </div>
    </MiniBox>
  );
}
