import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";

export default function TutorDetailSectionComponent({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <MiniBox ui={MiniUiType.NONE} className="p-6 mini-shadow rounded-2xl">
      <h3 className="text-xl font-bold mb-3">{label}</h3>
      <p className="text-[var(--text-light)] leading-relaxed">{children}</p>
    </MiniBox>
  );
}
