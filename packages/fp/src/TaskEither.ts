import { Either, Exception, Fn } from ".";
import { Task } from "fp-ts/lib/Task";

import * as _TaskEither from "fp-ts/lib/TaskEither";
import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";

export type TaskEither<E, A> = Task<Either<E, A>>;

export namespace TaskEither {
  export type ErrorOr<A> = TaskEither<Error, A>;
  export type ErrorOrs<A> = TaskEither<readonly Error[], A>;

  export const Do = () => doNotationFrom(taskEither);

  export const fromUnsafe = <A>(fn: Fn.Lazy<Promise<A>>): ErrorOr<A> =>
    tryCatch(fn, Exception.fromUnknown);

  export import left = _TaskEither.left;
  export import right = _TaskEither.right;
  export import rightTask = _TaskEither.rightTask;
  export import leftTask = _TaskEither.leftTask;
  export import rightIO = _TaskEither.rightIO;
  export import leftIO = _TaskEither.leftIO;
  export import fromIOEither = _TaskEither.fromIOEither;
  export import fromEither = _TaskEither.fromEither;
  export import fromOption = _TaskEither.fromOption;
  export import fromPredicate = _TaskEither.fromPredicate;
  export import tryCatch = _TaskEither.tryCatch;
  export import fold = _TaskEither.fold;
  export import getOrElseW = _TaskEither.getOrElseW;
  export import getOrElse = _TaskEither.getOrElse;
  export import orElse = _TaskEither.orElse;
  export import swap = _TaskEither.swap;
  export import filterOrElse = _TaskEither.filterOrElse;
  export import tryCatchK = _TaskEither.tryCatchK;
  export import fromEitherK = _TaskEither.fromEitherK;
  export import fromIOEitherK = _TaskEither.fromIOEitherK;
  export import chainEitherKW = _TaskEither.chainEitherKW;
  export import chainEitherK = _TaskEither.chainEitherK;
  export import chainIOEitherKW = _TaskEither.chainIOEitherKW;
  export import chainIOEitherK = _TaskEither.chainIOEitherK;
  export import map = _TaskEither.map;
  export import bimap = _TaskEither.bimap;
  export import mapLeft = _TaskEither.mapLeft;
  export import apW = _TaskEither.apW;
  export import ap = _TaskEither.ap;
  export import apFirst = _TaskEither.apFirst;
  export import apSecond = _TaskEither.apSecond;
  export import chainW = _TaskEither.chainW;
  export import chain = _TaskEither.chain;
  export import chainFirstW = _TaskEither.chainFirstW;
  export import chainFirst = _TaskEither.chainFirst;
  export import flatten = _TaskEither.flatten;
  export import alt = _TaskEither.alt;
  export import of = _TaskEither.of;
  export import fromIO = _TaskEither.fromIO;
  export import fromTask = _TaskEither.fromTask;
  export import throwError = _TaskEither.throwError;
  export import getSemigroup = _TaskEither.getSemigroup;
  export import getApplySemigroup = _TaskEither.getApplySemigroup;
  export import getApplyMonoid = _TaskEither.getApplyMonoid;
  export import getApplicativeTaskValidation = _TaskEither.getApplicativeTaskValidation;
  export import getAltTaskValidation = _TaskEither.getAltTaskValidation;
  export import getTaskValidation = _TaskEither.getTaskValidation;
  export import getFilterable = _TaskEither.getFilterable;
  export import Functor = _TaskEither.Functor;
  export import ApplicativePar = _TaskEither.ApplicativePar;
  export import ApplicativeSeq = _TaskEither.ApplicativeSeq;
  export import Bifunctor = _TaskEither.Bifunctor;
  export import Alt = _TaskEither.Alt;
  export import taskEither = _TaskEither.taskEither;
  export import taskify = _TaskEither.taskify;
  export import bracket = _TaskEither.bracket;
  export import bindTo = _TaskEither.bindTo;
  export import bindW = _TaskEither.bindW;
  export import bind = _TaskEither.bind;
  export import apSW = _TaskEither.apSW;
}
