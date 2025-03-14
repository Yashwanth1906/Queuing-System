
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model PatientBooking
 * 
 */
export type PatientBooking = $Result.DefaultSelection<Prisma.$PatientBookingPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model ABHANumber
 * 
 */
export type ABHANumber = $Result.DefaultSelection<Prisma.$ABHANumberPayload>
/**
 * Model OTPVerification
 * 
 */
export type OTPVerification = $Result.DefaultSelection<Prisma.$OTPVerificationPayload>
/**
 * Model BedRequest
 * 
 */
export type BedRequest = $Result.DefaultSelection<Prisma.$BedRequestPayload>
/**
 * Model triage
 * 
 */
export type triage = $Result.DefaultSelection<Prisma.$triagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs>;

  /**
   * `prisma.patientBooking`: Exposes CRUD operations for the **PatientBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientBookings
    * const patientBookings = await prisma.patientBooking.findMany()
    * ```
    */
  get patientBooking(): Prisma.PatientBookingDelegate<ExtArgs>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs>;

  /**
   * `prisma.aBHANumber`: Exposes CRUD operations for the **ABHANumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ABHANumbers
    * const aBHANumbers = await prisma.aBHANumber.findMany()
    * ```
    */
  get aBHANumber(): Prisma.ABHANumberDelegate<ExtArgs>;

  /**
   * `prisma.oTPVerification`: Exposes CRUD operations for the **OTPVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPVerifications
    * const oTPVerifications = await prisma.oTPVerification.findMany()
    * ```
    */
  get oTPVerification(): Prisma.OTPVerificationDelegate<ExtArgs>;

  /**
   * `prisma.bedRequest`: Exposes CRUD operations for the **BedRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BedRequests
    * const bedRequests = await prisma.bedRequest.findMany()
    * ```
    */
  get bedRequest(): Prisma.BedRequestDelegate<ExtArgs>;

  /**
   * `prisma.triage`: Exposes CRUD operations for the **triage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triages
    * const triages = await prisma.triage.findMany()
    * ```
    */
  get triage(): Prisma.triageDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Admin: 'Admin',
    Hospital: 'Hospital',
    Patient: 'Patient',
    History: 'History',
    PatientBooking: 'PatientBooking',
    MedicalRecord: 'MedicalRecord',
    ABHANumber: 'ABHANumber',
    OTPVerification: 'OTPVerification',
    BedRequest: 'BedRequest',
    triage: 'triage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "hospital" | "patient" | "history" | "patientBooking" | "medicalRecord" | "aBHANumber" | "oTPVerification" | "bedRequest" | "triage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      PatientBooking: {
        payload: Prisma.$PatientBookingPayload<ExtArgs>
        fields: Prisma.PatientBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>
          }
          findFirst: {
            args: Prisma.PatientBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>
          }
          findMany: {
            args: Prisma.PatientBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>[]
          }
          create: {
            args: Prisma.PatientBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>
          }
          createMany: {
            args: Prisma.PatientBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>[]
          }
          delete: {
            args: Prisma.PatientBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>
          }
          update: {
            args: Prisma.PatientBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>
          }
          deleteMany: {
            args: Prisma.PatientBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientBookingPayload>
          }
          aggregate: {
            args: Prisma.PatientBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientBooking>
          }
          groupBy: {
            args: Prisma.PatientBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientBookingCountArgs<ExtArgs>
            result: $Utils.Optional<PatientBookingCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      ABHANumber: {
        payload: Prisma.$ABHANumberPayload<ExtArgs>
        fields: Prisma.ABHANumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ABHANumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ABHANumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>
          }
          findFirst: {
            args: Prisma.ABHANumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ABHANumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>
          }
          findMany: {
            args: Prisma.ABHANumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>[]
          }
          create: {
            args: Prisma.ABHANumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>
          }
          createMany: {
            args: Prisma.ABHANumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ABHANumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>[]
          }
          delete: {
            args: Prisma.ABHANumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>
          }
          update: {
            args: Prisma.ABHANumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>
          }
          deleteMany: {
            args: Prisma.ABHANumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ABHANumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ABHANumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ABHANumberPayload>
          }
          aggregate: {
            args: Prisma.ABHANumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateABHANumber>
          }
          groupBy: {
            args: Prisma.ABHANumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ABHANumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ABHANumberCountArgs<ExtArgs>
            result: $Utils.Optional<ABHANumberCountAggregateOutputType> | number
          }
        }
      }
      OTPVerification: {
        payload: Prisma.$OTPVerificationPayload<ExtArgs>
        fields: Prisma.OTPVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          findFirst: {
            args: Prisma.OTPVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          findMany: {
            args: Prisma.OTPVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>[]
          }
          create: {
            args: Prisma.OTPVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          createMany: {
            args: Prisma.OTPVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OTPVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>[]
          }
          delete: {
            args: Prisma.OTPVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          update: {
            args: Prisma.OTPVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          deleteMany: {
            args: Prisma.OTPVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OTPVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          aggregate: {
            args: Prisma.OTPVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTPVerification>
          }
          groupBy: {
            args: Prisma.OTPVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<OTPVerificationCountAggregateOutputType> | number
          }
        }
      }
      BedRequest: {
        payload: Prisma.$BedRequestPayload<ExtArgs>
        fields: Prisma.BedRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BedRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BedRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>
          }
          findFirst: {
            args: Prisma.BedRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BedRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>
          }
          findMany: {
            args: Prisma.BedRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>[]
          }
          create: {
            args: Prisma.BedRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>
          }
          createMany: {
            args: Prisma.BedRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BedRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>[]
          }
          delete: {
            args: Prisma.BedRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>
          }
          update: {
            args: Prisma.BedRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>
          }
          deleteMany: {
            args: Prisma.BedRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BedRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BedRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedRequestPayload>
          }
          aggregate: {
            args: Prisma.BedRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBedRequest>
          }
          groupBy: {
            args: Prisma.BedRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BedRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BedRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BedRequestCountAggregateOutputType> | number
          }
        }
      }
      triage: {
        payload: Prisma.$triagePayload<ExtArgs>
        fields: Prisma.triageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.triageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.triageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>
          }
          findFirst: {
            args: Prisma.triageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.triageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>
          }
          findMany: {
            args: Prisma.triageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>[]
          }
          create: {
            args: Prisma.triageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>
          }
          createMany: {
            args: Prisma.triageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.triageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>[]
          }
          delete: {
            args: Prisma.triageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>
          }
          update: {
            args: Prisma.triageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>
          }
          deleteMany: {
            args: Prisma.triageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.triageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.triageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$triagePayload>
          }
          aggregate: {
            args: Prisma.TriageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriage>
          }
          groupBy: {
            args: Prisma.triageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriageGroupByOutputType>[]
          }
          count: {
            args: Prisma.triageCountArgs<ExtArgs>
            result: $Utils.Optional<TriageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    records: number
    admin: number
    patientBooking: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | HospitalCountOutputTypeCountRecordsArgs
    admin?: boolean | HospitalCountOutputTypeCountAdminArgs
    patientBooking?: boolean | HospitalCountOutputTypeCountPatientBookingArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountPatientBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientBookingWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    history: number
    medicalRecords: number
    patientBooking: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | PatientCountOutputTypeCountHistoryArgs
    medicalRecords?: boolean | PatientCountOutputTypeCountMedicalRecordsArgs
    patientBooking?: boolean | PatientCountOutputTypeCountPatientBookingArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPatientBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    hospitalCode: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    hospitalCode: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    hospitalCode: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    hospitalCode?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    hospitalCode?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    hospitalCode?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    hospitalCode: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    hospitalCode?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    hospitalCode?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    hospitalCode?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      hospitalCode: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly hospitalCode: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    location: string | null
    city: string | null
    state: string | null
    dbURL: string | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    location: string | null
    city: string | null
    state: string | null
    dbURL: string | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    code: number
    name: number
    location: number
    city: number
    state: number
    dbURL: number
    _all: number
  }


  export type HospitalMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    city?: true
    state?: true
    dbURL?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    city?: true
    state?: true
    dbURL?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    city?: true
    state?: true
    dbURL?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    city?: boolean
    state?: boolean
    dbURL?: boolean
    records?: boolean | Hospital$recordsArgs<ExtArgs>
    admin?: boolean | Hospital$adminArgs<ExtArgs>
    patientBooking?: boolean | Hospital$patientBookingArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    city?: boolean
    state?: boolean
    dbURL?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    city?: boolean
    state?: boolean
    dbURL?: boolean
  }

  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | Hospital$recordsArgs<ExtArgs>
    admin?: boolean | Hospital$adminArgs<ExtArgs>
    patientBooking?: boolean | Hospital$patientBookingArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      records: Prisma.$MedicalRecordPayload<ExtArgs>[]
      admin: Prisma.$AdminPayload<ExtArgs>[]
      patientBooking: Prisma.$PatientBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      location: string
      city: string
      state: string
      dbURL: string
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    records<T extends Hospital$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany"> | Null>
    admin<T extends Hospital$adminArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$adminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany"> | Null>
    patientBooking<T extends Hospital$patientBookingArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$patientBookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Hospital model
   */ 
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'String'>
    readonly code: FieldRef<"Hospital", 'String'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly location: FieldRef<"Hospital", 'String'>
    readonly city: FieldRef<"Hospital", 'String'>
    readonly state: FieldRef<"Hospital", 'String'>
    readonly dbURL: FieldRef<"Hospital", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
  }

  /**
   * Hospital.records
   */
  export type Hospital$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Hospital.admin
   */
  export type Hospital$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Hospital.patientBooking
   */
  export type Hospital$patientBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    where?: PatientBookingWhereInput
    orderBy?: PatientBookingOrderByWithRelationInput | PatientBookingOrderByWithRelationInput[]
    cursor?: PatientBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientBookingScalarFieldEnum | PatientBookingScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    abhaId: string | null
    email: string | null
    password: string | null
    name: string | null
    contact: string | null
    address: string | null
    gender: string | null
    DOB: string | null
    emergencyContact: string | null
  }

  export type PatientMaxAggregateOutputType = {
    abhaId: string | null
    email: string | null
    password: string | null
    name: string | null
    contact: string | null
    address: string | null
    gender: string | null
    DOB: string | null
    emergencyContact: string | null
  }

  export type PatientCountAggregateOutputType = {
    abhaId: number
    email: number
    password: number
    name: number
    contact: number
    address: number
    gender: number
    DOB: number
    emergencyContact: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    abhaId?: true
    email?: true
    password?: true
    name?: true
    contact?: true
    address?: true
    gender?: true
    DOB?: true
    emergencyContact?: true
  }

  export type PatientMaxAggregateInputType = {
    abhaId?: true
    email?: true
    password?: true
    name?: true
    contact?: true
    address?: true
    gender?: true
    DOB?: true
    emergencyContact?: true
  }

  export type PatientCountAggregateInputType = {
    abhaId?: true
    email?: true
    password?: true
    name?: true
    contact?: true
    address?: true
    gender?: true
    DOB?: true
    emergencyContact?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abhaId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    gender?: boolean
    DOB?: boolean
    emergencyContact?: boolean
    history?: boolean | Patient$historyArgs<ExtArgs>
    medicalRecords?: boolean | Patient$medicalRecordsArgs<ExtArgs>
    patientBooking?: boolean | Patient$patientBookingArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abhaId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    gender?: boolean
    DOB?: boolean
    emergencyContact?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    abhaId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    gender?: boolean
    DOB?: boolean
    emergencyContact?: boolean
  }

  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | Patient$historyArgs<ExtArgs>
    medicalRecords?: boolean | Patient$medicalRecordsArgs<ExtArgs>
    patientBooking?: boolean | Patient$patientBookingArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      history: Prisma.$HistoryPayload<ExtArgs>[]
      medicalRecords: Prisma.$MedicalRecordPayload<ExtArgs>[]
      patientBooking: Prisma.$PatientBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      abhaId: string
      email: string
      password: string
      name: string
      contact: string
      address: string
      gender: string
      DOB: string
      emergencyContact: string
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `abhaId`
     * const patientWithAbhaIdOnly = await prisma.patient.findMany({ select: { abhaId: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `abhaId`
     * const patientWithAbhaIdOnly = await prisma.patient.createManyAndReturn({ 
     *   select: { abhaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends Patient$historyArgs<ExtArgs> = {}>(args?: Subset<T, Patient$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    medicalRecords<T extends Patient$medicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany"> | Null>
    patientBooking<T extends Patient$patientBookingArgs<ExtArgs> = {}>(args?: Subset<T, Patient$patientBookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly abhaId: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly password: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly contact: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly DOB: FieldRef<"Patient", 'String'>
    readonly emergencyContact: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }

  /**
   * Patient.history
   */
  export type Patient$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Patient.medicalRecords
   */
  export type Patient$medicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Patient.patientBooking
   */
  export type Patient$patientBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    where?: PatientBookingWhereInput
    orderBy?: PatientBookingOrderByWithRelationInput | PatientBookingOrderByWithRelationInput[]
    cursor?: PatientBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientBookingScalarFieldEnum | PatientBookingScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryMinAggregateOutputType = {
    id: string | null
    message: string | null
    patientId: string | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: string | null
    message: string | null
    patientId: string | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    message: number
    patientId: number
    _all: number
  }


  export type HistoryMinAggregateInputType = {
    id?: true
    message?: true
    patientId?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    message?: true
    patientId?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    message?: true
    patientId?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: string
    message: string
    patientId: string
    _count: HistoryCountAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id?: boolean
    message?: boolean
    patientId?: boolean
  }

  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      patientId: string
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the History model
   */ 
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'String'>
    readonly message: FieldRef<"History", 'String'>
    readonly patientId: FieldRef<"History", 'String'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model PatientBooking
   */

  export type AggregatePatientBooking = {
    _count: PatientBookingCountAggregateOutputType | null
    _avg: PatientBookingAvgAggregateOutputType | null
    _sum: PatientBookingSumAggregateOutputType | null
    _min: PatientBookingMinAggregateOutputType | null
    _max: PatientBookingMaxAggregateOutputType | null
  }

  export type PatientBookingAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientBookingSumAggregateOutputType = {
    id: number | null
  }

  export type PatientBookingMinAggregateOutputType = {
    id: number | null
    abhaId: string | null
    hospitalCode: string | null
    date: string | null
    time: string | null
    status: string | null
    reason: string | null
  }

  export type PatientBookingMaxAggregateOutputType = {
    id: number | null
    abhaId: string | null
    hospitalCode: string | null
    date: string | null
    time: string | null
    status: string | null
    reason: string | null
  }

  export type PatientBookingCountAggregateOutputType = {
    id: number
    abhaId: number
    hospitalCode: number
    date: number
    time: number
    status: number
    reason: number
    _all: number
  }


  export type PatientBookingAvgAggregateInputType = {
    id?: true
  }

  export type PatientBookingSumAggregateInputType = {
    id?: true
  }

  export type PatientBookingMinAggregateInputType = {
    id?: true
    abhaId?: true
    hospitalCode?: true
    date?: true
    time?: true
    status?: true
    reason?: true
  }

  export type PatientBookingMaxAggregateInputType = {
    id?: true
    abhaId?: true
    hospitalCode?: true
    date?: true
    time?: true
    status?: true
    reason?: true
  }

  export type PatientBookingCountAggregateInputType = {
    id?: true
    abhaId?: true
    hospitalCode?: true
    date?: true
    time?: true
    status?: true
    reason?: true
    _all?: true
  }

  export type PatientBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientBooking to aggregate.
     */
    where?: PatientBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientBookings to fetch.
     */
    orderBy?: PatientBookingOrderByWithRelationInput | PatientBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientBookings
    **/
    _count?: true | PatientBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientBookingMaxAggregateInputType
  }

  export type GetPatientBookingAggregateType<T extends PatientBookingAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientBooking[P]>
      : GetScalarType<T[P], AggregatePatientBooking[P]>
  }




  export type PatientBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientBookingWhereInput
    orderBy?: PatientBookingOrderByWithAggregationInput | PatientBookingOrderByWithAggregationInput[]
    by: PatientBookingScalarFieldEnum[] | PatientBookingScalarFieldEnum
    having?: PatientBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientBookingCountAggregateInputType | true
    _avg?: PatientBookingAvgAggregateInputType
    _sum?: PatientBookingSumAggregateInputType
    _min?: PatientBookingMinAggregateInputType
    _max?: PatientBookingMaxAggregateInputType
  }

  export type PatientBookingGroupByOutputType = {
    id: number
    abhaId: string
    hospitalCode: string
    date: string
    time: string
    status: string
    reason: string
    _count: PatientBookingCountAggregateOutputType | null
    _avg: PatientBookingAvgAggregateOutputType | null
    _sum: PatientBookingSumAggregateOutputType | null
    _min: PatientBookingMinAggregateOutputType | null
    _max: PatientBookingMaxAggregateOutputType | null
  }

  type GetPatientBookingGroupByPayload<T extends PatientBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientBookingGroupByOutputType[P]>
            : GetScalarType<T[P], PatientBookingGroupByOutputType[P]>
        }
      >
    >


  export type PatientBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abhaId?: boolean
    hospitalCode?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    reason?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientBooking"]>

  export type PatientBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abhaId?: boolean
    hospitalCode?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    reason?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientBooking"]>

  export type PatientBookingSelectScalar = {
    id?: boolean
    abhaId?: boolean
    hospitalCode?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    reason?: boolean
  }

  export type PatientBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type PatientBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $PatientBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientBooking"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      abhaId: string
      hospitalCode: string
      date: string
      time: string
      status: string
      reason: string
    }, ExtArgs["result"]["patientBooking"]>
    composites: {}
  }

  type PatientBookingGetPayload<S extends boolean | null | undefined | PatientBookingDefaultArgs> = $Result.GetResult<Prisma.$PatientBookingPayload, S>

  type PatientBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientBookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientBookingCountAggregateInputType | true
    }

  export interface PatientBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientBooking'], meta: { name: 'PatientBooking' } }
    /**
     * Find zero or one PatientBooking that matches the filter.
     * @param {PatientBookingFindUniqueArgs} args - Arguments to find a PatientBooking
     * @example
     * // Get one PatientBooking
     * const patientBooking = await prisma.patientBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientBookingFindUniqueArgs>(args: SelectSubset<T, PatientBookingFindUniqueArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatientBooking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientBookingFindUniqueOrThrowArgs} args - Arguments to find a PatientBooking
     * @example
     * // Get one PatientBooking
     * const patientBooking = await prisma.patientBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatientBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingFindFirstArgs} args - Arguments to find a PatientBooking
     * @example
     * // Get one PatientBooking
     * const patientBooking = await prisma.patientBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientBookingFindFirstArgs>(args?: SelectSubset<T, PatientBookingFindFirstArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatientBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingFindFirstOrThrowArgs} args - Arguments to find a PatientBooking
     * @example
     * // Get one PatientBooking
     * const patientBooking = await prisma.patientBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatientBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientBookings
     * const patientBookings = await prisma.patientBooking.findMany()
     * 
     * // Get first 10 PatientBookings
     * const patientBookings = await prisma.patientBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientBookingWithIdOnly = await prisma.patientBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientBookingFindManyArgs>(args?: SelectSubset<T, PatientBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatientBooking.
     * @param {PatientBookingCreateArgs} args - Arguments to create a PatientBooking.
     * @example
     * // Create one PatientBooking
     * const PatientBooking = await prisma.patientBooking.create({
     *   data: {
     *     // ... data to create a PatientBooking
     *   }
     * })
     * 
     */
    create<T extends PatientBookingCreateArgs>(args: SelectSubset<T, PatientBookingCreateArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatientBookings.
     * @param {PatientBookingCreateManyArgs} args - Arguments to create many PatientBookings.
     * @example
     * // Create many PatientBookings
     * const patientBooking = await prisma.patientBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientBookingCreateManyArgs>(args?: SelectSubset<T, PatientBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientBookings and returns the data saved in the database.
     * @param {PatientBookingCreateManyAndReturnArgs} args - Arguments to create many PatientBookings.
     * @example
     * // Create many PatientBookings
     * const patientBooking = await prisma.patientBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientBookings and only return the `id`
     * const patientBookingWithIdOnly = await prisma.patientBooking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatientBooking.
     * @param {PatientBookingDeleteArgs} args - Arguments to delete one PatientBooking.
     * @example
     * // Delete one PatientBooking
     * const PatientBooking = await prisma.patientBooking.delete({
     *   where: {
     *     // ... filter to delete one PatientBooking
     *   }
     * })
     * 
     */
    delete<T extends PatientBookingDeleteArgs>(args: SelectSubset<T, PatientBookingDeleteArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatientBooking.
     * @param {PatientBookingUpdateArgs} args - Arguments to update one PatientBooking.
     * @example
     * // Update one PatientBooking
     * const patientBooking = await prisma.patientBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientBookingUpdateArgs>(args: SelectSubset<T, PatientBookingUpdateArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatientBookings.
     * @param {PatientBookingDeleteManyArgs} args - Arguments to filter PatientBookings to delete.
     * @example
     * // Delete a few PatientBookings
     * const { count } = await prisma.patientBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientBookingDeleteManyArgs>(args?: SelectSubset<T, PatientBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientBookings
     * const patientBooking = await prisma.patientBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientBookingUpdateManyArgs>(args: SelectSubset<T, PatientBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatientBooking.
     * @param {PatientBookingUpsertArgs} args - Arguments to update or create a PatientBooking.
     * @example
     * // Update or create a PatientBooking
     * const patientBooking = await prisma.patientBooking.upsert({
     *   create: {
     *     // ... data to create a PatientBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientBooking we want to update
     *   }
     * })
     */
    upsert<T extends PatientBookingUpsertArgs>(args: SelectSubset<T, PatientBookingUpsertArgs<ExtArgs>>): Prisma__PatientBookingClient<$Result.GetResult<Prisma.$PatientBookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatientBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingCountArgs} args - Arguments to filter PatientBookings to count.
     * @example
     * // Count the number of PatientBookings
     * const count = await prisma.patientBooking.count({
     *   where: {
     *     // ... the filter for the PatientBookings we want to count
     *   }
     * })
    **/
    count<T extends PatientBookingCountArgs>(
      args?: Subset<T, PatientBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientBookingAggregateArgs>(args: Subset<T, PatientBookingAggregateArgs>): Prisma.PrismaPromise<GetPatientBookingAggregateType<T>>

    /**
     * Group by PatientBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientBookingGroupByArgs} args - Group by arguments.
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
      T extends PatientBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientBookingGroupByArgs['orderBy'] }
        : { orderBy?: PatientBookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientBooking model
   */
  readonly fields: PatientBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PatientBooking model
   */ 
  interface PatientBookingFieldRefs {
    readonly id: FieldRef<"PatientBooking", 'Int'>
    readonly abhaId: FieldRef<"PatientBooking", 'String'>
    readonly hospitalCode: FieldRef<"PatientBooking", 'String'>
    readonly date: FieldRef<"PatientBooking", 'String'>
    readonly time: FieldRef<"PatientBooking", 'String'>
    readonly status: FieldRef<"PatientBooking", 'String'>
    readonly reason: FieldRef<"PatientBooking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PatientBooking findUnique
   */
  export type PatientBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * Filter, which PatientBooking to fetch.
     */
    where: PatientBookingWhereUniqueInput
  }

  /**
   * PatientBooking findUniqueOrThrow
   */
  export type PatientBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * Filter, which PatientBooking to fetch.
     */
    where: PatientBookingWhereUniqueInput
  }

  /**
   * PatientBooking findFirst
   */
  export type PatientBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * Filter, which PatientBooking to fetch.
     */
    where?: PatientBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientBookings to fetch.
     */
    orderBy?: PatientBookingOrderByWithRelationInput | PatientBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientBookings.
     */
    cursor?: PatientBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientBookings.
     */
    distinct?: PatientBookingScalarFieldEnum | PatientBookingScalarFieldEnum[]
  }

  /**
   * PatientBooking findFirstOrThrow
   */
  export type PatientBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * Filter, which PatientBooking to fetch.
     */
    where?: PatientBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientBookings to fetch.
     */
    orderBy?: PatientBookingOrderByWithRelationInput | PatientBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientBookings.
     */
    cursor?: PatientBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientBookings.
     */
    distinct?: PatientBookingScalarFieldEnum | PatientBookingScalarFieldEnum[]
  }

  /**
   * PatientBooking findMany
   */
  export type PatientBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * Filter, which PatientBookings to fetch.
     */
    where?: PatientBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientBookings to fetch.
     */
    orderBy?: PatientBookingOrderByWithRelationInput | PatientBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientBookings.
     */
    cursor?: PatientBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientBookings.
     */
    skip?: number
    distinct?: PatientBookingScalarFieldEnum | PatientBookingScalarFieldEnum[]
  }

  /**
   * PatientBooking create
   */
  export type PatientBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientBooking.
     */
    data: XOR<PatientBookingCreateInput, PatientBookingUncheckedCreateInput>
  }

  /**
   * PatientBooking createMany
   */
  export type PatientBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientBookings.
     */
    data: PatientBookingCreateManyInput | PatientBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientBooking createManyAndReturn
   */
  export type PatientBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatientBookings.
     */
    data: PatientBookingCreateManyInput | PatientBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientBooking update
   */
  export type PatientBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientBooking.
     */
    data: XOR<PatientBookingUpdateInput, PatientBookingUncheckedUpdateInput>
    /**
     * Choose, which PatientBooking to update.
     */
    where: PatientBookingWhereUniqueInput
  }

  /**
   * PatientBooking updateMany
   */
  export type PatientBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientBookings.
     */
    data: XOR<PatientBookingUpdateManyMutationInput, PatientBookingUncheckedUpdateManyInput>
    /**
     * Filter which PatientBookings to update
     */
    where?: PatientBookingWhereInput
  }

  /**
   * PatientBooking upsert
   */
  export type PatientBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientBooking to update in case it exists.
     */
    where: PatientBookingWhereUniqueInput
    /**
     * In case the PatientBooking found by the `where` argument doesn't exist, create a new PatientBooking with this data.
     */
    create: XOR<PatientBookingCreateInput, PatientBookingUncheckedCreateInput>
    /**
     * In case the PatientBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientBookingUpdateInput, PatientBookingUncheckedUpdateInput>
  }

  /**
   * PatientBooking delete
   */
  export type PatientBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
    /**
     * Filter which PatientBooking to delete.
     */
    where: PatientBookingWhereUniqueInput
  }

  /**
   * PatientBooking deleteMany
   */
  export type PatientBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientBookings to delete
     */
    where?: PatientBookingWhereInput
  }

  /**
   * PatientBooking without action
   */
  export type PatientBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientBooking
     */
    select?: PatientBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientBookingInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    hospitalCode: string | null
    recordDate: Date | null
    visitReason: string | null
    treatmentSummary: string | null
    doctorName: string | null
    followUpInstructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    hospitalCode: string | null
    recordDate: Date | null
    visitReason: string | null
    treatmentSummary: string | null
    doctorName: string | null
    followUpInstructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    patientId: number
    hospitalCode: number
    recordDate: number
    visitReason: number
    medicationsPrescribed: number
    treatmentSummary: number
    doctorName: number
    followUpInstructions: number
    documents: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalRecordMinAggregateInputType = {
    id?: true
    patientId?: true
    hospitalCode?: true
    recordDate?: true
    visitReason?: true
    treatmentSummary?: true
    doctorName?: true
    followUpInstructions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    patientId?: true
    hospitalCode?: true
    recordDate?: true
    visitReason?: true
    treatmentSummary?: true
    doctorName?: true
    followUpInstructions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    patientId?: true
    hospitalCode?: true
    recordDate?: true
    visitReason?: true
    medicationsPrescribed?: true
    treatmentSummary?: true
    doctorName?: true
    followUpInstructions?: true
    documents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: string
    patientId: string
    hospitalCode: string
    recordDate: Date
    visitReason: string
    medicationsPrescribed: JsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions: string | null
    documents: JsonValue | null
    createdAt: Date
    updatedAt: Date | null
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    hospitalCode?: boolean
    recordDate?: boolean
    visitReason?: boolean
    medicationsPrescribed?: boolean
    treatmentSummary?: boolean
    doctorName?: boolean
    followUpInstructions?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    hospitalCode?: boolean
    recordDate?: boolean
    visitReason?: boolean
    medicationsPrescribed?: boolean
    treatmentSummary?: boolean
    doctorName?: boolean
    followUpInstructions?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
    patientId?: boolean
    hospitalCode?: boolean
    recordDate?: boolean
    visitReason?: boolean
    medicationsPrescribed?: boolean
    treatmentSummary?: boolean
    doctorName?: boolean
    followUpInstructions?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      hospitalCode: string
      recordDate: Date
      visitReason: string
      medicationsPrescribed: Prisma.JsonValue
      treatmentSummary: string
      doctorName: string
      followUpInstructions: string | null
      documents: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
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
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MedicalRecord model
   */ 
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'String'>
    readonly patientId: FieldRef<"MedicalRecord", 'String'>
    readonly hospitalCode: FieldRef<"MedicalRecord", 'String'>
    readonly recordDate: FieldRef<"MedicalRecord", 'DateTime'>
    readonly visitReason: FieldRef<"MedicalRecord", 'String'>
    readonly medicationsPrescribed: FieldRef<"MedicalRecord", 'Json'>
    readonly treatmentSummary: FieldRef<"MedicalRecord", 'String'>
    readonly doctorName: FieldRef<"MedicalRecord", 'String'>
    readonly followUpInstructions: FieldRef<"MedicalRecord", 'String'>
    readonly documents: FieldRef<"MedicalRecord", 'Json'>
    readonly createdAt: FieldRef<"MedicalRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model ABHANumber
   */

  export type AggregateABHANumber = {
    _count: ABHANumberCountAggregateOutputType | null
    _min: ABHANumberMinAggregateOutputType | null
    _max: ABHANumberMaxAggregateOutputType | null
  }

  export type ABHANumberMinAggregateOutputType = {
    prev: string | null
  }

  export type ABHANumberMaxAggregateOutputType = {
    prev: string | null
  }

  export type ABHANumberCountAggregateOutputType = {
    prev: number
    _all: number
  }


  export type ABHANumberMinAggregateInputType = {
    prev?: true
  }

  export type ABHANumberMaxAggregateInputType = {
    prev?: true
  }

  export type ABHANumberCountAggregateInputType = {
    prev?: true
    _all?: true
  }

  export type ABHANumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ABHANumber to aggregate.
     */
    where?: ABHANumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ABHANumbers to fetch.
     */
    orderBy?: ABHANumberOrderByWithRelationInput | ABHANumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ABHANumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ABHANumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ABHANumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ABHANumbers
    **/
    _count?: true | ABHANumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ABHANumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ABHANumberMaxAggregateInputType
  }

  export type GetABHANumberAggregateType<T extends ABHANumberAggregateArgs> = {
        [P in keyof T & keyof AggregateABHANumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateABHANumber[P]>
      : GetScalarType<T[P], AggregateABHANumber[P]>
  }




  export type ABHANumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ABHANumberWhereInput
    orderBy?: ABHANumberOrderByWithAggregationInput | ABHANumberOrderByWithAggregationInput[]
    by: ABHANumberScalarFieldEnum[] | ABHANumberScalarFieldEnum
    having?: ABHANumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ABHANumberCountAggregateInputType | true
    _min?: ABHANumberMinAggregateInputType
    _max?: ABHANumberMaxAggregateInputType
  }

  export type ABHANumberGroupByOutputType = {
    prev: string
    _count: ABHANumberCountAggregateOutputType | null
    _min: ABHANumberMinAggregateOutputType | null
    _max: ABHANumberMaxAggregateOutputType | null
  }

  type GetABHANumberGroupByPayload<T extends ABHANumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ABHANumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ABHANumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ABHANumberGroupByOutputType[P]>
            : GetScalarType<T[P], ABHANumberGroupByOutputType[P]>
        }
      >
    >


  export type ABHANumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prev?: boolean
  }, ExtArgs["result"]["aBHANumber"]>

  export type ABHANumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prev?: boolean
  }, ExtArgs["result"]["aBHANumber"]>

  export type ABHANumberSelectScalar = {
    prev?: boolean
  }


  export type $ABHANumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ABHANumber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      prev: string
    }, ExtArgs["result"]["aBHANumber"]>
    composites: {}
  }

  type ABHANumberGetPayload<S extends boolean | null | undefined | ABHANumberDefaultArgs> = $Result.GetResult<Prisma.$ABHANumberPayload, S>

  type ABHANumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ABHANumberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ABHANumberCountAggregateInputType | true
    }

  export interface ABHANumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ABHANumber'], meta: { name: 'ABHANumber' } }
    /**
     * Find zero or one ABHANumber that matches the filter.
     * @param {ABHANumberFindUniqueArgs} args - Arguments to find a ABHANumber
     * @example
     * // Get one ABHANumber
     * const aBHANumber = await prisma.aBHANumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ABHANumberFindUniqueArgs>(args: SelectSubset<T, ABHANumberFindUniqueArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ABHANumber that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ABHANumberFindUniqueOrThrowArgs} args - Arguments to find a ABHANumber
     * @example
     * // Get one ABHANumber
     * const aBHANumber = await prisma.aBHANumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ABHANumberFindUniqueOrThrowArgs>(args: SelectSubset<T, ABHANumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ABHANumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberFindFirstArgs} args - Arguments to find a ABHANumber
     * @example
     * // Get one ABHANumber
     * const aBHANumber = await prisma.aBHANumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ABHANumberFindFirstArgs>(args?: SelectSubset<T, ABHANumberFindFirstArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ABHANumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberFindFirstOrThrowArgs} args - Arguments to find a ABHANumber
     * @example
     * // Get one ABHANumber
     * const aBHANumber = await prisma.aBHANumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ABHANumberFindFirstOrThrowArgs>(args?: SelectSubset<T, ABHANumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ABHANumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ABHANumbers
     * const aBHANumbers = await prisma.aBHANumber.findMany()
     * 
     * // Get first 10 ABHANumbers
     * const aBHANumbers = await prisma.aBHANumber.findMany({ take: 10 })
     * 
     * // Only select the `prev`
     * const aBHANumberWithPrevOnly = await prisma.aBHANumber.findMany({ select: { prev: true } })
     * 
     */
    findMany<T extends ABHANumberFindManyArgs>(args?: SelectSubset<T, ABHANumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ABHANumber.
     * @param {ABHANumberCreateArgs} args - Arguments to create a ABHANumber.
     * @example
     * // Create one ABHANumber
     * const ABHANumber = await prisma.aBHANumber.create({
     *   data: {
     *     // ... data to create a ABHANumber
     *   }
     * })
     * 
     */
    create<T extends ABHANumberCreateArgs>(args: SelectSubset<T, ABHANumberCreateArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ABHANumbers.
     * @param {ABHANumberCreateManyArgs} args - Arguments to create many ABHANumbers.
     * @example
     * // Create many ABHANumbers
     * const aBHANumber = await prisma.aBHANumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ABHANumberCreateManyArgs>(args?: SelectSubset<T, ABHANumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ABHANumbers and returns the data saved in the database.
     * @param {ABHANumberCreateManyAndReturnArgs} args - Arguments to create many ABHANumbers.
     * @example
     * // Create many ABHANumbers
     * const aBHANumber = await prisma.aBHANumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ABHANumbers and only return the `prev`
     * const aBHANumberWithPrevOnly = await prisma.aBHANumber.createManyAndReturn({ 
     *   select: { prev: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ABHANumberCreateManyAndReturnArgs>(args?: SelectSubset<T, ABHANumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ABHANumber.
     * @param {ABHANumberDeleteArgs} args - Arguments to delete one ABHANumber.
     * @example
     * // Delete one ABHANumber
     * const ABHANumber = await prisma.aBHANumber.delete({
     *   where: {
     *     // ... filter to delete one ABHANumber
     *   }
     * })
     * 
     */
    delete<T extends ABHANumberDeleteArgs>(args: SelectSubset<T, ABHANumberDeleteArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ABHANumber.
     * @param {ABHANumberUpdateArgs} args - Arguments to update one ABHANumber.
     * @example
     * // Update one ABHANumber
     * const aBHANumber = await prisma.aBHANumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ABHANumberUpdateArgs>(args: SelectSubset<T, ABHANumberUpdateArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ABHANumbers.
     * @param {ABHANumberDeleteManyArgs} args - Arguments to filter ABHANumbers to delete.
     * @example
     * // Delete a few ABHANumbers
     * const { count } = await prisma.aBHANumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ABHANumberDeleteManyArgs>(args?: SelectSubset<T, ABHANumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ABHANumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ABHANumbers
     * const aBHANumber = await prisma.aBHANumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ABHANumberUpdateManyArgs>(args: SelectSubset<T, ABHANumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ABHANumber.
     * @param {ABHANumberUpsertArgs} args - Arguments to update or create a ABHANumber.
     * @example
     * // Update or create a ABHANumber
     * const aBHANumber = await prisma.aBHANumber.upsert({
     *   create: {
     *     // ... data to create a ABHANumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ABHANumber we want to update
     *   }
     * })
     */
    upsert<T extends ABHANumberUpsertArgs>(args: SelectSubset<T, ABHANumberUpsertArgs<ExtArgs>>): Prisma__ABHANumberClient<$Result.GetResult<Prisma.$ABHANumberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ABHANumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberCountArgs} args - Arguments to filter ABHANumbers to count.
     * @example
     * // Count the number of ABHANumbers
     * const count = await prisma.aBHANumber.count({
     *   where: {
     *     // ... the filter for the ABHANumbers we want to count
     *   }
     * })
    **/
    count<T extends ABHANumberCountArgs>(
      args?: Subset<T, ABHANumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ABHANumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ABHANumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ABHANumberAggregateArgs>(args: Subset<T, ABHANumberAggregateArgs>): Prisma.PrismaPromise<GetABHANumberAggregateType<T>>

    /**
     * Group by ABHANumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ABHANumberGroupByArgs} args - Group by arguments.
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
      T extends ABHANumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ABHANumberGroupByArgs['orderBy'] }
        : { orderBy?: ABHANumberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ABHANumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetABHANumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ABHANumber model
   */
  readonly fields: ABHANumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ABHANumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ABHANumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ABHANumber model
   */ 
  interface ABHANumberFieldRefs {
    readonly prev: FieldRef<"ABHANumber", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ABHANumber findUnique
   */
  export type ABHANumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * Filter, which ABHANumber to fetch.
     */
    where: ABHANumberWhereUniqueInput
  }

  /**
   * ABHANumber findUniqueOrThrow
   */
  export type ABHANumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * Filter, which ABHANumber to fetch.
     */
    where: ABHANumberWhereUniqueInput
  }

  /**
   * ABHANumber findFirst
   */
  export type ABHANumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * Filter, which ABHANumber to fetch.
     */
    where?: ABHANumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ABHANumbers to fetch.
     */
    orderBy?: ABHANumberOrderByWithRelationInput | ABHANumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ABHANumbers.
     */
    cursor?: ABHANumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ABHANumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ABHANumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ABHANumbers.
     */
    distinct?: ABHANumberScalarFieldEnum | ABHANumberScalarFieldEnum[]
  }

  /**
   * ABHANumber findFirstOrThrow
   */
  export type ABHANumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * Filter, which ABHANumber to fetch.
     */
    where?: ABHANumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ABHANumbers to fetch.
     */
    orderBy?: ABHANumberOrderByWithRelationInput | ABHANumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ABHANumbers.
     */
    cursor?: ABHANumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ABHANumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ABHANumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ABHANumbers.
     */
    distinct?: ABHANumberScalarFieldEnum | ABHANumberScalarFieldEnum[]
  }

  /**
   * ABHANumber findMany
   */
  export type ABHANumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * Filter, which ABHANumbers to fetch.
     */
    where?: ABHANumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ABHANumbers to fetch.
     */
    orderBy?: ABHANumberOrderByWithRelationInput | ABHANumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ABHANumbers.
     */
    cursor?: ABHANumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ABHANumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ABHANumbers.
     */
    skip?: number
    distinct?: ABHANumberScalarFieldEnum | ABHANumberScalarFieldEnum[]
  }

  /**
   * ABHANumber create
   */
  export type ABHANumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * The data needed to create a ABHANumber.
     */
    data: XOR<ABHANumberCreateInput, ABHANumberUncheckedCreateInput>
  }

  /**
   * ABHANumber createMany
   */
  export type ABHANumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ABHANumbers.
     */
    data: ABHANumberCreateManyInput | ABHANumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ABHANumber createManyAndReturn
   */
  export type ABHANumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ABHANumbers.
     */
    data: ABHANumberCreateManyInput | ABHANumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ABHANumber update
   */
  export type ABHANumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * The data needed to update a ABHANumber.
     */
    data: XOR<ABHANumberUpdateInput, ABHANumberUncheckedUpdateInput>
    /**
     * Choose, which ABHANumber to update.
     */
    where: ABHANumberWhereUniqueInput
  }

  /**
   * ABHANumber updateMany
   */
  export type ABHANumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ABHANumbers.
     */
    data: XOR<ABHANumberUpdateManyMutationInput, ABHANumberUncheckedUpdateManyInput>
    /**
     * Filter which ABHANumbers to update
     */
    where?: ABHANumberWhereInput
  }

  /**
   * ABHANumber upsert
   */
  export type ABHANumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * The filter to search for the ABHANumber to update in case it exists.
     */
    where: ABHANumberWhereUniqueInput
    /**
     * In case the ABHANumber found by the `where` argument doesn't exist, create a new ABHANumber with this data.
     */
    create: XOR<ABHANumberCreateInput, ABHANumberUncheckedCreateInput>
    /**
     * In case the ABHANumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ABHANumberUpdateInput, ABHANumberUncheckedUpdateInput>
  }

  /**
   * ABHANumber delete
   */
  export type ABHANumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
    /**
     * Filter which ABHANumber to delete.
     */
    where: ABHANumberWhereUniqueInput
  }

  /**
   * ABHANumber deleteMany
   */
  export type ABHANumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ABHANumbers to delete
     */
    where?: ABHANumberWhereInput
  }

  /**
   * ABHANumber without action
   */
  export type ABHANumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ABHANumber
     */
    select?: ABHANumberSelect<ExtArgs> | null
  }


  /**
   * Model OTPVerification
   */

  export type AggregateOTPVerification = {
    _count: OTPVerificationCountAggregateOutputType | null
    _min: OTPVerificationMinAggregateOutputType | null
    _max: OTPVerificationMaxAggregateOutputType | null
  }

  export type OTPVerificationMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type OTPVerificationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type OTPVerificationCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type OTPVerificationMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
  }

  export type OTPVerificationMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
  }

  export type OTPVerificationCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type OTPVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPVerification to aggregate.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPVerifications
    **/
    _count?: true | OTPVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPVerificationMaxAggregateInputType
  }

  export type GetOTPVerificationAggregateType<T extends OTPVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateOTPVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTPVerification[P]>
      : GetScalarType<T[P], AggregateOTPVerification[P]>
  }




  export type OTPVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPVerificationWhereInput
    orderBy?: OTPVerificationOrderByWithAggregationInput | OTPVerificationOrderByWithAggregationInput[]
    by: OTPVerificationScalarFieldEnum[] | OTPVerificationScalarFieldEnum
    having?: OTPVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPVerificationCountAggregateInputType | true
    _min?: OTPVerificationMinAggregateInputType
    _max?: OTPVerificationMaxAggregateInputType
  }

  export type OTPVerificationGroupByOutputType = {
    id: string
    email: string
    otp: string
    createdAt: Date
    expiresAt: Date
    _count: OTPVerificationCountAggregateOutputType | null
    _min: OTPVerificationMinAggregateOutputType | null
    _max: OTPVerificationMaxAggregateOutputType | null
  }

  type GetOTPVerificationGroupByPayload<T extends OTPVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], OTPVerificationGroupByOutputType[P]>
        }
      >
    >


  export type OTPVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["oTPVerification"]>

  export type OTPVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["oTPVerification"]>

  export type OTPVerificationSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }


  export type $OTPVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTPVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["oTPVerification"]>
    composites: {}
  }

  type OTPVerificationGetPayload<S extends boolean | null | undefined | OTPVerificationDefaultArgs> = $Result.GetResult<Prisma.$OTPVerificationPayload, S>

  type OTPVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTPVerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OTPVerificationCountAggregateInputType | true
    }

  export interface OTPVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTPVerification'], meta: { name: 'OTPVerification' } }
    /**
     * Find zero or one OTPVerification that matches the filter.
     * @param {OTPVerificationFindUniqueArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPVerificationFindUniqueArgs>(args: SelectSubset<T, OTPVerificationFindUniqueArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OTPVerification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OTPVerificationFindUniqueOrThrowArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OTPVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationFindFirstArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPVerificationFindFirstArgs>(args?: SelectSubset<T, OTPVerificationFindFirstArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OTPVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationFindFirstOrThrowArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OTPVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPVerifications
     * const oTPVerifications = await prisma.oTPVerification.findMany()
     * 
     * // Get first 10 OTPVerifications
     * const oTPVerifications = await prisma.oTPVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPVerificationWithIdOnly = await prisma.oTPVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPVerificationFindManyArgs>(args?: SelectSubset<T, OTPVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OTPVerification.
     * @param {OTPVerificationCreateArgs} args - Arguments to create a OTPVerification.
     * @example
     * // Create one OTPVerification
     * const OTPVerification = await prisma.oTPVerification.create({
     *   data: {
     *     // ... data to create a OTPVerification
     *   }
     * })
     * 
     */
    create<T extends OTPVerificationCreateArgs>(args: SelectSubset<T, OTPVerificationCreateArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OTPVerifications.
     * @param {OTPVerificationCreateManyArgs} args - Arguments to create many OTPVerifications.
     * @example
     * // Create many OTPVerifications
     * const oTPVerification = await prisma.oTPVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPVerificationCreateManyArgs>(args?: SelectSubset<T, OTPVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OTPVerifications and returns the data saved in the database.
     * @param {OTPVerificationCreateManyAndReturnArgs} args - Arguments to create many OTPVerifications.
     * @example
     * // Create many OTPVerifications
     * const oTPVerification = await prisma.oTPVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OTPVerifications and only return the `id`
     * const oTPVerificationWithIdOnly = await prisma.oTPVerification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OTPVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, OTPVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OTPVerification.
     * @param {OTPVerificationDeleteArgs} args - Arguments to delete one OTPVerification.
     * @example
     * // Delete one OTPVerification
     * const OTPVerification = await prisma.oTPVerification.delete({
     *   where: {
     *     // ... filter to delete one OTPVerification
     *   }
     * })
     * 
     */
    delete<T extends OTPVerificationDeleteArgs>(args: SelectSubset<T, OTPVerificationDeleteArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OTPVerification.
     * @param {OTPVerificationUpdateArgs} args - Arguments to update one OTPVerification.
     * @example
     * // Update one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPVerificationUpdateArgs>(args: SelectSubset<T, OTPVerificationUpdateArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OTPVerifications.
     * @param {OTPVerificationDeleteManyArgs} args - Arguments to filter OTPVerifications to delete.
     * @example
     * // Delete a few OTPVerifications
     * const { count } = await prisma.oTPVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPVerificationDeleteManyArgs>(args?: SelectSubset<T, OTPVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPVerifications
     * const oTPVerification = await prisma.oTPVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPVerificationUpdateManyArgs>(args: SelectSubset<T, OTPVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTPVerification.
     * @param {OTPVerificationUpsertArgs} args - Arguments to update or create a OTPVerification.
     * @example
     * // Update or create a OTPVerification
     * const oTPVerification = await prisma.oTPVerification.upsert({
     *   create: {
     *     // ... data to create a OTPVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTPVerification we want to update
     *   }
     * })
     */
    upsert<T extends OTPVerificationUpsertArgs>(args: SelectSubset<T, OTPVerificationUpsertArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OTPVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationCountArgs} args - Arguments to filter OTPVerifications to count.
     * @example
     * // Count the number of OTPVerifications
     * const count = await prisma.oTPVerification.count({
     *   where: {
     *     // ... the filter for the OTPVerifications we want to count
     *   }
     * })
    **/
    count<T extends OTPVerificationCountArgs>(
      args?: Subset<T, OTPVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTPVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTPVerificationAggregateArgs>(args: Subset<T, OTPVerificationAggregateArgs>): Prisma.PrismaPromise<GetOTPVerificationAggregateType<T>>

    /**
     * Group by OTPVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationGroupByArgs} args - Group by arguments.
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
      T extends OTPVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPVerificationGroupByArgs['orderBy'] }
        : { orderBy?: OTPVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTPVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTPVerification model
   */
  readonly fields: OTPVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTPVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OTPVerification model
   */ 
  interface OTPVerificationFieldRefs {
    readonly id: FieldRef<"OTPVerification", 'String'>
    readonly email: FieldRef<"OTPVerification", 'String'>
    readonly otp: FieldRef<"OTPVerification", 'String'>
    readonly createdAt: FieldRef<"OTPVerification", 'DateTime'>
    readonly expiresAt: FieldRef<"OTPVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTPVerification findUnique
   */
  export type OTPVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification findUniqueOrThrow
   */
  export type OTPVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification findFirst
   */
  export type OTPVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPVerifications.
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPVerifications.
     */
    distinct?: OTPVerificationScalarFieldEnum | OTPVerificationScalarFieldEnum[]
  }

  /**
   * OTPVerification findFirstOrThrow
   */
  export type OTPVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPVerifications.
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPVerifications.
     */
    distinct?: OTPVerificationScalarFieldEnum | OTPVerificationScalarFieldEnum[]
  }

  /**
   * OTPVerification findMany
   */
  export type OTPVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OTPVerifications to fetch.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPVerifications.
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    distinct?: OTPVerificationScalarFieldEnum | OTPVerificationScalarFieldEnum[]
  }

  /**
   * OTPVerification create
   */
  export type OTPVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * The data needed to create a OTPVerification.
     */
    data: XOR<OTPVerificationCreateInput, OTPVerificationUncheckedCreateInput>
  }

  /**
   * OTPVerification createMany
   */
  export type OTPVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPVerifications.
     */
    data: OTPVerificationCreateManyInput | OTPVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTPVerification createManyAndReturn
   */
  export type OTPVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OTPVerifications.
     */
    data: OTPVerificationCreateManyInput | OTPVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTPVerification update
   */
  export type OTPVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * The data needed to update a OTPVerification.
     */
    data: XOR<OTPVerificationUpdateInput, OTPVerificationUncheckedUpdateInput>
    /**
     * Choose, which OTPVerification to update.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification updateMany
   */
  export type OTPVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPVerifications.
     */
    data: XOR<OTPVerificationUpdateManyMutationInput, OTPVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OTPVerifications to update
     */
    where?: OTPVerificationWhereInput
  }

  /**
   * OTPVerification upsert
   */
  export type OTPVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * The filter to search for the OTPVerification to update in case it exists.
     */
    where: OTPVerificationWhereUniqueInput
    /**
     * In case the OTPVerification found by the `where` argument doesn't exist, create a new OTPVerification with this data.
     */
    create: XOR<OTPVerificationCreateInput, OTPVerificationUncheckedCreateInput>
    /**
     * In case the OTPVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPVerificationUpdateInput, OTPVerificationUncheckedUpdateInput>
  }

  /**
   * OTPVerification delete
   */
  export type OTPVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Filter which OTPVerification to delete.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification deleteMany
   */
  export type OTPVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPVerifications to delete
     */
    where?: OTPVerificationWhereInput
  }

  /**
   * OTPVerification without action
   */
  export type OTPVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
  }


  /**
   * Model BedRequest
   */

  export type AggregateBedRequest = {
    _count: BedRequestCountAggregateOutputType | null
    _avg: BedRequestAvgAggregateOutputType | null
    _sum: BedRequestSumAggregateOutputType | null
    _min: BedRequestMinAggregateOutputType | null
    _max: BedRequestMaxAggregateOutputType | null
  }

  export type BedRequestAvgAggregateOutputType = {
    patientAge: number | null
  }

  export type BedRequestSumAggregateOutputType = {
    patientAge: number | null
  }

  export type BedRequestMinAggregateOutputType = {
    id: string | null
    hospitalCode: string | null
    patientAbhaId: string | null
    patientName: string | null
    patientAge: number | null
    patientGender: string | null
    reason: string | null
    patientContact: string | null
    wardName: string | null
  }

  export type BedRequestMaxAggregateOutputType = {
    id: string | null
    hospitalCode: string | null
    patientAbhaId: string | null
    patientName: string | null
    patientAge: number | null
    patientGender: string | null
    reason: string | null
    patientContact: string | null
    wardName: string | null
  }

  export type BedRequestCountAggregateOutputType = {
    id: number
    hospitalCode: number
    patientAbhaId: number
    patientName: number
    patientAge: number
    patientGender: number
    reason: number
    patientContact: number
    wardName: number
    _all: number
  }


  export type BedRequestAvgAggregateInputType = {
    patientAge?: true
  }

  export type BedRequestSumAggregateInputType = {
    patientAge?: true
  }

  export type BedRequestMinAggregateInputType = {
    id?: true
    hospitalCode?: true
    patientAbhaId?: true
    patientName?: true
    patientAge?: true
    patientGender?: true
    reason?: true
    patientContact?: true
    wardName?: true
  }

  export type BedRequestMaxAggregateInputType = {
    id?: true
    hospitalCode?: true
    patientAbhaId?: true
    patientName?: true
    patientAge?: true
    patientGender?: true
    reason?: true
    patientContact?: true
    wardName?: true
  }

  export type BedRequestCountAggregateInputType = {
    id?: true
    hospitalCode?: true
    patientAbhaId?: true
    patientName?: true
    patientAge?: true
    patientGender?: true
    reason?: true
    patientContact?: true
    wardName?: true
    _all?: true
  }

  export type BedRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BedRequest to aggregate.
     */
    where?: BedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BedRequests to fetch.
     */
    orderBy?: BedRequestOrderByWithRelationInput | BedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BedRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BedRequests
    **/
    _count?: true | BedRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BedRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BedRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BedRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BedRequestMaxAggregateInputType
  }

  export type GetBedRequestAggregateType<T extends BedRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBedRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBedRequest[P]>
      : GetScalarType<T[P], AggregateBedRequest[P]>
  }




  export type BedRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BedRequestWhereInput
    orderBy?: BedRequestOrderByWithAggregationInput | BedRequestOrderByWithAggregationInput[]
    by: BedRequestScalarFieldEnum[] | BedRequestScalarFieldEnum
    having?: BedRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BedRequestCountAggregateInputType | true
    _avg?: BedRequestAvgAggregateInputType
    _sum?: BedRequestSumAggregateInputType
    _min?: BedRequestMinAggregateInputType
    _max?: BedRequestMaxAggregateInputType
  }

  export type BedRequestGroupByOutputType = {
    id: string
    hospitalCode: string
    patientAbhaId: string
    patientName: string
    patientAge: number
    patientGender: string
    reason: string
    patientContact: string
    wardName: string
    _count: BedRequestCountAggregateOutputType | null
    _avg: BedRequestAvgAggregateOutputType | null
    _sum: BedRequestSumAggregateOutputType | null
    _min: BedRequestMinAggregateOutputType | null
    _max: BedRequestMaxAggregateOutputType | null
  }

  type GetBedRequestGroupByPayload<T extends BedRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BedRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BedRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BedRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BedRequestGroupByOutputType[P]>
        }
      >
    >


  export type BedRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalCode?: boolean
    patientAbhaId?: boolean
    patientName?: boolean
    patientAge?: boolean
    patientGender?: boolean
    reason?: boolean
    patientContact?: boolean
    wardName?: boolean
  }, ExtArgs["result"]["bedRequest"]>

  export type BedRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalCode?: boolean
    patientAbhaId?: boolean
    patientName?: boolean
    patientAge?: boolean
    patientGender?: boolean
    reason?: boolean
    patientContact?: boolean
    wardName?: boolean
  }, ExtArgs["result"]["bedRequest"]>

  export type BedRequestSelectScalar = {
    id?: boolean
    hospitalCode?: boolean
    patientAbhaId?: boolean
    patientName?: boolean
    patientAge?: boolean
    patientGender?: boolean
    reason?: boolean
    patientContact?: boolean
    wardName?: boolean
  }


  export type $BedRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BedRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hospitalCode: string
      patientAbhaId: string
      patientName: string
      patientAge: number
      patientGender: string
      reason: string
      patientContact: string
      wardName: string
    }, ExtArgs["result"]["bedRequest"]>
    composites: {}
  }

  type BedRequestGetPayload<S extends boolean | null | undefined | BedRequestDefaultArgs> = $Result.GetResult<Prisma.$BedRequestPayload, S>

  type BedRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BedRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BedRequestCountAggregateInputType | true
    }

  export interface BedRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BedRequest'], meta: { name: 'BedRequest' } }
    /**
     * Find zero or one BedRequest that matches the filter.
     * @param {BedRequestFindUniqueArgs} args - Arguments to find a BedRequest
     * @example
     * // Get one BedRequest
     * const bedRequest = await prisma.bedRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BedRequestFindUniqueArgs>(args: SelectSubset<T, BedRequestFindUniqueArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BedRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BedRequestFindUniqueOrThrowArgs} args - Arguments to find a BedRequest
     * @example
     * // Get one BedRequest
     * const bedRequest = await prisma.bedRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BedRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BedRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BedRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestFindFirstArgs} args - Arguments to find a BedRequest
     * @example
     * // Get one BedRequest
     * const bedRequest = await prisma.bedRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BedRequestFindFirstArgs>(args?: SelectSubset<T, BedRequestFindFirstArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BedRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestFindFirstOrThrowArgs} args - Arguments to find a BedRequest
     * @example
     * // Get one BedRequest
     * const bedRequest = await prisma.bedRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BedRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BedRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BedRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BedRequests
     * const bedRequests = await prisma.bedRequest.findMany()
     * 
     * // Get first 10 BedRequests
     * const bedRequests = await prisma.bedRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bedRequestWithIdOnly = await prisma.bedRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BedRequestFindManyArgs>(args?: SelectSubset<T, BedRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BedRequest.
     * @param {BedRequestCreateArgs} args - Arguments to create a BedRequest.
     * @example
     * // Create one BedRequest
     * const BedRequest = await prisma.bedRequest.create({
     *   data: {
     *     // ... data to create a BedRequest
     *   }
     * })
     * 
     */
    create<T extends BedRequestCreateArgs>(args: SelectSubset<T, BedRequestCreateArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BedRequests.
     * @param {BedRequestCreateManyArgs} args - Arguments to create many BedRequests.
     * @example
     * // Create many BedRequests
     * const bedRequest = await prisma.bedRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BedRequestCreateManyArgs>(args?: SelectSubset<T, BedRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BedRequests and returns the data saved in the database.
     * @param {BedRequestCreateManyAndReturnArgs} args - Arguments to create many BedRequests.
     * @example
     * // Create many BedRequests
     * const bedRequest = await prisma.bedRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BedRequests and only return the `id`
     * const bedRequestWithIdOnly = await prisma.bedRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BedRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BedRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BedRequest.
     * @param {BedRequestDeleteArgs} args - Arguments to delete one BedRequest.
     * @example
     * // Delete one BedRequest
     * const BedRequest = await prisma.bedRequest.delete({
     *   where: {
     *     // ... filter to delete one BedRequest
     *   }
     * })
     * 
     */
    delete<T extends BedRequestDeleteArgs>(args: SelectSubset<T, BedRequestDeleteArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BedRequest.
     * @param {BedRequestUpdateArgs} args - Arguments to update one BedRequest.
     * @example
     * // Update one BedRequest
     * const bedRequest = await prisma.bedRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BedRequestUpdateArgs>(args: SelectSubset<T, BedRequestUpdateArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BedRequests.
     * @param {BedRequestDeleteManyArgs} args - Arguments to filter BedRequests to delete.
     * @example
     * // Delete a few BedRequests
     * const { count } = await prisma.bedRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BedRequestDeleteManyArgs>(args?: SelectSubset<T, BedRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BedRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BedRequests
     * const bedRequest = await prisma.bedRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BedRequestUpdateManyArgs>(args: SelectSubset<T, BedRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BedRequest.
     * @param {BedRequestUpsertArgs} args - Arguments to update or create a BedRequest.
     * @example
     * // Update or create a BedRequest
     * const bedRequest = await prisma.bedRequest.upsert({
     *   create: {
     *     // ... data to create a BedRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BedRequest we want to update
     *   }
     * })
     */
    upsert<T extends BedRequestUpsertArgs>(args: SelectSubset<T, BedRequestUpsertArgs<ExtArgs>>): Prisma__BedRequestClient<$Result.GetResult<Prisma.$BedRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BedRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestCountArgs} args - Arguments to filter BedRequests to count.
     * @example
     * // Count the number of BedRequests
     * const count = await prisma.bedRequest.count({
     *   where: {
     *     // ... the filter for the BedRequests we want to count
     *   }
     * })
    **/
    count<T extends BedRequestCountArgs>(
      args?: Subset<T, BedRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BedRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BedRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BedRequestAggregateArgs>(args: Subset<T, BedRequestAggregateArgs>): Prisma.PrismaPromise<GetBedRequestAggregateType<T>>

    /**
     * Group by BedRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedRequestGroupByArgs} args - Group by arguments.
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
      T extends BedRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BedRequestGroupByArgs['orderBy'] }
        : { orderBy?: BedRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BedRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBedRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BedRequest model
   */
  readonly fields: BedRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BedRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BedRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BedRequest model
   */ 
  interface BedRequestFieldRefs {
    readonly id: FieldRef<"BedRequest", 'String'>
    readonly hospitalCode: FieldRef<"BedRequest", 'String'>
    readonly patientAbhaId: FieldRef<"BedRequest", 'String'>
    readonly patientName: FieldRef<"BedRequest", 'String'>
    readonly patientAge: FieldRef<"BedRequest", 'Int'>
    readonly patientGender: FieldRef<"BedRequest", 'String'>
    readonly reason: FieldRef<"BedRequest", 'String'>
    readonly patientContact: FieldRef<"BedRequest", 'String'>
    readonly wardName: FieldRef<"BedRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BedRequest findUnique
   */
  export type BedRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * Filter, which BedRequest to fetch.
     */
    where: BedRequestWhereUniqueInput
  }

  /**
   * BedRequest findUniqueOrThrow
   */
  export type BedRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * Filter, which BedRequest to fetch.
     */
    where: BedRequestWhereUniqueInput
  }

  /**
   * BedRequest findFirst
   */
  export type BedRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * Filter, which BedRequest to fetch.
     */
    where?: BedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BedRequests to fetch.
     */
    orderBy?: BedRequestOrderByWithRelationInput | BedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BedRequests.
     */
    cursor?: BedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BedRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BedRequests.
     */
    distinct?: BedRequestScalarFieldEnum | BedRequestScalarFieldEnum[]
  }

  /**
   * BedRequest findFirstOrThrow
   */
  export type BedRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * Filter, which BedRequest to fetch.
     */
    where?: BedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BedRequests to fetch.
     */
    orderBy?: BedRequestOrderByWithRelationInput | BedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BedRequests.
     */
    cursor?: BedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BedRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BedRequests.
     */
    distinct?: BedRequestScalarFieldEnum | BedRequestScalarFieldEnum[]
  }

  /**
   * BedRequest findMany
   */
  export type BedRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * Filter, which BedRequests to fetch.
     */
    where?: BedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BedRequests to fetch.
     */
    orderBy?: BedRequestOrderByWithRelationInput | BedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BedRequests.
     */
    cursor?: BedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BedRequests.
     */
    skip?: number
    distinct?: BedRequestScalarFieldEnum | BedRequestScalarFieldEnum[]
  }

  /**
   * BedRequest create
   */
  export type BedRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a BedRequest.
     */
    data: XOR<BedRequestCreateInput, BedRequestUncheckedCreateInput>
  }

  /**
   * BedRequest createMany
   */
  export type BedRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BedRequests.
     */
    data: BedRequestCreateManyInput | BedRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BedRequest createManyAndReturn
   */
  export type BedRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BedRequests.
     */
    data: BedRequestCreateManyInput | BedRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BedRequest update
   */
  export type BedRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a BedRequest.
     */
    data: XOR<BedRequestUpdateInput, BedRequestUncheckedUpdateInput>
    /**
     * Choose, which BedRequest to update.
     */
    where: BedRequestWhereUniqueInput
  }

  /**
   * BedRequest updateMany
   */
  export type BedRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BedRequests.
     */
    data: XOR<BedRequestUpdateManyMutationInput, BedRequestUncheckedUpdateManyInput>
    /**
     * Filter which BedRequests to update
     */
    where?: BedRequestWhereInput
  }

  /**
   * BedRequest upsert
   */
  export type BedRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the BedRequest to update in case it exists.
     */
    where: BedRequestWhereUniqueInput
    /**
     * In case the BedRequest found by the `where` argument doesn't exist, create a new BedRequest with this data.
     */
    create: XOR<BedRequestCreateInput, BedRequestUncheckedCreateInput>
    /**
     * In case the BedRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BedRequestUpdateInput, BedRequestUncheckedUpdateInput>
  }

  /**
   * BedRequest delete
   */
  export type BedRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
    /**
     * Filter which BedRequest to delete.
     */
    where: BedRequestWhereUniqueInput
  }

  /**
   * BedRequest deleteMany
   */
  export type BedRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BedRequests to delete
     */
    where?: BedRequestWhereInput
  }

  /**
   * BedRequest without action
   */
  export type BedRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedRequest
     */
    select?: BedRequestSelect<ExtArgs> | null
  }


  /**
   * Model triage
   */

  export type AggregateTriage = {
    _count: TriageCountAggregateOutputType | null
    _min: TriageMinAggregateOutputType | null
    _max: TriageMaxAggregateOutputType | null
  }

  export type TriageMinAggregateOutputType = {
    id: string | null
    message: string | null
  }

  export type TriageMaxAggregateOutputType = {
    id: string | null
    message: string | null
  }

  export type TriageCountAggregateOutputType = {
    id: number
    message: number
    _all: number
  }


  export type TriageMinAggregateInputType = {
    id?: true
    message?: true
  }

  export type TriageMaxAggregateInputType = {
    id?: true
    message?: true
  }

  export type TriageCountAggregateInputType = {
    id?: true
    message?: true
    _all?: true
  }

  export type TriageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which triage to aggregate.
     */
    where?: triageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triages to fetch.
     */
    orderBy?: triageOrderByWithRelationInput | triageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: triageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned triages
    **/
    _count?: true | TriageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriageMaxAggregateInputType
  }

  export type GetTriageAggregateType<T extends TriageAggregateArgs> = {
        [P in keyof T & keyof AggregateTriage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriage[P]>
      : GetScalarType<T[P], AggregateTriage[P]>
  }




  export type triageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: triageWhereInput
    orderBy?: triageOrderByWithAggregationInput | triageOrderByWithAggregationInput[]
    by: TriageScalarFieldEnum[] | TriageScalarFieldEnum
    having?: triageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriageCountAggregateInputType | true
    _min?: TriageMinAggregateInputType
    _max?: TriageMaxAggregateInputType
  }

  export type TriageGroupByOutputType = {
    id: string
    message: string
    _count: TriageCountAggregateOutputType | null
    _min: TriageMinAggregateOutputType | null
    _max: TriageMaxAggregateOutputType | null
  }

  type GetTriageGroupByPayload<T extends triageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriageGroupByOutputType[P]>
            : GetScalarType<T[P], TriageGroupByOutputType[P]>
        }
      >
    >


  export type triageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
  }, ExtArgs["result"]["triage"]>

  export type triageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
  }, ExtArgs["result"]["triage"]>

  export type triageSelectScalar = {
    id?: boolean
    message?: boolean
  }


  export type $triagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "triage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
    }, ExtArgs["result"]["triage"]>
    composites: {}
  }

  type triageGetPayload<S extends boolean | null | undefined | triageDefaultArgs> = $Result.GetResult<Prisma.$triagePayload, S>

  type triageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<triageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TriageCountAggregateInputType | true
    }

  export interface triageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['triage'], meta: { name: 'triage' } }
    /**
     * Find zero or one Triage that matches the filter.
     * @param {triageFindUniqueArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends triageFindUniqueArgs>(args: SelectSubset<T, triageFindUniqueArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Triage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {triageFindUniqueOrThrowArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends triageFindUniqueOrThrowArgs>(args: SelectSubset<T, triageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Triage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triageFindFirstArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends triageFindFirstArgs>(args?: SelectSubset<T, triageFindFirstArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Triage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triageFindFirstOrThrowArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends triageFindFirstOrThrowArgs>(args?: SelectSubset<T, triageFindFirstOrThrowArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Triages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triages
     * const triages = await prisma.triage.findMany()
     * 
     * // Get first 10 Triages
     * const triages = await prisma.triage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triageWithIdOnly = await prisma.triage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends triageFindManyArgs>(args?: SelectSubset<T, triageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Triage.
     * @param {triageCreateArgs} args - Arguments to create a Triage.
     * @example
     * // Create one Triage
     * const Triage = await prisma.triage.create({
     *   data: {
     *     // ... data to create a Triage
     *   }
     * })
     * 
     */
    create<T extends triageCreateArgs>(args: SelectSubset<T, triageCreateArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Triages.
     * @param {triageCreateManyArgs} args - Arguments to create many Triages.
     * @example
     * // Create many Triages
     * const triage = await prisma.triage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends triageCreateManyArgs>(args?: SelectSubset<T, triageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triages and returns the data saved in the database.
     * @param {triageCreateManyAndReturnArgs} args - Arguments to create many Triages.
     * @example
     * // Create many Triages
     * const triage = await prisma.triage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triages and only return the `id`
     * const triageWithIdOnly = await prisma.triage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends triageCreateManyAndReturnArgs>(args?: SelectSubset<T, triageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Triage.
     * @param {triageDeleteArgs} args - Arguments to delete one Triage.
     * @example
     * // Delete one Triage
     * const Triage = await prisma.triage.delete({
     *   where: {
     *     // ... filter to delete one Triage
     *   }
     * })
     * 
     */
    delete<T extends triageDeleteArgs>(args: SelectSubset<T, triageDeleteArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Triage.
     * @param {triageUpdateArgs} args - Arguments to update one Triage.
     * @example
     * // Update one Triage
     * const triage = await prisma.triage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends triageUpdateArgs>(args: SelectSubset<T, triageUpdateArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Triages.
     * @param {triageDeleteManyArgs} args - Arguments to filter Triages to delete.
     * @example
     * // Delete a few Triages
     * const { count } = await prisma.triage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends triageDeleteManyArgs>(args?: SelectSubset<T, triageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triages
     * const triage = await prisma.triage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends triageUpdateManyArgs>(args: SelectSubset<T, triageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Triage.
     * @param {triageUpsertArgs} args - Arguments to update or create a Triage.
     * @example
     * // Update or create a Triage
     * const triage = await prisma.triage.upsert({
     *   create: {
     *     // ... data to create a Triage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Triage we want to update
     *   }
     * })
     */
    upsert<T extends triageUpsertArgs>(args: SelectSubset<T, triageUpsertArgs<ExtArgs>>): Prisma__triageClient<$Result.GetResult<Prisma.$triagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Triages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triageCountArgs} args - Arguments to filter Triages to count.
     * @example
     * // Count the number of Triages
     * const count = await prisma.triage.count({
     *   where: {
     *     // ... the filter for the Triages we want to count
     *   }
     * })
    **/
    count<T extends triageCountArgs>(
      args?: Subset<T, triageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Triage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriageAggregateArgs>(args: Subset<T, TriageAggregateArgs>): Prisma.PrismaPromise<GetTriageAggregateType<T>>

    /**
     * Group by Triage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {triageGroupByArgs} args - Group by arguments.
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
      T extends triageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: triageGroupByArgs['orderBy'] }
        : { orderBy?: triageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, triageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the triage model
   */
  readonly fields: triageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for triage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__triageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the triage model
   */ 
  interface triageFieldRefs {
    readonly id: FieldRef<"triage", 'String'>
    readonly message: FieldRef<"triage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * triage findUnique
   */
  export type triageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * Filter, which triage to fetch.
     */
    where: triageWhereUniqueInput
  }

  /**
   * triage findUniqueOrThrow
   */
  export type triageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * Filter, which triage to fetch.
     */
    where: triageWhereUniqueInput
  }

  /**
   * triage findFirst
   */
  export type triageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * Filter, which triage to fetch.
     */
    where?: triageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triages to fetch.
     */
    orderBy?: triageOrderByWithRelationInput | triageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for triages.
     */
    cursor?: triageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of triages.
     */
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * triage findFirstOrThrow
   */
  export type triageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * Filter, which triage to fetch.
     */
    where?: triageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triages to fetch.
     */
    orderBy?: triageOrderByWithRelationInput | triageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for triages.
     */
    cursor?: triageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of triages.
     */
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * triage findMany
   */
  export type triageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * Filter, which triages to fetch.
     */
    where?: triageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of triages to fetch.
     */
    orderBy?: triageOrderByWithRelationInput | triageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing triages.
     */
    cursor?: triageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` triages.
     */
    skip?: number
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * triage create
   */
  export type triageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * The data needed to create a triage.
     */
    data: XOR<triageCreateInput, triageUncheckedCreateInput>
  }

  /**
   * triage createMany
   */
  export type triageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many triages.
     */
    data: triageCreateManyInput | triageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * triage createManyAndReturn
   */
  export type triageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many triages.
     */
    data: triageCreateManyInput | triageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * triage update
   */
  export type triageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * The data needed to update a triage.
     */
    data: XOR<triageUpdateInput, triageUncheckedUpdateInput>
    /**
     * Choose, which triage to update.
     */
    where: triageWhereUniqueInput
  }

  /**
   * triage updateMany
   */
  export type triageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update triages.
     */
    data: XOR<triageUpdateManyMutationInput, triageUncheckedUpdateManyInput>
    /**
     * Filter which triages to update
     */
    where?: triageWhereInput
  }

  /**
   * triage upsert
   */
  export type triageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * The filter to search for the triage to update in case it exists.
     */
    where: triageWhereUniqueInput
    /**
     * In case the triage found by the `where` argument doesn't exist, create a new triage with this data.
     */
    create: XOR<triageCreateInput, triageUncheckedCreateInput>
    /**
     * In case the triage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<triageUpdateInput, triageUncheckedUpdateInput>
  }

  /**
   * triage delete
   */
  export type triageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
    /**
     * Filter which triage to delete.
     */
    where: triageWhereUniqueInput
  }

  /**
   * triage deleteMany
   */
  export type triageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which triages to delete
     */
    where?: triageWhereInput
  }

  /**
   * triage without action
   */
  export type triageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the triage
     */
    select?: triageSelect<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    hospitalCode: 'hospitalCode'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    location: 'location',
    city: 'city',
    state: 'state',
    dbURL: 'dbURL'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    abhaId: 'abhaId',
    email: 'email',
    password: 'password',
    name: 'name',
    contact: 'contact',
    address: 'address',
    gender: 'gender',
    DOB: 'DOB',
    emergencyContact: 'emergencyContact'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    message: 'message',
    patientId: 'patientId'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const PatientBookingScalarFieldEnum: {
    id: 'id',
    abhaId: 'abhaId',
    hospitalCode: 'hospitalCode',
    date: 'date',
    time: 'time',
    status: 'status',
    reason: 'reason'
  };

  export type PatientBookingScalarFieldEnum = (typeof PatientBookingScalarFieldEnum)[keyof typeof PatientBookingScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    hospitalCode: 'hospitalCode',
    recordDate: 'recordDate',
    visitReason: 'visitReason',
    medicationsPrescribed: 'medicationsPrescribed',
    treatmentSummary: 'treatmentSummary',
    doctorName: 'doctorName',
    followUpInstructions: 'followUpInstructions',
    documents: 'documents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const ABHANumberScalarFieldEnum: {
    prev: 'prev'
  };

  export type ABHANumberScalarFieldEnum = (typeof ABHANumberScalarFieldEnum)[keyof typeof ABHANumberScalarFieldEnum]


  export const OTPVerificationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type OTPVerificationScalarFieldEnum = (typeof OTPVerificationScalarFieldEnum)[keyof typeof OTPVerificationScalarFieldEnum]


  export const BedRequestScalarFieldEnum: {
    id: 'id',
    hospitalCode: 'hospitalCode',
    patientAbhaId: 'patientAbhaId',
    patientName: 'patientName',
    patientAge: 'patientAge',
    patientGender: 'patientGender',
    reason: 'reason',
    patientContact: 'patientContact',
    wardName: 'wardName'
  };

  export type BedRequestScalarFieldEnum = (typeof BedRequestScalarFieldEnum)[keyof typeof BedRequestScalarFieldEnum]


  export const TriageScalarFieldEnum: {
    id: 'id',
    message: 'message'
  };

  export type TriageScalarFieldEnum = (typeof TriageScalarFieldEnum)[keyof typeof TriageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    hospitalCode?: StringFilter<"Admin"> | string
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hospitalCode?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    hospitalCode?: StringFilter<"Admin"> | string
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hospitalCode?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    hospitalCode?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: StringFilter<"Hospital"> | string
    code?: StringFilter<"Hospital"> | string
    name?: StringFilter<"Hospital"> | string
    location?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    state?: StringFilter<"Hospital"> | string
    dbURL?: StringFilter<"Hospital"> | string
    records?: MedicalRecordListRelationFilter
    admin?: AdminListRelationFilter
    patientBooking?: PatientBookingListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    dbURL?: SortOrder
    records?: MedicalRecordOrderByRelationAggregateInput
    admin?: AdminOrderByRelationAggregateInput
    patientBooking?: PatientBookingOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    location?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    state?: StringFilter<"Hospital"> | string
    dbURL?: StringFilter<"Hospital"> | string
    records?: MedicalRecordListRelationFilter
    admin?: AdminListRelationFilter
    patientBooking?: PatientBookingListRelationFilter
  }, "id" | "code">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    dbURL?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hospital"> | string
    code?: StringWithAggregatesFilter<"Hospital"> | string
    name?: StringWithAggregatesFilter<"Hospital"> | string
    location?: StringWithAggregatesFilter<"Hospital"> | string
    city?: StringWithAggregatesFilter<"Hospital"> | string
    state?: StringWithAggregatesFilter<"Hospital"> | string
    dbURL?: StringWithAggregatesFilter<"Hospital"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    abhaId?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    password?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    contact?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    gender?: StringFilter<"Patient"> | string
    DOB?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    history?: HistoryListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
    patientBooking?: PatientBookingListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    abhaId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    DOB?: SortOrder
    emergencyContact?: SortOrder
    history?: HistoryOrderByRelationAggregateInput
    medicalRecords?: MedicalRecordOrderByRelationAggregateInput
    patientBooking?: PatientBookingOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    abhaId?: string
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    password?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    contact?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    gender?: StringFilter<"Patient"> | string
    DOB?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    history?: HistoryListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
    patientBooking?: PatientBookingListRelationFilter
  }, "abhaId" | "abhaId" | "email">

  export type PatientOrderByWithAggregationInput = {
    abhaId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    DOB?: SortOrder
    emergencyContact?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    abhaId?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    password?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    contact?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    gender?: StringWithAggregatesFilter<"Patient"> | string
    DOB?: StringWithAggregatesFilter<"Patient"> | string
    emergencyContact?: StringWithAggregatesFilter<"Patient"> | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: StringFilter<"History"> | string
    message?: StringFilter<"History"> | string
    patientId?: StringFilter<"History"> | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    patientId?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    message?: StringFilter<"History"> | string
    patientId?: StringFilter<"History"> | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    patientId?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"History"> | string
    message?: StringWithAggregatesFilter<"History"> | string
    patientId?: StringWithAggregatesFilter<"History"> | string
  }

  export type PatientBookingWhereInput = {
    AND?: PatientBookingWhereInput | PatientBookingWhereInput[]
    OR?: PatientBookingWhereInput[]
    NOT?: PatientBookingWhereInput | PatientBookingWhereInput[]
    id?: IntFilter<"PatientBooking"> | number
    abhaId?: StringFilter<"PatientBooking"> | string
    hospitalCode?: StringFilter<"PatientBooking"> | string
    date?: StringFilter<"PatientBooking"> | string
    time?: StringFilter<"PatientBooking"> | string
    status?: StringFilter<"PatientBooking"> | string
    reason?: StringFilter<"PatientBooking"> | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }

  export type PatientBookingOrderByWithRelationInput = {
    id?: SortOrder
    abhaId?: SortOrder
    hospitalCode?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    patient?: PatientOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type PatientBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatientBookingWhereInput | PatientBookingWhereInput[]
    OR?: PatientBookingWhereInput[]
    NOT?: PatientBookingWhereInput | PatientBookingWhereInput[]
    abhaId?: StringFilter<"PatientBooking"> | string
    hospitalCode?: StringFilter<"PatientBooking"> | string
    date?: StringFilter<"PatientBooking"> | string
    time?: StringFilter<"PatientBooking"> | string
    status?: StringFilter<"PatientBooking"> | string
    reason?: StringFilter<"PatientBooking"> | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }, "id">

  export type PatientBookingOrderByWithAggregationInput = {
    id?: SortOrder
    abhaId?: SortOrder
    hospitalCode?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    _count?: PatientBookingCountOrderByAggregateInput
    _avg?: PatientBookingAvgOrderByAggregateInput
    _max?: PatientBookingMaxOrderByAggregateInput
    _min?: PatientBookingMinOrderByAggregateInput
    _sum?: PatientBookingSumOrderByAggregateInput
  }

  export type PatientBookingScalarWhereWithAggregatesInput = {
    AND?: PatientBookingScalarWhereWithAggregatesInput | PatientBookingScalarWhereWithAggregatesInput[]
    OR?: PatientBookingScalarWhereWithAggregatesInput[]
    NOT?: PatientBookingScalarWhereWithAggregatesInput | PatientBookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatientBooking"> | number
    abhaId?: StringWithAggregatesFilter<"PatientBooking"> | string
    hospitalCode?: StringWithAggregatesFilter<"PatientBooking"> | string
    date?: StringWithAggregatesFilter<"PatientBooking"> | string
    time?: StringWithAggregatesFilter<"PatientBooking"> | string
    status?: StringWithAggregatesFilter<"PatientBooking"> | string
    reason?: StringWithAggregatesFilter<"PatientBooking"> | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    patientId?: StringFilter<"MedicalRecord"> | string
    hospitalCode?: StringFilter<"MedicalRecord"> | string
    recordDate?: DateTimeFilter<"MedicalRecord"> | Date | string
    visitReason?: StringFilter<"MedicalRecord"> | string
    medicationsPrescribed?: JsonFilter<"MedicalRecord">
    treatmentSummary?: StringFilter<"MedicalRecord"> | string
    doctorName?: StringFilter<"MedicalRecord"> | string
    followUpInstructions?: StringNullableFilter<"MedicalRecord"> | string | null
    documents?: JsonNullableFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"MedicalRecord"> | Date | string | null
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    hospitalCode?: SortOrder
    recordDate?: SortOrder
    visitReason?: SortOrder
    medicationsPrescribed?: SortOrder
    treatmentSummary?: SortOrder
    doctorName?: SortOrder
    followUpInstructions?: SortOrderInput | SortOrder
    documents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    patientId?: StringFilter<"MedicalRecord"> | string
    hospitalCode?: StringFilter<"MedicalRecord"> | string
    recordDate?: DateTimeFilter<"MedicalRecord"> | Date | string
    visitReason?: StringFilter<"MedicalRecord"> | string
    medicationsPrescribed?: JsonFilter<"MedicalRecord">
    treatmentSummary?: StringFilter<"MedicalRecord"> | string
    doctorName?: StringFilter<"MedicalRecord"> | string
    followUpInstructions?: StringNullableFilter<"MedicalRecord"> | string | null
    documents?: JsonNullableFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"MedicalRecord"> | Date | string | null
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }, "id">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    hospitalCode?: SortOrder
    recordDate?: SortOrder
    visitReason?: SortOrder
    medicationsPrescribed?: SortOrder
    treatmentSummary?: SortOrder
    doctorName?: SortOrder
    followUpInstructions?: SortOrderInput | SortOrder
    documents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    patientId?: StringWithAggregatesFilter<"MedicalRecord"> | string
    hospitalCode?: StringWithAggregatesFilter<"MedicalRecord"> | string
    recordDate?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    visitReason?: StringWithAggregatesFilter<"MedicalRecord"> | string
    medicationsPrescribed?: JsonWithAggregatesFilter<"MedicalRecord">
    treatmentSummary?: StringWithAggregatesFilter<"MedicalRecord"> | string
    doctorName?: StringWithAggregatesFilter<"MedicalRecord"> | string
    followUpInstructions?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    documents?: JsonNullableWithAggregatesFilter<"MedicalRecord">
    createdAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"MedicalRecord"> | Date | string | null
  }

  export type ABHANumberWhereInput = {
    AND?: ABHANumberWhereInput | ABHANumberWhereInput[]
    OR?: ABHANumberWhereInput[]
    NOT?: ABHANumberWhereInput | ABHANumberWhereInput[]
    prev?: StringFilter<"ABHANumber"> | string
  }

  export type ABHANumberOrderByWithRelationInput = {
    prev?: SortOrder
  }

  export type ABHANumberWhereUniqueInput = Prisma.AtLeast<{
    prev?: string
    AND?: ABHANumberWhereInput | ABHANumberWhereInput[]
    OR?: ABHANumberWhereInput[]
    NOT?: ABHANumberWhereInput | ABHANumberWhereInput[]
  }, "prev">

  export type ABHANumberOrderByWithAggregationInput = {
    prev?: SortOrder
    _count?: ABHANumberCountOrderByAggregateInput
    _max?: ABHANumberMaxOrderByAggregateInput
    _min?: ABHANumberMinOrderByAggregateInput
  }

  export type ABHANumberScalarWhereWithAggregatesInput = {
    AND?: ABHANumberScalarWhereWithAggregatesInput | ABHANumberScalarWhereWithAggregatesInput[]
    OR?: ABHANumberScalarWhereWithAggregatesInput[]
    NOT?: ABHANumberScalarWhereWithAggregatesInput | ABHANumberScalarWhereWithAggregatesInput[]
    prev?: StringWithAggregatesFilter<"ABHANumber"> | string
  }

  export type OTPVerificationWhereInput = {
    AND?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    OR?: OTPVerificationWhereInput[]
    NOT?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    id?: StringFilter<"OTPVerification"> | string
    email?: StringFilter<"OTPVerification"> | string
    otp?: StringFilter<"OTPVerification"> | string
    createdAt?: DateTimeFilter<"OTPVerification"> | Date | string
    expiresAt?: DateTimeFilter<"OTPVerification"> | Date | string
  }

  export type OTPVerificationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OTPVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    OR?: OTPVerificationWhereInput[]
    NOT?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    otp?: StringFilter<"OTPVerification"> | string
    createdAt?: DateTimeFilter<"OTPVerification"> | Date | string
    expiresAt?: DateTimeFilter<"OTPVerification"> | Date | string
  }, "id" | "email">

  export type OTPVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: OTPVerificationCountOrderByAggregateInput
    _max?: OTPVerificationMaxOrderByAggregateInput
    _min?: OTPVerificationMinOrderByAggregateInput
  }

  export type OTPVerificationScalarWhereWithAggregatesInput = {
    AND?: OTPVerificationScalarWhereWithAggregatesInput | OTPVerificationScalarWhereWithAggregatesInput[]
    OR?: OTPVerificationScalarWhereWithAggregatesInput[]
    NOT?: OTPVerificationScalarWhereWithAggregatesInput | OTPVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTPVerification"> | string
    email?: StringWithAggregatesFilter<"OTPVerification"> | string
    otp?: StringWithAggregatesFilter<"OTPVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OTPVerification"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"OTPVerification"> | Date | string
  }

  export type BedRequestWhereInput = {
    AND?: BedRequestWhereInput | BedRequestWhereInput[]
    OR?: BedRequestWhereInput[]
    NOT?: BedRequestWhereInput | BedRequestWhereInput[]
    id?: StringFilter<"BedRequest"> | string
    hospitalCode?: StringFilter<"BedRequest"> | string
    patientAbhaId?: StringFilter<"BedRequest"> | string
    patientName?: StringFilter<"BedRequest"> | string
    patientAge?: IntFilter<"BedRequest"> | number
    patientGender?: StringFilter<"BedRequest"> | string
    reason?: StringFilter<"BedRequest"> | string
    patientContact?: StringFilter<"BedRequest"> | string
    wardName?: StringFilter<"BedRequest"> | string
  }

  export type BedRequestOrderByWithRelationInput = {
    id?: SortOrder
    hospitalCode?: SortOrder
    patientAbhaId?: SortOrder
    patientName?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    reason?: SortOrder
    patientContact?: SortOrder
    wardName?: SortOrder
  }

  export type BedRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientAbhaId?: string
    AND?: BedRequestWhereInput | BedRequestWhereInput[]
    OR?: BedRequestWhereInput[]
    NOT?: BedRequestWhereInput | BedRequestWhereInput[]
    hospitalCode?: StringFilter<"BedRequest"> | string
    patientName?: StringFilter<"BedRequest"> | string
    patientAge?: IntFilter<"BedRequest"> | number
    patientGender?: StringFilter<"BedRequest"> | string
    reason?: StringFilter<"BedRequest"> | string
    patientContact?: StringFilter<"BedRequest"> | string
    wardName?: StringFilter<"BedRequest"> | string
  }, "id" | "patientAbhaId">

  export type BedRequestOrderByWithAggregationInput = {
    id?: SortOrder
    hospitalCode?: SortOrder
    patientAbhaId?: SortOrder
    patientName?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    reason?: SortOrder
    patientContact?: SortOrder
    wardName?: SortOrder
    _count?: BedRequestCountOrderByAggregateInput
    _avg?: BedRequestAvgOrderByAggregateInput
    _max?: BedRequestMaxOrderByAggregateInput
    _min?: BedRequestMinOrderByAggregateInput
    _sum?: BedRequestSumOrderByAggregateInput
  }

  export type BedRequestScalarWhereWithAggregatesInput = {
    AND?: BedRequestScalarWhereWithAggregatesInput | BedRequestScalarWhereWithAggregatesInput[]
    OR?: BedRequestScalarWhereWithAggregatesInput[]
    NOT?: BedRequestScalarWhereWithAggregatesInput | BedRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BedRequest"> | string
    hospitalCode?: StringWithAggregatesFilter<"BedRequest"> | string
    patientAbhaId?: StringWithAggregatesFilter<"BedRequest"> | string
    patientName?: StringWithAggregatesFilter<"BedRequest"> | string
    patientAge?: IntWithAggregatesFilter<"BedRequest"> | number
    patientGender?: StringWithAggregatesFilter<"BedRequest"> | string
    reason?: StringWithAggregatesFilter<"BedRequest"> | string
    patientContact?: StringWithAggregatesFilter<"BedRequest"> | string
    wardName?: StringWithAggregatesFilter<"BedRequest"> | string
  }

  export type triageWhereInput = {
    AND?: triageWhereInput | triageWhereInput[]
    OR?: triageWhereInput[]
    NOT?: triageWhereInput | triageWhereInput[]
    id?: StringFilter<"triage"> | string
    message?: StringFilter<"triage"> | string
  }

  export type triageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type triageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: triageWhereInput | triageWhereInput[]
    OR?: triageWhereInput[]
    NOT?: triageWhereInput | triageWhereInput[]
    message?: StringFilter<"triage"> | string
  }, "id">

  export type triageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    _count?: triageCountOrderByAggregateInput
    _max?: triageMaxOrderByAggregateInput
    _min?: triageMinOrderByAggregateInput
  }

  export type triageScalarWhereWithAggregatesInput = {
    AND?: triageScalarWhereWithAggregatesInput | triageScalarWhereWithAggregatesInput[]
    OR?: triageScalarWhereWithAggregatesInput[]
    NOT?: triageScalarWhereWithAggregatesInput | triageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"triage"> | string
    message?: StringWithAggregatesFilter<"triage"> | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    name?: string
    password: string
    hospital?: HospitalCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    name?: string
    password: string
    hospitalCode?: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hospital?: HospitalUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    name?: string
    password: string
    hospitalCode?: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalCreateInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    records?: MedicalRecordCreateNestedManyWithoutHospitalInput
    admin?: AdminCreateNestedManyWithoutHospitalInput
    patientBooking?: PatientBookingCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutHospitalInput
    admin?: AdminUncheckedCreateNestedManyWithoutHospitalInput
    patientBooking?: PatientBookingUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUpdateManyWithoutHospitalNestedInput
    admin?: AdminUpdateManyWithoutHospitalNestedInput
    patientBooking?: PatientBookingUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUncheckedUpdateManyWithoutHospitalNestedInput
    admin?: AdminUncheckedUpdateManyWithoutHospitalNestedInput
    patientBooking?: PatientBookingUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
  }

  export type HospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    history?: HistoryCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    patientBooking?: PatientBookingCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    history?: HistoryUncheckedCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    patientBooking?: PatientBookingUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    history?: HistoryUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    patientBooking?: PatientBookingUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    history?: HistoryUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    patientBooking?: PatientBookingUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
  }

  export type PatientUpdateManyMutationInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUncheckedUpdateManyInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCreateInput = {
    id?: string
    message: string
    patient: PatientCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: string
    message: string
    patientId: string
  }

  export type HistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCreateManyInput = {
    id?: string
    message: string
    patientId: string
  }

  export type HistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientBookingCreateInput = {
    date: string
    time: string
    status?: string
    reason: string
    patient: PatientCreateNestedOneWithoutPatientBookingInput
    hospital: HospitalCreateNestedOneWithoutPatientBookingInput
  }

  export type PatientBookingUncheckedCreateInput = {
    id?: number
    abhaId: string
    hospitalCode: string
    date: string
    time: string
    status?: string
    reason: string
  }

  export type PatientBookingUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutPatientBookingNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutPatientBookingNestedInput
  }

  export type PatientBookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    abhaId?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PatientBookingCreateManyInput = {
    id?: number
    abhaId: string
    hospitalCode: string
    date: string
    time: string
    status?: string
    reason: string
  }

  export type PatientBookingUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PatientBookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    abhaId?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalRecordCreateInput = {
    id?: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
    hospital: HospitalCreateNestedOneWithoutRecordsInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: string
    patientId: string
    hospitalCode: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MedicalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordCreateManyInput = {
    id?: string
    patientId: string
    hospitalCode: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MedicalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ABHANumberCreateInput = {
    prev: string
  }

  export type ABHANumberUncheckedCreateInput = {
    prev: string
  }

  export type ABHANumberUpdateInput = {
    prev?: StringFieldUpdateOperationsInput | string
  }

  export type ABHANumberUncheckedUpdateInput = {
    prev?: StringFieldUpdateOperationsInput | string
  }

  export type ABHANumberCreateManyInput = {
    prev: string
  }

  export type ABHANumberUpdateManyMutationInput = {
    prev?: StringFieldUpdateOperationsInput | string
  }

  export type ABHANumberUncheckedUpdateManyInput = {
    prev?: StringFieldUpdateOperationsInput | string
  }

  export type OTPVerificationCreateInput = {
    id?: string
    email: string
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type OTPVerificationUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type OTPVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationCreateManyInput = {
    id?: string
    email: string
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type OTPVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedRequestCreateInput = {
    id?: string
    hospitalCode: string
    patientAbhaId: string
    patientName: string
    patientAge: number
    patientGender: string
    reason: string
    patientContact: string
    wardName: string
  }

  export type BedRequestUncheckedCreateInput = {
    id?: string
    hospitalCode: string
    patientAbhaId: string
    patientName: string
    patientAge: number
    patientGender: string
    reason: string
    patientContact: string
    wardName: string
  }

  export type BedRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    patientAbhaId?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientAge?: IntFieldUpdateOperationsInput | number
    patientGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    patientContact?: StringFieldUpdateOperationsInput | string
    wardName?: StringFieldUpdateOperationsInput | string
  }

  export type BedRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    patientAbhaId?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientAge?: IntFieldUpdateOperationsInput | number
    patientGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    patientContact?: StringFieldUpdateOperationsInput | string
    wardName?: StringFieldUpdateOperationsInput | string
  }

  export type BedRequestCreateManyInput = {
    id?: string
    hospitalCode: string
    patientAbhaId: string
    patientName: string
    patientAge: number
    patientGender: string
    reason: string
    patientContact: string
    wardName: string
  }

  export type BedRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    patientAbhaId?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientAge?: IntFieldUpdateOperationsInput | number
    patientGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    patientContact?: StringFieldUpdateOperationsInput | string
    wardName?: StringFieldUpdateOperationsInput | string
  }

  export type BedRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    patientAbhaId?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientAge?: IntFieldUpdateOperationsInput | number
    patientGender?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    patientContact?: StringFieldUpdateOperationsInput | string
    wardName?: StringFieldUpdateOperationsInput | string
  }

  export type triageCreateInput = {
    id?: string
    message: string
  }

  export type triageUncheckedCreateInput = {
    id?: string
    message: string
  }

  export type triageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type triageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type triageCreateManyInput = {
    id?: string
    message: string
  }

  export type triageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type triageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type HospitalRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hospitalCode?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hospitalCode?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hospitalCode?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MedicalRecordListRelationFilter = {
    every?: MedicalRecordWhereInput
    some?: MedicalRecordWhereInput
    none?: MedicalRecordWhereInput
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type PatientBookingListRelationFilter = {
    every?: PatientBookingWhereInput
    some?: PatientBookingWhereInput
    none?: PatientBookingWhereInput
  }

  export type MedicalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    dbURL?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    dbURL?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    dbURL?: SortOrder
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    abhaId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    DOB?: SortOrder
    emergencyContact?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    abhaId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    DOB?: SortOrder
    emergencyContact?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    abhaId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    DOB?: SortOrder
    emergencyContact?: SortOrder
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    patientId?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    patientId?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    patientId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PatientBookingCountOrderByAggregateInput = {
    id?: SortOrder
    abhaId?: SortOrder
    hospitalCode?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type PatientBookingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    abhaId?: SortOrder
    hospitalCode?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type PatientBookingMinOrderByAggregateInput = {
    id?: SortOrder
    abhaId?: SortOrder
    hospitalCode?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type PatientBookingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    hospitalCode?: SortOrder
    recordDate?: SortOrder
    visitReason?: SortOrder
    medicationsPrescribed?: SortOrder
    treatmentSummary?: SortOrder
    doctorName?: SortOrder
    followUpInstructions?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    hospitalCode?: SortOrder
    recordDate?: SortOrder
    visitReason?: SortOrder
    treatmentSummary?: SortOrder
    doctorName?: SortOrder
    followUpInstructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    hospitalCode?: SortOrder
    recordDate?: SortOrder
    visitReason?: SortOrder
    treatmentSummary?: SortOrder
    doctorName?: SortOrder
    followUpInstructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ABHANumberCountOrderByAggregateInput = {
    prev?: SortOrder
  }

  export type ABHANumberMaxOrderByAggregateInput = {
    prev?: SortOrder
  }

  export type ABHANumberMinOrderByAggregateInput = {
    prev?: SortOrder
  }

  export type OTPVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OTPVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OTPVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type BedRequestCountOrderByAggregateInput = {
    id?: SortOrder
    hospitalCode?: SortOrder
    patientAbhaId?: SortOrder
    patientName?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    reason?: SortOrder
    patientContact?: SortOrder
    wardName?: SortOrder
  }

  export type BedRequestAvgOrderByAggregateInput = {
    patientAge?: SortOrder
  }

  export type BedRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    hospitalCode?: SortOrder
    patientAbhaId?: SortOrder
    patientName?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    reason?: SortOrder
    patientContact?: SortOrder
    wardName?: SortOrder
  }

  export type BedRequestMinOrderByAggregateInput = {
    id?: SortOrder
    hospitalCode?: SortOrder
    patientAbhaId?: SortOrder
    patientName?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    reason?: SortOrder
    patientContact?: SortOrder
    wardName?: SortOrder
  }

  export type BedRequestSumOrderByAggregateInput = {
    patientAge?: SortOrder
  }

  export type triageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type triageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type triageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type HospitalCreateNestedOneWithoutAdminInput = {
    create?: XOR<HospitalCreateWithoutAdminInput, HospitalUncheckedCreateWithoutAdminInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutAdminInput
    connect?: HospitalWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type HospitalUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<HospitalCreateWithoutAdminInput, HospitalUncheckedCreateWithoutAdminInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutAdminInput
    upsert?: HospitalUpsertWithoutAdminInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutAdminInput, HospitalUpdateWithoutAdminInput>, HospitalUncheckedUpdateWithoutAdminInput>
  }

  export type MedicalRecordCreateNestedManyWithoutHospitalInput = {
    create?: XOR<MedicalRecordCreateWithoutHospitalInput, MedicalRecordUncheckedCreateWithoutHospitalInput> | MedicalRecordCreateWithoutHospitalInput[] | MedicalRecordUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutHospitalInput | MedicalRecordCreateOrConnectWithoutHospitalInput[]
    createMany?: MedicalRecordCreateManyHospitalInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type AdminCreateNestedManyWithoutHospitalInput = {
    create?: XOR<AdminCreateWithoutHospitalInput, AdminUncheckedCreateWithoutHospitalInput> | AdminCreateWithoutHospitalInput[] | AdminUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutHospitalInput | AdminCreateOrConnectWithoutHospitalInput[]
    createMany?: AdminCreateManyHospitalInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type PatientBookingCreateNestedManyWithoutHospitalInput = {
    create?: XOR<PatientBookingCreateWithoutHospitalInput, PatientBookingUncheckedCreateWithoutHospitalInput> | PatientBookingCreateWithoutHospitalInput[] | PatientBookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutHospitalInput | PatientBookingCreateOrConnectWithoutHospitalInput[]
    createMany?: PatientBookingCreateManyHospitalInputEnvelope
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<MedicalRecordCreateWithoutHospitalInput, MedicalRecordUncheckedCreateWithoutHospitalInput> | MedicalRecordCreateWithoutHospitalInput[] | MedicalRecordUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutHospitalInput | MedicalRecordCreateOrConnectWithoutHospitalInput[]
    createMany?: MedicalRecordCreateManyHospitalInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<AdminCreateWithoutHospitalInput, AdminUncheckedCreateWithoutHospitalInput> | AdminCreateWithoutHospitalInput[] | AdminUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutHospitalInput | AdminCreateOrConnectWithoutHospitalInput[]
    createMany?: AdminCreateManyHospitalInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type PatientBookingUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<PatientBookingCreateWithoutHospitalInput, PatientBookingUncheckedCreateWithoutHospitalInput> | PatientBookingCreateWithoutHospitalInput[] | PatientBookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutHospitalInput | PatientBookingCreateOrConnectWithoutHospitalInput[]
    createMany?: PatientBookingCreateManyHospitalInputEnvelope
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
  }

  export type MedicalRecordUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutHospitalInput, MedicalRecordUncheckedCreateWithoutHospitalInput> | MedicalRecordCreateWithoutHospitalInput[] | MedicalRecordUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutHospitalInput | MedicalRecordCreateOrConnectWithoutHospitalInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutHospitalInput | MedicalRecordUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: MedicalRecordCreateManyHospitalInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutHospitalInput | MedicalRecordUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutHospitalInput | MedicalRecordUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type AdminUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<AdminCreateWithoutHospitalInput, AdminUncheckedCreateWithoutHospitalInput> | AdminCreateWithoutHospitalInput[] | AdminUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutHospitalInput | AdminCreateOrConnectWithoutHospitalInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutHospitalInput | AdminUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: AdminCreateManyHospitalInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutHospitalInput | AdminUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutHospitalInput | AdminUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type PatientBookingUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<PatientBookingCreateWithoutHospitalInput, PatientBookingUncheckedCreateWithoutHospitalInput> | PatientBookingCreateWithoutHospitalInput[] | PatientBookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutHospitalInput | PatientBookingCreateOrConnectWithoutHospitalInput[]
    upsert?: PatientBookingUpsertWithWhereUniqueWithoutHospitalInput | PatientBookingUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: PatientBookingCreateManyHospitalInputEnvelope
    set?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    disconnect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    delete?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    update?: PatientBookingUpdateWithWhereUniqueWithoutHospitalInput | PatientBookingUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: PatientBookingUpdateManyWithWhereWithoutHospitalInput | PatientBookingUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: PatientBookingScalarWhereInput | PatientBookingScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutHospitalInput, MedicalRecordUncheckedCreateWithoutHospitalInput> | MedicalRecordCreateWithoutHospitalInput[] | MedicalRecordUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutHospitalInput | MedicalRecordCreateOrConnectWithoutHospitalInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutHospitalInput | MedicalRecordUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: MedicalRecordCreateManyHospitalInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutHospitalInput | MedicalRecordUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutHospitalInput | MedicalRecordUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<AdminCreateWithoutHospitalInput, AdminUncheckedCreateWithoutHospitalInput> | AdminCreateWithoutHospitalInput[] | AdminUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutHospitalInput | AdminCreateOrConnectWithoutHospitalInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutHospitalInput | AdminUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: AdminCreateManyHospitalInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutHospitalInput | AdminUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutHospitalInput | AdminUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type PatientBookingUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<PatientBookingCreateWithoutHospitalInput, PatientBookingUncheckedCreateWithoutHospitalInput> | PatientBookingCreateWithoutHospitalInput[] | PatientBookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutHospitalInput | PatientBookingCreateOrConnectWithoutHospitalInput[]
    upsert?: PatientBookingUpsertWithWhereUniqueWithoutHospitalInput | PatientBookingUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: PatientBookingCreateManyHospitalInputEnvelope
    set?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    disconnect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    delete?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    update?: PatientBookingUpdateWithWhereUniqueWithoutHospitalInput | PatientBookingUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: PatientBookingUpdateManyWithWhereWithoutHospitalInput | PatientBookingUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: PatientBookingScalarWhereInput | PatientBookingScalarWhereInput[]
  }

  export type HistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<HistoryCreateWithoutPatientInput, HistoryUncheckedCreateWithoutPatientInput> | HistoryCreateWithoutPatientInput[] | HistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPatientInput | HistoryCreateOrConnectWithoutPatientInput[]
    createMany?: HistoryCreateManyPatientInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PatientBookingCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientBookingCreateWithoutPatientInput, PatientBookingUncheckedCreateWithoutPatientInput> | PatientBookingCreateWithoutPatientInput[] | PatientBookingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutPatientInput | PatientBookingCreateOrConnectWithoutPatientInput[]
    createMany?: PatientBookingCreateManyPatientInputEnvelope
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<HistoryCreateWithoutPatientInput, HistoryUncheckedCreateWithoutPatientInput> | HistoryCreateWithoutPatientInput[] | HistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPatientInput | HistoryCreateOrConnectWithoutPatientInput[]
    createMany?: HistoryCreateManyPatientInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PatientBookingUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientBookingCreateWithoutPatientInput, PatientBookingUncheckedCreateWithoutPatientInput> | PatientBookingCreateWithoutPatientInput[] | PatientBookingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutPatientInput | PatientBookingCreateOrConnectWithoutPatientInput[]
    createMany?: PatientBookingCreateManyPatientInputEnvelope
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
  }

  export type HistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HistoryCreateWithoutPatientInput, HistoryUncheckedCreateWithoutPatientInput> | HistoryCreateWithoutPatientInput[] | HistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPatientInput | HistoryCreateOrConnectWithoutPatientInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutPatientInput | HistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HistoryCreateManyPatientInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutPatientInput | HistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutPatientInput | HistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type MedicalRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PatientBookingUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientBookingCreateWithoutPatientInput, PatientBookingUncheckedCreateWithoutPatientInput> | PatientBookingCreateWithoutPatientInput[] | PatientBookingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutPatientInput | PatientBookingCreateOrConnectWithoutPatientInput[]
    upsert?: PatientBookingUpsertWithWhereUniqueWithoutPatientInput | PatientBookingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientBookingCreateManyPatientInputEnvelope
    set?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    disconnect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    delete?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    update?: PatientBookingUpdateWithWhereUniqueWithoutPatientInput | PatientBookingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientBookingUpdateManyWithWhereWithoutPatientInput | PatientBookingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientBookingScalarWhereInput | PatientBookingScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HistoryCreateWithoutPatientInput, HistoryUncheckedCreateWithoutPatientInput> | HistoryCreateWithoutPatientInput[] | HistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPatientInput | HistoryCreateOrConnectWithoutPatientInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutPatientInput | HistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HistoryCreateManyPatientInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutPatientInput | HistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutPatientInput | HistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PatientBookingUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientBookingCreateWithoutPatientInput, PatientBookingUncheckedCreateWithoutPatientInput> | PatientBookingCreateWithoutPatientInput[] | PatientBookingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientBookingCreateOrConnectWithoutPatientInput | PatientBookingCreateOrConnectWithoutPatientInput[]
    upsert?: PatientBookingUpsertWithWhereUniqueWithoutPatientInput | PatientBookingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientBookingCreateManyPatientInputEnvelope
    set?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    disconnect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    delete?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    connect?: PatientBookingWhereUniqueInput | PatientBookingWhereUniqueInput[]
    update?: PatientBookingUpdateWithWhereUniqueWithoutPatientInput | PatientBookingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientBookingUpdateManyWithWhereWithoutPatientInput | PatientBookingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientBookingScalarWhereInput | PatientBookingScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutHistoryInput = {
    create?: XOR<PatientCreateWithoutHistoryInput, PatientUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHistoryInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<PatientCreateWithoutHistoryInput, PatientUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHistoryInput
    upsert?: PatientUpsertWithoutHistoryInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutHistoryInput, PatientUpdateWithoutHistoryInput>, PatientUncheckedUpdateWithoutHistoryInput>
  }

  export type PatientCreateNestedOneWithoutPatientBookingInput = {
    create?: XOR<PatientCreateWithoutPatientBookingInput, PatientUncheckedCreateWithoutPatientBookingInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientBookingInput
    connect?: PatientWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutPatientBookingInput = {
    create?: XOR<HospitalCreateWithoutPatientBookingInput, HospitalUncheckedCreateWithoutPatientBookingInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutPatientBookingInput
    connect?: HospitalWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutPatientBookingNestedInput = {
    create?: XOR<PatientCreateWithoutPatientBookingInput, PatientUncheckedCreateWithoutPatientBookingInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientBookingInput
    upsert?: PatientUpsertWithoutPatientBookingInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPatientBookingInput, PatientUpdateWithoutPatientBookingInput>, PatientUncheckedUpdateWithoutPatientBookingInput>
  }

  export type HospitalUpdateOneRequiredWithoutPatientBookingNestedInput = {
    create?: XOR<HospitalCreateWithoutPatientBookingInput, HospitalUncheckedCreateWithoutPatientBookingInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutPatientBookingInput
    upsert?: HospitalUpsertWithoutPatientBookingInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutPatientBookingInput, HospitalUpdateWithoutPatientBookingInput>, HospitalUncheckedUpdateWithoutPatientBookingInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordsInput
    connect?: PatientWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutRecordsInput = {
    create?: XOR<HospitalCreateWithoutRecordsInput, HospitalUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutRecordsInput
    connect?: HospitalWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordsInput
    upsert?: PatientUpsertWithoutMedicalRecordsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalRecordsInput, PatientUpdateWithoutMedicalRecordsInput>, PatientUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type HospitalUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<HospitalCreateWithoutRecordsInput, HospitalUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutRecordsInput
    upsert?: HospitalUpsertWithoutRecordsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutRecordsInput, HospitalUpdateWithoutRecordsInput>, HospitalUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type HospitalCreateWithoutAdminInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    records?: MedicalRecordCreateNestedManyWithoutHospitalInput
    patientBooking?: PatientBookingCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutAdminInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutHospitalInput
    patientBooking?: PatientBookingUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutAdminInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutAdminInput, HospitalUncheckedCreateWithoutAdminInput>
  }

  export type HospitalUpsertWithoutAdminInput = {
    update: XOR<HospitalUpdateWithoutAdminInput, HospitalUncheckedUpdateWithoutAdminInput>
    create: XOR<HospitalCreateWithoutAdminInput, HospitalUncheckedCreateWithoutAdminInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutAdminInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutAdminInput, HospitalUncheckedUpdateWithoutAdminInput>
  }

  export type HospitalUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUpdateManyWithoutHospitalNestedInput
    patientBooking?: PatientBookingUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUncheckedUpdateManyWithoutHospitalNestedInput
    patientBooking?: PatientBookingUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type MedicalRecordCreateWithoutHospitalInput = {
    id?: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
  }

  export type MedicalRecordUncheckedCreateWithoutHospitalInput = {
    id?: string
    patientId: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MedicalRecordCreateOrConnectWithoutHospitalInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutHospitalInput, MedicalRecordUncheckedCreateWithoutHospitalInput>
  }

  export type MedicalRecordCreateManyHospitalInputEnvelope = {
    data: MedicalRecordCreateManyHospitalInput | MedicalRecordCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutHospitalInput = {
    id?: string
    email: string
    name?: string
    password: string
  }

  export type AdminUncheckedCreateWithoutHospitalInput = {
    id?: string
    email: string
    name?: string
    password: string
  }

  export type AdminCreateOrConnectWithoutHospitalInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutHospitalInput, AdminUncheckedCreateWithoutHospitalInput>
  }

  export type AdminCreateManyHospitalInputEnvelope = {
    data: AdminCreateManyHospitalInput | AdminCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type PatientBookingCreateWithoutHospitalInput = {
    date: string
    time: string
    status?: string
    reason: string
    patient: PatientCreateNestedOneWithoutPatientBookingInput
  }

  export type PatientBookingUncheckedCreateWithoutHospitalInput = {
    id?: number
    abhaId: string
    date: string
    time: string
    status?: string
    reason: string
  }

  export type PatientBookingCreateOrConnectWithoutHospitalInput = {
    where: PatientBookingWhereUniqueInput
    create: XOR<PatientBookingCreateWithoutHospitalInput, PatientBookingUncheckedCreateWithoutHospitalInput>
  }

  export type PatientBookingCreateManyHospitalInputEnvelope = {
    data: PatientBookingCreateManyHospitalInput | PatientBookingCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutHospitalInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutHospitalInput, MedicalRecordUncheckedUpdateWithoutHospitalInput>
    create: XOR<MedicalRecordCreateWithoutHospitalInput, MedicalRecordUncheckedCreateWithoutHospitalInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutHospitalInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutHospitalInput, MedicalRecordUncheckedUpdateWithoutHospitalInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutHospitalInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutHospitalInput>
  }

  export type MedicalRecordScalarWhereInput = {
    AND?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    OR?: MedicalRecordScalarWhereInput[]
    NOT?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    patientId?: StringFilter<"MedicalRecord"> | string
    hospitalCode?: StringFilter<"MedicalRecord"> | string
    recordDate?: DateTimeFilter<"MedicalRecord"> | Date | string
    visitReason?: StringFilter<"MedicalRecord"> | string
    medicationsPrescribed?: JsonFilter<"MedicalRecord">
    treatmentSummary?: StringFilter<"MedicalRecord"> | string
    doctorName?: StringFilter<"MedicalRecord"> | string
    followUpInstructions?: StringNullableFilter<"MedicalRecord"> | string | null
    documents?: JsonNullableFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"MedicalRecord"> | Date | string | null
  }

  export type AdminUpsertWithWhereUniqueWithoutHospitalInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutHospitalInput, AdminUncheckedUpdateWithoutHospitalInput>
    create: XOR<AdminCreateWithoutHospitalInput, AdminUncheckedCreateWithoutHospitalInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutHospitalInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutHospitalInput, AdminUncheckedUpdateWithoutHospitalInput>
  }

  export type AdminUpdateManyWithWhereWithoutHospitalInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutHospitalInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    hospitalCode?: StringFilter<"Admin"> | string
  }

  export type PatientBookingUpsertWithWhereUniqueWithoutHospitalInput = {
    where: PatientBookingWhereUniqueInput
    update: XOR<PatientBookingUpdateWithoutHospitalInput, PatientBookingUncheckedUpdateWithoutHospitalInput>
    create: XOR<PatientBookingCreateWithoutHospitalInput, PatientBookingUncheckedCreateWithoutHospitalInput>
  }

  export type PatientBookingUpdateWithWhereUniqueWithoutHospitalInput = {
    where: PatientBookingWhereUniqueInput
    data: XOR<PatientBookingUpdateWithoutHospitalInput, PatientBookingUncheckedUpdateWithoutHospitalInput>
  }

  export type PatientBookingUpdateManyWithWhereWithoutHospitalInput = {
    where: PatientBookingScalarWhereInput
    data: XOR<PatientBookingUpdateManyMutationInput, PatientBookingUncheckedUpdateManyWithoutHospitalInput>
  }

  export type PatientBookingScalarWhereInput = {
    AND?: PatientBookingScalarWhereInput | PatientBookingScalarWhereInput[]
    OR?: PatientBookingScalarWhereInput[]
    NOT?: PatientBookingScalarWhereInput | PatientBookingScalarWhereInput[]
    id?: IntFilter<"PatientBooking"> | number
    abhaId?: StringFilter<"PatientBooking"> | string
    hospitalCode?: StringFilter<"PatientBooking"> | string
    date?: StringFilter<"PatientBooking"> | string
    time?: StringFilter<"PatientBooking"> | string
    status?: StringFilter<"PatientBooking"> | string
    reason?: StringFilter<"PatientBooking"> | string
  }

  export type HistoryCreateWithoutPatientInput = {
    id?: string
    message: string
  }

  export type HistoryUncheckedCreateWithoutPatientInput = {
    id?: string
    message: string
  }

  export type HistoryCreateOrConnectWithoutPatientInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutPatientInput, HistoryUncheckedCreateWithoutPatientInput>
  }

  export type HistoryCreateManyPatientInputEnvelope = {
    data: HistoryCreateManyPatientInput | HistoryCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutPatientInput = {
    id?: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    hospital: HospitalCreateNestedOneWithoutRecordsInput
  }

  export type MedicalRecordUncheckedCreateWithoutPatientInput = {
    id?: string
    hospitalCode: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MedicalRecordCreateOrConnectWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordCreateManyPatientInputEnvelope = {
    data: MedicalRecordCreateManyPatientInput | MedicalRecordCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PatientBookingCreateWithoutPatientInput = {
    date: string
    time: string
    status?: string
    reason: string
    hospital: HospitalCreateNestedOneWithoutPatientBookingInput
  }

  export type PatientBookingUncheckedCreateWithoutPatientInput = {
    id?: number
    hospitalCode: string
    date: string
    time: string
    status?: string
    reason: string
  }

  export type PatientBookingCreateOrConnectWithoutPatientInput = {
    where: PatientBookingWhereUniqueInput
    create: XOR<PatientBookingCreateWithoutPatientInput, PatientBookingUncheckedCreateWithoutPatientInput>
  }

  export type PatientBookingCreateManyPatientInputEnvelope = {
    data: PatientBookingCreateManyPatientInput | PatientBookingCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutPatientInput, HistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<HistoryCreateWithoutPatientInput, HistoryUncheckedCreateWithoutPatientInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutPatientInput, HistoryUncheckedUpdateWithoutPatientInput>
  }

  export type HistoryUpdateManyWithWhereWithoutPatientInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: StringFilter<"History"> | string
    message?: StringFilter<"History"> | string
    patientId?: StringFilter<"History"> | string
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientBookingUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientBookingWhereUniqueInput
    update: XOR<PatientBookingUpdateWithoutPatientInput, PatientBookingUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientBookingCreateWithoutPatientInput, PatientBookingUncheckedCreateWithoutPatientInput>
  }

  export type PatientBookingUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientBookingWhereUniqueInput
    data: XOR<PatientBookingUpdateWithoutPatientInput, PatientBookingUncheckedUpdateWithoutPatientInput>
  }

  export type PatientBookingUpdateManyWithWhereWithoutPatientInput = {
    where: PatientBookingScalarWhereInput
    data: XOR<PatientBookingUpdateManyMutationInput, PatientBookingUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientCreateWithoutHistoryInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    patientBooking?: PatientBookingCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutHistoryInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    patientBooking?: PatientBookingUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutHistoryInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutHistoryInput, PatientUncheckedCreateWithoutHistoryInput>
  }

  export type PatientUpsertWithoutHistoryInput = {
    update: XOR<PatientUpdateWithoutHistoryInput, PatientUncheckedUpdateWithoutHistoryInput>
    create: XOR<PatientCreateWithoutHistoryInput, PatientUncheckedCreateWithoutHistoryInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutHistoryInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutHistoryInput, PatientUncheckedUpdateWithoutHistoryInput>
  }

  export type PatientUpdateWithoutHistoryInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    patientBooking?: PatientBookingUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutHistoryInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    patientBooking?: PatientBookingUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutPatientBookingInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    history?: HistoryCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPatientBookingInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    history?: HistoryUncheckedCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPatientBookingInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPatientBookingInput, PatientUncheckedCreateWithoutPatientBookingInput>
  }

  export type HospitalCreateWithoutPatientBookingInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    records?: MedicalRecordCreateNestedManyWithoutHospitalInput
    admin?: AdminCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutPatientBookingInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutHospitalInput
    admin?: AdminUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutPatientBookingInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutPatientBookingInput, HospitalUncheckedCreateWithoutPatientBookingInput>
  }

  export type PatientUpsertWithoutPatientBookingInput = {
    update: XOR<PatientUpdateWithoutPatientBookingInput, PatientUncheckedUpdateWithoutPatientBookingInput>
    create: XOR<PatientCreateWithoutPatientBookingInput, PatientUncheckedCreateWithoutPatientBookingInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPatientBookingInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPatientBookingInput, PatientUncheckedUpdateWithoutPatientBookingInput>
  }

  export type PatientUpdateWithoutPatientBookingInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    history?: HistoryUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPatientBookingInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    history?: HistoryUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type HospitalUpsertWithoutPatientBookingInput = {
    update: XOR<HospitalUpdateWithoutPatientBookingInput, HospitalUncheckedUpdateWithoutPatientBookingInput>
    create: XOR<HospitalCreateWithoutPatientBookingInput, HospitalUncheckedCreateWithoutPatientBookingInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutPatientBookingInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutPatientBookingInput, HospitalUncheckedUpdateWithoutPatientBookingInput>
  }

  export type HospitalUpdateWithoutPatientBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUpdateManyWithoutHospitalNestedInput
    admin?: AdminUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutPatientBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUncheckedUpdateManyWithoutHospitalNestedInput
    admin?: AdminUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type PatientCreateWithoutMedicalRecordsInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    history?: HistoryCreateNestedManyWithoutPatientInput
    patientBooking?: PatientBookingCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalRecordsInput = {
    abhaId: string
    email: string
    password: string
    name: string
    contact: string
    address: string
    gender: string
    DOB: string
    emergencyContact: string
    history?: HistoryUncheckedCreateNestedManyWithoutPatientInput
    patientBooking?: PatientBookingUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalRecordsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type HospitalCreateWithoutRecordsInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    admin?: AdminCreateNestedManyWithoutHospitalInput
    patientBooking?: PatientBookingCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutRecordsInput = {
    id?: string
    code: string
    name: string
    location: string
    city: string
    state: string
    dbURL: string
    admin?: AdminUncheckedCreateNestedManyWithoutHospitalInput
    patientBooking?: PatientBookingUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutRecordsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutRecordsInput, HospitalUncheckedCreateWithoutRecordsInput>
  }

  export type PatientUpsertWithoutMedicalRecordsInput = {
    update: XOR<PatientUpdateWithoutMedicalRecordsInput, PatientUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalRecordsInput, PatientUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type PatientUpdateWithoutMedicalRecordsInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    history?: HistoryUpdateManyWithoutPatientNestedInput
    patientBooking?: PatientBookingUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalRecordsInput = {
    abhaId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    DOB?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    history?: HistoryUncheckedUpdateManyWithoutPatientNestedInput
    patientBooking?: PatientBookingUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type HospitalUpsertWithoutRecordsInput = {
    update: XOR<HospitalUpdateWithoutRecordsInput, HospitalUncheckedUpdateWithoutRecordsInput>
    create: XOR<HospitalCreateWithoutRecordsInput, HospitalUncheckedCreateWithoutRecordsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutRecordsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutRecordsInput, HospitalUncheckedUpdateWithoutRecordsInput>
  }

  export type HospitalUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateManyWithoutHospitalNestedInput
    patientBooking?: PatientBookingUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    dbURL?: StringFieldUpdateOperationsInput | string
    admin?: AdminUncheckedUpdateManyWithoutHospitalNestedInput
    patientBooking?: PatientBookingUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type MedicalRecordCreateManyHospitalInput = {
    id?: string
    patientId: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AdminCreateManyHospitalInput = {
    id?: string
    email: string
    name?: string
    password: string
  }

  export type PatientBookingCreateManyHospitalInput = {
    id?: number
    abhaId: string
    date: string
    time: string
    status?: string
    reason: string
  }

  export type MedicalRecordUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PatientBookingUpdateWithoutHospitalInput = {
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutPatientBookingNestedInput
  }

  export type PatientBookingUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    abhaId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PatientBookingUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    abhaId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCreateManyPatientInput = {
    id?: string
    message: string
  }

  export type MedicalRecordCreateManyPatientInput = {
    id?: string
    hospitalCode: string
    recordDate?: Date | string
    visitReason: string
    medicationsPrescribed: JsonNullValueInput | InputJsonValue
    treatmentSummary: string
    doctorName: string
    followUpInstructions?: string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PatientBookingCreateManyPatientInput = {
    id?: number
    hospitalCode: string
    date: string
    time: string
    status?: string
    reason: string
  }

  export type HistoryUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalRecordUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hospital?: HospitalUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalCode?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitReason?: StringFieldUpdateOperationsInput | string
    medicationsPrescribed?: JsonNullValueInput | InputJsonValue
    treatmentSummary?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    followUpInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientBookingUpdateWithoutPatientInput = {
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    hospital?: HospitalUpdateOneRequiredWithoutPatientBookingNestedInput
  }

  export type PatientBookingUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospitalCode?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PatientBookingUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospitalCode?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use HospitalCountOutputTypeDefaultArgs instead
     */
    export type HospitalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HospitalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientCountOutputTypeDefaultArgs instead
     */
    export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HospitalDefaultArgs instead
     */
    export type HospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HospitalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoryDefaultArgs instead
     */
    export type HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientBookingDefaultArgs instead
     */
    export type PatientBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientBookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalRecordDefaultArgs instead
     */
    export type MedicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ABHANumberDefaultArgs instead
     */
    export type ABHANumberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ABHANumberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTPVerificationDefaultArgs instead
     */
    export type OTPVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTPVerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BedRequestDefaultArgs instead
     */
    export type BedRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BedRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use triageDefaultArgs instead
     */
    export type triageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = triageDefaultArgs<ExtArgs>

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