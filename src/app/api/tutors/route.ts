import { TutorListType } from "@/types/tutor";
import { createServerApiHandler } from "../serverApiFactory";

export const GET = createServerApiHandler<TutorListType>("GET", "/api/tutors");
