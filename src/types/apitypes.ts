export type DayCode = "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";

export interface OpeningHour {
  id: number;
  status: "published" | "draft" | "archived";
  day: DayCode;
  start_hour: string;
  end_hour: string;
}

export interface OpeningHoursResponse {
  data: OpeningHour[];
}

export interface FormattedSchedule {
  day: string;
  hours: string;
}

export interface MenuItem {
  id: number;
  status: "published" | "draft" | "archived";
  name: string;
  details: string;
  price: string;
  photo: string | null;
  is_today_special: boolean;
  category: number | null;
}

export interface MenuCategory {
  id: number;
  status: "published" | "draft" | "archived";
  name: string;
}

export interface MenuItemsResponse {
  data: MenuItem[];
}

export interface MenuCategoriesResponse {
  data: MenuCategory[];
}

export interface AboutText {
  id: number;
  key: string;
  text: string;
  status: string;
}

export interface AboutTextsResponse {
  data: AboutText[];
}

export interface AboutImage {
  id: number;
  key: string;
  image: string;
  status: string;
}

export interface LandingImageResponse {
  data: AboutImage[];
}
