export interface Question {
  id: number;
  title: string;
  value: boolean;
  comment: string | null;
  level: string;
  category: string;
  image?: string;
}
