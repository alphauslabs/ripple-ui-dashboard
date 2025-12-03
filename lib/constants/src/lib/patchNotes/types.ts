export interface PatchNoteSection {
  title: string;
  items: string[];
}

export interface PatchNote {
  version: string;
  releaseDate: string;
  summary?: string;
  sections: PatchNoteSection[];
}

export type PatchNotesData = PatchNote[];
