export type RootState = {
  AppMechanics: AppMechanics;
  EventSlice: EventSlice;
  UserSlice: UserSlice;
};

export type AppMechanics = {
  value: {
    isSignInModalVisible: boolean;
    isSignUpModalVisible: boolean;
    isModalVisible: boolean;
    isCitiesModalVisible: boolean;
    isSearchBarVisible: boolean;
    isProfileModalVisible: boolean;
    isDeleteAccountModalVisible: boolean;
    isLogoutModalVisible: boolean;
    isNotificationsModalVisible: boolean;
    isDataFetchedFromBackend: boolean;
    isResetPasswordModalVisible: boolean;
    isNewPasswordModalVisible: boolean;
    isOtpModalVisible: boolean;
  };
};

export type EventSlice = {
  value: {
    trendingEvents: Array<TEvent>;
    latestEvents: Array<TEvent>;
    categories: Array<TCategory>;
    artists: Array<TArtist>;
  };
};

export type UserSlice = {
  value: {
    userDetails: TUser;
  };
};

export type TEvent = {
  city_id: number;
  country_id: number;
  id: number;
  cid: number;
  sponsore_id: number;
  title: string;
  img: string;
  cover_img: string;
  sdate: string;
  stime: string;
  etime: string;
  address: string;
  status: number;
  description: string;
  disclaimer: string;
  latitude: string;
  longtitude: string;
  event_status: "Pending" | "Completed" | "Cancelled";
  place_name: string;
  facility_id: string;
  restict_id: string;
  tags: string;
  vurls: string;
};

export type TFAQ = {
  id: number;
  store_id: number;
  question: string;
  answer: string;
  status: number;
};

export type TTicket = {
  id: number;
  uid: number;
  eid: number;
  sponsore_id: number;
  typeid: number;
  type: string;
  price: number;
  subtotal: number;
  cou_amt: number;
  total_ticket: number;
  tax: number;
  wall_amt: number;
  p_method_id: number;
  transaction_id: string;
  ticket_type: "Booked" | "Cancelled" | "Completed";
  cancle_comment: string;
  total_start: number;
  review_comment: string;
  is_review: number;
  commission: number;
  book_time: string;
  is_verify: number;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  ccode: string;
  mobile: string;
  password: string;
  refercode: string;
  parentcode: string | null;
  reg_date: string;
  status: string;
  pro_pic: string;
  wallet: string;
  city_data: {
    city_id: string;
    name: string | null;
  };
  is_google_login: number;
};

export type TSponsore = {
  id: number;
  title: string;
  img: string;
  status: number;
  mobile: string;
  email: string;
  password: string;
  commission: number;
  is_verify: number;
};

export type TNotification = {
  id: number;
  orag_id: number;
  datetime: string;
  title: string;
  description: string;
};

export type TSetting = {
  id: number;
  webname: string;
  weblogo: string;
  timezone: string;
  currency: string;
  pstore: number;
  one_key: string;
  one_hash: string;
  s_key: string;
  s_hash: string;
  scredit: number;
  rcredit: number;
  show_dark: number;
  tax: number;
};

export type TCountries = {
  id: number;
  name: string;
  code: string;
  icon: string;
};

export type TCities = {
  id: number;
  name: string;
  lat: string;
  lang: string;
  country_id: number;
  is_popular: number;
  icon: string;
};

export type TCategory = {
  id: number;
  title: string;
  img: string;
  status: number;
  cover: string;
};

export type TArtist = {
  id: number;
  eid: number;
  sponsore_id: number;
  img: string;
  title: string;
  arole: string;
  status: string;
};

export type TCover = {
  id: number;
  eid: number;
  sponsore_id: number;
  img: string;
  status: number;
};

export type TCoupon = {
  id: number;
  sponsore_id: number;
  coupon_img: string;
  title: string;
  coupon_code: string;
  subtitle: string;
  expire_date: string;
  min_amt: number;
  coupon_val: number;
  description: string;
  status: number;
};

export type TWallet = {
  id: number;
  uid: number;
  message: string;
  status: string;
  amt: number;
  tdate: string;
};
