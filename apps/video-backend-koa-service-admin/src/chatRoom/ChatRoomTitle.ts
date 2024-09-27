import { ChatRoom as TChatRoom } from "../api/chatRoom/ChatRoom";

export const CHATROOM_TITLE_FIELD = "id";

export const ChatRoomTitle = (record: TChatRoom): string => {
  return record.id?.toString() || String(record.id);
};
