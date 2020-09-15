import * as _Either from "fp-ts/Either";
import { Exception, Fn } from "./index";
import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";

export type Either<E, A> = Either.Left<E> | Either.Right<A>;

export namespace Either {
  export type Left<E> = _Either.Left<E>;
  export type Right<A> = _Either.Right<A>;
  export type ErrorOr<A> = Either<Error, A>;
  export type ErrorsOr<A> = Either<readonly Error[], A>;

  /** Approximates Haskell's do-notation - https://paulgray.net/do-syntax-in-typescript/ */
  export const Do = () => doNotationFrom(either);

  /** Returns a `Either.tryCatch` call w/ a general-purpose error handler */
  export const fromUnsafe = <A>(fn: Fn.Lazy<A>): Either<Error, A> =>
    tryCatch(fn, Exception.fromUnknown);

  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import isLeft = _Either.isLeft;
  export import isRight = _Either.isRight;
  export import left = _Either.left;
  export import right = _Either.right;
  export import fromNullable = _Either.fromNullable;
  export import tryCatch = _Either.tryCatch;
  export import parseJSON = _Either.parseJSON;
  export import stringifyJSON = _Either.stringifyJSON;
  export import fromOption = _Either.fromOption;
  export import fromPredicate = _Either.fromPredicate;
  export import fold = _Either.fold;
  export import getOrElseW = _Either.getOrElseW;
  export import getOrElse = _Either.getOrElse;
  export import swap = _Either.swap;
  export import orElse = _Either.orElse;
  export import filterOrElse = _Either.filterOrElse;
  export import map = _Either.map;
  export import bimap = _Either.bimap;
  export import mapLeft = _Either.mapLeft;
  export import apW = _Either.apW;
  export import ap = _Either.ap;
  export import apFirst = _Either.apFirst;
  export import apSecond = _Either.apSecond;
  export import of = _Either.of;
  export import chainW = _Either.chainW;
  export import chain = _Either.chain;
  export import chainFirstW = _Either.chainFirstW;
  export import chainFirst = _Either.chainFirst;
  export import flatten = _Either.flatten;
  export import alt = _Either.alt;
  export import extend = _Either.extend;
  export import duplicate = _Either.duplicate;
  export import reduce = _Either.reduce;
  export import foldMap = _Either.foldMap;
  export import reduceRight = _Either.reduceRight;
  export import traverse = _Either.traverse;
  export import sequence = _Either.sequence;
  export import throwError = _Either.throwError;
  export import getShow = _Either.getShow;
  export import getEq = _Either.getEq;
  export import getSemigroup = _Either.getSemigroup;
  export import getApplySemigroup = _Either.getApplySemigroup;
  export import getApplyMonoid = _Either.getApplyMonoid;
  export import getFilterable = _Either.getFilterable;
  export import getWitherable = _Either.getWitherable;
  export import getApplicativeValidation = _Either.getApplicativeValidation;
  export import getAltValidation = _Either.getAltValidation;
  export import getValidation = _Either.getValidation;
  export import getValidationSemigroup = _Either.getValidationSemigroup;
  export import Functor = _Either.Functor;
  export import Applicative = _Either.Applicative;
  export import Monad = _Either.Monad;
  export import Foldable = _Either.Foldable;
  export import Traversable = _Either.Traversable;
  export import Bifunctor = _Either.Bifunctor;
  export import Alt = _Either.Alt;
  export import Extend = _Either.Extend;
  export import ChainRec = _Either.ChainRec;
  export import MonadThrow = _Either.MonadThrow;
  export import getValidationMonoid = _Either.getValidationMonoid;
  export import either = _Either.either;
  export import toError = _Either.toError;
  export import elem = _Either.elem;
  export import exists = _Either.exists;
  export import bindTo = _Either.bindTo;
  export import bindW = _Either.bindW;
  export import bind = _Either.bind;
  export import apSW = _Either.apSW;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
