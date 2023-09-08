export type Maybe<T> = void | null | T;

export type Nullable<T> = T | null;

export type Dictionary<
  T extends string | number | symbol = string,
  U = unknown
> = Record<T, U>;
