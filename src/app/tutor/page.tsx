'use client';

import MiniBox from '@/components/miniBox';
import MiniButton from '@/components/miniButton';
import MiniImageCard from '@/components/miniImageCard';

export default function LoginPage() {
  return (
    <section className="h-screen">
      <div className="col-start-3 col-end-19 grid grid-cols-4 gap-8">
        <MiniBox className="p-3">
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
  );
}
