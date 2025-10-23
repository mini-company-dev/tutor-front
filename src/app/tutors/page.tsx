import MiniSpacer from "@/mini-components/ui/miniSpacer";
import TutorListSection from "../../sections/tutors/tutorListSection";
import TutorListTitle from "../../sections/tutors/tutorListTitle";

export default function TutorListPage() {
  return (
    <div>
      <MiniSpacer size={100} />
      <TutorListTitle />
      <MiniSpacer size={100} />
      <TutorListSection />
      <MiniSpacer size={150} />
    </div>
  );
}
