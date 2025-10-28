"use client";

import { tutorList } from "@/lib/tutor";
import { ClientTutorListType, TutorListType } from "@/types/tutor";
import { useEffect, useState } from "react";

export default function useTutorListForm() {
  const [data, setData] = useState<ClientTutorListType[]>([]);

  const [search, setSearch] = useState("");
  const [career, setCareer] = useState("all");
  const [style, setStyle] = useState("all");
  const [sort, setSort] = useState("rating");

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit();
  }, [career, style, sort]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await tutorList();
      setMessage(result.explanation ? result.explanation : "조회 성공");
      setIsSuccess(true);
      if (result.req) {
        setData(result.req);
      }
    } catch (err: any) {
      setMessage(`${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    message,
    loading,
    isSuccess,

    data,

    setSearch,
    setCareer,
    setStyle,
    setSort,
  };
}
