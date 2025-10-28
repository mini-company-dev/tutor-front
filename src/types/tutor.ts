export interface ClientTutorListType {
  id: string;
  name: string;
  shortBio: string;
  rating: number;
  picture: string;
  tags: string[];
}

export interface TutorListType {
  id: string;
  name: string;
  bioVideoUrl: string;
  shortBio: string;
  rating: number;
  picture: string;
  classStyleFileUrl: string;
  isActive: boolean;
  specialties: string[];
  tags: string[];
}
