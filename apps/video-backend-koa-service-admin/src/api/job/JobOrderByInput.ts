import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
