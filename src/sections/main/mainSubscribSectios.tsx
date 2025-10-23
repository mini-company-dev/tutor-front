export default function MainSubscribSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section>
      <div className="col-start-3 col-end-11">
        <h1 className="text-5xl">
          Connecting Students,
          <br />
          Empowering Tutors
          <br />
          <strong className="text-[var(--brand)] font-bold">
            Subscribe to our Newsletter
          </strong>
        </h1>
      </div>
      <div className="col-start-11 col-end-19">
        <p className="text-[var(--text-light)] ">
          교육은 단순히 지식을 전달하는 과정이 아니라, 사람과 사람이 만나 함께
          성장하는 여정입니다.
          <br />
          학생은 자신의 목표에 맞는 튜터를 만나며, 배우는 즐거움과 성취를
          경험합니다.
          <br />
          <br />
          튜터는 자신의 경험과 전문성을 바탕으로 학습자의 잠재력을 이끌어내는
          파트너가 됩니다.
          <br />
          학습이 일방향이 아닌 ‘소통과 발견의 과정’이 될 때, 진정한 교육의
          가치가 실현됩니다.
          <br />
          <br />
          우리는 튜터와 학생이 함께 성장하고,
          <br />
          더 나은 배움을 만들어가는 공간을 지향합니다.
          <br />
          지금, 당신의 배움이 시작되는 곳에서 함께하세요.
        </p>
      </div>
    </section>
  );
}
