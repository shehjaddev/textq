import { Dispatch, SetStateAction } from "react";

type CompactState<T> = {
  value: T;
  set: Dispatch<SetStateAction<T>>;
};
