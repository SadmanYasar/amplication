import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
