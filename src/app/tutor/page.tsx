import MiniSpacer from "@/mini-components/ui/miniSpacer";
import TutorListSection from "./sections/tutorListSection";
import TutorListTitle from "./sections/tutorListTitle";

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
