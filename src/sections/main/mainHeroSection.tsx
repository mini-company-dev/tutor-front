import { hoverScale } from "@/mini-components/animation/miniHoverAnimation";
import {
  fadeIn,
  fadeInUp,
} from "@/mini-components/animation/miniMotionAnimation";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniBox from "@/mini-components/ui/miniBox";
import MiniButton from "@/mini-components/ui/miniButton";
import MiniInput from "@/mini-components/ui/miniInput";

export default function MainHeroSection({ className }: { className?: string }) {
  return (
    <div
      className={`h-screen flex flex-col justify-center items-center ${className}`}
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, var(--brand) 50%, transparent), color-mix(in srgb, var(--background) 50%, transparent))",
      }}
    >
      <section>
        <div className="col-start-1 col-end-21 mb-20 text-center">
          <MiniBox ui={MiniUiType.NONE} motion={fadeInUp()}>
            <h1 className="mini-t text-5xl font-bold">Get early access</h1>
          </MiniBox>
          <MiniBox ui={MiniUiType.NONE} motion={fadeIn(1.7)}>
            <p className="mini-t-l text-lg mt-4">
              Sign up now to be the first to know when we launch! Sign up now to
              be
              <br />
              the first to know when we launch!
            </p>
          </MiniBox>
          <div className="mt-8 flex justify-center">
            <MiniInput
              ui={MiniUiType.BASIC}
              className="p-3 mini-round w-[550px] mr-3"
            />
            <MiniButton
              ui={MiniUiType.BRAND}
              hover={hoverScale(1.1)}
              className="mini-round mini-t-r px-6 py-3 text-sm mini-shadow"
            >
              Search
            </MiniButton>
          </div>
        </div>

        <div className="col-start-7 col-end-15 grid grid-cols-4 gap-8">
          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl mini-shadow"
          >
            <h3 className="mini-text font-bold">200</h3>
            <p>student</p>
          </MiniBox>

          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl mini-shadow"
          >
            <h3 className="mini-text font-bold">200</h3>
            <p>student</p>
          </MiniBox>

          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl mini-shadow"
          >
            <h3 className="mini-text font-bold">200</h3>
            <p>student</p>
          </MiniBox>

          <MiniBox
            ui={MiniUiType.BASIC}
            className="flex flex-col items-center justify-center h-[150px] rounded-2xl mini-shadow"
          >
            <h3 className="mini-text font-bold">200</h3>
            <p>student</p>
          </MiniBox>
        </div>
      </section>
    </div>
  );
}
