/// <reference types="vite/client" />
interface Gym {
  address?: String;
  commercial_file_url?: String;
  country_code?: String<Number>;
  description?: String;
  description_ar?: String;
  description_displayed?: String;
  district?: String;
  dynamic_link?: String;
  email?: String;
  enable_notification?: Boolean;
  gender_type?: String;
  gym_package?: null;
  id?: Number;
  is_featured?: Boolean;
  is_hot_deal?: Boolean;
  lat?: Number;
  logo_img_url?: String;
  long?: Number;
  name?: String;
  owner_id?: Number;
  phone_number?: String;
  phone_verified?: Boolean;
  rate?: Number;
  source?: String;
  status?: String;
  user_role?: "gym";
  verification_code?: null;
}
