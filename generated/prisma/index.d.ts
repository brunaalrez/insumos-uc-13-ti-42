
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tipo_Produto_Insumo
 * 
 */
export type Tipo_Produto_Insumo = $Result.DefaultSelection<Prisma.$Tipo_Produto_InsumoPayload>
/**
 * Model Movimentacao
 * 
 */
export type Movimentacao = $Result.DefaultSelection<Prisma.$MovimentacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tipo_Produto_Insumos
 * const tipo_Produto_Insumos = await prisma.tipo_Produto_Insumo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tipo_Produto_Insumos
   * const tipo_Produto_Insumos = await prisma.tipo_Produto_Insumo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tipo_Produto_Insumo`: Exposes CRUD operations for the **Tipo_Produto_Insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_Produto_Insumos
    * const tipo_Produto_Insumos = await prisma.tipo_Produto_Insumo.findMany()
    * ```
    */
  get tipo_Produto_Insumo(): Prisma.Tipo_Produto_InsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacao`: Exposes CRUD operations for the **Movimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacaos
    * const movimentacaos = await prisma.movimentacao.findMany()
    * ```
    */
  get movimentacao(): Prisma.MovimentacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tipo_Produto_Insumo: 'Tipo_Produto_Insumo',
    Movimentacao: 'Movimentacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tipo_Produto_Insumo" | "movimentacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tipo_Produto_Insumo: {
        payload: Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>
        fields: Prisma.Tipo_Produto_InsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tipo_Produto_InsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tipo_Produto_InsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>
          }
          findFirst: {
            args: Prisma.Tipo_Produto_InsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tipo_Produto_InsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>
          }
          findMany: {
            args: Prisma.Tipo_Produto_InsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>[]
          }
          create: {
            args: Prisma.Tipo_Produto_InsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>
          }
          createMany: {
            args: Prisma.Tipo_Produto_InsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tipo_Produto_InsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>
          }
          update: {
            args: Prisma.Tipo_Produto_InsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>
          }
          deleteMany: {
            args: Prisma.Tipo_Produto_InsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tipo_Produto_InsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tipo_Produto_InsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tipo_Produto_InsumoPayload>
          }
          aggregate: {
            args: Prisma.Tipo_Produto_InsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_Produto_Insumo>
          }
          groupBy: {
            args: Prisma.Tipo_Produto_InsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_Produto_InsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tipo_Produto_InsumoCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_Produto_InsumoCountAggregateOutputType> | number
          }
        }
      }
      Movimentacao: {
        payload: Prisma.$MovimentacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovimentacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovimentacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tipo_Produto_Insumo?: Tipo_Produto_InsumoOmit
    movimentacao?: MovimentacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tipo_Produto_InsumoCountOutputType
   */

  export type Tipo_Produto_InsumoCountOutputType = {
    movimentacoes: number
  }

  export type Tipo_Produto_InsumoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | Tipo_Produto_InsumoCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * Tipo_Produto_InsumoCountOutputType without action
   */
  export type Tipo_Produto_InsumoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_InsumoCountOutputType
     */
    select?: Tipo_Produto_InsumoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_Produto_InsumoCountOutputType without action
   */
  export type Tipo_Produto_InsumoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tipo_Produto_Insumo
   */

  export type AggregateTipo_Produto_Insumo = {
    _count: Tipo_Produto_InsumoCountAggregateOutputType | null
    _avg: Tipo_Produto_InsumoAvgAggregateOutputType | null
    _sum: Tipo_Produto_InsumoSumAggregateOutputType | null
    _min: Tipo_Produto_InsumoMinAggregateOutputType | null
    _max: Tipo_Produto_InsumoMaxAggregateOutputType | null
  }

  export type Tipo_Produto_InsumoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type Tipo_Produto_InsumoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type Tipo_Produto_InsumoMinAggregateOutputType = {
    id: number | null
    tipo_de_insumo: string | null
    quantidade: number | null
    fornecedor: string | null
    tipo_de_produto: string | null
  }

  export type Tipo_Produto_InsumoMaxAggregateOutputType = {
    id: number | null
    tipo_de_insumo: string | null
    quantidade: number | null
    fornecedor: string | null
    tipo_de_produto: string | null
  }

  export type Tipo_Produto_InsumoCountAggregateOutputType = {
    id: number
    tipo_de_insumo: number
    quantidade: number
    fornecedor: number
    tipo_de_produto: number
    _all: number
  }


  export type Tipo_Produto_InsumoAvgAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type Tipo_Produto_InsumoSumAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type Tipo_Produto_InsumoMinAggregateInputType = {
    id?: true
    tipo_de_insumo?: true
    quantidade?: true
    fornecedor?: true
    tipo_de_produto?: true
  }

  export type Tipo_Produto_InsumoMaxAggregateInputType = {
    id?: true
    tipo_de_insumo?: true
    quantidade?: true
    fornecedor?: true
    tipo_de_produto?: true
  }

  export type Tipo_Produto_InsumoCountAggregateInputType = {
    id?: true
    tipo_de_insumo?: true
    quantidade?: true
    fornecedor?: true
    tipo_de_produto?: true
    _all?: true
  }

  export type Tipo_Produto_InsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo_Produto_Insumo to aggregate.
     */
    where?: Tipo_Produto_InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipo_Produto_Insumos to fetch.
     */
    orderBy?: Tipo_Produto_InsumoOrderByWithRelationInput | Tipo_Produto_InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tipo_Produto_InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipo_Produto_Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipo_Produto_Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tipo_Produto_Insumos
    **/
    _count?: true | Tipo_Produto_InsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_Produto_InsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_Produto_InsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_Produto_InsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_Produto_InsumoMaxAggregateInputType
  }

  export type GetTipo_Produto_InsumoAggregateType<T extends Tipo_Produto_InsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_Produto_Insumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_Produto_Insumo[P]>
      : GetScalarType<T[P], AggregateTipo_Produto_Insumo[P]>
  }




  export type Tipo_Produto_InsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tipo_Produto_InsumoWhereInput
    orderBy?: Tipo_Produto_InsumoOrderByWithAggregationInput | Tipo_Produto_InsumoOrderByWithAggregationInput[]
    by: Tipo_Produto_InsumoScalarFieldEnum[] | Tipo_Produto_InsumoScalarFieldEnum
    having?: Tipo_Produto_InsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_Produto_InsumoCountAggregateInputType | true
    _avg?: Tipo_Produto_InsumoAvgAggregateInputType
    _sum?: Tipo_Produto_InsumoSumAggregateInputType
    _min?: Tipo_Produto_InsumoMinAggregateInputType
    _max?: Tipo_Produto_InsumoMaxAggregateInputType
  }

  export type Tipo_Produto_InsumoGroupByOutputType = {
    id: number
    tipo_de_insumo: string
    quantidade: number
    fornecedor: string
    tipo_de_produto: string
    _count: Tipo_Produto_InsumoCountAggregateOutputType | null
    _avg: Tipo_Produto_InsumoAvgAggregateOutputType | null
    _sum: Tipo_Produto_InsumoSumAggregateOutputType | null
    _min: Tipo_Produto_InsumoMinAggregateOutputType | null
    _max: Tipo_Produto_InsumoMaxAggregateOutputType | null
  }

  type GetTipo_Produto_InsumoGroupByPayload<T extends Tipo_Produto_InsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_Produto_InsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_Produto_InsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_Produto_InsumoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_Produto_InsumoGroupByOutputType[P]>
        }
      >
    >


  export type Tipo_Produto_InsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_de_insumo?: boolean
    quantidade?: boolean
    fornecedor?: boolean
    tipo_de_produto?: boolean
    movimentacoes?: boolean | Tipo_Produto_Insumo$movimentacoesArgs<ExtArgs>
    _count?: boolean | Tipo_Produto_InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_Produto_Insumo"]>



  export type Tipo_Produto_InsumoSelectScalar = {
    id?: boolean
    tipo_de_insumo?: boolean
    quantidade?: boolean
    fornecedor?: boolean
    tipo_de_produto?: boolean
  }

  export type Tipo_Produto_InsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_de_insumo" | "quantidade" | "fornecedor" | "tipo_de_produto", ExtArgs["result"]["tipo_Produto_Insumo"]>
  export type Tipo_Produto_InsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | Tipo_Produto_Insumo$movimentacoesArgs<ExtArgs>
    _count?: boolean | Tipo_Produto_InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Tipo_Produto_InsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tipo_Produto_Insumo"
    objects: {
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_de_insumo: string
      quantidade: number
      fornecedor: string
      tipo_de_produto: string
    }, ExtArgs["result"]["tipo_Produto_Insumo"]>
    composites: {}
  }

  type Tipo_Produto_InsumoGetPayload<S extends boolean | null | undefined | Tipo_Produto_InsumoDefaultArgs> = $Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload, S>

  type Tipo_Produto_InsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tipo_Produto_InsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_Produto_InsumoCountAggregateInputType | true
    }

  export interface Tipo_Produto_InsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tipo_Produto_Insumo'], meta: { name: 'Tipo_Produto_Insumo' } }
    /**
     * Find zero or one Tipo_Produto_Insumo that matches the filter.
     * @param {Tipo_Produto_InsumoFindUniqueArgs} args - Arguments to find a Tipo_Produto_Insumo
     * @example
     * // Get one Tipo_Produto_Insumo
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tipo_Produto_InsumoFindUniqueArgs>(args: SelectSubset<T, Tipo_Produto_InsumoFindUniqueArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_Produto_Insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tipo_Produto_InsumoFindUniqueOrThrowArgs} args - Arguments to find a Tipo_Produto_Insumo
     * @example
     * // Get one Tipo_Produto_Insumo
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tipo_Produto_InsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, Tipo_Produto_InsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_Produto_Insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoFindFirstArgs} args - Arguments to find a Tipo_Produto_Insumo
     * @example
     * // Get one Tipo_Produto_Insumo
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tipo_Produto_InsumoFindFirstArgs>(args?: SelectSubset<T, Tipo_Produto_InsumoFindFirstArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_Produto_Insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoFindFirstOrThrowArgs} args - Arguments to find a Tipo_Produto_Insumo
     * @example
     * // Get one Tipo_Produto_Insumo
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tipo_Produto_InsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, Tipo_Produto_InsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_Produto_Insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_Produto_Insumos
     * const tipo_Produto_Insumos = await prisma.tipo_Produto_Insumo.findMany()
     * 
     * // Get first 10 Tipo_Produto_Insumos
     * const tipo_Produto_Insumos = await prisma.tipo_Produto_Insumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipo_Produto_InsumoWithIdOnly = await prisma.tipo_Produto_Insumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tipo_Produto_InsumoFindManyArgs>(args?: SelectSubset<T, Tipo_Produto_InsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_Produto_Insumo.
     * @param {Tipo_Produto_InsumoCreateArgs} args - Arguments to create a Tipo_Produto_Insumo.
     * @example
     * // Create one Tipo_Produto_Insumo
     * const Tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.create({
     *   data: {
     *     // ... data to create a Tipo_Produto_Insumo
     *   }
     * })
     * 
     */
    create<T extends Tipo_Produto_InsumoCreateArgs>(args: SelectSubset<T, Tipo_Produto_InsumoCreateArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_Produto_Insumos.
     * @param {Tipo_Produto_InsumoCreateManyArgs} args - Arguments to create many Tipo_Produto_Insumos.
     * @example
     * // Create many Tipo_Produto_Insumos
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tipo_Produto_InsumoCreateManyArgs>(args?: SelectSubset<T, Tipo_Produto_InsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_Produto_Insumo.
     * @param {Tipo_Produto_InsumoDeleteArgs} args - Arguments to delete one Tipo_Produto_Insumo.
     * @example
     * // Delete one Tipo_Produto_Insumo
     * const Tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.delete({
     *   where: {
     *     // ... filter to delete one Tipo_Produto_Insumo
     *   }
     * })
     * 
     */
    delete<T extends Tipo_Produto_InsumoDeleteArgs>(args: SelectSubset<T, Tipo_Produto_InsumoDeleteArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_Produto_Insumo.
     * @param {Tipo_Produto_InsumoUpdateArgs} args - Arguments to update one Tipo_Produto_Insumo.
     * @example
     * // Update one Tipo_Produto_Insumo
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tipo_Produto_InsumoUpdateArgs>(args: SelectSubset<T, Tipo_Produto_InsumoUpdateArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_Produto_Insumos.
     * @param {Tipo_Produto_InsumoDeleteManyArgs} args - Arguments to filter Tipo_Produto_Insumos to delete.
     * @example
     * // Delete a few Tipo_Produto_Insumos
     * const { count } = await prisma.tipo_Produto_Insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tipo_Produto_InsumoDeleteManyArgs>(args?: SelectSubset<T, Tipo_Produto_InsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_Produto_Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_Produto_Insumos
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tipo_Produto_InsumoUpdateManyArgs>(args: SelectSubset<T, Tipo_Produto_InsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_Produto_Insumo.
     * @param {Tipo_Produto_InsumoUpsertArgs} args - Arguments to update or create a Tipo_Produto_Insumo.
     * @example
     * // Update or create a Tipo_Produto_Insumo
     * const tipo_Produto_Insumo = await prisma.tipo_Produto_Insumo.upsert({
     *   create: {
     *     // ... data to create a Tipo_Produto_Insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_Produto_Insumo we want to update
     *   }
     * })
     */
    upsert<T extends Tipo_Produto_InsumoUpsertArgs>(args: SelectSubset<T, Tipo_Produto_InsumoUpsertArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_Produto_Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoCountArgs} args - Arguments to filter Tipo_Produto_Insumos to count.
     * @example
     * // Count the number of Tipo_Produto_Insumos
     * const count = await prisma.tipo_Produto_Insumo.count({
     *   where: {
     *     // ... the filter for the Tipo_Produto_Insumos we want to count
     *   }
     * })
    **/
    count<T extends Tipo_Produto_InsumoCountArgs>(
      args?: Subset<T, Tipo_Produto_InsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_Produto_InsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_Produto_Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_Produto_InsumoAggregateArgs>(args: Subset<T, Tipo_Produto_InsumoAggregateArgs>): Prisma.PrismaPromise<GetTipo_Produto_InsumoAggregateType<T>>

    /**
     * Group by Tipo_Produto_Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_Produto_InsumoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tipo_Produto_InsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tipo_Produto_InsumoGroupByArgs['orderBy'] }
        : { orderBy?: Tipo_Produto_InsumoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tipo_Produto_InsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_Produto_InsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tipo_Produto_Insumo model
   */
  readonly fields: Tipo_Produto_InsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tipo_Produto_Insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tipo_Produto_InsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimentacoes<T extends Tipo_Produto_Insumo$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Tipo_Produto_Insumo$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tipo_Produto_Insumo model
   */
  interface Tipo_Produto_InsumoFieldRefs {
    readonly id: FieldRef<"Tipo_Produto_Insumo", 'Int'>
    readonly tipo_de_insumo: FieldRef<"Tipo_Produto_Insumo", 'String'>
    readonly quantidade: FieldRef<"Tipo_Produto_Insumo", 'Int'>
    readonly fornecedor: FieldRef<"Tipo_Produto_Insumo", 'String'>
    readonly tipo_de_produto: FieldRef<"Tipo_Produto_Insumo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tipo_Produto_Insumo findUnique
   */
  export type Tipo_Produto_InsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo_Produto_Insumo to fetch.
     */
    where: Tipo_Produto_InsumoWhereUniqueInput
  }

  /**
   * Tipo_Produto_Insumo findUniqueOrThrow
   */
  export type Tipo_Produto_InsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo_Produto_Insumo to fetch.
     */
    where: Tipo_Produto_InsumoWhereUniqueInput
  }

  /**
   * Tipo_Produto_Insumo findFirst
   */
  export type Tipo_Produto_InsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo_Produto_Insumo to fetch.
     */
    where?: Tipo_Produto_InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipo_Produto_Insumos to fetch.
     */
    orderBy?: Tipo_Produto_InsumoOrderByWithRelationInput | Tipo_Produto_InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipo_Produto_Insumos.
     */
    cursor?: Tipo_Produto_InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipo_Produto_Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipo_Produto_Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipo_Produto_Insumos.
     */
    distinct?: Tipo_Produto_InsumoScalarFieldEnum | Tipo_Produto_InsumoScalarFieldEnum[]
  }

  /**
   * Tipo_Produto_Insumo findFirstOrThrow
   */
  export type Tipo_Produto_InsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo_Produto_Insumo to fetch.
     */
    where?: Tipo_Produto_InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipo_Produto_Insumos to fetch.
     */
    orderBy?: Tipo_Produto_InsumoOrderByWithRelationInput | Tipo_Produto_InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipo_Produto_Insumos.
     */
    cursor?: Tipo_Produto_InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipo_Produto_Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipo_Produto_Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipo_Produto_Insumos.
     */
    distinct?: Tipo_Produto_InsumoScalarFieldEnum | Tipo_Produto_InsumoScalarFieldEnum[]
  }

  /**
   * Tipo_Produto_Insumo findMany
   */
  export type Tipo_Produto_InsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo_Produto_Insumos to fetch.
     */
    where?: Tipo_Produto_InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipo_Produto_Insumos to fetch.
     */
    orderBy?: Tipo_Produto_InsumoOrderByWithRelationInput | Tipo_Produto_InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tipo_Produto_Insumos.
     */
    cursor?: Tipo_Produto_InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipo_Produto_Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipo_Produto_Insumos.
     */
    skip?: number
    distinct?: Tipo_Produto_InsumoScalarFieldEnum | Tipo_Produto_InsumoScalarFieldEnum[]
  }

  /**
   * Tipo_Produto_Insumo create
   */
  export type Tipo_Produto_InsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tipo_Produto_Insumo.
     */
    data: XOR<Tipo_Produto_InsumoCreateInput, Tipo_Produto_InsumoUncheckedCreateInput>
  }

  /**
   * Tipo_Produto_Insumo createMany
   */
  export type Tipo_Produto_InsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tipo_Produto_Insumos.
     */
    data: Tipo_Produto_InsumoCreateManyInput | Tipo_Produto_InsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo_Produto_Insumo update
   */
  export type Tipo_Produto_InsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tipo_Produto_Insumo.
     */
    data: XOR<Tipo_Produto_InsumoUpdateInput, Tipo_Produto_InsumoUncheckedUpdateInput>
    /**
     * Choose, which Tipo_Produto_Insumo to update.
     */
    where: Tipo_Produto_InsumoWhereUniqueInput
  }

  /**
   * Tipo_Produto_Insumo updateMany
   */
  export type Tipo_Produto_InsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tipo_Produto_Insumos.
     */
    data: XOR<Tipo_Produto_InsumoUpdateManyMutationInput, Tipo_Produto_InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Tipo_Produto_Insumos to update
     */
    where?: Tipo_Produto_InsumoWhereInput
    /**
     * Limit how many Tipo_Produto_Insumos to update.
     */
    limit?: number
  }

  /**
   * Tipo_Produto_Insumo upsert
   */
  export type Tipo_Produto_InsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tipo_Produto_Insumo to update in case it exists.
     */
    where: Tipo_Produto_InsumoWhereUniqueInput
    /**
     * In case the Tipo_Produto_Insumo found by the `where` argument doesn't exist, create a new Tipo_Produto_Insumo with this data.
     */
    create: XOR<Tipo_Produto_InsumoCreateInput, Tipo_Produto_InsumoUncheckedCreateInput>
    /**
     * In case the Tipo_Produto_Insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tipo_Produto_InsumoUpdateInput, Tipo_Produto_InsumoUncheckedUpdateInput>
  }

  /**
   * Tipo_Produto_Insumo delete
   */
  export type Tipo_Produto_InsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
    /**
     * Filter which Tipo_Produto_Insumo to delete.
     */
    where: Tipo_Produto_InsumoWhereUniqueInput
  }

  /**
   * Tipo_Produto_Insumo deleteMany
   */
  export type Tipo_Produto_InsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo_Produto_Insumos to delete
     */
    where?: Tipo_Produto_InsumoWhereInput
    /**
     * Limit how many Tipo_Produto_Insumos to delete.
     */
    limit?: number
  }

  /**
   * Tipo_Produto_Insumo.movimentacoes
   */
  export type Tipo_Produto_Insumo$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Tipo_Produto_Insumo without action
   */
  export type Tipo_Produto_InsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_Produto_Insumo
     */
    select?: Tipo_Produto_InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo_Produto_Insumo
     */
    omit?: Tipo_Produto_InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tipo_Produto_InsumoInclude<ExtArgs> | null
  }


  /**
   * Model Movimentacao
   */

  export type AggregateMovimentacao = {
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoAvgAggregateOutputType = {
    id: number | null
    id_insumo_produto: number | null
    quantidade: number | null
  }

  export type MovimentacaoSumAggregateOutputType = {
    id: number | null
    id_insumo_produto: number | null
    quantidade: number | null
  }

  export type MovimentacaoMinAggregateOutputType = {
    id: number | null
    id_insumo_produto: number | null
    quantidade: number | null
    tipo_movimentacao: string | null
    tipo: string | null
    date: Date | null
  }

  export type MovimentacaoMaxAggregateOutputType = {
    id: number | null
    id_insumo_produto: number | null
    quantidade: number | null
    tipo_movimentacao: string | null
    tipo: string | null
    date: Date | null
  }

  export type MovimentacaoCountAggregateOutputType = {
    id: number
    id_insumo_produto: number
    quantidade: number
    tipo_movimentacao: number
    tipo: number
    date: number
    _all: number
  }


  export type MovimentacaoAvgAggregateInputType = {
    id?: true
    id_insumo_produto?: true
    quantidade?: true
  }

  export type MovimentacaoSumAggregateInputType = {
    id?: true
    id_insumo_produto?: true
    quantidade?: true
  }

  export type MovimentacaoMinAggregateInputType = {
    id?: true
    id_insumo_produto?: true
    quantidade?: true
    tipo_movimentacao?: true
    tipo?: true
    date?: true
  }

  export type MovimentacaoMaxAggregateInputType = {
    id?: true
    id_insumo_produto?: true
    quantidade?: true
    tipo_movimentacao?: true
    tipo?: true
    date?: true
  }

  export type MovimentacaoCountAggregateInputType = {
    id?: true
    id_insumo_produto?: true
    quantidade?: true
    tipo_movimentacao?: true
    tipo?: true
    date?: true
    _all?: true
  }

  export type MovimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacao to aggregate.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimentacaos
    **/
    _count?: true | MovimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type GetMovimentacaoAggregateType<T extends MovimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacao[P]>
      : GetScalarType<T[P], AggregateMovimentacao[P]>
  }




  export type MovimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithAggregationInput | MovimentacaoOrderByWithAggregationInput[]
    by: MovimentacaoScalarFieldEnum[] | MovimentacaoScalarFieldEnum
    having?: MovimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCountAggregateInputType | true
    _avg?: MovimentacaoAvgAggregateInputType
    _sum?: MovimentacaoSumAggregateInputType
    _min?: MovimentacaoMinAggregateInputType
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type MovimentacaoGroupByOutputType = {
    id: number
    id_insumo_produto: number
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoGroupByPayload<T extends MovimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_insumo_produto?: boolean
    quantidade?: boolean
    tipo_movimentacao?: boolean
    tipo?: boolean
    date?: boolean
    tpi?: boolean | Tipo_Produto_InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>



  export type MovimentacaoSelectScalar = {
    id?: boolean
    id_insumo_produto?: boolean
    quantidade?: boolean
    tipo_movimentacao?: boolean
    tipo?: boolean
    date?: boolean
  }

  export type MovimentacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_insumo_produto" | "quantidade" | "tipo_movimentacao" | "tipo" | "date", ExtArgs["result"]["movimentacao"]>
  export type MovimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tpi?: boolean | Tipo_Produto_InsumoDefaultArgs<ExtArgs>
  }

  export type $MovimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimentacao"
    objects: {
      tpi: Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_insumo_produto: number
      quantidade: number
      tipo_movimentacao: string
      tipo: string
      date: Date
    }, ExtArgs["result"]["movimentacao"]>
    composites: {}
  }

  type MovimentacaoGetPayload<S extends boolean | null | undefined | MovimentacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoPayload, S>

  type MovimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoCountAggregateInputType | true
    }

  export interface MovimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimentacao'], meta: { name: 'Movimentacao' } }
    /**
     * Find zero or one Movimentacao that matches the filter.
     * @param {MovimentacaoFindUniqueArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoFindUniqueArgs>(args: SelectSubset<T, MovimentacaoFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimentacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoFindFirstArgs>(args?: SelectSubset<T, MovimentacaoFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany()
     * 
     * // Get first 10 Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoFindManyArgs>(args?: SelectSubset<T, MovimentacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimentacao.
     * @param {MovimentacaoCreateArgs} args - Arguments to create a Movimentacao.
     * @example
     * // Create one Movimentacao
     * const Movimentacao = await prisma.movimentacao.create({
     *   data: {
     *     // ... data to create a Movimentacao
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoCreateArgs>(args: SelectSubset<T, MovimentacaoCreateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimentacaos.
     * @param {MovimentacaoCreateManyArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoCreateManyArgs>(args?: SelectSubset<T, MovimentacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movimentacao.
     * @param {MovimentacaoDeleteArgs} args - Arguments to delete one Movimentacao.
     * @example
     * // Delete one Movimentacao
     * const Movimentacao = await prisma.movimentacao.delete({
     *   where: {
     *     // ... filter to delete one Movimentacao
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoDeleteArgs>(args: SelectSubset<T, MovimentacaoDeleteArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimentacao.
     * @param {MovimentacaoUpdateArgs} args - Arguments to update one Movimentacao.
     * @example
     * // Update one Movimentacao
     * const movimentacao = await prisma.movimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoUpdateArgs>(args: SelectSubset<T, MovimentacaoUpdateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimentacaos.
     * @param {MovimentacaoDeleteManyArgs} args - Arguments to filter Movimentacaos to delete.
     * @example
     * // Delete a few Movimentacaos
     * const { count } = await prisma.movimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoUpdateManyArgs>(args: SelectSubset<T, MovimentacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movimentacao.
     * @param {MovimentacaoUpsertArgs} args - Arguments to update or create a Movimentacao.
     * @example
     * // Update or create a Movimentacao
     * const movimentacao = await prisma.movimentacao.upsert({
     *   create: {
     *     // ... data to create a Movimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacao we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoUpsertArgs>(args: SelectSubset<T, MovimentacaoUpsertArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCountArgs} args - Arguments to filter Movimentacaos to count.
     * @example
     * // Count the number of Movimentacaos
     * const count = await prisma.movimentacao.count({
     *   where: {
     *     // ... the filter for the Movimentacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCountArgs>(
      args?: Subset<T, MovimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimentacaoAggregateArgs>(args: Subset<T, MovimentacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoAggregateType<T>>

    /**
     * Group by Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimentacao model
   */
  readonly fields: MovimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tpi<T extends Tipo_Produto_InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Tipo_Produto_InsumoDefaultArgs<ExtArgs>>): Prisma__Tipo_Produto_InsumoClient<$Result.GetResult<Prisma.$Tipo_Produto_InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movimentacao model
   */
  interface MovimentacaoFieldRefs {
    readonly id: FieldRef<"Movimentacao", 'Int'>
    readonly id_insumo_produto: FieldRef<"Movimentacao", 'Int'>
    readonly quantidade: FieldRef<"Movimentacao", 'Int'>
    readonly tipo_movimentacao: FieldRef<"Movimentacao", 'String'>
    readonly tipo: FieldRef<"Movimentacao", 'String'>
    readonly date: FieldRef<"Movimentacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movimentacao findUnique
   */
  export type MovimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findUniqueOrThrow
   */
  export type MovimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findFirst
   */
  export type MovimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findFirstOrThrow
   */
  export type MovimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findMany
   */
  export type MovimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacaos to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao create
   */
  export type MovimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimentacao.
     */
    data: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
  }

  /**
   * Movimentacao createMany
   */
  export type MovimentacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movimentacao update
   */
  export type MovimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimentacao.
     */
    data: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Movimentacao to update.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao updateMany
   */
  export type MovimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
  }

  /**
   * Movimentacao upsert
   */
  export type MovimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimentacao to update in case it exists.
     */
    where: MovimentacaoWhereUniqueInput
    /**
     * In case the Movimentacao found by the `where` argument doesn't exist, create a new Movimentacao with this data.
     */
    create: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
    /**
     * In case the Movimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
  }

  /**
   * Movimentacao delete
   */
  export type MovimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Movimentacao to delete.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao deleteMany
   */
  export type MovimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacaos to delete
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to delete.
     */
    limit?: number
  }

  /**
   * Movimentacao without action
   */
  export type MovimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tipo_Produto_InsumoScalarFieldEnum: {
    id: 'id',
    tipo_de_insumo: 'tipo_de_insumo',
    quantidade: 'quantidade',
    fornecedor: 'fornecedor',
    tipo_de_produto: 'tipo_de_produto'
  };

  export type Tipo_Produto_InsumoScalarFieldEnum = (typeof Tipo_Produto_InsumoScalarFieldEnum)[keyof typeof Tipo_Produto_InsumoScalarFieldEnum]


  export const MovimentacaoScalarFieldEnum: {
    id: 'id',
    id_insumo_produto: 'id_insumo_produto',
    quantidade: 'quantidade',
    tipo_movimentacao: 'tipo_movimentacao',
    tipo: 'tipo',
    date: 'date'
  };

  export type MovimentacaoScalarFieldEnum = (typeof MovimentacaoScalarFieldEnum)[keyof typeof MovimentacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Tipo_Produto_InsumoOrderByRelevanceFieldEnum: {
    tipo_de_insumo: 'tipo_de_insumo',
    fornecedor: 'fornecedor',
    tipo_de_produto: 'tipo_de_produto'
  };

  export type Tipo_Produto_InsumoOrderByRelevanceFieldEnum = (typeof Tipo_Produto_InsumoOrderByRelevanceFieldEnum)[keyof typeof Tipo_Produto_InsumoOrderByRelevanceFieldEnum]


  export const MovimentacaoOrderByRelevanceFieldEnum: {
    tipo_movimentacao: 'tipo_movimentacao',
    tipo: 'tipo'
  };

  export type MovimentacaoOrderByRelevanceFieldEnum = (typeof MovimentacaoOrderByRelevanceFieldEnum)[keyof typeof MovimentacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Tipo_Produto_InsumoWhereInput = {
    AND?: Tipo_Produto_InsumoWhereInput | Tipo_Produto_InsumoWhereInput[]
    OR?: Tipo_Produto_InsumoWhereInput[]
    NOT?: Tipo_Produto_InsumoWhereInput | Tipo_Produto_InsumoWhereInput[]
    id?: IntFilter<"Tipo_Produto_Insumo"> | number
    tipo_de_insumo?: StringFilter<"Tipo_Produto_Insumo"> | string
    quantidade?: IntFilter<"Tipo_Produto_Insumo"> | number
    fornecedor?: StringFilter<"Tipo_Produto_Insumo"> | string
    tipo_de_produto?: StringFilter<"Tipo_Produto_Insumo"> | string
    movimentacoes?: MovimentacaoListRelationFilter
  }

  export type Tipo_Produto_InsumoOrderByWithRelationInput = {
    id?: SortOrder
    tipo_de_insumo?: SortOrder
    quantidade?: SortOrder
    fornecedor?: SortOrder
    tipo_de_produto?: SortOrder
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
    _relevance?: Tipo_Produto_InsumoOrderByRelevanceInput
  }

  export type Tipo_Produto_InsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Tipo_Produto_InsumoWhereInput | Tipo_Produto_InsumoWhereInput[]
    OR?: Tipo_Produto_InsumoWhereInput[]
    NOT?: Tipo_Produto_InsumoWhereInput | Tipo_Produto_InsumoWhereInput[]
    tipo_de_insumo?: StringFilter<"Tipo_Produto_Insumo"> | string
    quantidade?: IntFilter<"Tipo_Produto_Insumo"> | number
    fornecedor?: StringFilter<"Tipo_Produto_Insumo"> | string
    tipo_de_produto?: StringFilter<"Tipo_Produto_Insumo"> | string
    movimentacoes?: MovimentacaoListRelationFilter
  }, "id">

  export type Tipo_Produto_InsumoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_de_insumo?: SortOrder
    quantidade?: SortOrder
    fornecedor?: SortOrder
    tipo_de_produto?: SortOrder
    _count?: Tipo_Produto_InsumoCountOrderByAggregateInput
    _avg?: Tipo_Produto_InsumoAvgOrderByAggregateInput
    _max?: Tipo_Produto_InsumoMaxOrderByAggregateInput
    _min?: Tipo_Produto_InsumoMinOrderByAggregateInput
    _sum?: Tipo_Produto_InsumoSumOrderByAggregateInput
  }

  export type Tipo_Produto_InsumoScalarWhereWithAggregatesInput = {
    AND?: Tipo_Produto_InsumoScalarWhereWithAggregatesInput | Tipo_Produto_InsumoScalarWhereWithAggregatesInput[]
    OR?: Tipo_Produto_InsumoScalarWhereWithAggregatesInput[]
    NOT?: Tipo_Produto_InsumoScalarWhereWithAggregatesInput | Tipo_Produto_InsumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tipo_Produto_Insumo"> | number
    tipo_de_insumo?: StringWithAggregatesFilter<"Tipo_Produto_Insumo"> | string
    quantidade?: IntWithAggregatesFilter<"Tipo_Produto_Insumo"> | number
    fornecedor?: StringWithAggregatesFilter<"Tipo_Produto_Insumo"> | string
    tipo_de_produto?: StringWithAggregatesFilter<"Tipo_Produto_Insumo"> | string
  }

  export type MovimentacaoWhereInput = {
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    id_insumo_produto?: IntFilter<"Movimentacao"> | number
    quantidade?: IntFilter<"Movimentacao"> | number
    tipo_movimentacao?: StringFilter<"Movimentacao"> | string
    tipo?: StringFilter<"Movimentacao"> | string
    date?: DateTimeFilter<"Movimentacao"> | Date | string
    tpi?: XOR<Tipo_Produto_InsumoScalarRelationFilter, Tipo_Produto_InsumoWhereInput>
  }

  export type MovimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
    tipo_movimentacao?: SortOrder
    tipo?: SortOrder
    date?: SortOrder
    tpi?: Tipo_Produto_InsumoOrderByWithRelationInput
    _relevance?: MovimentacaoOrderByRelevanceInput
  }

  export type MovimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id_insumo_produto?: IntFilter<"Movimentacao"> | number
    quantidade?: IntFilter<"Movimentacao"> | number
    tipo_movimentacao?: StringFilter<"Movimentacao"> | string
    tipo?: StringFilter<"Movimentacao"> | string
    date?: DateTimeFilter<"Movimentacao"> | Date | string
    tpi?: XOR<Tipo_Produto_InsumoScalarRelationFilter, Tipo_Produto_InsumoWhereInput>
  }, "id">

  export type MovimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
    tipo_movimentacao?: SortOrder
    tipo?: SortOrder
    date?: SortOrder
    _count?: MovimentacaoCountOrderByAggregateInput
    _avg?: MovimentacaoAvgOrderByAggregateInput
    _max?: MovimentacaoMaxOrderByAggregateInput
    _min?: MovimentacaoMinOrderByAggregateInput
    _sum?: MovimentacaoSumOrderByAggregateInput
  }

  export type MovimentacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movimentacao"> | number
    id_insumo_produto?: IntWithAggregatesFilter<"Movimentacao"> | number
    quantidade?: IntWithAggregatesFilter<"Movimentacao"> | number
    tipo_movimentacao?: StringWithAggregatesFilter<"Movimentacao"> | string
    tipo?: StringWithAggregatesFilter<"Movimentacao"> | string
    date?: DateTimeWithAggregatesFilter<"Movimentacao"> | Date | string
  }

  export type Tipo_Produto_InsumoCreateInput = {
    tipo_de_insumo: string
    quantidade: number
    fornecedor: string
    tipo_de_produto: string
    movimentacoes?: MovimentacaoCreateNestedManyWithoutTpiInput
  }

  export type Tipo_Produto_InsumoUncheckedCreateInput = {
    id?: number
    tipo_de_insumo: string
    quantidade: number
    fornecedor: string
    tipo_de_produto: string
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutTpiInput
  }

  export type Tipo_Produto_InsumoUpdateInput = {
    tipo_de_insumo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    fornecedor?: StringFieldUpdateOperationsInput | string
    tipo_de_produto?: StringFieldUpdateOperationsInput | string
    movimentacoes?: MovimentacaoUpdateManyWithoutTpiNestedInput
  }

  export type Tipo_Produto_InsumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_de_insumo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    fornecedor?: StringFieldUpdateOperationsInput | string
    tipo_de_produto?: StringFieldUpdateOperationsInput | string
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutTpiNestedInput
  }

  export type Tipo_Produto_InsumoCreateManyInput = {
    id?: number
    tipo_de_insumo: string
    quantidade: number
    fornecedor: string
    tipo_de_produto: string
  }

  export type Tipo_Produto_InsumoUpdateManyMutationInput = {
    tipo_de_insumo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    fornecedor?: StringFieldUpdateOperationsInput | string
    tipo_de_produto?: StringFieldUpdateOperationsInput | string
  }

  export type Tipo_Produto_InsumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_de_insumo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    fornecedor?: StringFieldUpdateOperationsInput | string
    tipo_de_produto?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCreateInput = {
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date | string
    tpi: Tipo_Produto_InsumoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateInput = {
    id?: number
    id_insumo_produto: number
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date | string
  }

  export type MovimentacaoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tpi?: Tipo_Produto_InsumoUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_insumo_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoCreateManyInput = {
    id?: number
    id_insumo_produto: number
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date | string
  }

  export type MovimentacaoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_insumo_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MovimentacaoListRelationFilter = {
    every?: MovimentacaoWhereInput
    some?: MovimentacaoWhereInput
    none?: MovimentacaoWhereInput
  }

  export type MovimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tipo_Produto_InsumoOrderByRelevanceInput = {
    fields: Tipo_Produto_InsumoOrderByRelevanceFieldEnum | Tipo_Produto_InsumoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Tipo_Produto_InsumoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_de_insumo?: SortOrder
    quantidade?: SortOrder
    fornecedor?: SortOrder
    tipo_de_produto?: SortOrder
  }

  export type Tipo_Produto_InsumoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type Tipo_Produto_InsumoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_de_insumo?: SortOrder
    quantidade?: SortOrder
    fornecedor?: SortOrder
    tipo_de_produto?: SortOrder
  }

  export type Tipo_Produto_InsumoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_de_insumo?: SortOrder
    quantidade?: SortOrder
    fornecedor?: SortOrder
    tipo_de_produto?: SortOrder
  }

  export type Tipo_Produto_InsumoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tipo_Produto_InsumoScalarRelationFilter = {
    is?: Tipo_Produto_InsumoWhereInput
    isNot?: Tipo_Produto_InsumoWhereInput
  }

  export type MovimentacaoOrderByRelevanceInput = {
    fields: MovimentacaoOrderByRelevanceFieldEnum | MovimentacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
    tipo_movimentacao?: SortOrder
    tipo?: SortOrder
    date?: SortOrder
  }

  export type MovimentacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type MovimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
    tipo_movimentacao?: SortOrder
    tipo?: SortOrder
    date?: SortOrder
  }

  export type MovimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
    tipo_movimentacao?: SortOrder
    tipo?: SortOrder
    date?: SortOrder
  }

  export type MovimentacaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_insumo_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MovimentacaoCreateNestedManyWithoutTpiInput = {
    create?: XOR<MovimentacaoCreateWithoutTpiInput, MovimentacaoUncheckedCreateWithoutTpiInput> | MovimentacaoCreateWithoutTpiInput[] | MovimentacaoUncheckedCreateWithoutTpiInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutTpiInput | MovimentacaoCreateOrConnectWithoutTpiInput[]
    createMany?: MovimentacaoCreateManyTpiInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutTpiInput = {
    create?: XOR<MovimentacaoCreateWithoutTpiInput, MovimentacaoUncheckedCreateWithoutTpiInput> | MovimentacaoCreateWithoutTpiInput[] | MovimentacaoUncheckedCreateWithoutTpiInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutTpiInput | MovimentacaoCreateOrConnectWithoutTpiInput[]
    createMany?: MovimentacaoCreateManyTpiInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovimentacaoUpdateManyWithoutTpiNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutTpiInput, MovimentacaoUncheckedCreateWithoutTpiInput> | MovimentacaoCreateWithoutTpiInput[] | MovimentacaoUncheckedCreateWithoutTpiInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutTpiInput | MovimentacaoCreateOrConnectWithoutTpiInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutTpiInput | MovimentacaoUpsertWithWhereUniqueWithoutTpiInput[]
    createMany?: MovimentacaoCreateManyTpiInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutTpiInput | MovimentacaoUpdateWithWhereUniqueWithoutTpiInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutTpiInput | MovimentacaoUpdateManyWithWhereWithoutTpiInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutTpiNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutTpiInput, MovimentacaoUncheckedCreateWithoutTpiInput> | MovimentacaoCreateWithoutTpiInput[] | MovimentacaoUncheckedCreateWithoutTpiInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutTpiInput | MovimentacaoCreateOrConnectWithoutTpiInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutTpiInput | MovimentacaoUpsertWithWhereUniqueWithoutTpiInput[]
    createMany?: MovimentacaoCreateManyTpiInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutTpiInput | MovimentacaoUpdateWithWhereUniqueWithoutTpiInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutTpiInput | MovimentacaoUpdateManyWithWhereWithoutTpiInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type Tipo_Produto_InsumoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<Tipo_Produto_InsumoCreateWithoutMovimentacoesInput, Tipo_Produto_InsumoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: Tipo_Produto_InsumoCreateOrConnectWithoutMovimentacoesInput
    connect?: Tipo_Produto_InsumoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Tipo_Produto_InsumoUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<Tipo_Produto_InsumoCreateWithoutMovimentacoesInput, Tipo_Produto_InsumoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: Tipo_Produto_InsumoCreateOrConnectWithoutMovimentacoesInput
    upsert?: Tipo_Produto_InsumoUpsertWithoutMovimentacoesInput
    connect?: Tipo_Produto_InsumoWhereUniqueInput
    update?: XOR<XOR<Tipo_Produto_InsumoUpdateToOneWithWhereWithoutMovimentacoesInput, Tipo_Produto_InsumoUpdateWithoutMovimentacoesInput>, Tipo_Produto_InsumoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MovimentacaoCreateWithoutTpiInput = {
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date | string
  }

  export type MovimentacaoUncheckedCreateWithoutTpiInput = {
    id?: number
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date | string
  }

  export type MovimentacaoCreateOrConnectWithoutTpiInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutTpiInput, MovimentacaoUncheckedCreateWithoutTpiInput>
  }

  export type MovimentacaoCreateManyTpiInputEnvelope = {
    data: MovimentacaoCreateManyTpiInput | MovimentacaoCreateManyTpiInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutTpiInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutTpiInput, MovimentacaoUncheckedUpdateWithoutTpiInput>
    create: XOR<MovimentacaoCreateWithoutTpiInput, MovimentacaoUncheckedCreateWithoutTpiInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutTpiInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutTpiInput, MovimentacaoUncheckedUpdateWithoutTpiInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutTpiInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutTpiInput>
  }

  export type MovimentacaoScalarWhereInput = {
    AND?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    OR?: MovimentacaoScalarWhereInput[]
    NOT?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    id_insumo_produto?: IntFilter<"Movimentacao"> | number
    quantidade?: IntFilter<"Movimentacao"> | number
    tipo_movimentacao?: StringFilter<"Movimentacao"> | string
    tipo?: StringFilter<"Movimentacao"> | string
    date?: DateTimeFilter<"Movimentacao"> | Date | string
  }

  export type Tipo_Produto_InsumoCreateWithoutMovimentacoesInput = {
    tipo_de_insumo: string
    quantidade: number
    fornecedor: string
    tipo_de_produto: string
  }

  export type Tipo_Produto_InsumoUncheckedCreateWithoutMovimentacoesInput = {
    id?: number
    tipo_de_insumo: string
    quantidade: number
    fornecedor: string
    tipo_de_produto: string
  }

  export type Tipo_Produto_InsumoCreateOrConnectWithoutMovimentacoesInput = {
    where: Tipo_Produto_InsumoWhereUniqueInput
    create: XOR<Tipo_Produto_InsumoCreateWithoutMovimentacoesInput, Tipo_Produto_InsumoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type Tipo_Produto_InsumoUpsertWithoutMovimentacoesInput = {
    update: XOR<Tipo_Produto_InsumoUpdateWithoutMovimentacoesInput, Tipo_Produto_InsumoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<Tipo_Produto_InsumoCreateWithoutMovimentacoesInput, Tipo_Produto_InsumoUncheckedCreateWithoutMovimentacoesInput>
    where?: Tipo_Produto_InsumoWhereInput
  }

  export type Tipo_Produto_InsumoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: Tipo_Produto_InsumoWhereInput
    data: XOR<Tipo_Produto_InsumoUpdateWithoutMovimentacoesInput, Tipo_Produto_InsumoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type Tipo_Produto_InsumoUpdateWithoutMovimentacoesInput = {
    tipo_de_insumo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    fornecedor?: StringFieldUpdateOperationsInput | string
    tipo_de_produto?: StringFieldUpdateOperationsInput | string
  }

  export type Tipo_Produto_InsumoUncheckedUpdateWithoutMovimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_de_insumo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    fornecedor?: StringFieldUpdateOperationsInput | string
    tipo_de_produto?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCreateManyTpiInput = {
    id?: number
    quantidade: number
    tipo_movimentacao: string
    tipo: string
    date: Date | string
  }

  export type MovimentacaoUpdateWithoutTpiInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateWithoutTpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateManyWithoutTpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}