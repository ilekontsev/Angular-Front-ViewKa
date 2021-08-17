
export interface DescListDialog {
  display: boolean;
  first_name: string;
  id: number;
  last_name: string;
  online: number;
  last_seen: {
    platform: number;
    time: number;
  };
  photo_50: string;
  can_access_closed: boolean;
  is_closed: boolean;
  is_no_index: boolean;
}
export interface DescMessage {
  attachments: [];
  date: number;
  fwd_messages: [];
  list: DescMessageList[];
  text: string;
}
export interface DescMessageList {
  can_access_closed: boolean;
  first_name: string;
  id: number;
  is_closed: false;
  last_name: string;
  online: number;
  online_info: {
    visible: boolean;
    last_seen: number;
    is_online: boolean;
    app_id: number;
    is_mobile: boolean;
  };
  photo_50: string;
  photo_100: string;
  screen_name: string;
  sex: number;
}
