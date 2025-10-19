export default function MainSubscribSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section>
      <div className="col-start-3 col-end-11">
        <h1 className="text-5xl">
          Building Soulutions,
          <br />
          Delivering Excellence
          <br />
          <strong className="mini-brand-text font-bold">
            Subscribe to our Newsletter
          </strong>
        </h1>
      </div>
      <div className="col-start-11 col-end-19">
        <p className="mini-t-l">
          인공지능이 인간의 노동과 사고의 일부를 대체하는 시대에, 교육의 목적은
          <br />
          더 이상 단순한 지식의 전달에 머무를 수 없다.
          <br />
          과거의 교육은 “정답을 아는 인간”을 양성하는 데 집중했다면, 이제는
          “정답을 만들어내는 인간”,
          <br />
          다시 말해 창의적 사고와 비판적 판단을 할 수 있는 인간을 길러내야 한다.
          <br />
          <br />
          AI는 이미 대부분의 정보 접근과 계산 능력에서 인간을 능가한다.
          <br />
          따라서 학생들이 배우는 과정의 핵심은 **‘무엇을 아느냐’가 아니라
          ‘어떻게 생각하느냐’**로 이동하고 있다.
          <br />
          이때 교사의 역할 또한 변한다. 교사는 더 이상 지식의 전달자가 아니라,
          <br />
          학습자가 스스로 탐구하고 사고할 수 있도록 돕는 ‘가이드(guide)’이자
          ‘멘토(mentor)’가 된다.
        </p>
      </div>
    </section>
  );
}
