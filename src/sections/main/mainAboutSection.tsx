import MiniBox from '@/components/miniBox';
import MiniButton from '@/components/miniButton';
import MiniImageCard from '@/components/miniImageCard';

export default function MainAboutSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <section className="p-10">
        <div className="col-start-1 col-end-21 text-center">
          <h2 className="text-4xl">Unblock has been pioneering Crypto</h2>
          <h2 className="text-4xl">
            Industry for work{' '}
            <strong className="mini-brand-text font-bold">since 2025</strong>
          </h2>
        </div>
      </section>

      <section className="p-5">
        <div className="col-start-3 col-end-19 grid grid-cols-3 gap-8">
          <MiniBox variant={'none'} className="p-3">
            <MiniImageCard
              className="h-[300px] mini-round"
              image="./picture1.jpg"
            />
            <h3 className="text-xl font-bold mt-2">텍스트가 들어가는 곳</h3>
            <p className="mini-light-text">
              여기에는 내용을 작성할 예정인데 조금 길어야
              <br />
              이쁠것 같아서 일단 쓰는 중
            </p>
            <MiniButton className="mini-round text-sm mt-4 flex justify-center">
              바로가기
            </MiniButton>
          </MiniBox>

          <MiniBox variant={'none'} className="p-3">
            <MiniImageCard
              className="h-[300px] mini-round"
              image="./picture1.jpg"
            />
            <h3 className="text-xl font-bold mt-2">텍스트가 들어가는 곳</h3>
            <p className="mini-light-text">
              여기에는 내용을 작성할 예정인데 조금 길어야
              <br />
              이쁠것 같아서 일단 쓰는 중
            </p>
            <MiniButton className="mini-round text-sm mt-4 flex justify-center">
              바로가기
            </MiniButton>
          </MiniBox>

          <MiniBox variant={'none'} className="p-3">
            <MiniImageCard
              className="h-[300px] mini-round"
              image="./picture1.jpg"
            />
            <h3 className="text-xl font-bold mt-2">텍스트가 들어가는 곳</h3>
            <p className="mini-light-text">
              여기에는 내용을 작성할 예정인데 조금 길어야
              <br />
              이쁠것 같아서 일단 쓰는 중
            </p>
            <MiniButton className="mini-round text-sm mt-4 flex justify-center">
              바로가기
            </MiniButton>
          </MiniBox>
        </div>
      </section>
    </div>
  );
}
