import * as _Option from "fp-ts/Option";
import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";

export * from "fp-ts/lib/Option";

export type Option<A> = Option.None | Option.Some<A>;

export namespace Option {
  export type None = _Option.None;
  export type Some<A> = _Option.Some<A>;
  export type Nullable<A> = A | null | undefined;

  /** Approximates Haskell's do-notation - https://paulgray.net/do-syntax-in-typescript/ */
  export const Do = () => doNotationFrom(option);

  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import isSome = _Option.isSome;
  export import isNone = _Option.isNone;
  export import none = _Option.none;
  export import some = _Option.some;
  export import fromNullable = _Option.fromNullable;
  export import fromPredicate = _Option.fromPredicate;
  export import tryCatch = _Option.tryCatch;
  export import getLeft = _Option.getLeft;
  export import getRight = _Option.getRight;
  export import fromEither = _Option.fromEither;
  export import fold = _Option.fold;
  export import toNullable = _Option.toNullable;
  export import toUndefined = _Option.toUndefined;
  export import getOrElseW = _Option.getOrElseW;
  export import getOrElse = _Option.getOrElse;
  export import mapNullable = _Option.mapNullable;
  export import map = _Option.map;
  export import ap = _Option.ap;
  export import apFirst = _Option.apFirst;
  export import apSecond = _Option.apSecond;
  export import of = _Option.of;
  export import chain = _Option.chain;
  export import chainFirst = _Option.chainFirst;
  export import flatten = _Option.flatten;
  export import alt = _Option.alt;
  export import zero = _Option.zero;
  export import throwError = _Option.throwError;
  export import extend = _Option.extend;
  export import duplicate = _Option.duplicate;
  export import reduce = _Option.reduce;
  export import foldMap = _Option.foldMap;
  export import reduceRight = _Option.reduceRight;
  export import compact = _Option.compact;
  export import separate = _Option.separate;
  export import filter = _Option.filter;
  export import filterMap = _Option.filterMap;
  export import partition = _Option.partition;
  export import partitionMap = _Option.partitionMap;
  export import traverse = _Option.traverse;
  export import sequence = _Option.sequence;
  export import wither = _Option.wither;
  export import wilt = _Option.wilt;
  export import getShow = _Option.getShow;
  export import getEq = _Option.getEq;
  export import getOrd = _Option.getOrd;
  export import getApplySemigroup = _Option.getApplySemigroup;
  export import getApplyMonoid = _Option.getApplyMonoid;
  export import getFirstMonoid = _Option.getFirstMonoid;
  export import getLastMonoid = _Option.getLastMonoid;
  export import getMonoid = _Option.getMonoid;
  export import Functor = _Option.Functor;
  export import Applicative = _Option.Applicative;
  export import Monad = _Option.Monad;
  export import Foldable = _Option.Foldable;
  export import Alt = _Option.Alt;
  export import Alternative = _Option.Alternative;
  export import Extend = _Option.Extend;
  export import Compactable = _Option.Compactable;
  export import Filterable = _Option.Filterable;
  export import Traversable = _Option.Traversable;
  export import Witherable = _Option.Witherable;
  export import MonadThrow = _Option.MonadThrow;
  export import option = _Option.option;
  export import elem = _Option.elem;
  export import exists = _Option.exists;
  export import getRefinement = _Option.getRefinement;
  export import bindTo = _Option.bindTo;
  export import bind = _Option.bind;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
