import * as _IOEither from "fp-ts/lib/IOEither";
import { Either } from "fp-ts/lib/Either";
import { IO } from "fp-ts/lib/IO";

/**
 * `IOEither<E, A>` represents a synchronous computation that either yields a value of type `A`
 * or fails yielding an error of type `E`. If you want to represent a synchronous computation
 * that never fails, please see `IO`.
 */
export type IOEither<E, A> = IO<Either<E, A>>;

export namespace IOEither {
  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import left = _IOEither.left;
  export import right = _IOEither.right;
  export import rightIO = _IOEither.rightIO;
  export import leftIO = _IOEither.leftIO;
  export import fromEither = _IOEither.fromEither;
  export import fromOption = _IOEither.fromOption;
  export import fromPredicate = _IOEither.fromPredicate;
  export import tryCatch = _IOEither.tryCatch;
  export import fold = _IOEither.fold;
  export import getOrElseW = _IOEither.getOrElseW;
  export import getOrElse = _IOEither.getOrElse;
  export import orElse = _IOEither.orElse;
  export import swap = _IOEither.swap;
  export import filterOrElse = _IOEither.filterOrElse;
  export import fromEitherK = _IOEither.fromEitherK;
  export import chainEitherKW = _IOEither.chainEitherKW;
  export import chainEitherK = _IOEither.chainEitherK;
  export import map = _IOEither.map;
  export import bimap = _IOEither.bimap;
  export import mapLeft = _IOEither.mapLeft;
  export import apW = _IOEither.apW;
  export import ap = _IOEither.ap;
  export import apFirst = _IOEither.apFirst;
  export import apSecond = _IOEither.apSecond;
  export import chainW = _IOEither.chainW;
  export import chain = _IOEither.chain;
  export import chainFirstW = _IOEither.chainFirstW;
  export import chainFirst = _IOEither.chainFirst;
  export import flatten = _IOEither.flatten;
  export import alt = _IOEither.alt;
  export import fromIO = _IOEither.fromIO;
  export import throwError = _IOEither.throwError;
  export import getSemigroup = _IOEither.getSemigroup;
  export import getApplySemigroup = _IOEither.getApplySemigroup;
  export import getApplyMonoid = _IOEither.getApplyMonoid;
  export import getApplicativeIOValidation = _IOEither.getApplicativeIOValidation;
  export import getAltIOValidation = _IOEither.getAltIOValidation;
  export import getIOValidation = _IOEither.getIOValidation;
  export import getFilterable = _IOEither.getFilterable;
  export import Functor = _IOEither.Functor;
  export import Bifunctor = _IOEither.Bifunctor;
  export import Applicative = _IOEither.Applicative;
  export import Monad = _IOEither.Monad;
  export import Alt = _IOEither.Alt;
  export import MonadIO = _IOEither.MonadIO;
  export import MonadThrow = _IOEither.MonadThrow;
  export import ioEither = _IOEither.ioEither;
  export import bracket = _IOEither.bracket;
  export import bindTo = _IOEither.bindTo;
  export import bindW = _IOEither.bindW;
  export import bind = _IOEither.bind;
  export import apSW = _IOEither.apSW;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
