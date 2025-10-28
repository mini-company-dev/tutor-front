"use client";

import {
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import MyPageStudentInfoSection from "@/sections/mypage/students/studentInfoSection";

export default function StudentMyPage() {
  // 그래프용 예시 데이터
  const matchData = [{ name: "튜터 적합도", value: 92, fill: "var(--brand)" }];
  const growthData = [
    { day: "Mon", value: 60 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 70 },
    { day: "Thu", value: 75 },
    { day: "Fri", value: 78 },
    { day: "Sat", value: 80 },
    { day: "Sun", value: 90 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10 text-center">
      <MyPageStudentInfoSection />

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {/* 🔹 현재 튜터 적합도 */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow flex flex-col items-center justify-center">
          <h4 className="text-lg mb-2">
            현재 튜터 적합도 <strong>92%</strong>
          </h4>
          <ResponsiveContainer width={150} height={150}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="100%"
              barSize={12}
              data={matchData}
              startAngle={360 * 0.92}
              endAngle={0}
            >
              <RadialBar dataKey="value" cornerRadius={8} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* 🔸 성장 트래킹 */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold mb-2">지난 주 스피킹 +15%</h4>
          <ResponsiveContainer width="90%" height={100}>
            <LineChart data={growthData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--brand)"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🗓️ 다음 수업 알림 */}
      <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center">
        <h4 className="text-lg font-semibold mb-1">
          내일 7PM – 비즈니스 롤플레이
        </h4>
        {/* <Button
          asChild
          className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          <a href="https://zoom.us" target="_blank" rel="noopener noreferrer">
            Zoom 입장하기
          </a>
        </Button> */}
      </div>

      {/* 🏅 레벨업 챌린지 진행도 */}
      <div className="bg-white rounded-2xl p-6 shadow text-center">
        <h4 className="text-lg font-semibold mb-2">레벨업 챌린지</h4>
        <p className="text-gray-500 mb-3">
          7/30일 완료 – 🎁 1회 무료 수업 보상
        </p>
        {/* <Progress value={(7 / 30) * 100} className="h-3" /> */}
      </div>
    </div>
  );
}
