import { Exception, Fn, TaskEither } from ".";

export { forTaskEither as do } from "./Do";
export * from "fp-ts/lib/TaskEither";

export type ErrorOr<A, L extends Error = Error> = TaskEither.TaskEither<L, A>;

export const fromUnsafe = <A>(fn: Fn.Lazy<Promise<A>>): ErrorOr<A> =>
  TaskEither.tryCatch(fn, Exception.fromUnknown);
