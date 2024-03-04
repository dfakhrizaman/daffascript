export interface CardItem {
  id: string;
  companyName: string;
  role: string;
  type: string;
  companyImage: string;
  dateRange: string;
  description: string;
  markdownContent?: string;
  tags?: string[];
}
