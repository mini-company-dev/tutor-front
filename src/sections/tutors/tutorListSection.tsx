"use client";

import MiniBox from "@/mini-components/basic-ui/miniBox";
import { MiniUiType } from "@/mini-components/miniComponentConfig";
import TutorProfileComponent from "@/components/tutors/tutorProfileComponent";
import { ClientTutorListType } from "@/types/tutor";
import { useState } from "react";
import TutorListForm from "@/domain/tutors/tutorListForm";

export default function TutorListSection({
  className,
}: {
  className?: string;
}) {
  const [tutors, setTutors] = useState<ClientTutorListType[]>([]);

  return (
    <section className={className}>
      <div className="col-start-3 col-end-19 mb-10">
        <MiniBox ui={MiniUiType.NONE}>
          <TutorListForm />
        </MiniBox>
      </div>
    </section>
  );
}
