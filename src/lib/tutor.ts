import { ClientTutorListType, TutorListType } from "@/types/tutor";
import { ApiResponse, requestApi } from "./apiFactory";

export async function tutorList(): Promise<ApiResponse<ClientTutorListType[]>> {
  return requestApi<TutorListType[]>("GET", "/api/tutors");
}
