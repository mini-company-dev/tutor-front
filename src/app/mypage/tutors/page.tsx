"use client";

import {
  hoverLift,
  hoverScale,
} from "@/mini-components/animation/miniHoverAnimation";
import MiniButton from "@/mini-components/basic-ui/miniButton";
import MiniInput from "@/mini-components/basic-ui/miniInput";
import { MiniUiSize, MiniUiType } from "@/mini-components/miniComponentConfig";
import MiniDropdown from "@/mini-components/ui/dropdown/miniDropdown";
import MiniSpacer from "@/mini-components/ui/miniSpacer";
import { useState } from "react";

export default function TutorEditPage() {
  const [profile, setProfile] = useState({
    name: "",
    country: "",
    summary: "",
    tags: [] as string[],
    intro: "",
    videoUrl: "",
    certifications: [] as string[],
    availableTimes: "",
    price: "",
    image: "",
  });

  const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (value && !profile.tags.includes(value)) {
        setProfile({ ...profile, tags: [...profile.tags, value] });
      }
      e.currentTarget.value = "";
    }
  };

  const handleTagRemove = (tag: string) => {
    setProfile({ ...profile, tags: profile.tags.filter((t) => t !== tag) });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  const handleSave = () => {
    console.log("Saving profile:", profile);
  };

  return (
    <div
      className="grid grid-cols-10 gap-6"
      // style={{
      //   backgroundImage:
      //     "repeating-linear-gradient(to right, rgba(0,0,0,0.2) 0 1px, transparent 1px 10%)",
      // }}
    >
      <MiniSpacer size={40} />
      {/* 👤 프로필 이미지 */}
      <div className="col-start-1 col-end-5 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100">
          {profile.image ? (
            <img
              src={profile.image}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
      </div>

      {/* 이름 + 국가 */}

      <div className="col-start-5 col-end-10 grid grid-cols-3 gap-6">
        <div className="col-start-1 col-end-3">
          <MiniInput
            ui={MiniUiType.BASIC}
            uiSize={MiniUiSize.MEDIUM}
            label="이름"
            id="name"
            type="text"
            placeholder="이름"
            className="w-full rounded-full"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div className="col-start-3 col-end-4">
          <MiniDropdown
            label="국가"
            uiHover={[hoverLift()]}
            className="rounded-full w-full px-4 py-2.5 text-sm font-medium"
            ui={MiniUiType.BASIC}
            placeholder="국가 선택"
            onValueSelect={(value) =>
              setProfile({ ...profile, country: value })
            }
            options={[
              { value: "KR", label: "🇰🇷 대한민국" },
              { value: "US", label: "🇺🇸 미국" },
              { value: "GB", label: "🇬🇧 영국" },
              { value: "CA", label: "🇨🇦 캐나다" },
              { value: "AU", label: "🇦🇺 호주" },
              { value: "PH", label: "🇵🇭 필리핀" },
              { value: "IN", label: "🇮🇳 인도" },
              { value: "VN", label: "🇻🇳 베트남" },
              { value: "JP", label: "🇯🇵 일본" },
              { value: "FR", label: "🇫🇷 프랑스" },
            ]}
          />
        </div>
        <div className="col-start-1 col-end-4">
          {/* 한줄 소개 */}
          <MiniInput
            ui={MiniUiType.BASIC}
            uiSize={MiniUiSize.MEDIUM}
            label="한줄 소개"
            id="summary"
            type="text"
            placeholder="예: 10년차 비즈니스 코치입니다!"
            className="w-full rounded-full"
            value={profile.summary}
            onChange={(e) =>
              setProfile({ ...profile, summary: e.target.value })
            }
          />
        </div>
      </div>

      <div className="col-start-2 col-end-10 grid grid-cols-2 gap-6">
        <div className="col-start-1 col-end-2">
          <label className="block text-sm font-medium">수업 가능 시간</label>
          <input
            type="text"
            value={profile.availableTimes}
            onChange={(e) =>
              setProfile({ ...profile, availableTimes: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="예: 월~금 19:00 / 토 10:00"
          />
        </div>

        <div className="col-start-2 col-end-3">
          <MiniInput
            ui={MiniUiType.BASIC}
            uiSize={MiniUiSize.MEDIUM}
            type="file"
            label="자격증 업로드"
            className="w-full rounded-full"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []).map((f) => f.name);
              setProfile({ ...profile, certifications: files });
            }}
          />
          {profile.certifications.length > 0 && (
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
              {profile.certifications.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="col-start-2 col-end-10">
        <label className="block text-sm font-medium">자기소개</label>
        <textarea
          rows={4}
          value={profile.intro}
          onChange={(e) => setProfile({ ...profile, intro: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 resize-none"
          placeholder="자신의 수업 스타일, 경험 등을 소개해주세요."
        />
      </div>

      <div className="col-start-2 col-end-10 grid grid-cols-2 gap-6">
        <div className="col-start-1 col-end-2">
          <MiniInput
            ui={MiniUiType.BASIC}
            uiSize={MiniUiSize.MEDIUM}
            type="file"
            label="소개 영상"
            className="w-full rounded-full"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []).map((f) => f.name);
              setProfile({ ...profile, certifications: files });
            }}
          />
          {profile.certifications.length > 0 && (
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
              {profile.certifications.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-start-2 col-end-3">
          <MiniInput
            ui={MiniUiType.BASIC}
            uiSize={MiniUiSize.MEDIUM}
            type="file"
            label="자격증 업로드"
            className="w-full rounded-full"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []).map((f) => f.name);
              setProfile({ ...profile, certifications: files });
            }}
          />
          {profile.certifications.length > 0 && (
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
              {profile.certifications.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="col-start-2 col-end-10">
        <MiniInput
          ui={MiniUiType.BASIC}
          uiSize={MiniUiSize.MEDIUM}
          label="테그"
          id="summary"
          type="text"
          placeholder="#친절 #유머"
          className="w-full rounded-full"
          value={profile.summary}
          onChange={(e) => setProfile({ ...profile, summary: e.target.value })}
        />
      </div>

      {/* 💾 버튼 */}
      <div className="col-start-8 col-end-10">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
