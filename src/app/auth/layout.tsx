import { fadeInUp } from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <MiniBox
        ui={MiniUiType.BASIC}
        uiMotion={[fadeInUp()]}
        className="rounded-2xl shadow-md w-[370px] p-8"
      >
        {children}
      </MiniBox>
    </main>
  );
}
