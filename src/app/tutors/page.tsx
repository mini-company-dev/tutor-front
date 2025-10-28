import MiniSpacer from "@/mini-components/ui/miniSpacer";
import TutorListSection from "../../sections/tutors/tutorListSection";
import TutorListTitle from "../../sections/tutors/tutorListTitle";

export default function TutorListPage() {
  return (
    <div>
      <TutorListTitle className="shadow-lg" />
      <MiniSpacer size={100} />
      <TutorListSection />
      <MiniSpacer size={150} />
    </div>
  );
}
