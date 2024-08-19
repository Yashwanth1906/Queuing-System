
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
 * Model Doctors
 * 
 */
export type Doctors = $Result.DefaultSelection<Prisma.$DoctorsPayload>
/**
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model OPDQueue
 * 
 */
export type OPDQueue = $Result.DefaultSelection<Prisma.$OPDQueuePayload>
/**
 * Model Bed
 * 
 */
export type Bed = $Result.DefaultSelection<Prisma.$BedPayload>
/**
 * Model Ward
 * 
 */
export type Ward = $Result.DefaultSelection<Prisma.$WardPayload>
/**
 * Model PatientInstance
 * 
 */
export type PatientInstance = $Result.DefaultSelection<Prisma.$PatientInstancePayload>
/**
 * Model Admission
 * 
 */
export type Admission = $Result.DefaultSelection<Prisma.$AdmissionPayload>
/**
 * Model MainStore
 * 
 */
export type MainStore = $Result.DefaultSelection<Prisma.$MainStorePayload>
/**
 * Model SubStore
 * 
 */
export type SubStore = $Result.DefaultSelection<Prisma.$SubStorePayload>
/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DesignationType: {
  Trainee: 'Trainee',
  Assistant: 'Assistant',
  Senior: 'Senior',
  HeadOfDepartment: 'HeadOfDepartment'
};

export type DesignationType = (typeof DesignationType)[keyof typeof DesignationType]


export const QueueStatus: {
  Pending: 'Pending',
  Inprogress: 'Inprogress',
  Completed: 'Completed'
};

export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus]


export const BedStatus: {
  Available: 'Available',
  Occupied: 'Occupied',
  Under_Maintainence: 'Under_Maintainence'
};

export type BedStatus = (typeof BedStatus)[keyof typeof BedStatus]


export const VisitType: {
  FreshVisit: 'FreshVisit',
  Revisit: 'Revisit'
};

export type VisitType = (typeof VisitType)[keyof typeof VisitType]


export const InventoryCategory: {
  Medicine: 'Medicine',
  Surgical_Tools: 'Surgical_Tools',
  Others: 'Others'
};

export type InventoryCategory = (typeof InventoryCategory)[keyof typeof InventoryCategory]

}

export type DesignationType = $Enums.DesignationType

export const DesignationType: typeof $Enums.DesignationType

export type QueueStatus = $Enums.QueueStatus

export const QueueStatus: typeof $Enums.QueueStatus

export type BedStatus = $Enums.BedStatus

export const BedStatus: typeof $Enums.BedStatus

export type VisitType = $Enums.VisitType

export const VisitType: typeof $Enums.VisitType

export type InventoryCategory = $Enums.InventoryCategory

export const InventoryCategory: typeof $Enums.InventoryCategory

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Doctors
 * const doctors = await prisma.doctors.findMany()
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
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctors.findMany()
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
   * `prisma.doctors`: Exposes CRUD operations for the **Doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctors.findMany()
    * ```
    */
  get doctors(): Prisma.DoctorsDelegate<ExtArgs>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs>;

  /**
   * `prisma.oPDQueue`: Exposes CRUD operations for the **OPDQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OPDQueues
    * const oPDQueues = await prisma.oPDQueue.findMany()
    * ```
    */
  get oPDQueue(): Prisma.OPDQueueDelegate<ExtArgs>;

  /**
   * `prisma.bed`: Exposes CRUD operations for the **Bed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beds
    * const beds = await prisma.bed.findMany()
    * ```
    */
  get bed(): Prisma.BedDelegate<ExtArgs>;

  /**
   * `prisma.ward`: Exposes CRUD operations for the **Ward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wards
    * const wards = await prisma.ward.findMany()
    * ```
    */
  get ward(): Prisma.WardDelegate<ExtArgs>;

  /**
   * `prisma.patientInstance`: Exposes CRUD operations for the **PatientInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientInstances
    * const patientInstances = await prisma.patientInstance.findMany()
    * ```
    */
  get patientInstance(): Prisma.PatientInstanceDelegate<ExtArgs>;

  /**
   * `prisma.admission`: Exposes CRUD operations for the **Admission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admissions
    * const admissions = await prisma.admission.findMany()
    * ```
    */
  get admission(): Prisma.AdmissionDelegate<ExtArgs>;

  /**
   * `prisma.mainStore`: Exposes CRUD operations for the **MainStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainStores
    * const mainStores = await prisma.mainStore.findMany()
    * ```
    */
  get mainStore(): Prisma.MainStoreDelegate<ExtArgs>;

  /**
   * `prisma.subStore`: Exposes CRUD operations for the **SubStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubStores
    * const subStores = await prisma.subStore.findMany()
    * ```
    */
  get subStore(): Prisma.SubStoreDelegate<ExtArgs>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs>;
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
    Doctors: 'Doctors',
    Departments: 'Departments',
    OPDQueue: 'OPDQueue',
    Bed: 'Bed',
    Ward: 'Ward',
    PatientInstance: 'PatientInstance',
    Admission: 'Admission',
    MainStore: 'MainStore',
    SubStore: 'SubStore',
    Pharmacy: 'Pharmacy',
    Inventory: 'Inventory'
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
      modelProps: "doctors" | "departments" | "oPDQueue" | "bed" | "ward" | "patientInstance" | "admission" | "mainStore" | "subStore" | "pharmacy" | "inventory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Doctors: {
        payload: Prisma.$DoctorsPayload<ExtArgs>
        fields: Prisma.DoctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          findFirst: {
            args: Prisma.DoctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          findMany: {
            args: Prisma.DoctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>[]
          }
          create: {
            args: Prisma.DoctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          createMany: {
            args: Prisma.DoctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>[]
          }
          delete: {
            args: Prisma.DoctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          update: {
            args: Prisma.DoctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          deleteMany: {
            args: Prisma.DoctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctors>
          }
          groupBy: {
            args: Prisma.DoctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCountAggregateOutputType> | number
          }
        }
      }
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      OPDQueue: {
        payload: Prisma.$OPDQueuePayload<ExtArgs>
        fields: Prisma.OPDQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OPDQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OPDQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>
          }
          findFirst: {
            args: Prisma.OPDQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OPDQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>
          }
          findMany: {
            args: Prisma.OPDQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>[]
          }
          create: {
            args: Prisma.OPDQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>
          }
          createMany: {
            args: Prisma.OPDQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OPDQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>[]
          }
          delete: {
            args: Prisma.OPDQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>
          }
          update: {
            args: Prisma.OPDQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>
          }
          deleteMany: {
            args: Prisma.OPDQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OPDQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OPDQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDQueuePayload>
          }
          aggregate: {
            args: Prisma.OPDQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOPDQueue>
          }
          groupBy: {
            args: Prisma.OPDQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<OPDQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.OPDQueueCountArgs<ExtArgs>
            result: $Utils.Optional<OPDQueueCountAggregateOutputType> | number
          }
        }
      }
      Bed: {
        payload: Prisma.$BedPayload<ExtArgs>
        fields: Prisma.BedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          findFirst: {
            args: Prisma.BedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          findMany: {
            args: Prisma.BedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>[]
          }
          create: {
            args: Prisma.BedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          createMany: {
            args: Prisma.BedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>[]
          }
          delete: {
            args: Prisma.BedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          update: {
            args: Prisma.BedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          deleteMany: {
            args: Prisma.BedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          aggregate: {
            args: Prisma.BedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBed>
          }
          groupBy: {
            args: Prisma.BedGroupByArgs<ExtArgs>
            result: $Utils.Optional<BedGroupByOutputType>[]
          }
          count: {
            args: Prisma.BedCountArgs<ExtArgs>
            result: $Utils.Optional<BedCountAggregateOutputType> | number
          }
        }
      }
      Ward: {
        payload: Prisma.$WardPayload<ExtArgs>
        fields: Prisma.WardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          findFirst: {
            args: Prisma.WardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          findMany: {
            args: Prisma.WardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>[]
          }
          create: {
            args: Prisma.WardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          createMany: {
            args: Prisma.WardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>[]
          }
          delete: {
            args: Prisma.WardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          update: {
            args: Prisma.WardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          deleteMany: {
            args: Prisma.WardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          aggregate: {
            args: Prisma.WardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWard>
          }
          groupBy: {
            args: Prisma.WardGroupByArgs<ExtArgs>
            result: $Utils.Optional<WardGroupByOutputType>[]
          }
          count: {
            args: Prisma.WardCountArgs<ExtArgs>
            result: $Utils.Optional<WardCountAggregateOutputType> | number
          }
        }
      }
      PatientInstance: {
        payload: Prisma.$PatientInstancePayload<ExtArgs>
        fields: Prisma.PatientInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>
          }
          findFirst: {
            args: Prisma.PatientInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>
          }
          findMany: {
            args: Prisma.PatientInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>[]
          }
          create: {
            args: Prisma.PatientInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>
          }
          createMany: {
            args: Prisma.PatientInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>[]
          }
          delete: {
            args: Prisma.PatientInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>
          }
          update: {
            args: Prisma.PatientInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>
          }
          deleteMany: {
            args: Prisma.PatientInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInstancePayload>
          }
          aggregate: {
            args: Prisma.PatientInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientInstance>
          }
          groupBy: {
            args: Prisma.PatientInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<PatientInstanceCountAggregateOutputType> | number
          }
        }
      }
      Admission: {
        payload: Prisma.$AdmissionPayload<ExtArgs>
        fields: Prisma.AdmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findFirst: {
            args: Prisma.AdmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findMany: {
            args: Prisma.AdmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          create: {
            args: Prisma.AdmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          createMany: {
            args: Prisma.AdmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          delete: {
            args: Prisma.AdmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          update: {
            args: Prisma.AdmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          aggregate: {
            args: Prisma.AdmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmission>
          }
          groupBy: {
            args: Prisma.AdmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionCountAggregateOutputType> | number
          }
        }
      }
      MainStore: {
        payload: Prisma.$MainStorePayload<ExtArgs>
        fields: Prisma.MainStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>
          }
          findFirst: {
            args: Prisma.MainStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>
          }
          findMany: {
            args: Prisma.MainStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>[]
          }
          create: {
            args: Prisma.MainStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>
          }
          createMany: {
            args: Prisma.MainStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MainStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>[]
          }
          delete: {
            args: Prisma.MainStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>
          }
          update: {
            args: Prisma.MainStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>
          }
          deleteMany: {
            args: Prisma.MainStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MainStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainStorePayload>
          }
          aggregate: {
            args: Prisma.MainStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainStore>
          }
          groupBy: {
            args: Prisma.MainStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainStoreCountArgs<ExtArgs>
            result: $Utils.Optional<MainStoreCountAggregateOutputType> | number
          }
        }
      }
      SubStore: {
        payload: Prisma.$SubStorePayload<ExtArgs>
        fields: Prisma.SubStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>
          }
          findFirst: {
            args: Prisma.SubStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>
          }
          findMany: {
            args: Prisma.SubStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>[]
          }
          create: {
            args: Prisma.SubStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>
          }
          createMany: {
            args: Prisma.SubStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>[]
          }
          delete: {
            args: Prisma.SubStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>
          }
          update: {
            args: Prisma.SubStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>
          }
          deleteMany: {
            args: Prisma.SubStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubStorePayload>
          }
          aggregate: {
            args: Prisma.SubStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubStore>
          }
          groupBy: {
            args: Prisma.SubStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubStoreCountArgs<ExtArgs>
            result: $Utils.Optional<SubStoreCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
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
   * Count Type DoctorsCountOutputType
   */

  export type DoctorsCountOutputType = {
    opdQueue: number
    admissions: number
    patientInstances: number
  }

  export type DoctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opdQueue?: boolean | DoctorsCountOutputTypeCountOpdQueueArgs
    admissions?: boolean | DoctorsCountOutputTypeCountAdmissionsArgs
    patientInstances?: boolean | DoctorsCountOutputTypeCountPatientInstancesArgs
  }

  // Custom InputTypes
  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsCountOutputType
     */
    select?: DoctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountOpdQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPDQueueWhereInput
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountPatientInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientInstanceWhereInput
  }


  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    doctors: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | DepartmentsCountOutputTypeCountDoctorsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsWhereInput
  }


  /**
   * Count Type BedCountOutputType
   */

  export type BedCountOutputType = {
    admissions: number
  }

  export type BedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | BedCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * BedCountOutputType without action
   */
  export type BedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedCountOutputType
     */
    select?: BedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BedCountOutputType without action
   */
  export type BedCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }


  /**
   * Count Type WardCountOutputType
   */

  export type WardCountOutputType = {
    beds: number
    admissions: number
  }

  export type WardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beds?: boolean | WardCountOutputTypeCountBedsArgs
    admissions?: boolean | WardCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * WardCountOutputType without action
   */
  export type WardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardCountOutputType
     */
    select?: WardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WardCountOutputType without action
   */
  export type WardCountOutputTypeCountBedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BedWhereInput
  }

  /**
   * WardCountOutputType without action
   */
  export type WardCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }


  /**
   * Count Type PatientInstanceCountOutputType
   */

  export type PatientInstanceCountOutputType = {
    opqueue: number
    admission: number
  }

  export type PatientInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opqueue?: boolean | PatientInstanceCountOutputTypeCountOpqueueArgs
    admission?: boolean | PatientInstanceCountOutputTypeCountAdmissionArgs
  }

  // Custom InputTypes
  /**
   * PatientInstanceCountOutputType without action
   */
  export type PatientInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstanceCountOutputType
     */
    select?: PatientInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientInstanceCountOutputType without action
   */
  export type PatientInstanceCountOutputTypeCountOpqueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPDQueueWhereInput
  }

  /**
   * PatientInstanceCountOutputType without action
   */
  export type PatientInstanceCountOutputTypeCountAdmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }


  /**
   * Count Type MainStoreCountOutputType
   */

  export type MainStoreCountOutputType = {
    inventory: number
    subStores: number
  }

  export type MainStoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | MainStoreCountOutputTypeCountInventoryArgs
    subStores?: boolean | MainStoreCountOutputTypeCountSubStoresArgs
  }

  // Custom InputTypes
  /**
   * MainStoreCountOutputType without action
   */
  export type MainStoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStoreCountOutputType
     */
    select?: MainStoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MainStoreCountOutputType without action
   */
  export type MainStoreCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * MainStoreCountOutputType without action
   */
  export type MainStoreCountOutputTypeCountSubStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubStoreWhereInput
  }


  /**
   * Count Type SubStoreCountOutputType
   */

  export type SubStoreCountOutputType = {
    inventory: number
    pharmacies: number
  }

  export type SubStoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | SubStoreCountOutputTypeCountInventoryArgs
    pharmacies?: boolean | SubStoreCountOutputTypeCountPharmaciesArgs
  }

  // Custom InputTypes
  /**
   * SubStoreCountOutputType without action
   */
  export type SubStoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStoreCountOutputType
     */
    select?: SubStoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubStoreCountOutputType without action
   */
  export type SubStoreCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * SubStoreCountOutputType without action
   */
  export type SubStoreCountOutputTypeCountPharmaciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
  }


  /**
   * Count Type PharmacyCountOutputType
   */

  export type PharmacyCountOutputType = {
    inventory: number
  }

  export type PharmacyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | PharmacyCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyCountOutputType
     */
    select?: PharmacyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Doctors
   */

  export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  export type DoctorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: string | null
    designation: $Enums.DesignationType | null
    contact: string | null
    email: string | null
    password: string | null
    active: boolean | null
    departmentId: string | null
  }

  export type DoctorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: string | null
    designation: $Enums.DesignationType | null
    contact: string | null
    email: string | null
    password: string | null
    active: boolean | null
    departmentId: string | null
  }

  export type DoctorsCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    designation: number
    contact: number
    email: number
    password: number
    active: number
    departmentId: number
    _all: number
  }


  export type DoctorsMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    designation?: true
    contact?: true
    email?: true
    password?: true
    active?: true
    departmentId?: true
  }

  export type DoctorsMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    designation?: true
    contact?: true
    email?: true
    password?: true
    active?: true
    departmentId?: true
  }

  export type DoctorsCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    designation?: true
    contact?: true
    email?: true
    password?: true
    active?: true
    departmentId?: true
    _all?: true
  }

  export type DoctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to aggregate.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsMaxAggregateInputType
  }

  export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctors[P]>
      : GetScalarType<T[P], AggregateDoctors[P]>
  }




  export type DoctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsWhereInput
    orderBy?: DoctorsOrderByWithAggregationInput | DoctorsOrderByWithAggregationInput[]
    by: DoctorsScalarFieldEnum[] | DoctorsScalarFieldEnum
    having?: DoctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCountAggregateInputType | true
    _min?: DoctorsMinAggregateInputType
    _max?: DoctorsMaxAggregateInputType
  }

  export type DoctorsGroupByOutputType = {
    id: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    departmentId: string
    _count: DoctorsCountAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  type GetDoctorsGroupByPayload<T extends DoctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
        }
      >
    >


  export type DoctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    designation?: boolean
    contact?: boolean
    email?: boolean
    password?: boolean
    active?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    opdQueue?: boolean | Doctors$opdQueueArgs<ExtArgs>
    admissions?: boolean | Doctors$admissionsArgs<ExtArgs>
    patientInstances?: boolean | Doctors$patientInstancesArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type DoctorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    designation?: boolean
    contact?: boolean
    email?: boolean
    password?: boolean
    active?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type DoctorsSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    designation?: boolean
    contact?: boolean
    email?: boolean
    password?: boolean
    active?: boolean
    departmentId?: boolean
  }

  export type DoctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    opdQueue?: boolean | Doctors$opdQueueArgs<ExtArgs>
    admissions?: boolean | Doctors$admissionsArgs<ExtArgs>
    patientInstances?: boolean | Doctors$patientInstancesArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }

  export type $DoctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctors"
    objects: {
      department: Prisma.$DepartmentsPayload<ExtArgs>
      opdQueue: Prisma.$OPDQueuePayload<ExtArgs>[]
      admissions: Prisma.$AdmissionPayload<ExtArgs>[]
      patientInstances: Prisma.$PatientInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gender: string
      designation: $Enums.DesignationType
      contact: string
      email: string
      password: string
      active: boolean
      departmentId: string
    }, ExtArgs["result"]["doctors"]>
    composites: {}
  }

  type DoctorsGetPayload<S extends boolean | null | undefined | DoctorsDefaultArgs> = $Result.GetResult<Prisma.$DoctorsPayload, S>

  type DoctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoctorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorsCountAggregateInputType | true
    }

  export interface DoctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctors'], meta: { name: 'Doctors' } }
    /**
     * Find zero or one Doctors that matches the filter.
     * @param {DoctorsFindUniqueArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorsFindUniqueArgs>(args: SelectSubset<T, DoctorsFindUniqueArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Doctors that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DoctorsFindUniqueOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindFirstArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorsFindFirstArgs>(args?: SelectSubset<T, DoctorsFindFirstArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindFirstOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctors.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorsWithIdOnly = await prisma.doctors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorsFindManyArgs>(args?: SelectSubset<T, DoctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Doctors.
     * @param {DoctorsCreateArgs} args - Arguments to create a Doctors.
     * @example
     * // Create one Doctors
     * const Doctors = await prisma.doctors.create({
     *   data: {
     *     // ... data to create a Doctors
     *   }
     * })
     * 
     */
    create<T extends DoctorsCreateArgs>(args: SelectSubset<T, DoctorsCreateArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Doctors.
     * @param {DoctorsCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorsCreateManyArgs>(args?: SelectSubset<T, DoctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorsCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorsWithIdOnly = await prisma.doctors.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorsCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Doctors.
     * @param {DoctorsDeleteArgs} args - Arguments to delete one Doctors.
     * @example
     * // Delete one Doctors
     * const Doctors = await prisma.doctors.delete({
     *   where: {
     *     // ... filter to delete one Doctors
     *   }
     * })
     * 
     */
    delete<T extends DoctorsDeleteArgs>(args: SelectSubset<T, DoctorsDeleteArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Doctors.
     * @param {DoctorsUpdateArgs} args - Arguments to update one Doctors.
     * @example
     * // Update one Doctors
     * const doctors = await prisma.doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorsUpdateArgs>(args: SelectSubset<T, DoctorsUpdateArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorsDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorsDeleteManyArgs>(args?: SelectSubset<T, DoctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorsUpdateManyArgs>(args: SelectSubset<T, DoctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctors.
     * @param {DoctorsUpsertArgs} args - Arguments to update or create a Doctors.
     * @example
     * // Update or create a Doctors
     * const doctors = await prisma.doctors.upsert({
     *   create: {
     *     // ... data to create a Doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctors we want to update
     *   }
     * })
     */
    upsert<T extends DoctorsUpsertArgs>(args: SelectSubset<T, DoctorsUpsertArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctors.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorsCountArgs>(
      args?: Subset<T, DoctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorsAggregateArgs>(args: Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>

    /**
     * Group by Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsGroupByArgs} args - Group by arguments.
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
      T extends DoctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorsGroupByArgs['orderBy'] }
        : { orderBy?: DoctorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctors model
   */
  readonly fields: DoctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    opdQueue<T extends Doctors$opdQueueArgs<ExtArgs> = {}>(args?: Subset<T, Doctors$opdQueueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findMany"> | Null>
    admissions<T extends Doctors$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, Doctors$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany"> | Null>
    patientInstances<T extends Doctors$patientInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Doctors$patientInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Doctors model
   */ 
  interface DoctorsFieldRefs {
    readonly id: FieldRef<"Doctors", 'String'>
    readonly name: FieldRef<"Doctors", 'String'>
    readonly gender: FieldRef<"Doctors", 'String'>
    readonly designation: FieldRef<"Doctors", 'DesignationType'>
    readonly contact: FieldRef<"Doctors", 'String'>
    readonly email: FieldRef<"Doctors", 'String'>
    readonly password: FieldRef<"Doctors", 'String'>
    readonly active: FieldRef<"Doctors", 'Boolean'>
    readonly departmentId: FieldRef<"Doctors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctors findUnique
   */
  export type DoctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors findUniqueOrThrow
   */
  export type DoctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors findFirst
   */
  export type DoctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors findFirstOrThrow
   */
  export type DoctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors findMany
   */
  export type DoctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors create
   */
  export type DoctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctors.
     */
    data: XOR<DoctorsCreateInput, DoctorsUncheckedCreateInput>
  }

  /**
   * Doctors createMany
   */
  export type DoctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorsCreateManyInput | DoctorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctors createManyAndReturn
   */
  export type DoctorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorsCreateManyInput | DoctorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctors update
   */
  export type DoctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctors.
     */
    data: XOR<DoctorsUpdateInput, DoctorsUncheckedUpdateInput>
    /**
     * Choose, which Doctors to update.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors updateMany
   */
  export type DoctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorsUpdateManyMutationInput, DoctorsUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorsWhereInput
  }

  /**
   * Doctors upsert
   */
  export type DoctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctors to update in case it exists.
     */
    where: DoctorsWhereUniqueInput
    /**
     * In case the Doctors found by the `where` argument doesn't exist, create a new Doctors with this data.
     */
    create: XOR<DoctorsCreateInput, DoctorsUncheckedCreateInput>
    /**
     * In case the Doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorsUpdateInput, DoctorsUncheckedUpdateInput>
  }

  /**
   * Doctors delete
   */
  export type DoctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter which Doctors to delete.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors deleteMany
   */
  export type DoctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorsWhereInput
  }

  /**
   * Doctors.opdQueue
   */
  export type Doctors$opdQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    where?: OPDQueueWhereInput
    orderBy?: OPDQueueOrderByWithRelationInput | OPDQueueOrderByWithRelationInput[]
    cursor?: OPDQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OPDQueueScalarFieldEnum | OPDQueueScalarFieldEnum[]
  }

  /**
   * Doctors.admissions
   */
  export type Doctors$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Doctors.patientInstances
   */
  export type Doctors$patientInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    where?: PatientInstanceWhereInput
    orderBy?: PatientInstanceOrderByWithRelationInput | PatientInstanceOrderByWithRelationInput[]
    cursor?: PatientInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientInstanceScalarFieldEnum | PatientInstanceScalarFieldEnum[]
  }

  /**
   * Doctors without action
   */
  export type DoctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
  }


  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    headOfDepartmentId: string | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    headOfDepartmentId: string | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    headOfDepartmentId: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    headOfDepartmentId?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    headOfDepartmentId?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    headOfDepartmentId?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: string
    name: string
    headOfDepartmentId: string
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    headOfDepartmentId?: boolean
    doctors?: boolean | Departments$doctorsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    headOfDepartmentId?: boolean
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    headOfDepartmentId?: boolean
  }

  export type DepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | Departments$doctorsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      doctors: Prisma.$DoctorsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      headOfDepartmentId: string
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentsFindUniqueArgs>(args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentsFindFirstArgs>(args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentsFindManyArgs>(args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends DepartmentsCreateArgs>(args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentsCreateManyArgs>(args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends DepartmentsDeleteArgs>(args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentsUpdateArgs>(args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentsDeleteManyArgs>(args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentsUpdateManyArgs>(args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentsUpsertArgs>(args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
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
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends Departments$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, Departments$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Departments model
   */ 
  interface DepartmentsFieldRefs {
    readonly id: FieldRef<"Departments", 'String'>
    readonly name: FieldRef<"Departments", 'String'>
    readonly headOfDepartmentId: FieldRef<"Departments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }

  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departments createManyAndReturn
   */
  export type DepartmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
  }

  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }

  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
  }

  /**
   * Departments.doctors
   */
  export type Departments$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    where?: DoctorsWhereInput
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    cursor?: DoctorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }


  /**
   * Model OPDQueue
   */

  export type AggregateOPDQueue = {
    _count: OPDQueueCountAggregateOutputType | null
    _avg: OPDQueueAvgAggregateOutputType | null
    _sum: OPDQueueSumAggregateOutputType | null
    _min: OPDQueueMinAggregateOutputType | null
    _max: OPDQueueMaxAggregateOutputType | null
  }

  export type OPDQueueAvgAggregateOutputType = {
    queueNumber: number | null
  }

  export type OPDQueueSumAggregateOutputType = {
    queueNumber: number | null
  }

  export type OPDQueueMinAggregateOutputType = {
    id: string | null
    patientInstanceId: string | null
    doctorId: string | null
    status: $Enums.QueueStatus | null
    queueNumber: number | null
    timeStamp: Date | null
  }

  export type OPDQueueMaxAggregateOutputType = {
    id: string | null
    patientInstanceId: string | null
    doctorId: string | null
    status: $Enums.QueueStatus | null
    queueNumber: number | null
    timeStamp: Date | null
  }

  export type OPDQueueCountAggregateOutputType = {
    id: number
    patientInstanceId: number
    doctorId: number
    status: number
    queueNumber: number
    timeStamp: number
    _all: number
  }


  export type OPDQueueAvgAggregateInputType = {
    queueNumber?: true
  }

  export type OPDQueueSumAggregateInputType = {
    queueNumber?: true
  }

  export type OPDQueueMinAggregateInputType = {
    id?: true
    patientInstanceId?: true
    doctorId?: true
    status?: true
    queueNumber?: true
    timeStamp?: true
  }

  export type OPDQueueMaxAggregateInputType = {
    id?: true
    patientInstanceId?: true
    doctorId?: true
    status?: true
    queueNumber?: true
    timeStamp?: true
  }

  export type OPDQueueCountAggregateInputType = {
    id?: true
    patientInstanceId?: true
    doctorId?: true
    status?: true
    queueNumber?: true
    timeStamp?: true
    _all?: true
  }

  export type OPDQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPDQueue to aggregate.
     */
    where?: OPDQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDQueues to fetch.
     */
    orderBy?: OPDQueueOrderByWithRelationInput | OPDQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OPDQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OPDQueues
    **/
    _count?: true | OPDQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OPDQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OPDQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OPDQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OPDQueueMaxAggregateInputType
  }

  export type GetOPDQueueAggregateType<T extends OPDQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateOPDQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOPDQueue[P]>
      : GetScalarType<T[P], AggregateOPDQueue[P]>
  }




  export type OPDQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPDQueueWhereInput
    orderBy?: OPDQueueOrderByWithAggregationInput | OPDQueueOrderByWithAggregationInput[]
    by: OPDQueueScalarFieldEnum[] | OPDQueueScalarFieldEnum
    having?: OPDQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OPDQueueCountAggregateInputType | true
    _avg?: OPDQueueAvgAggregateInputType
    _sum?: OPDQueueSumAggregateInputType
    _min?: OPDQueueMinAggregateInputType
    _max?: OPDQueueMaxAggregateInputType
  }

  export type OPDQueueGroupByOutputType = {
    id: string
    patientInstanceId: string
    doctorId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp: Date | null
    _count: OPDQueueCountAggregateOutputType | null
    _avg: OPDQueueAvgAggregateOutputType | null
    _sum: OPDQueueSumAggregateOutputType | null
    _min: OPDQueueMinAggregateOutputType | null
    _max: OPDQueueMaxAggregateOutputType | null
  }

  type GetOPDQueueGroupByPayload<T extends OPDQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OPDQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OPDQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OPDQueueGroupByOutputType[P]>
            : GetScalarType<T[P], OPDQueueGroupByOutputType[P]>
        }
      >
    >


  export type OPDQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientInstanceId?: boolean
    doctorId?: boolean
    status?: boolean
    queueNumber?: boolean
    timeStamp?: boolean
    patientInstance?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oPDQueue"]>

  export type OPDQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientInstanceId?: boolean
    doctorId?: boolean
    status?: boolean
    queueNumber?: boolean
    timeStamp?: boolean
    patientInstance?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oPDQueue"]>

  export type OPDQueueSelectScalar = {
    id?: boolean
    patientInstanceId?: boolean
    doctorId?: boolean
    status?: boolean
    queueNumber?: boolean
    timeStamp?: boolean
  }

  export type OPDQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientInstance?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }
  export type OPDQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientInstance?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }

  export type $OPDQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OPDQueue"
    objects: {
      patientInstance: Prisma.$PatientInstancePayload<ExtArgs>
      doctor: Prisma.$DoctorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientInstanceId: string
      doctorId: string
      status: $Enums.QueueStatus
      queueNumber: number
      timeStamp: Date | null
    }, ExtArgs["result"]["oPDQueue"]>
    composites: {}
  }

  type OPDQueueGetPayload<S extends boolean | null | undefined | OPDQueueDefaultArgs> = $Result.GetResult<Prisma.$OPDQueuePayload, S>

  type OPDQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OPDQueueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OPDQueueCountAggregateInputType | true
    }

  export interface OPDQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OPDQueue'], meta: { name: 'OPDQueue' } }
    /**
     * Find zero or one OPDQueue that matches the filter.
     * @param {OPDQueueFindUniqueArgs} args - Arguments to find a OPDQueue
     * @example
     * // Get one OPDQueue
     * const oPDQueue = await prisma.oPDQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OPDQueueFindUniqueArgs>(args: SelectSubset<T, OPDQueueFindUniqueArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OPDQueue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OPDQueueFindUniqueOrThrowArgs} args - Arguments to find a OPDQueue
     * @example
     * // Get one OPDQueue
     * const oPDQueue = await prisma.oPDQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OPDQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, OPDQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OPDQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueFindFirstArgs} args - Arguments to find a OPDQueue
     * @example
     * // Get one OPDQueue
     * const oPDQueue = await prisma.oPDQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OPDQueueFindFirstArgs>(args?: SelectSubset<T, OPDQueueFindFirstArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OPDQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueFindFirstOrThrowArgs} args - Arguments to find a OPDQueue
     * @example
     * // Get one OPDQueue
     * const oPDQueue = await prisma.oPDQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OPDQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, OPDQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OPDQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OPDQueues
     * const oPDQueues = await prisma.oPDQueue.findMany()
     * 
     * // Get first 10 OPDQueues
     * const oPDQueues = await prisma.oPDQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oPDQueueWithIdOnly = await prisma.oPDQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OPDQueueFindManyArgs>(args?: SelectSubset<T, OPDQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OPDQueue.
     * @param {OPDQueueCreateArgs} args - Arguments to create a OPDQueue.
     * @example
     * // Create one OPDQueue
     * const OPDQueue = await prisma.oPDQueue.create({
     *   data: {
     *     // ... data to create a OPDQueue
     *   }
     * })
     * 
     */
    create<T extends OPDQueueCreateArgs>(args: SelectSubset<T, OPDQueueCreateArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OPDQueues.
     * @param {OPDQueueCreateManyArgs} args - Arguments to create many OPDQueues.
     * @example
     * // Create many OPDQueues
     * const oPDQueue = await prisma.oPDQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OPDQueueCreateManyArgs>(args?: SelectSubset<T, OPDQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OPDQueues and returns the data saved in the database.
     * @param {OPDQueueCreateManyAndReturnArgs} args - Arguments to create many OPDQueues.
     * @example
     * // Create many OPDQueues
     * const oPDQueue = await prisma.oPDQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OPDQueues and only return the `id`
     * const oPDQueueWithIdOnly = await prisma.oPDQueue.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OPDQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, OPDQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OPDQueue.
     * @param {OPDQueueDeleteArgs} args - Arguments to delete one OPDQueue.
     * @example
     * // Delete one OPDQueue
     * const OPDQueue = await prisma.oPDQueue.delete({
     *   where: {
     *     // ... filter to delete one OPDQueue
     *   }
     * })
     * 
     */
    delete<T extends OPDQueueDeleteArgs>(args: SelectSubset<T, OPDQueueDeleteArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OPDQueue.
     * @param {OPDQueueUpdateArgs} args - Arguments to update one OPDQueue.
     * @example
     * // Update one OPDQueue
     * const oPDQueue = await prisma.oPDQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OPDQueueUpdateArgs>(args: SelectSubset<T, OPDQueueUpdateArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OPDQueues.
     * @param {OPDQueueDeleteManyArgs} args - Arguments to filter OPDQueues to delete.
     * @example
     * // Delete a few OPDQueues
     * const { count } = await prisma.oPDQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OPDQueueDeleteManyArgs>(args?: SelectSubset<T, OPDQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OPDQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OPDQueues
     * const oPDQueue = await prisma.oPDQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OPDQueueUpdateManyArgs>(args: SelectSubset<T, OPDQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OPDQueue.
     * @param {OPDQueueUpsertArgs} args - Arguments to update or create a OPDQueue.
     * @example
     * // Update or create a OPDQueue
     * const oPDQueue = await prisma.oPDQueue.upsert({
     *   create: {
     *     // ... data to create a OPDQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OPDQueue we want to update
     *   }
     * })
     */
    upsert<T extends OPDQueueUpsertArgs>(args: SelectSubset<T, OPDQueueUpsertArgs<ExtArgs>>): Prisma__OPDQueueClient<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OPDQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueCountArgs} args - Arguments to filter OPDQueues to count.
     * @example
     * // Count the number of OPDQueues
     * const count = await prisma.oPDQueue.count({
     *   where: {
     *     // ... the filter for the OPDQueues we want to count
     *   }
     * })
    **/
    count<T extends OPDQueueCountArgs>(
      args?: Subset<T, OPDQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OPDQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OPDQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OPDQueueAggregateArgs>(args: Subset<T, OPDQueueAggregateArgs>): Prisma.PrismaPromise<GetOPDQueueAggregateType<T>>

    /**
     * Group by OPDQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDQueueGroupByArgs} args - Group by arguments.
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
      T extends OPDQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OPDQueueGroupByArgs['orderBy'] }
        : { orderBy?: OPDQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OPDQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOPDQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OPDQueue model
   */
  readonly fields: OPDQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OPDQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OPDQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patientInstance<T extends PatientInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientInstanceDefaultArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    doctor<T extends DoctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorsDefaultArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OPDQueue model
   */ 
  interface OPDQueueFieldRefs {
    readonly id: FieldRef<"OPDQueue", 'String'>
    readonly patientInstanceId: FieldRef<"OPDQueue", 'String'>
    readonly doctorId: FieldRef<"OPDQueue", 'String'>
    readonly status: FieldRef<"OPDQueue", 'QueueStatus'>
    readonly queueNumber: FieldRef<"OPDQueue", 'Int'>
    readonly timeStamp: FieldRef<"OPDQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OPDQueue findUnique
   */
  export type OPDQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * Filter, which OPDQueue to fetch.
     */
    where: OPDQueueWhereUniqueInput
  }

  /**
   * OPDQueue findUniqueOrThrow
   */
  export type OPDQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * Filter, which OPDQueue to fetch.
     */
    where: OPDQueueWhereUniqueInput
  }

  /**
   * OPDQueue findFirst
   */
  export type OPDQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * Filter, which OPDQueue to fetch.
     */
    where?: OPDQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDQueues to fetch.
     */
    orderBy?: OPDQueueOrderByWithRelationInput | OPDQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPDQueues.
     */
    cursor?: OPDQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPDQueues.
     */
    distinct?: OPDQueueScalarFieldEnum | OPDQueueScalarFieldEnum[]
  }

  /**
   * OPDQueue findFirstOrThrow
   */
  export type OPDQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * Filter, which OPDQueue to fetch.
     */
    where?: OPDQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDQueues to fetch.
     */
    orderBy?: OPDQueueOrderByWithRelationInput | OPDQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPDQueues.
     */
    cursor?: OPDQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPDQueues.
     */
    distinct?: OPDQueueScalarFieldEnum | OPDQueueScalarFieldEnum[]
  }

  /**
   * OPDQueue findMany
   */
  export type OPDQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * Filter, which OPDQueues to fetch.
     */
    where?: OPDQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDQueues to fetch.
     */
    orderBy?: OPDQueueOrderByWithRelationInput | OPDQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OPDQueues.
     */
    cursor?: OPDQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDQueues.
     */
    skip?: number
    distinct?: OPDQueueScalarFieldEnum | OPDQueueScalarFieldEnum[]
  }

  /**
   * OPDQueue create
   */
  export type OPDQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a OPDQueue.
     */
    data: XOR<OPDQueueCreateInput, OPDQueueUncheckedCreateInput>
  }

  /**
   * OPDQueue createMany
   */
  export type OPDQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OPDQueues.
     */
    data: OPDQueueCreateManyInput | OPDQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OPDQueue createManyAndReturn
   */
  export type OPDQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OPDQueues.
     */
    data: OPDQueueCreateManyInput | OPDQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OPDQueue update
   */
  export type OPDQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a OPDQueue.
     */
    data: XOR<OPDQueueUpdateInput, OPDQueueUncheckedUpdateInput>
    /**
     * Choose, which OPDQueue to update.
     */
    where: OPDQueueWhereUniqueInput
  }

  /**
   * OPDQueue updateMany
   */
  export type OPDQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OPDQueues.
     */
    data: XOR<OPDQueueUpdateManyMutationInput, OPDQueueUncheckedUpdateManyInput>
    /**
     * Filter which OPDQueues to update
     */
    where?: OPDQueueWhereInput
  }

  /**
   * OPDQueue upsert
   */
  export type OPDQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the OPDQueue to update in case it exists.
     */
    where: OPDQueueWhereUniqueInput
    /**
     * In case the OPDQueue found by the `where` argument doesn't exist, create a new OPDQueue with this data.
     */
    create: XOR<OPDQueueCreateInput, OPDQueueUncheckedCreateInput>
    /**
     * In case the OPDQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OPDQueueUpdateInput, OPDQueueUncheckedUpdateInput>
  }

  /**
   * OPDQueue delete
   */
  export type OPDQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    /**
     * Filter which OPDQueue to delete.
     */
    where: OPDQueueWhereUniqueInput
  }

  /**
   * OPDQueue deleteMany
   */
  export type OPDQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPDQueues to delete
     */
    where?: OPDQueueWhereInput
  }

  /**
   * OPDQueue without action
   */
  export type OPDQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
  }


  /**
   * Model Bed
   */

  export type AggregateBed = {
    _count: BedCountAggregateOutputType | null
    _min: BedMinAggregateOutputType | null
    _max: BedMaxAggregateOutputType | null
  }

  export type BedMinAggregateOutputType = {
    id: string | null
    bedNumber: string | null
    wardId: string | null
    status: $Enums.BedStatus | null
  }

  export type BedMaxAggregateOutputType = {
    id: string | null
    bedNumber: string | null
    wardId: string | null
    status: $Enums.BedStatus | null
  }

  export type BedCountAggregateOutputType = {
    id: number
    bedNumber: number
    wardId: number
    status: number
    _all: number
  }


  export type BedMinAggregateInputType = {
    id?: true
    bedNumber?: true
    wardId?: true
    status?: true
  }

  export type BedMaxAggregateInputType = {
    id?: true
    bedNumber?: true
    wardId?: true
    status?: true
  }

  export type BedCountAggregateInputType = {
    id?: true
    bedNumber?: true
    wardId?: true
    status?: true
    _all?: true
  }

  export type BedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bed to aggregate.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beds
    **/
    _count?: true | BedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BedMaxAggregateInputType
  }

  export type GetBedAggregateType<T extends BedAggregateArgs> = {
        [P in keyof T & keyof AggregateBed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBed[P]>
      : GetScalarType<T[P], AggregateBed[P]>
  }




  export type BedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BedWhereInput
    orderBy?: BedOrderByWithAggregationInput | BedOrderByWithAggregationInput[]
    by: BedScalarFieldEnum[] | BedScalarFieldEnum
    having?: BedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BedCountAggregateInputType | true
    _min?: BedMinAggregateInputType
    _max?: BedMaxAggregateInputType
  }

  export type BedGroupByOutputType = {
    id: string
    bedNumber: string
    wardId: string
    status: $Enums.BedStatus
    _count: BedCountAggregateOutputType | null
    _min: BedMinAggregateOutputType | null
    _max: BedMaxAggregateOutputType | null
  }

  type GetBedGroupByPayload<T extends BedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BedGroupByOutputType[P]>
            : GetScalarType<T[P], BedGroupByOutputType[P]>
        }
      >
    >


  export type BedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bedNumber?: boolean
    wardId?: boolean
    status?: boolean
    ward?: boolean | WardDefaultArgs<ExtArgs>
    admissions?: boolean | Bed$admissionsArgs<ExtArgs>
    _count?: boolean | BedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bed"]>

  export type BedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bedNumber?: boolean
    wardId?: boolean
    status?: boolean
    ward?: boolean | WardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bed"]>

  export type BedSelectScalar = {
    id?: boolean
    bedNumber?: boolean
    wardId?: boolean
    status?: boolean
  }

  export type BedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ward?: boolean | WardDefaultArgs<ExtArgs>
    admissions?: boolean | Bed$admissionsArgs<ExtArgs>
    _count?: boolean | BedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ward?: boolean | WardDefaultArgs<ExtArgs>
  }

  export type $BedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bed"
    objects: {
      ward: Prisma.$WardPayload<ExtArgs>
      admissions: Prisma.$AdmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bedNumber: string
      wardId: string
      status: $Enums.BedStatus
    }, ExtArgs["result"]["bed"]>
    composites: {}
  }

  type BedGetPayload<S extends boolean | null | undefined | BedDefaultArgs> = $Result.GetResult<Prisma.$BedPayload, S>

  type BedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BedCountAggregateInputType | true
    }

  export interface BedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bed'], meta: { name: 'Bed' } }
    /**
     * Find zero or one Bed that matches the filter.
     * @param {BedFindUniqueArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BedFindUniqueArgs>(args: SelectSubset<T, BedFindUniqueArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bed that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BedFindUniqueOrThrowArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BedFindUniqueOrThrowArgs>(args: SelectSubset<T, BedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindFirstArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BedFindFirstArgs>(args?: SelectSubset<T, BedFindFirstArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindFirstOrThrowArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BedFindFirstOrThrowArgs>(args?: SelectSubset<T, BedFindFirstOrThrowArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Beds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beds
     * const beds = await prisma.bed.findMany()
     * 
     * // Get first 10 Beds
     * const beds = await prisma.bed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bedWithIdOnly = await prisma.bed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BedFindManyArgs>(args?: SelectSubset<T, BedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bed.
     * @param {BedCreateArgs} args - Arguments to create a Bed.
     * @example
     * // Create one Bed
     * const Bed = await prisma.bed.create({
     *   data: {
     *     // ... data to create a Bed
     *   }
     * })
     * 
     */
    create<T extends BedCreateArgs>(args: SelectSubset<T, BedCreateArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Beds.
     * @param {BedCreateManyArgs} args - Arguments to create many Beds.
     * @example
     * // Create many Beds
     * const bed = await prisma.bed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BedCreateManyArgs>(args?: SelectSubset<T, BedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beds and returns the data saved in the database.
     * @param {BedCreateManyAndReturnArgs} args - Arguments to create many Beds.
     * @example
     * // Create many Beds
     * const bed = await prisma.bed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beds and only return the `id`
     * const bedWithIdOnly = await prisma.bed.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BedCreateManyAndReturnArgs>(args?: SelectSubset<T, BedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bed.
     * @param {BedDeleteArgs} args - Arguments to delete one Bed.
     * @example
     * // Delete one Bed
     * const Bed = await prisma.bed.delete({
     *   where: {
     *     // ... filter to delete one Bed
     *   }
     * })
     * 
     */
    delete<T extends BedDeleteArgs>(args: SelectSubset<T, BedDeleteArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bed.
     * @param {BedUpdateArgs} args - Arguments to update one Bed.
     * @example
     * // Update one Bed
     * const bed = await prisma.bed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BedUpdateArgs>(args: SelectSubset<T, BedUpdateArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Beds.
     * @param {BedDeleteManyArgs} args - Arguments to filter Beds to delete.
     * @example
     * // Delete a few Beds
     * const { count } = await prisma.bed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BedDeleteManyArgs>(args?: SelectSubset<T, BedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beds
     * const bed = await prisma.bed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BedUpdateManyArgs>(args: SelectSubset<T, BedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bed.
     * @param {BedUpsertArgs} args - Arguments to update or create a Bed.
     * @example
     * // Update or create a Bed
     * const bed = await prisma.bed.upsert({
     *   create: {
     *     // ... data to create a Bed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bed we want to update
     *   }
     * })
     */
    upsert<T extends BedUpsertArgs>(args: SelectSubset<T, BedUpsertArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Beds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedCountArgs} args - Arguments to filter Beds to count.
     * @example
     * // Count the number of Beds
     * const count = await prisma.bed.count({
     *   where: {
     *     // ... the filter for the Beds we want to count
     *   }
     * })
    **/
    count<T extends BedCountArgs>(
      args?: Subset<T, BedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BedAggregateArgs>(args: Subset<T, BedAggregateArgs>): Prisma.PrismaPromise<GetBedAggregateType<T>>

    /**
     * Group by Bed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedGroupByArgs} args - Group by arguments.
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
      T extends BedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BedGroupByArgs['orderBy'] }
        : { orderBy?: BedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bed model
   */
  readonly fields: BedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ward<T extends WardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WardDefaultArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admissions<T extends Bed$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, Bed$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Bed model
   */ 
  interface BedFieldRefs {
    readonly id: FieldRef<"Bed", 'String'>
    readonly bedNumber: FieldRef<"Bed", 'String'>
    readonly wardId: FieldRef<"Bed", 'String'>
    readonly status: FieldRef<"Bed", 'BedStatus'>
  }
    

  // Custom InputTypes
  /**
   * Bed findUnique
   */
  export type BedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed findUniqueOrThrow
   */
  export type BedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed findFirst
   */
  export type BedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beds.
     */
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed findFirstOrThrow
   */
  export type BedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beds.
     */
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed findMany
   */
  export type BedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Beds to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed create
   */
  export type BedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The data needed to create a Bed.
     */
    data: XOR<BedCreateInput, BedUncheckedCreateInput>
  }

  /**
   * Bed createMany
   */
  export type BedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beds.
     */
    data: BedCreateManyInput | BedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bed createManyAndReturn
   */
  export type BedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Beds.
     */
    data: BedCreateManyInput | BedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bed update
   */
  export type BedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The data needed to update a Bed.
     */
    data: XOR<BedUpdateInput, BedUncheckedUpdateInput>
    /**
     * Choose, which Bed to update.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed updateMany
   */
  export type BedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beds.
     */
    data: XOR<BedUpdateManyMutationInput, BedUncheckedUpdateManyInput>
    /**
     * Filter which Beds to update
     */
    where?: BedWhereInput
  }

  /**
   * Bed upsert
   */
  export type BedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The filter to search for the Bed to update in case it exists.
     */
    where: BedWhereUniqueInput
    /**
     * In case the Bed found by the `where` argument doesn't exist, create a new Bed with this data.
     */
    create: XOR<BedCreateInput, BedUncheckedCreateInput>
    /**
     * In case the Bed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BedUpdateInput, BedUncheckedUpdateInput>
  }

  /**
   * Bed delete
   */
  export type BedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter which Bed to delete.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed deleteMany
   */
  export type BedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beds to delete
     */
    where?: BedWhereInput
  }

  /**
   * Bed.admissions
   */
  export type Bed$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Bed without action
   */
  export type BedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
  }


  /**
   * Model Ward
   */

  export type AggregateWard = {
    _count: WardCountAggregateOutputType | null
    _avg: WardAvgAggregateOutputType | null
    _sum: WardSumAggregateOutputType | null
    _min: WardMinAggregateOutputType | null
    _max: WardMaxAggregateOutputType | null
  }

  export type WardAvgAggregateOutputType = {
    totalBeds: number | null
    availableBeds: number | null
  }

  export type WardSumAggregateOutputType = {
    totalBeds: number | null
    availableBeds: number | null
  }

  export type WardMinAggregateOutputType = {
    id: string | null
    name: string | null
    totalBeds: number | null
    availableBeds: number | null
  }

  export type WardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    totalBeds: number | null
    availableBeds: number | null
  }

  export type WardCountAggregateOutputType = {
    id: number
    name: number
    totalBeds: number
    availableBeds: number
    _all: number
  }


  export type WardAvgAggregateInputType = {
    totalBeds?: true
    availableBeds?: true
  }

  export type WardSumAggregateInputType = {
    totalBeds?: true
    availableBeds?: true
  }

  export type WardMinAggregateInputType = {
    id?: true
    name?: true
    totalBeds?: true
    availableBeds?: true
  }

  export type WardMaxAggregateInputType = {
    id?: true
    name?: true
    totalBeds?: true
    availableBeds?: true
  }

  export type WardCountAggregateInputType = {
    id?: true
    name?: true
    totalBeds?: true
    availableBeds?: true
    _all?: true
  }

  export type WardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ward to aggregate.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wards
    **/
    _count?: true | WardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WardMaxAggregateInputType
  }

  export type GetWardAggregateType<T extends WardAggregateArgs> = {
        [P in keyof T & keyof AggregateWard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWard[P]>
      : GetScalarType<T[P], AggregateWard[P]>
  }




  export type WardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardWhereInput
    orderBy?: WardOrderByWithAggregationInput | WardOrderByWithAggregationInput[]
    by: WardScalarFieldEnum[] | WardScalarFieldEnum
    having?: WardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WardCountAggregateInputType | true
    _avg?: WardAvgAggregateInputType
    _sum?: WardSumAggregateInputType
    _min?: WardMinAggregateInputType
    _max?: WardMaxAggregateInputType
  }

  export type WardGroupByOutputType = {
    id: string
    name: string
    totalBeds: number
    availableBeds: number
    _count: WardCountAggregateOutputType | null
    _avg: WardAvgAggregateOutputType | null
    _sum: WardSumAggregateOutputType | null
    _min: WardMinAggregateOutputType | null
    _max: WardMaxAggregateOutputType | null
  }

  type GetWardGroupByPayload<T extends WardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WardGroupByOutputType[P]>
            : GetScalarType<T[P], WardGroupByOutputType[P]>
        }
      >
    >


  export type WardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalBeds?: boolean
    availableBeds?: boolean
    beds?: boolean | Ward$bedsArgs<ExtArgs>
    admissions?: boolean | Ward$admissionsArgs<ExtArgs>
    _count?: boolean | WardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ward"]>

  export type WardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalBeds?: boolean
    availableBeds?: boolean
  }, ExtArgs["result"]["ward"]>

  export type WardSelectScalar = {
    id?: boolean
    name?: boolean
    totalBeds?: boolean
    availableBeds?: boolean
  }

  export type WardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beds?: boolean | Ward$bedsArgs<ExtArgs>
    admissions?: boolean | Ward$admissionsArgs<ExtArgs>
    _count?: boolean | WardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ward"
    objects: {
      beds: Prisma.$BedPayload<ExtArgs>[]
      admissions: Prisma.$AdmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      totalBeds: number
      availableBeds: number
    }, ExtArgs["result"]["ward"]>
    composites: {}
  }

  type WardGetPayload<S extends boolean | null | undefined | WardDefaultArgs> = $Result.GetResult<Prisma.$WardPayload, S>

  type WardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WardCountAggregateInputType | true
    }

  export interface WardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ward'], meta: { name: 'Ward' } }
    /**
     * Find zero or one Ward that matches the filter.
     * @param {WardFindUniqueArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WardFindUniqueArgs>(args: SelectSubset<T, WardFindUniqueArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ward that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WardFindUniqueOrThrowArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WardFindUniqueOrThrowArgs>(args: SelectSubset<T, WardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardFindFirstArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WardFindFirstArgs>(args?: SelectSubset<T, WardFindFirstArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardFindFirstOrThrowArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WardFindFirstOrThrowArgs>(args?: SelectSubset<T, WardFindFirstOrThrowArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Wards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wards
     * const wards = await prisma.ward.findMany()
     * 
     * // Get first 10 Wards
     * const wards = await prisma.ward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wardWithIdOnly = await prisma.ward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WardFindManyArgs>(args?: SelectSubset<T, WardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ward.
     * @param {WardCreateArgs} args - Arguments to create a Ward.
     * @example
     * // Create one Ward
     * const Ward = await prisma.ward.create({
     *   data: {
     *     // ... data to create a Ward
     *   }
     * })
     * 
     */
    create<T extends WardCreateArgs>(args: SelectSubset<T, WardCreateArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Wards.
     * @param {WardCreateManyArgs} args - Arguments to create many Wards.
     * @example
     * // Create many Wards
     * const ward = await prisma.ward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WardCreateManyArgs>(args?: SelectSubset<T, WardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wards and returns the data saved in the database.
     * @param {WardCreateManyAndReturnArgs} args - Arguments to create many Wards.
     * @example
     * // Create many Wards
     * const ward = await prisma.ward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wards and only return the `id`
     * const wardWithIdOnly = await prisma.ward.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WardCreateManyAndReturnArgs>(args?: SelectSubset<T, WardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ward.
     * @param {WardDeleteArgs} args - Arguments to delete one Ward.
     * @example
     * // Delete one Ward
     * const Ward = await prisma.ward.delete({
     *   where: {
     *     // ... filter to delete one Ward
     *   }
     * })
     * 
     */
    delete<T extends WardDeleteArgs>(args: SelectSubset<T, WardDeleteArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ward.
     * @param {WardUpdateArgs} args - Arguments to update one Ward.
     * @example
     * // Update one Ward
     * const ward = await prisma.ward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WardUpdateArgs>(args: SelectSubset<T, WardUpdateArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Wards.
     * @param {WardDeleteManyArgs} args - Arguments to filter Wards to delete.
     * @example
     * // Delete a few Wards
     * const { count } = await prisma.ward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WardDeleteManyArgs>(args?: SelectSubset<T, WardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wards
     * const ward = await prisma.ward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WardUpdateManyArgs>(args: SelectSubset<T, WardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ward.
     * @param {WardUpsertArgs} args - Arguments to update or create a Ward.
     * @example
     * // Update or create a Ward
     * const ward = await prisma.ward.upsert({
     *   create: {
     *     // ... data to create a Ward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ward we want to update
     *   }
     * })
     */
    upsert<T extends WardUpsertArgs>(args: SelectSubset<T, WardUpsertArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Wards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardCountArgs} args - Arguments to filter Wards to count.
     * @example
     * // Count the number of Wards
     * const count = await prisma.ward.count({
     *   where: {
     *     // ... the filter for the Wards we want to count
     *   }
     * })
    **/
    count<T extends WardCountArgs>(
      args?: Subset<T, WardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WardAggregateArgs>(args: Subset<T, WardAggregateArgs>): Prisma.PrismaPromise<GetWardAggregateType<T>>

    /**
     * Group by Ward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardGroupByArgs} args - Group by arguments.
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
      T extends WardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WardGroupByArgs['orderBy'] }
        : { orderBy?: WardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ward model
   */
  readonly fields: WardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beds<T extends Ward$bedsArgs<ExtArgs> = {}>(args?: Subset<T, Ward$bedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findMany"> | Null>
    admissions<T extends Ward$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, Ward$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ward model
   */ 
  interface WardFieldRefs {
    readonly id: FieldRef<"Ward", 'String'>
    readonly name: FieldRef<"Ward", 'String'>
    readonly totalBeds: FieldRef<"Ward", 'Int'>
    readonly availableBeds: FieldRef<"Ward", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ward findUnique
   */
  export type WardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward findUniqueOrThrow
   */
  export type WardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward findFirst
   */
  export type WardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wards.
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wards.
     */
    distinct?: WardScalarFieldEnum | WardScalarFieldEnum[]
  }

  /**
   * Ward findFirstOrThrow
   */
  export type WardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wards.
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wards.
     */
    distinct?: WardScalarFieldEnum | WardScalarFieldEnum[]
  }

  /**
   * Ward findMany
   */
  export type WardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Wards to fetch.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wards.
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    distinct?: WardScalarFieldEnum | WardScalarFieldEnum[]
  }

  /**
   * Ward create
   */
  export type WardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * The data needed to create a Ward.
     */
    data: XOR<WardCreateInput, WardUncheckedCreateInput>
  }

  /**
   * Ward createMany
   */
  export type WardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wards.
     */
    data: WardCreateManyInput | WardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ward createManyAndReturn
   */
  export type WardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Wards.
     */
    data: WardCreateManyInput | WardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ward update
   */
  export type WardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * The data needed to update a Ward.
     */
    data: XOR<WardUpdateInput, WardUncheckedUpdateInput>
    /**
     * Choose, which Ward to update.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward updateMany
   */
  export type WardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wards.
     */
    data: XOR<WardUpdateManyMutationInput, WardUncheckedUpdateManyInput>
    /**
     * Filter which Wards to update
     */
    where?: WardWhereInput
  }

  /**
   * Ward upsert
   */
  export type WardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * The filter to search for the Ward to update in case it exists.
     */
    where: WardWhereUniqueInput
    /**
     * In case the Ward found by the `where` argument doesn't exist, create a new Ward with this data.
     */
    create: XOR<WardCreateInput, WardUncheckedCreateInput>
    /**
     * In case the Ward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WardUpdateInput, WardUncheckedUpdateInput>
  }

  /**
   * Ward delete
   */
  export type WardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter which Ward to delete.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward deleteMany
   */
  export type WardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wards to delete
     */
    where?: WardWhereInput
  }

  /**
   * Ward.beds
   */
  export type Ward$bedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    where?: BedWhereInput
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    cursor?: BedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Ward.admissions
   */
  export type Ward$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Ward without action
   */
  export type WardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
  }


  /**
   * Model PatientInstance
   */

  export type AggregatePatientInstance = {
    _count: PatientInstanceCountAggregateOutputType | null
    _avg: PatientInstanceAvgAggregateOutputType | null
    _sum: PatientInstanceSumAggregateOutputType | null
    _min: PatientInstanceMinAggregateOutputType | null
    _max: PatientInstanceMaxAggregateOutputType | null
  }

  export type PatientInstanceAvgAggregateOutputType = {
    queueNumber: number | null
  }

  export type PatientInstanceSumAggregateOutputType = {
    queueNumber: number | null
  }

  export type PatientInstanceMinAggregateOutputType = {
    id: string | null
    abhaId: string | null
    doctorId: string | null
    queueNumber: number | null
    feedback: string | null
    visitType: $Enums.VisitType | null
  }

  export type PatientInstanceMaxAggregateOutputType = {
    id: string | null
    abhaId: string | null
    doctorId: string | null
    queueNumber: number | null
    feedback: string | null
    visitType: $Enums.VisitType | null
  }

  export type PatientInstanceCountAggregateOutputType = {
    id: number
    abhaId: number
    doctorId: number
    queueNumber: number
    medications: number
    feedback: number
    visitType: number
    _all: number
  }


  export type PatientInstanceAvgAggregateInputType = {
    queueNumber?: true
  }

  export type PatientInstanceSumAggregateInputType = {
    queueNumber?: true
  }

  export type PatientInstanceMinAggregateInputType = {
    id?: true
    abhaId?: true
    doctorId?: true
    queueNumber?: true
    feedback?: true
    visitType?: true
  }

  export type PatientInstanceMaxAggregateInputType = {
    id?: true
    abhaId?: true
    doctorId?: true
    queueNumber?: true
    feedback?: true
    visitType?: true
  }

  export type PatientInstanceCountAggregateInputType = {
    id?: true
    abhaId?: true
    doctorId?: true
    queueNumber?: true
    medications?: true
    feedback?: true
    visitType?: true
    _all?: true
  }

  export type PatientInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientInstance to aggregate.
     */
    where?: PatientInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInstances to fetch.
     */
    orderBy?: PatientInstanceOrderByWithRelationInput | PatientInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientInstances
    **/
    _count?: true | PatientInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientInstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientInstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientInstanceMaxAggregateInputType
  }

  export type GetPatientInstanceAggregateType<T extends PatientInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientInstance[P]>
      : GetScalarType<T[P], AggregatePatientInstance[P]>
  }




  export type PatientInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientInstanceWhereInput
    orderBy?: PatientInstanceOrderByWithAggregationInput | PatientInstanceOrderByWithAggregationInput[]
    by: PatientInstanceScalarFieldEnum[] | PatientInstanceScalarFieldEnum
    having?: PatientInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientInstanceCountAggregateInputType | true
    _avg?: PatientInstanceAvgAggregateInputType
    _sum?: PatientInstanceSumAggregateInputType
    _min?: PatientInstanceMinAggregateInputType
    _max?: PatientInstanceMaxAggregateInputType
  }

  export type PatientInstanceGroupByOutputType = {
    id: string
    abhaId: string
    doctorId: string
    queueNumber: number | null
    medications: JsonValue | null
    feedback: string | null
    visitType: $Enums.VisitType
    _count: PatientInstanceCountAggregateOutputType | null
    _avg: PatientInstanceAvgAggregateOutputType | null
    _sum: PatientInstanceSumAggregateOutputType | null
    _min: PatientInstanceMinAggregateOutputType | null
    _max: PatientInstanceMaxAggregateOutputType | null
  }

  type GetPatientInstanceGroupByPayload<T extends PatientInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], PatientInstanceGroupByOutputType[P]>
        }
      >
    >


  export type PatientInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abhaId?: boolean
    doctorId?: boolean
    queueNumber?: boolean
    medications?: boolean
    feedback?: boolean
    visitType?: boolean
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    opqueue?: boolean | PatientInstance$opqueueArgs<ExtArgs>
    admission?: boolean | PatientInstance$admissionArgs<ExtArgs>
    _count?: boolean | PatientInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientInstance"]>

  export type PatientInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abhaId?: boolean
    doctorId?: boolean
    queueNumber?: boolean
    medications?: boolean
    feedback?: boolean
    visitType?: boolean
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientInstance"]>

  export type PatientInstanceSelectScalar = {
    id?: boolean
    abhaId?: boolean
    doctorId?: boolean
    queueNumber?: boolean
    medications?: boolean
    feedback?: boolean
    visitType?: boolean
  }

  export type PatientInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    opqueue?: boolean | PatientInstance$opqueueArgs<ExtArgs>
    admission?: boolean | PatientInstance$admissionArgs<ExtArgs>
    _count?: boolean | PatientInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }

  export type $PatientInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientInstance"
    objects: {
      doctor: Prisma.$DoctorsPayload<ExtArgs>
      opqueue: Prisma.$OPDQueuePayload<ExtArgs>[]
      admission: Prisma.$AdmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      abhaId: string
      doctorId: string
      queueNumber: number | null
      medications: Prisma.JsonValue | null
      feedback: string | null
      visitType: $Enums.VisitType
    }, ExtArgs["result"]["patientInstance"]>
    composites: {}
  }

  type PatientInstanceGetPayload<S extends boolean | null | undefined | PatientInstanceDefaultArgs> = $Result.GetResult<Prisma.$PatientInstancePayload, S>

  type PatientInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientInstanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientInstanceCountAggregateInputType | true
    }

  export interface PatientInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientInstance'], meta: { name: 'PatientInstance' } }
    /**
     * Find zero or one PatientInstance that matches the filter.
     * @param {PatientInstanceFindUniqueArgs} args - Arguments to find a PatientInstance
     * @example
     * // Get one PatientInstance
     * const patientInstance = await prisma.patientInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientInstanceFindUniqueArgs>(args: SelectSubset<T, PatientInstanceFindUniqueArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatientInstance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientInstanceFindUniqueOrThrowArgs} args - Arguments to find a PatientInstance
     * @example
     * // Get one PatientInstance
     * const patientInstance = await prisma.patientInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatientInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceFindFirstArgs} args - Arguments to find a PatientInstance
     * @example
     * // Get one PatientInstance
     * const patientInstance = await prisma.patientInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientInstanceFindFirstArgs>(args?: SelectSubset<T, PatientInstanceFindFirstArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatientInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceFindFirstOrThrowArgs} args - Arguments to find a PatientInstance
     * @example
     * // Get one PatientInstance
     * const patientInstance = await prisma.patientInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatientInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientInstances
     * const patientInstances = await prisma.patientInstance.findMany()
     * 
     * // Get first 10 PatientInstances
     * const patientInstances = await prisma.patientInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientInstanceWithIdOnly = await prisma.patientInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientInstanceFindManyArgs>(args?: SelectSubset<T, PatientInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatientInstance.
     * @param {PatientInstanceCreateArgs} args - Arguments to create a PatientInstance.
     * @example
     * // Create one PatientInstance
     * const PatientInstance = await prisma.patientInstance.create({
     *   data: {
     *     // ... data to create a PatientInstance
     *   }
     * })
     * 
     */
    create<T extends PatientInstanceCreateArgs>(args: SelectSubset<T, PatientInstanceCreateArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatientInstances.
     * @param {PatientInstanceCreateManyArgs} args - Arguments to create many PatientInstances.
     * @example
     * // Create many PatientInstances
     * const patientInstance = await prisma.patientInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientInstanceCreateManyArgs>(args?: SelectSubset<T, PatientInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientInstances and returns the data saved in the database.
     * @param {PatientInstanceCreateManyAndReturnArgs} args - Arguments to create many PatientInstances.
     * @example
     * // Create many PatientInstances
     * const patientInstance = await prisma.patientInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientInstances and only return the `id`
     * const patientInstanceWithIdOnly = await prisma.patientInstance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatientInstance.
     * @param {PatientInstanceDeleteArgs} args - Arguments to delete one PatientInstance.
     * @example
     * // Delete one PatientInstance
     * const PatientInstance = await prisma.patientInstance.delete({
     *   where: {
     *     // ... filter to delete one PatientInstance
     *   }
     * })
     * 
     */
    delete<T extends PatientInstanceDeleteArgs>(args: SelectSubset<T, PatientInstanceDeleteArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatientInstance.
     * @param {PatientInstanceUpdateArgs} args - Arguments to update one PatientInstance.
     * @example
     * // Update one PatientInstance
     * const patientInstance = await prisma.patientInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientInstanceUpdateArgs>(args: SelectSubset<T, PatientInstanceUpdateArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatientInstances.
     * @param {PatientInstanceDeleteManyArgs} args - Arguments to filter PatientInstances to delete.
     * @example
     * // Delete a few PatientInstances
     * const { count } = await prisma.patientInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientInstanceDeleteManyArgs>(args?: SelectSubset<T, PatientInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientInstances
     * const patientInstance = await prisma.patientInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientInstanceUpdateManyArgs>(args: SelectSubset<T, PatientInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatientInstance.
     * @param {PatientInstanceUpsertArgs} args - Arguments to update or create a PatientInstance.
     * @example
     * // Update or create a PatientInstance
     * const patientInstance = await prisma.patientInstance.upsert({
     *   create: {
     *     // ... data to create a PatientInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientInstance we want to update
     *   }
     * })
     */
    upsert<T extends PatientInstanceUpsertArgs>(args: SelectSubset<T, PatientInstanceUpsertArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatientInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceCountArgs} args - Arguments to filter PatientInstances to count.
     * @example
     * // Count the number of PatientInstances
     * const count = await prisma.patientInstance.count({
     *   where: {
     *     // ... the filter for the PatientInstances we want to count
     *   }
     * })
    **/
    count<T extends PatientInstanceCountArgs>(
      args?: Subset<T, PatientInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientInstanceAggregateArgs>(args: Subset<T, PatientInstanceAggregateArgs>): Prisma.PrismaPromise<GetPatientInstanceAggregateType<T>>

    /**
     * Group by PatientInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInstanceGroupByArgs} args - Group by arguments.
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
      T extends PatientInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientInstanceGroupByArgs['orderBy'] }
        : { orderBy?: PatientInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientInstance model
   */
  readonly fields: PatientInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorsDefaultArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    opqueue<T extends PatientInstance$opqueueArgs<ExtArgs> = {}>(args?: Subset<T, PatientInstance$opqueueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDQueuePayload<ExtArgs>, T, "findMany"> | Null>
    admission<T extends PatientInstance$admissionArgs<ExtArgs> = {}>(args?: Subset<T, PatientInstance$admissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PatientInstance model
   */ 
  interface PatientInstanceFieldRefs {
    readonly id: FieldRef<"PatientInstance", 'String'>
    readonly abhaId: FieldRef<"PatientInstance", 'String'>
    readonly doctorId: FieldRef<"PatientInstance", 'String'>
    readonly queueNumber: FieldRef<"PatientInstance", 'Int'>
    readonly medications: FieldRef<"PatientInstance", 'Json'>
    readonly feedback: FieldRef<"PatientInstance", 'String'>
    readonly visitType: FieldRef<"PatientInstance", 'VisitType'>
  }
    

  // Custom InputTypes
  /**
   * PatientInstance findUnique
   */
  export type PatientInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * Filter, which PatientInstance to fetch.
     */
    where: PatientInstanceWhereUniqueInput
  }

  /**
   * PatientInstance findUniqueOrThrow
   */
  export type PatientInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * Filter, which PatientInstance to fetch.
     */
    where: PatientInstanceWhereUniqueInput
  }

  /**
   * PatientInstance findFirst
   */
  export type PatientInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * Filter, which PatientInstance to fetch.
     */
    where?: PatientInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInstances to fetch.
     */
    orderBy?: PatientInstanceOrderByWithRelationInput | PatientInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientInstances.
     */
    cursor?: PatientInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientInstances.
     */
    distinct?: PatientInstanceScalarFieldEnum | PatientInstanceScalarFieldEnum[]
  }

  /**
   * PatientInstance findFirstOrThrow
   */
  export type PatientInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * Filter, which PatientInstance to fetch.
     */
    where?: PatientInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInstances to fetch.
     */
    orderBy?: PatientInstanceOrderByWithRelationInput | PatientInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientInstances.
     */
    cursor?: PatientInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientInstances.
     */
    distinct?: PatientInstanceScalarFieldEnum | PatientInstanceScalarFieldEnum[]
  }

  /**
   * PatientInstance findMany
   */
  export type PatientInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * Filter, which PatientInstances to fetch.
     */
    where?: PatientInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInstances to fetch.
     */
    orderBy?: PatientInstanceOrderByWithRelationInput | PatientInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientInstances.
     */
    cursor?: PatientInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInstances.
     */
    skip?: number
    distinct?: PatientInstanceScalarFieldEnum | PatientInstanceScalarFieldEnum[]
  }

  /**
   * PatientInstance create
   */
  export type PatientInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientInstance.
     */
    data: XOR<PatientInstanceCreateInput, PatientInstanceUncheckedCreateInput>
  }

  /**
   * PatientInstance createMany
   */
  export type PatientInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientInstances.
     */
    data: PatientInstanceCreateManyInput | PatientInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientInstance createManyAndReturn
   */
  export type PatientInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatientInstances.
     */
    data: PatientInstanceCreateManyInput | PatientInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientInstance update
   */
  export type PatientInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientInstance.
     */
    data: XOR<PatientInstanceUpdateInput, PatientInstanceUncheckedUpdateInput>
    /**
     * Choose, which PatientInstance to update.
     */
    where: PatientInstanceWhereUniqueInput
  }

  /**
   * PatientInstance updateMany
   */
  export type PatientInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientInstances.
     */
    data: XOR<PatientInstanceUpdateManyMutationInput, PatientInstanceUncheckedUpdateManyInput>
    /**
     * Filter which PatientInstances to update
     */
    where?: PatientInstanceWhereInput
  }

  /**
   * PatientInstance upsert
   */
  export type PatientInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientInstance to update in case it exists.
     */
    where: PatientInstanceWhereUniqueInput
    /**
     * In case the PatientInstance found by the `where` argument doesn't exist, create a new PatientInstance with this data.
     */
    create: XOR<PatientInstanceCreateInput, PatientInstanceUncheckedCreateInput>
    /**
     * In case the PatientInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientInstanceUpdateInput, PatientInstanceUncheckedUpdateInput>
  }

  /**
   * PatientInstance delete
   */
  export type PatientInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
    /**
     * Filter which PatientInstance to delete.
     */
    where: PatientInstanceWhereUniqueInput
  }

  /**
   * PatientInstance deleteMany
   */
  export type PatientInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientInstances to delete
     */
    where?: PatientInstanceWhereInput
  }

  /**
   * PatientInstance.opqueue
   */
  export type PatientInstance$opqueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDQueue
     */
    select?: OPDQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDQueueInclude<ExtArgs> | null
    where?: OPDQueueWhereInput
    orderBy?: OPDQueueOrderByWithRelationInput | OPDQueueOrderByWithRelationInput[]
    cursor?: OPDQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OPDQueueScalarFieldEnum | OPDQueueScalarFieldEnum[]
  }

  /**
   * PatientInstance.admission
   */
  export type PatientInstance$admissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * PatientInstance without action
   */
  export type PatientInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInstance
     */
    select?: PatientInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInstanceInclude<ExtArgs> | null
  }


  /**
   * Model Admission
   */

  export type AggregateAdmission = {
    _count: AdmissionCountAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  export type AdmissionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    wardId: string | null
    bedId: string | null
    doctorId: string | null
  }

  export type AdmissionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    wardId: string | null
    bedId: string | null
    doctorId: string | null
  }

  export type AdmissionCountAggregateOutputType = {
    id: number
    patientId: number
    wardId: number
    bedId: number
    doctorId: number
    _all: number
  }


  export type AdmissionMinAggregateInputType = {
    id?: true
    patientId?: true
    wardId?: true
    bedId?: true
    doctorId?: true
  }

  export type AdmissionMaxAggregateInputType = {
    id?: true
    patientId?: true
    wardId?: true
    bedId?: true
    doctorId?: true
  }

  export type AdmissionCountAggregateInputType = {
    id?: true
    patientId?: true
    wardId?: true
    bedId?: true
    doctorId?: true
    _all?: true
  }

  export type AdmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admission to aggregate.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admissions
    **/
    _count?: true | AdmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionMaxAggregateInputType
  }

  export type GetAdmissionAggregateType<T extends AdmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmission[P]>
      : GetScalarType<T[P], AggregateAdmission[P]>
  }




  export type AdmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithAggregationInput | AdmissionOrderByWithAggregationInput[]
    by: AdmissionScalarFieldEnum[] | AdmissionScalarFieldEnum
    having?: AdmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionCountAggregateInputType | true
    _min?: AdmissionMinAggregateInputType
    _max?: AdmissionMaxAggregateInputType
  }

  export type AdmissionGroupByOutputType = {
    id: string
    patientId: string
    wardId: string | null
    bedId: string | null
    doctorId: string
    _count: AdmissionCountAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  type GetAdmissionGroupByPayload<T extends AdmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    wardId?: boolean
    bedId?: boolean
    doctorId?: boolean
    patinet?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    ward?: boolean | Admission$wardArgs<ExtArgs>
    bed?: boolean | Admission$bedArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    wardId?: boolean
    bedId?: boolean
    doctorId?: boolean
    patinet?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    ward?: boolean | Admission$wardArgs<ExtArgs>
    bed?: boolean | Admission$bedArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectScalar = {
    id?: boolean
    patientId?: boolean
    wardId?: boolean
    bedId?: boolean
    doctorId?: boolean
  }

  export type AdmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patinet?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    ward?: boolean | Admission$wardArgs<ExtArgs>
    bed?: boolean | Admission$bedArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }
  export type AdmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patinet?: boolean | PatientInstanceDefaultArgs<ExtArgs>
    ward?: boolean | Admission$wardArgs<ExtArgs>
    bed?: boolean | Admission$bedArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
  }

  export type $AdmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admission"
    objects: {
      patinet: Prisma.$PatientInstancePayload<ExtArgs>
      ward: Prisma.$WardPayload<ExtArgs> | null
      bed: Prisma.$BedPayload<ExtArgs> | null
      doctor: Prisma.$DoctorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      wardId: string | null
      bedId: string | null
      doctorId: string
    }, ExtArgs["result"]["admission"]>
    composites: {}
  }

  type AdmissionGetPayload<S extends boolean | null | undefined | AdmissionDefaultArgs> = $Result.GetResult<Prisma.$AdmissionPayload, S>

  type AdmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdmissionCountAggregateInputType | true
    }

  export interface AdmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admission'], meta: { name: 'Admission' } }
    /**
     * Find zero or one Admission that matches the filter.
     * @param {AdmissionFindUniqueArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionFindUniqueArgs>(args: SelectSubset<T, AdmissionFindUniqueArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdmissionFindUniqueOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionFindFirstArgs>(args?: SelectSubset<T, AdmissionFindFirstArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admissions
     * const admissions = await prisma.admission.findMany()
     * 
     * // Get first 10 Admissions
     * const admissions = await prisma.admission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionWithIdOnly = await prisma.admission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionFindManyArgs>(args?: SelectSubset<T, AdmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admission.
     * @param {AdmissionCreateArgs} args - Arguments to create a Admission.
     * @example
     * // Create one Admission
     * const Admission = await prisma.admission.create({
     *   data: {
     *     // ... data to create a Admission
     *   }
     * })
     * 
     */
    create<T extends AdmissionCreateArgs>(args: SelectSubset<T, AdmissionCreateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admissions.
     * @param {AdmissionCreateManyArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionCreateManyArgs>(args?: SelectSubset<T, AdmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admissions and returns the data saved in the database.
     * @param {AdmissionCreateManyAndReturnArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admissions and only return the `id`
     * const admissionWithIdOnly = await prisma.admission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admission.
     * @param {AdmissionDeleteArgs} args - Arguments to delete one Admission.
     * @example
     * // Delete one Admission
     * const Admission = await prisma.admission.delete({
     *   where: {
     *     // ... filter to delete one Admission
     *   }
     * })
     * 
     */
    delete<T extends AdmissionDeleteArgs>(args: SelectSubset<T, AdmissionDeleteArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admission.
     * @param {AdmissionUpdateArgs} args - Arguments to update one Admission.
     * @example
     * // Update one Admission
     * const admission = await prisma.admission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionUpdateArgs>(args: SelectSubset<T, AdmissionUpdateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admissions.
     * @param {AdmissionDeleteManyArgs} args - Arguments to filter Admissions to delete.
     * @example
     * // Delete a few Admissions
     * const { count } = await prisma.admission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionDeleteManyArgs>(args?: SelectSubset<T, AdmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admissions
     * const admission = await prisma.admission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionUpdateManyArgs>(args: SelectSubset<T, AdmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admission.
     * @param {AdmissionUpsertArgs} args - Arguments to update or create a Admission.
     * @example
     * // Update or create a Admission
     * const admission = await prisma.admission.upsert({
     *   create: {
     *     // ... data to create a Admission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admission we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionUpsertArgs>(args: SelectSubset<T, AdmissionUpsertArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCountArgs} args - Arguments to filter Admissions to count.
     * @example
     * // Count the number of Admissions
     * const count = await prisma.admission.count({
     *   where: {
     *     // ... the filter for the Admissions we want to count
     *   }
     * })
    **/
    count<T extends AdmissionCountArgs>(
      args?: Subset<T, AdmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdmissionAggregateArgs>(args: Subset<T, AdmissionAggregateArgs>): Prisma.PrismaPromise<GetAdmissionAggregateType<T>>

    /**
     * Group by Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionGroupByArgs} args - Group by arguments.
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
      T extends AdmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admission model
   */
  readonly fields: AdmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patinet<T extends PatientInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientInstanceDefaultArgs<ExtArgs>>): Prisma__PatientInstanceClient<$Result.GetResult<Prisma.$PatientInstancePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ward<T extends Admission$wardArgs<ExtArgs> = {}>(args?: Subset<T, Admission$wardArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    bed<T extends Admission$bedArgs<ExtArgs> = {}>(args?: Subset<T, Admission$bedArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    doctor<T extends DoctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorsDefaultArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Admission model
   */ 
  interface AdmissionFieldRefs {
    readonly id: FieldRef<"Admission", 'String'>
    readonly patientId: FieldRef<"Admission", 'String'>
    readonly wardId: FieldRef<"Admission", 'String'>
    readonly bedId: FieldRef<"Admission", 'String'>
    readonly doctorId: FieldRef<"Admission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admission findUnique
   */
  export type AdmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findUniqueOrThrow
   */
  export type AdmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findFirst
   */
  export type AdmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findFirstOrThrow
   */
  export type AdmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findMany
   */
  export type AdmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission create
   */
  export type AdmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Admission.
     */
    data: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
  }

  /**
   * Admission createMany
   */
  export type AdmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admission createManyAndReturn
   */
  export type AdmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admission update
   */
  export type AdmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Admission.
     */
    data: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
    /**
     * Choose, which Admission to update.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission updateMany
   */
  export type AdmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionWhereInput
  }

  /**
   * Admission upsert
   */
  export type AdmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Admission to update in case it exists.
     */
    where: AdmissionWhereUniqueInput
    /**
     * In case the Admission found by the `where` argument doesn't exist, create a new Admission with this data.
     */
    create: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
    /**
     * In case the Admission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
  }

  /**
   * Admission delete
   */
  export type AdmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter which Admission to delete.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission deleteMany
   */
  export type AdmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admissions to delete
     */
    where?: AdmissionWhereInput
  }

  /**
   * Admission.ward
   */
  export type Admission$wardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    where?: WardWhereInput
  }

  /**
   * Admission.bed
   */
  export type Admission$bedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    where?: BedWhereInput
  }

  /**
   * Admission without action
   */
  export type AdmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
  }


  /**
   * Model MainStore
   */

  export type AggregateMainStore = {
    _count: MainStoreCountAggregateOutputType | null
    _min: MainStoreMinAggregateOutputType | null
    _max: MainStoreMaxAggregateOutputType | null
  }

  export type MainStoreMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MainStoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MainStoreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MainStoreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MainStoreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MainStoreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MainStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainStore to aggregate.
     */
    where?: MainStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainStores to fetch.
     */
    orderBy?: MainStoreOrderByWithRelationInput | MainStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainStores
    **/
    _count?: true | MainStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainStoreMaxAggregateInputType
  }

  export type GetMainStoreAggregateType<T extends MainStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateMainStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainStore[P]>
      : GetScalarType<T[P], AggregateMainStore[P]>
  }




  export type MainStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainStoreWhereInput
    orderBy?: MainStoreOrderByWithAggregationInput | MainStoreOrderByWithAggregationInput[]
    by: MainStoreScalarFieldEnum[] | MainStoreScalarFieldEnum
    having?: MainStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainStoreCountAggregateInputType | true
    _min?: MainStoreMinAggregateInputType
    _max?: MainStoreMaxAggregateInputType
  }

  export type MainStoreGroupByOutputType = {
    id: string
    name: string
    _count: MainStoreCountAggregateOutputType | null
    _min: MainStoreMinAggregateOutputType | null
    _max: MainStoreMaxAggregateOutputType | null
  }

  type GetMainStoreGroupByPayload<T extends MainStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainStoreGroupByOutputType[P]>
            : GetScalarType<T[P], MainStoreGroupByOutputType[P]>
        }
      >
    >


  export type MainStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inventory?: boolean | MainStore$inventoryArgs<ExtArgs>
    subStores?: boolean | MainStore$subStoresArgs<ExtArgs>
    _count?: boolean | MainStoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainStore"]>

  export type MainStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mainStore"]>

  export type MainStoreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MainStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | MainStore$inventoryArgs<ExtArgs>
    subStores?: boolean | MainStore$subStoresArgs<ExtArgs>
    _count?: boolean | MainStoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MainStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MainStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainStore"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      subStores: Prisma.$SubStorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["mainStore"]>
    composites: {}
  }

  type MainStoreGetPayload<S extends boolean | null | undefined | MainStoreDefaultArgs> = $Result.GetResult<Prisma.$MainStorePayload, S>

  type MainStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MainStoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MainStoreCountAggregateInputType | true
    }

  export interface MainStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainStore'], meta: { name: 'MainStore' } }
    /**
     * Find zero or one MainStore that matches the filter.
     * @param {MainStoreFindUniqueArgs} args - Arguments to find a MainStore
     * @example
     * // Get one MainStore
     * const mainStore = await prisma.mainStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainStoreFindUniqueArgs>(args: SelectSubset<T, MainStoreFindUniqueArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MainStore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MainStoreFindUniqueOrThrowArgs} args - Arguments to find a MainStore
     * @example
     * // Get one MainStore
     * const mainStore = await prisma.mainStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, MainStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MainStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreFindFirstArgs} args - Arguments to find a MainStore
     * @example
     * // Get one MainStore
     * const mainStore = await prisma.mainStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainStoreFindFirstArgs>(args?: SelectSubset<T, MainStoreFindFirstArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MainStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreFindFirstOrThrowArgs} args - Arguments to find a MainStore
     * @example
     * // Get one MainStore
     * const mainStore = await prisma.mainStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, MainStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MainStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainStores
     * const mainStores = await prisma.mainStore.findMany()
     * 
     * // Get first 10 MainStores
     * const mainStores = await prisma.mainStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainStoreWithIdOnly = await prisma.mainStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MainStoreFindManyArgs>(args?: SelectSubset<T, MainStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MainStore.
     * @param {MainStoreCreateArgs} args - Arguments to create a MainStore.
     * @example
     * // Create one MainStore
     * const MainStore = await prisma.mainStore.create({
     *   data: {
     *     // ... data to create a MainStore
     *   }
     * })
     * 
     */
    create<T extends MainStoreCreateArgs>(args: SelectSubset<T, MainStoreCreateArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MainStores.
     * @param {MainStoreCreateManyArgs} args - Arguments to create many MainStores.
     * @example
     * // Create many MainStores
     * const mainStore = await prisma.mainStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainStoreCreateManyArgs>(args?: SelectSubset<T, MainStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MainStores and returns the data saved in the database.
     * @param {MainStoreCreateManyAndReturnArgs} args - Arguments to create many MainStores.
     * @example
     * // Create many MainStores
     * const mainStore = await prisma.mainStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MainStores and only return the `id`
     * const mainStoreWithIdOnly = await prisma.mainStore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MainStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, MainStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MainStore.
     * @param {MainStoreDeleteArgs} args - Arguments to delete one MainStore.
     * @example
     * // Delete one MainStore
     * const MainStore = await prisma.mainStore.delete({
     *   where: {
     *     // ... filter to delete one MainStore
     *   }
     * })
     * 
     */
    delete<T extends MainStoreDeleteArgs>(args: SelectSubset<T, MainStoreDeleteArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MainStore.
     * @param {MainStoreUpdateArgs} args - Arguments to update one MainStore.
     * @example
     * // Update one MainStore
     * const mainStore = await prisma.mainStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainStoreUpdateArgs>(args: SelectSubset<T, MainStoreUpdateArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MainStores.
     * @param {MainStoreDeleteManyArgs} args - Arguments to filter MainStores to delete.
     * @example
     * // Delete a few MainStores
     * const { count } = await prisma.mainStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainStoreDeleteManyArgs>(args?: SelectSubset<T, MainStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainStores
     * const mainStore = await prisma.mainStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainStoreUpdateManyArgs>(args: SelectSubset<T, MainStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MainStore.
     * @param {MainStoreUpsertArgs} args - Arguments to update or create a MainStore.
     * @example
     * // Update or create a MainStore
     * const mainStore = await prisma.mainStore.upsert({
     *   create: {
     *     // ... data to create a MainStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainStore we want to update
     *   }
     * })
     */
    upsert<T extends MainStoreUpsertArgs>(args: SelectSubset<T, MainStoreUpsertArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MainStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreCountArgs} args - Arguments to filter MainStores to count.
     * @example
     * // Count the number of MainStores
     * const count = await prisma.mainStore.count({
     *   where: {
     *     // ... the filter for the MainStores we want to count
     *   }
     * })
    **/
    count<T extends MainStoreCountArgs>(
      args?: Subset<T, MainStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MainStoreAggregateArgs>(args: Subset<T, MainStoreAggregateArgs>): Prisma.PrismaPromise<GetMainStoreAggregateType<T>>

    /**
     * Group by MainStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainStoreGroupByArgs} args - Group by arguments.
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
      T extends MainStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainStoreGroupByArgs['orderBy'] }
        : { orderBy?: MainStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MainStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainStore model
   */
  readonly fields: MainStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends MainStore$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, MainStore$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
    subStores<T extends MainStore$subStoresArgs<ExtArgs> = {}>(args?: Subset<T, MainStore$subStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MainStore model
   */ 
  interface MainStoreFieldRefs {
    readonly id: FieldRef<"MainStore", 'String'>
    readonly name: FieldRef<"MainStore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MainStore findUnique
   */
  export type MainStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * Filter, which MainStore to fetch.
     */
    where: MainStoreWhereUniqueInput
  }

  /**
   * MainStore findUniqueOrThrow
   */
  export type MainStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * Filter, which MainStore to fetch.
     */
    where: MainStoreWhereUniqueInput
  }

  /**
   * MainStore findFirst
   */
  export type MainStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * Filter, which MainStore to fetch.
     */
    where?: MainStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainStores to fetch.
     */
    orderBy?: MainStoreOrderByWithRelationInput | MainStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainStores.
     */
    cursor?: MainStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainStores.
     */
    distinct?: MainStoreScalarFieldEnum | MainStoreScalarFieldEnum[]
  }

  /**
   * MainStore findFirstOrThrow
   */
  export type MainStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * Filter, which MainStore to fetch.
     */
    where?: MainStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainStores to fetch.
     */
    orderBy?: MainStoreOrderByWithRelationInput | MainStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainStores.
     */
    cursor?: MainStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainStores.
     */
    distinct?: MainStoreScalarFieldEnum | MainStoreScalarFieldEnum[]
  }

  /**
   * MainStore findMany
   */
  export type MainStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * Filter, which MainStores to fetch.
     */
    where?: MainStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainStores to fetch.
     */
    orderBy?: MainStoreOrderByWithRelationInput | MainStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainStores.
     */
    cursor?: MainStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainStores.
     */
    skip?: number
    distinct?: MainStoreScalarFieldEnum | MainStoreScalarFieldEnum[]
  }

  /**
   * MainStore create
   */
  export type MainStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a MainStore.
     */
    data: XOR<MainStoreCreateInput, MainStoreUncheckedCreateInput>
  }

  /**
   * MainStore createMany
   */
  export type MainStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainStores.
     */
    data: MainStoreCreateManyInput | MainStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainStore createManyAndReturn
   */
  export type MainStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MainStores.
     */
    data: MainStoreCreateManyInput | MainStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainStore update
   */
  export type MainStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a MainStore.
     */
    data: XOR<MainStoreUpdateInput, MainStoreUncheckedUpdateInput>
    /**
     * Choose, which MainStore to update.
     */
    where: MainStoreWhereUniqueInput
  }

  /**
   * MainStore updateMany
   */
  export type MainStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainStores.
     */
    data: XOR<MainStoreUpdateManyMutationInput, MainStoreUncheckedUpdateManyInput>
    /**
     * Filter which MainStores to update
     */
    where?: MainStoreWhereInput
  }

  /**
   * MainStore upsert
   */
  export type MainStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the MainStore to update in case it exists.
     */
    where: MainStoreWhereUniqueInput
    /**
     * In case the MainStore found by the `where` argument doesn't exist, create a new MainStore with this data.
     */
    create: XOR<MainStoreCreateInput, MainStoreUncheckedCreateInput>
    /**
     * In case the MainStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainStoreUpdateInput, MainStoreUncheckedUpdateInput>
  }

  /**
   * MainStore delete
   */
  export type MainStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    /**
     * Filter which MainStore to delete.
     */
    where: MainStoreWhereUniqueInput
  }

  /**
   * MainStore deleteMany
   */
  export type MainStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainStores to delete
     */
    where?: MainStoreWhereInput
  }

  /**
   * MainStore.inventory
   */
  export type MainStore$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * MainStore.subStores
   */
  export type MainStore$subStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    where?: SubStoreWhereInput
    orderBy?: SubStoreOrderByWithRelationInput | SubStoreOrderByWithRelationInput[]
    cursor?: SubStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubStoreScalarFieldEnum | SubStoreScalarFieldEnum[]
  }

  /**
   * MainStore without action
   */
  export type MainStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
  }


  /**
   * Model SubStore
   */

  export type AggregateSubStore = {
    _count: SubStoreCountAggregateOutputType | null
    _min: SubStoreMinAggregateOutputType | null
    _max: SubStoreMaxAggregateOutputType | null
  }

  export type SubStoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    mainStoreId: string | null
  }

  export type SubStoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mainStoreId: string | null
  }

  export type SubStoreCountAggregateOutputType = {
    id: number
    name: number
    mainStoreId: number
    _all: number
  }


  export type SubStoreMinAggregateInputType = {
    id?: true
    name?: true
    mainStoreId?: true
  }

  export type SubStoreMaxAggregateInputType = {
    id?: true
    name?: true
    mainStoreId?: true
  }

  export type SubStoreCountAggregateInputType = {
    id?: true
    name?: true
    mainStoreId?: true
    _all?: true
  }

  export type SubStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubStore to aggregate.
     */
    where?: SubStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubStores to fetch.
     */
    orderBy?: SubStoreOrderByWithRelationInput | SubStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubStores
    **/
    _count?: true | SubStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubStoreMaxAggregateInputType
  }

  export type GetSubStoreAggregateType<T extends SubStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSubStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubStore[P]>
      : GetScalarType<T[P], AggregateSubStore[P]>
  }




  export type SubStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubStoreWhereInput
    orderBy?: SubStoreOrderByWithAggregationInput | SubStoreOrderByWithAggregationInput[]
    by: SubStoreScalarFieldEnum[] | SubStoreScalarFieldEnum
    having?: SubStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubStoreCountAggregateInputType | true
    _min?: SubStoreMinAggregateInputType
    _max?: SubStoreMaxAggregateInputType
  }

  export type SubStoreGroupByOutputType = {
    id: string
    name: string
    mainStoreId: string
    _count: SubStoreCountAggregateOutputType | null
    _min: SubStoreMinAggregateOutputType | null
    _max: SubStoreMaxAggregateOutputType | null
  }

  type GetSubStoreGroupByPayload<T extends SubStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubStoreGroupByOutputType[P]>
            : GetScalarType<T[P], SubStoreGroupByOutputType[P]>
        }
      >
    >


  export type SubStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainStoreId?: boolean
    mainStore?: boolean | MainStoreDefaultArgs<ExtArgs>
    inventory?: boolean | SubStore$inventoryArgs<ExtArgs>
    pharmacies?: boolean | SubStore$pharmaciesArgs<ExtArgs>
    _count?: boolean | SubStoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subStore"]>

  export type SubStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainStoreId?: boolean
    mainStore?: boolean | MainStoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subStore"]>

  export type SubStoreSelectScalar = {
    id?: boolean
    name?: boolean
    mainStoreId?: boolean
  }

  export type SubStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainStore?: boolean | MainStoreDefaultArgs<ExtArgs>
    inventory?: boolean | SubStore$inventoryArgs<ExtArgs>
    pharmacies?: boolean | SubStore$pharmaciesArgs<ExtArgs>
    _count?: boolean | SubStoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainStore?: boolean | MainStoreDefaultArgs<ExtArgs>
  }

  export type $SubStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubStore"
    objects: {
      mainStore: Prisma.$MainStorePayload<ExtArgs>
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      pharmacies: Prisma.$PharmacyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mainStoreId: string
    }, ExtArgs["result"]["subStore"]>
    composites: {}
  }

  type SubStoreGetPayload<S extends boolean | null | undefined | SubStoreDefaultArgs> = $Result.GetResult<Prisma.$SubStorePayload, S>

  type SubStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubStoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubStoreCountAggregateInputType | true
    }

  export interface SubStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubStore'], meta: { name: 'SubStore' } }
    /**
     * Find zero or one SubStore that matches the filter.
     * @param {SubStoreFindUniqueArgs} args - Arguments to find a SubStore
     * @example
     * // Get one SubStore
     * const subStore = await prisma.subStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubStoreFindUniqueArgs>(args: SelectSubset<T, SubStoreFindUniqueArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubStore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubStoreFindUniqueOrThrowArgs} args - Arguments to find a SubStore
     * @example
     * // Get one SubStore
     * const subStore = await prisma.subStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SubStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreFindFirstArgs} args - Arguments to find a SubStore
     * @example
     * // Get one SubStore
     * const subStore = await prisma.subStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubStoreFindFirstArgs>(args?: SelectSubset<T, SubStoreFindFirstArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreFindFirstOrThrowArgs} args - Arguments to find a SubStore
     * @example
     * // Get one SubStore
     * const subStore = await prisma.subStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SubStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubStores
     * const subStores = await prisma.subStore.findMany()
     * 
     * // Get first 10 SubStores
     * const subStores = await prisma.subStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subStoreWithIdOnly = await prisma.subStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubStoreFindManyArgs>(args?: SelectSubset<T, SubStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubStore.
     * @param {SubStoreCreateArgs} args - Arguments to create a SubStore.
     * @example
     * // Create one SubStore
     * const SubStore = await prisma.subStore.create({
     *   data: {
     *     // ... data to create a SubStore
     *   }
     * })
     * 
     */
    create<T extends SubStoreCreateArgs>(args: SelectSubset<T, SubStoreCreateArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubStores.
     * @param {SubStoreCreateManyArgs} args - Arguments to create many SubStores.
     * @example
     * // Create many SubStores
     * const subStore = await prisma.subStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubStoreCreateManyArgs>(args?: SelectSubset<T, SubStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubStores and returns the data saved in the database.
     * @param {SubStoreCreateManyAndReturnArgs} args - Arguments to create many SubStores.
     * @example
     * // Create many SubStores
     * const subStore = await prisma.subStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubStores and only return the `id`
     * const subStoreWithIdOnly = await prisma.subStore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, SubStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubStore.
     * @param {SubStoreDeleteArgs} args - Arguments to delete one SubStore.
     * @example
     * // Delete one SubStore
     * const SubStore = await prisma.subStore.delete({
     *   where: {
     *     // ... filter to delete one SubStore
     *   }
     * })
     * 
     */
    delete<T extends SubStoreDeleteArgs>(args: SelectSubset<T, SubStoreDeleteArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubStore.
     * @param {SubStoreUpdateArgs} args - Arguments to update one SubStore.
     * @example
     * // Update one SubStore
     * const subStore = await prisma.subStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubStoreUpdateArgs>(args: SelectSubset<T, SubStoreUpdateArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubStores.
     * @param {SubStoreDeleteManyArgs} args - Arguments to filter SubStores to delete.
     * @example
     * // Delete a few SubStores
     * const { count } = await prisma.subStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubStoreDeleteManyArgs>(args?: SelectSubset<T, SubStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubStores
     * const subStore = await prisma.subStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubStoreUpdateManyArgs>(args: SelectSubset<T, SubStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubStore.
     * @param {SubStoreUpsertArgs} args - Arguments to update or create a SubStore.
     * @example
     * // Update or create a SubStore
     * const subStore = await prisma.subStore.upsert({
     *   create: {
     *     // ... data to create a SubStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubStore we want to update
     *   }
     * })
     */
    upsert<T extends SubStoreUpsertArgs>(args: SelectSubset<T, SubStoreUpsertArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreCountArgs} args - Arguments to filter SubStores to count.
     * @example
     * // Count the number of SubStores
     * const count = await prisma.subStore.count({
     *   where: {
     *     // ... the filter for the SubStores we want to count
     *   }
     * })
    **/
    count<T extends SubStoreCountArgs>(
      args?: Subset<T, SubStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubStoreAggregateArgs>(args: Subset<T, SubStoreAggregateArgs>): Prisma.PrismaPromise<GetSubStoreAggregateType<T>>

    /**
     * Group by SubStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubStoreGroupByArgs} args - Group by arguments.
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
      T extends SubStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubStoreGroupByArgs['orderBy'] }
        : { orderBy?: SubStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubStore model
   */
  readonly fields: SubStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainStore<T extends MainStoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainStoreDefaultArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventory<T extends SubStore$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, SubStore$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
    pharmacies<T extends SubStore$pharmaciesArgs<ExtArgs> = {}>(args?: Subset<T, SubStore$pharmaciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SubStore model
   */ 
  interface SubStoreFieldRefs {
    readonly id: FieldRef<"SubStore", 'String'>
    readonly name: FieldRef<"SubStore", 'String'>
    readonly mainStoreId: FieldRef<"SubStore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubStore findUnique
   */
  export type SubStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * Filter, which SubStore to fetch.
     */
    where: SubStoreWhereUniqueInput
  }

  /**
   * SubStore findUniqueOrThrow
   */
  export type SubStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * Filter, which SubStore to fetch.
     */
    where: SubStoreWhereUniqueInput
  }

  /**
   * SubStore findFirst
   */
  export type SubStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * Filter, which SubStore to fetch.
     */
    where?: SubStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubStores to fetch.
     */
    orderBy?: SubStoreOrderByWithRelationInput | SubStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubStores.
     */
    cursor?: SubStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubStores.
     */
    distinct?: SubStoreScalarFieldEnum | SubStoreScalarFieldEnum[]
  }

  /**
   * SubStore findFirstOrThrow
   */
  export type SubStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * Filter, which SubStore to fetch.
     */
    where?: SubStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubStores to fetch.
     */
    orderBy?: SubStoreOrderByWithRelationInput | SubStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubStores.
     */
    cursor?: SubStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubStores.
     */
    distinct?: SubStoreScalarFieldEnum | SubStoreScalarFieldEnum[]
  }

  /**
   * SubStore findMany
   */
  export type SubStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * Filter, which SubStores to fetch.
     */
    where?: SubStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubStores to fetch.
     */
    orderBy?: SubStoreOrderByWithRelationInput | SubStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubStores.
     */
    cursor?: SubStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubStores.
     */
    skip?: number
    distinct?: SubStoreScalarFieldEnum | SubStoreScalarFieldEnum[]
  }

  /**
   * SubStore create
   */
  export type SubStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a SubStore.
     */
    data: XOR<SubStoreCreateInput, SubStoreUncheckedCreateInput>
  }

  /**
   * SubStore createMany
   */
  export type SubStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubStores.
     */
    data: SubStoreCreateManyInput | SubStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubStore createManyAndReturn
   */
  export type SubStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubStores.
     */
    data: SubStoreCreateManyInput | SubStoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubStore update
   */
  export type SubStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a SubStore.
     */
    data: XOR<SubStoreUpdateInput, SubStoreUncheckedUpdateInput>
    /**
     * Choose, which SubStore to update.
     */
    where: SubStoreWhereUniqueInput
  }

  /**
   * SubStore updateMany
   */
  export type SubStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubStores.
     */
    data: XOR<SubStoreUpdateManyMutationInput, SubStoreUncheckedUpdateManyInput>
    /**
     * Filter which SubStores to update
     */
    where?: SubStoreWhereInput
  }

  /**
   * SubStore upsert
   */
  export type SubStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the SubStore to update in case it exists.
     */
    where: SubStoreWhereUniqueInput
    /**
     * In case the SubStore found by the `where` argument doesn't exist, create a new SubStore with this data.
     */
    create: XOR<SubStoreCreateInput, SubStoreUncheckedCreateInput>
    /**
     * In case the SubStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubStoreUpdateInput, SubStoreUncheckedUpdateInput>
  }

  /**
   * SubStore delete
   */
  export type SubStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    /**
     * Filter which SubStore to delete.
     */
    where: SubStoreWhereUniqueInput
  }

  /**
   * SubStore deleteMany
   */
  export type SubStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubStores to delete
     */
    where?: SubStoreWhereInput
  }

  /**
   * SubStore.inventory
   */
  export type SubStore$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * SubStore.pharmacies
   */
  export type SubStore$pharmaciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    cursor?: PharmacyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * SubStore without action
   */
  export type SubStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: string | null
    name: string | null
    subStoreId: string | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subStoreId: string | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    name: number
    subStoreId: number
    _all: number
  }


  export type PharmacyMinAggregateInputType = {
    id?: true
    name?: true
    subStoreId?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    name?: true
    subStoreId?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    name?: true
    subStoreId?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    id: string
    name: string
    subStoreId: string
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subStoreId?: boolean
    subStore?: boolean | SubStoreDefaultArgs<ExtArgs>
    inventory?: boolean | Pharmacy$inventoryArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subStoreId?: boolean
    subStore?: boolean | SubStoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectScalar = {
    id?: boolean
    name?: boolean
    subStoreId?: boolean
  }

  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subStore?: boolean | SubStoreDefaultArgs<ExtArgs>
    inventory?: boolean | Pharmacy$inventoryArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subStore?: boolean | SubStoreDefaultArgs<ExtArgs>
  }

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      subStore: Prisma.$SubStorePayload<ExtArgs>
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subStoreId: string
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmacyCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
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
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subStore<T extends SubStoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubStoreDefaultArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventory<T extends Pharmacy$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Pharmacy model
   */ 
  interface PharmacyFieldRefs {
    readonly id: FieldRef<"Pharmacy", 'String'>
    readonly name: FieldRef<"Pharmacy", 'String'>
    readonly subStoreId: FieldRef<"Pharmacy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy createManyAndReturn
   */
  export type PharmacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
  }

  /**
   * Pharmacy.inventory
   */
  export type Pharmacy$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    reorderLevel: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
    price: number | null
    reorderLevel: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    itemName: string | null
    category: $Enums.InventoryCategory | null
    quantity: number | null
    price: number | null
    reorderLevel: number | null
    lastOrderDate: Date | null
    mainStoreId: string | null
    subStoreId: string | null
    pharmacyId: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    itemName: string | null
    category: $Enums.InventoryCategory | null
    quantity: number | null
    price: number | null
    reorderLevel: number | null
    lastOrderDate: Date | null
    mainStoreId: string | null
    subStoreId: string | null
    pharmacyId: string | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    itemName: number
    category: number
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate: number
    stockBatches: number
    mainStoreId: number
    subStoreId: number
    pharmacyId: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
    price?: true
    reorderLevel?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
    price?: true
    reorderLevel?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    itemName?: true
    category?: true
    quantity?: true
    price?: true
    reorderLevel?: true
    lastOrderDate?: true
    mainStoreId?: true
    subStoreId?: true
    pharmacyId?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    itemName?: true
    category?: true
    quantity?: true
    price?: true
    reorderLevel?: true
    lastOrderDate?: true
    mainStoreId?: true
    subStoreId?: true
    pharmacyId?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    itemName?: true
    category?: true
    quantity?: true
    price?: true
    reorderLevel?: true
    lastOrderDate?: true
    stockBatches?: true
    mainStoreId?: true
    subStoreId?: true
    pharmacyId?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate: Date
    stockBatches: JsonValue[]
    mainStoreId: string | null
    subStoreId: string | null
    pharmacyId: string | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    category?: boolean
    quantity?: boolean
    price?: boolean
    reorderLevel?: boolean
    lastOrderDate?: boolean
    stockBatches?: boolean
    mainStoreId?: boolean
    subStoreId?: boolean
    pharmacyId?: boolean
    mainStore?: boolean | Inventory$mainStoreArgs<ExtArgs>
    subStore?: boolean | Inventory$subStoreArgs<ExtArgs>
    pharmacy?: boolean | Inventory$pharmacyArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    category?: boolean
    quantity?: boolean
    price?: boolean
    reorderLevel?: boolean
    lastOrderDate?: boolean
    stockBatches?: boolean
    mainStoreId?: boolean
    subStoreId?: boolean
    pharmacyId?: boolean
    mainStore?: boolean | Inventory$mainStoreArgs<ExtArgs>
    subStore?: boolean | Inventory$subStoreArgs<ExtArgs>
    pharmacy?: boolean | Inventory$pharmacyArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    itemName?: boolean
    category?: boolean
    quantity?: boolean
    price?: boolean
    reorderLevel?: boolean
    lastOrderDate?: boolean
    stockBatches?: boolean
    mainStoreId?: boolean
    subStoreId?: boolean
    pharmacyId?: boolean
  }

  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainStore?: boolean | Inventory$mainStoreArgs<ExtArgs>
    subStore?: boolean | Inventory$subStoreArgs<ExtArgs>
    pharmacy?: boolean | Inventory$pharmacyArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainStore?: boolean | Inventory$mainStoreArgs<ExtArgs>
    subStore?: boolean | Inventory$subStoreArgs<ExtArgs>
    pharmacy?: boolean | Inventory$pharmacyArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      mainStore: Prisma.$MainStorePayload<ExtArgs> | null
      subStore: Prisma.$SubStorePayload<ExtArgs> | null
      pharmacy: Prisma.$PharmacyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemName: string
      category: $Enums.InventoryCategory
      quantity: number
      price: number
      reorderLevel: number
      lastOrderDate: Date
      stockBatches: Prisma.JsonValue[]
      mainStoreId: string | null
      subStoreId: string | null
      pharmacyId: string | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainStore<T extends Inventory$mainStoreArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$mainStoreArgs<ExtArgs>>): Prisma__MainStoreClient<$Result.GetResult<Prisma.$MainStorePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subStore<T extends Inventory$subStoreArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$subStoreArgs<ExtArgs>>): Prisma__SubStoreClient<$Result.GetResult<Prisma.$SubStorePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    pharmacy<T extends Inventory$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$pharmacyArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Inventory model
   */ 
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly itemName: FieldRef<"Inventory", 'String'>
    readonly category: FieldRef<"Inventory", 'InventoryCategory'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly price: FieldRef<"Inventory", 'Float'>
    readonly reorderLevel: FieldRef<"Inventory", 'Int'>
    readonly lastOrderDate: FieldRef<"Inventory", 'DateTime'>
    readonly stockBatches: FieldRef<"Inventory", 'Json[]'>
    readonly mainStoreId: FieldRef<"Inventory", 'String'>
    readonly subStoreId: FieldRef<"Inventory", 'String'>
    readonly pharmacyId: FieldRef<"Inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory.mainStore
   */
  export type Inventory$mainStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainStore
     */
    select?: MainStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainStoreInclude<ExtArgs> | null
    where?: MainStoreWhereInput
  }

  /**
   * Inventory.subStore
   */
  export type Inventory$subStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubStore
     */
    select?: SubStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubStoreInclude<ExtArgs> | null
    where?: SubStoreWhereInput
  }

  /**
   * Inventory.pharmacy
   */
  export type Inventory$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
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


  export const DoctorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    designation: 'designation',
    contact: 'contact',
    email: 'email',
    password: 'password',
    active: 'active',
    departmentId: 'departmentId'
  };

  export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    headOfDepartmentId: 'headOfDepartmentId'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const OPDQueueScalarFieldEnum: {
    id: 'id',
    patientInstanceId: 'patientInstanceId',
    doctorId: 'doctorId',
    status: 'status',
    queueNumber: 'queueNumber',
    timeStamp: 'timeStamp'
  };

  export type OPDQueueScalarFieldEnum = (typeof OPDQueueScalarFieldEnum)[keyof typeof OPDQueueScalarFieldEnum]


  export const BedScalarFieldEnum: {
    id: 'id',
    bedNumber: 'bedNumber',
    wardId: 'wardId',
    status: 'status'
  };

  export type BedScalarFieldEnum = (typeof BedScalarFieldEnum)[keyof typeof BedScalarFieldEnum]


  export const WardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalBeds: 'totalBeds',
    availableBeds: 'availableBeds'
  };

  export type WardScalarFieldEnum = (typeof WardScalarFieldEnum)[keyof typeof WardScalarFieldEnum]


  export const PatientInstanceScalarFieldEnum: {
    id: 'id',
    abhaId: 'abhaId',
    doctorId: 'doctorId',
    queueNumber: 'queueNumber',
    medications: 'medications',
    feedback: 'feedback',
    visitType: 'visitType'
  };

  export type PatientInstanceScalarFieldEnum = (typeof PatientInstanceScalarFieldEnum)[keyof typeof PatientInstanceScalarFieldEnum]


  export const AdmissionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    wardId: 'wardId',
    bedId: 'bedId',
    doctorId: 'doctorId'
  };

  export type AdmissionScalarFieldEnum = (typeof AdmissionScalarFieldEnum)[keyof typeof AdmissionScalarFieldEnum]


  export const MainStoreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MainStoreScalarFieldEnum = (typeof MainStoreScalarFieldEnum)[keyof typeof MainStoreScalarFieldEnum]


  export const SubStoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mainStoreId: 'mainStoreId'
  };

  export type SubStoreScalarFieldEnum = (typeof SubStoreScalarFieldEnum)[keyof typeof SubStoreScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subStoreId: 'subStoreId'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    itemName: 'itemName',
    category: 'category',
    quantity: 'quantity',
    price: 'price',
    reorderLevel: 'reorderLevel',
    lastOrderDate: 'lastOrderDate',
    stockBatches: 'stockBatches',
    mainStoreId: 'mainStoreId',
    subStoreId: 'subStoreId',
    pharmacyId: 'pharmacyId'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DesignationType'
   */
  export type EnumDesignationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignationType'>
    


  /**
   * Reference to a field of type 'DesignationType[]'
   */
  export type ListEnumDesignationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QueueStatus'
   */
  export type EnumQueueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueueStatus'>
    


  /**
   * Reference to a field of type 'QueueStatus[]'
   */
  export type ListEnumQueueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueueStatus[]'>
    


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
   * Reference to a field of type 'BedStatus'
   */
  export type EnumBedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BedStatus'>
    


  /**
   * Reference to a field of type 'BedStatus[]'
   */
  export type ListEnumBedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BedStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'VisitType'
   */
  export type EnumVisitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisitType'>
    


  /**
   * Reference to a field of type 'VisitType[]'
   */
  export type ListEnumVisitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisitType[]'>
    


  /**
   * Reference to a field of type 'InventoryCategory'
   */
  export type EnumInventoryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryCategory'>
    


  /**
   * Reference to a field of type 'InventoryCategory[]'
   */
  export type ListEnumInventoryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    
  /**
   * Deep Input Types
   */


  export type DoctorsWhereInput = {
    AND?: DoctorsWhereInput | DoctorsWhereInput[]
    OR?: DoctorsWhereInput[]
    NOT?: DoctorsWhereInput | DoctorsWhereInput[]
    id?: StringFilter<"Doctors"> | string
    name?: StringFilter<"Doctors"> | string
    gender?: StringFilter<"Doctors"> | string
    designation?: EnumDesignationTypeFilter<"Doctors"> | $Enums.DesignationType
    contact?: StringFilter<"Doctors"> | string
    email?: StringFilter<"Doctors"> | string
    password?: StringFilter<"Doctors"> | string
    active?: BoolFilter<"Doctors"> | boolean
    departmentId?: StringFilter<"Doctors"> | string
    department?: XOR<DepartmentsRelationFilter, DepartmentsWhereInput>
    opdQueue?: OPDQueueListRelationFilter
    admissions?: AdmissionListRelationFilter
    patientInstances?: PatientInstanceListRelationFilter
  }

  export type DoctorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    departmentId?: SortOrder
    department?: DepartmentsOrderByWithRelationInput
    opdQueue?: OPDQueueOrderByRelationAggregateInput
    admissions?: AdmissionOrderByRelationAggregateInput
    patientInstances?: PatientInstanceOrderByRelationAggregateInput
  }

  export type DoctorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: DoctorsWhereInput | DoctorsWhereInput[]
    OR?: DoctorsWhereInput[]
    NOT?: DoctorsWhereInput | DoctorsWhereInput[]
    name?: StringFilter<"Doctors"> | string
    gender?: StringFilter<"Doctors"> | string
    designation?: EnumDesignationTypeFilter<"Doctors"> | $Enums.DesignationType
    contact?: StringFilter<"Doctors"> | string
    password?: StringFilter<"Doctors"> | string
    active?: BoolFilter<"Doctors"> | boolean
    departmentId?: StringFilter<"Doctors"> | string
    department?: XOR<DepartmentsRelationFilter, DepartmentsWhereInput>
    opdQueue?: OPDQueueListRelationFilter
    admissions?: AdmissionListRelationFilter
    patientInstances?: PatientInstanceListRelationFilter
  }, "id" | "email">

  export type DoctorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    departmentId?: SortOrder
    _count?: DoctorsCountOrderByAggregateInput
    _max?: DoctorsMaxOrderByAggregateInput
    _min?: DoctorsMinOrderByAggregateInput
  }

  export type DoctorsScalarWhereWithAggregatesInput = {
    AND?: DoctorsScalarWhereWithAggregatesInput | DoctorsScalarWhereWithAggregatesInput[]
    OR?: DoctorsScalarWhereWithAggregatesInput[]
    NOT?: DoctorsScalarWhereWithAggregatesInput | DoctorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctors"> | string
    name?: StringWithAggregatesFilter<"Doctors"> | string
    gender?: StringWithAggregatesFilter<"Doctors"> | string
    designation?: EnumDesignationTypeWithAggregatesFilter<"Doctors"> | $Enums.DesignationType
    contact?: StringWithAggregatesFilter<"Doctors"> | string
    email?: StringWithAggregatesFilter<"Doctors"> | string
    password?: StringWithAggregatesFilter<"Doctors"> | string
    active?: BoolWithAggregatesFilter<"Doctors"> | boolean
    departmentId?: StringWithAggregatesFilter<"Doctors"> | string
  }

  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    id?: StringFilter<"Departments"> | string
    name?: StringFilter<"Departments"> | string
    headOfDepartmentId?: StringFilter<"Departments"> | string
    doctors?: DoctorsListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    headOfDepartmentId?: SortOrder
    doctors?: DoctorsOrderByRelationAggregateInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    name?: StringFilter<"Departments"> | string
    headOfDepartmentId?: StringFilter<"Departments"> | string
    doctors?: DoctorsListRelationFilter
  }, "id">

  export type DepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    headOfDepartmentId?: SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Departments"> | string
    name?: StringWithAggregatesFilter<"Departments"> | string
    headOfDepartmentId?: StringWithAggregatesFilter<"Departments"> | string
  }

  export type OPDQueueWhereInput = {
    AND?: OPDQueueWhereInput | OPDQueueWhereInput[]
    OR?: OPDQueueWhereInput[]
    NOT?: OPDQueueWhereInput | OPDQueueWhereInput[]
    id?: StringFilter<"OPDQueue"> | string
    patientInstanceId?: StringFilter<"OPDQueue"> | string
    doctorId?: StringFilter<"OPDQueue"> | string
    status?: EnumQueueStatusFilter<"OPDQueue"> | $Enums.QueueStatus
    queueNumber?: IntFilter<"OPDQueue"> | number
    timeStamp?: DateTimeNullableFilter<"OPDQueue"> | Date | string | null
    patientInstance?: XOR<PatientInstanceRelationFilter, PatientInstanceWhereInput>
    doctor?: XOR<DoctorsRelationFilter, DoctorsWhereInput>
  }

  export type OPDQueueOrderByWithRelationInput = {
    id?: SortOrder
    patientInstanceId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    queueNumber?: SortOrder
    timeStamp?: SortOrderInput | SortOrder
    patientInstance?: PatientInstanceOrderByWithRelationInput
    doctor?: DoctorsOrderByWithRelationInput
  }

  export type OPDQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientInstanceId?: string
    AND?: OPDQueueWhereInput | OPDQueueWhereInput[]
    OR?: OPDQueueWhereInput[]
    NOT?: OPDQueueWhereInput | OPDQueueWhereInput[]
    doctorId?: StringFilter<"OPDQueue"> | string
    status?: EnumQueueStatusFilter<"OPDQueue"> | $Enums.QueueStatus
    queueNumber?: IntFilter<"OPDQueue"> | number
    timeStamp?: DateTimeNullableFilter<"OPDQueue"> | Date | string | null
    patientInstance?: XOR<PatientInstanceRelationFilter, PatientInstanceWhereInput>
    doctor?: XOR<DoctorsRelationFilter, DoctorsWhereInput>
  }, "id" | "patientInstanceId">

  export type OPDQueueOrderByWithAggregationInput = {
    id?: SortOrder
    patientInstanceId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    queueNumber?: SortOrder
    timeStamp?: SortOrderInput | SortOrder
    _count?: OPDQueueCountOrderByAggregateInput
    _avg?: OPDQueueAvgOrderByAggregateInput
    _max?: OPDQueueMaxOrderByAggregateInput
    _min?: OPDQueueMinOrderByAggregateInput
    _sum?: OPDQueueSumOrderByAggregateInput
  }

  export type OPDQueueScalarWhereWithAggregatesInput = {
    AND?: OPDQueueScalarWhereWithAggregatesInput | OPDQueueScalarWhereWithAggregatesInput[]
    OR?: OPDQueueScalarWhereWithAggregatesInput[]
    NOT?: OPDQueueScalarWhereWithAggregatesInput | OPDQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OPDQueue"> | string
    patientInstanceId?: StringWithAggregatesFilter<"OPDQueue"> | string
    doctorId?: StringWithAggregatesFilter<"OPDQueue"> | string
    status?: EnumQueueStatusWithAggregatesFilter<"OPDQueue"> | $Enums.QueueStatus
    queueNumber?: IntWithAggregatesFilter<"OPDQueue"> | number
    timeStamp?: DateTimeNullableWithAggregatesFilter<"OPDQueue"> | Date | string | null
  }

  export type BedWhereInput = {
    AND?: BedWhereInput | BedWhereInput[]
    OR?: BedWhereInput[]
    NOT?: BedWhereInput | BedWhereInput[]
    id?: StringFilter<"Bed"> | string
    bedNumber?: StringFilter<"Bed"> | string
    wardId?: StringFilter<"Bed"> | string
    status?: EnumBedStatusFilter<"Bed"> | $Enums.BedStatus
    ward?: XOR<WardRelationFilter, WardWhereInput>
    admissions?: AdmissionListRelationFilter
  }

  export type BedOrderByWithRelationInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    wardId?: SortOrder
    status?: SortOrder
    ward?: WardOrderByWithRelationInput
    admissions?: AdmissionOrderByRelationAggregateInput
  }

  export type BedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bedNumber?: string
    AND?: BedWhereInput | BedWhereInput[]
    OR?: BedWhereInput[]
    NOT?: BedWhereInput | BedWhereInput[]
    wardId?: StringFilter<"Bed"> | string
    status?: EnumBedStatusFilter<"Bed"> | $Enums.BedStatus
    ward?: XOR<WardRelationFilter, WardWhereInput>
    admissions?: AdmissionListRelationFilter
  }, "id" | "bedNumber">

  export type BedOrderByWithAggregationInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    wardId?: SortOrder
    status?: SortOrder
    _count?: BedCountOrderByAggregateInput
    _max?: BedMaxOrderByAggregateInput
    _min?: BedMinOrderByAggregateInput
  }

  export type BedScalarWhereWithAggregatesInput = {
    AND?: BedScalarWhereWithAggregatesInput | BedScalarWhereWithAggregatesInput[]
    OR?: BedScalarWhereWithAggregatesInput[]
    NOT?: BedScalarWhereWithAggregatesInput | BedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bed"> | string
    bedNumber?: StringWithAggregatesFilter<"Bed"> | string
    wardId?: StringWithAggregatesFilter<"Bed"> | string
    status?: EnumBedStatusWithAggregatesFilter<"Bed"> | $Enums.BedStatus
  }

  export type WardWhereInput = {
    AND?: WardWhereInput | WardWhereInput[]
    OR?: WardWhereInput[]
    NOT?: WardWhereInput | WardWhereInput[]
    id?: StringFilter<"Ward"> | string
    name?: StringFilter<"Ward"> | string
    totalBeds?: IntFilter<"Ward"> | number
    availableBeds?: IntFilter<"Ward"> | number
    beds?: BedListRelationFilter
    admissions?: AdmissionListRelationFilter
  }

  export type WardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalBeds?: SortOrder
    availableBeds?: SortOrder
    beds?: BedOrderByRelationAggregateInput
    admissions?: AdmissionOrderByRelationAggregateInput
  }

  export type WardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WardWhereInput | WardWhereInput[]
    OR?: WardWhereInput[]
    NOT?: WardWhereInput | WardWhereInput[]
    name?: StringFilter<"Ward"> | string
    totalBeds?: IntFilter<"Ward"> | number
    availableBeds?: IntFilter<"Ward"> | number
    beds?: BedListRelationFilter
    admissions?: AdmissionListRelationFilter
  }, "id">

  export type WardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalBeds?: SortOrder
    availableBeds?: SortOrder
    _count?: WardCountOrderByAggregateInput
    _avg?: WardAvgOrderByAggregateInput
    _max?: WardMaxOrderByAggregateInput
    _min?: WardMinOrderByAggregateInput
    _sum?: WardSumOrderByAggregateInput
  }

  export type WardScalarWhereWithAggregatesInput = {
    AND?: WardScalarWhereWithAggregatesInput | WardScalarWhereWithAggregatesInput[]
    OR?: WardScalarWhereWithAggregatesInput[]
    NOT?: WardScalarWhereWithAggregatesInput | WardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ward"> | string
    name?: StringWithAggregatesFilter<"Ward"> | string
    totalBeds?: IntWithAggregatesFilter<"Ward"> | number
    availableBeds?: IntWithAggregatesFilter<"Ward"> | number
  }

  export type PatientInstanceWhereInput = {
    AND?: PatientInstanceWhereInput | PatientInstanceWhereInput[]
    OR?: PatientInstanceWhereInput[]
    NOT?: PatientInstanceWhereInput | PatientInstanceWhereInput[]
    id?: StringFilter<"PatientInstance"> | string
    abhaId?: StringFilter<"PatientInstance"> | string
    doctorId?: StringFilter<"PatientInstance"> | string
    queueNumber?: IntNullableFilter<"PatientInstance"> | number | null
    medications?: JsonNullableFilter<"PatientInstance">
    feedback?: StringNullableFilter<"PatientInstance"> | string | null
    visitType?: EnumVisitTypeFilter<"PatientInstance"> | $Enums.VisitType
    doctor?: XOR<DoctorsRelationFilter, DoctorsWhereInput>
    opqueue?: OPDQueueListRelationFilter
    admission?: AdmissionListRelationFilter
  }

  export type PatientInstanceOrderByWithRelationInput = {
    id?: SortOrder
    abhaId?: SortOrder
    doctorId?: SortOrder
    queueNumber?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    visitType?: SortOrder
    doctor?: DoctorsOrderByWithRelationInput
    opqueue?: OPDQueueOrderByRelationAggregateInput
    admission?: AdmissionOrderByRelationAggregateInput
  }

  export type PatientInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    abhaId?: string
    AND?: PatientInstanceWhereInput | PatientInstanceWhereInput[]
    OR?: PatientInstanceWhereInput[]
    NOT?: PatientInstanceWhereInput | PatientInstanceWhereInput[]
    doctorId?: StringFilter<"PatientInstance"> | string
    queueNumber?: IntNullableFilter<"PatientInstance"> | number | null
    medications?: JsonNullableFilter<"PatientInstance">
    feedback?: StringNullableFilter<"PatientInstance"> | string | null
    visitType?: EnumVisitTypeFilter<"PatientInstance"> | $Enums.VisitType
    doctor?: XOR<DoctorsRelationFilter, DoctorsWhereInput>
    opqueue?: OPDQueueListRelationFilter
    admission?: AdmissionListRelationFilter
  }, "id" | "abhaId">

  export type PatientInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    abhaId?: SortOrder
    doctorId?: SortOrder
    queueNumber?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    visitType?: SortOrder
    _count?: PatientInstanceCountOrderByAggregateInput
    _avg?: PatientInstanceAvgOrderByAggregateInput
    _max?: PatientInstanceMaxOrderByAggregateInput
    _min?: PatientInstanceMinOrderByAggregateInput
    _sum?: PatientInstanceSumOrderByAggregateInput
  }

  export type PatientInstanceScalarWhereWithAggregatesInput = {
    AND?: PatientInstanceScalarWhereWithAggregatesInput | PatientInstanceScalarWhereWithAggregatesInput[]
    OR?: PatientInstanceScalarWhereWithAggregatesInput[]
    NOT?: PatientInstanceScalarWhereWithAggregatesInput | PatientInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientInstance"> | string
    abhaId?: StringWithAggregatesFilter<"PatientInstance"> | string
    doctorId?: StringWithAggregatesFilter<"PatientInstance"> | string
    queueNumber?: IntNullableWithAggregatesFilter<"PatientInstance"> | number | null
    medications?: JsonNullableWithAggregatesFilter<"PatientInstance">
    feedback?: StringNullableWithAggregatesFilter<"PatientInstance"> | string | null
    visitType?: EnumVisitTypeWithAggregatesFilter<"PatientInstance"> | $Enums.VisitType
  }

  export type AdmissionWhereInput = {
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    id?: StringFilter<"Admission"> | string
    patientId?: StringFilter<"Admission"> | string
    wardId?: StringNullableFilter<"Admission"> | string | null
    bedId?: StringNullableFilter<"Admission"> | string | null
    doctorId?: StringFilter<"Admission"> | string
    patinet?: XOR<PatientInstanceRelationFilter, PatientInstanceWhereInput>
    ward?: XOR<WardNullableRelationFilter, WardWhereInput> | null
    bed?: XOR<BedNullableRelationFilter, BedWhereInput> | null
    doctor?: XOR<DoctorsRelationFilter, DoctorsWhereInput>
  }

  export type AdmissionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    wardId?: SortOrderInput | SortOrder
    bedId?: SortOrderInput | SortOrder
    doctorId?: SortOrder
    patinet?: PatientInstanceOrderByWithRelationInput
    ward?: WardOrderByWithRelationInput
    bed?: BedOrderByWithRelationInput
    doctor?: DoctorsOrderByWithRelationInput
  }

  export type AdmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    patientId?: StringFilter<"Admission"> | string
    wardId?: StringNullableFilter<"Admission"> | string | null
    bedId?: StringNullableFilter<"Admission"> | string | null
    doctorId?: StringFilter<"Admission"> | string
    patinet?: XOR<PatientInstanceRelationFilter, PatientInstanceWhereInput>
    ward?: XOR<WardNullableRelationFilter, WardWhereInput> | null
    bed?: XOR<BedNullableRelationFilter, BedWhereInput> | null
    doctor?: XOR<DoctorsRelationFilter, DoctorsWhereInput>
  }, "id">

  export type AdmissionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    wardId?: SortOrderInput | SortOrder
    bedId?: SortOrderInput | SortOrder
    doctorId?: SortOrder
    _count?: AdmissionCountOrderByAggregateInput
    _max?: AdmissionMaxOrderByAggregateInput
    _min?: AdmissionMinOrderByAggregateInput
  }

  export type AdmissionScalarWhereWithAggregatesInput = {
    AND?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    OR?: AdmissionScalarWhereWithAggregatesInput[]
    NOT?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admission"> | string
    patientId?: StringWithAggregatesFilter<"Admission"> | string
    wardId?: StringNullableWithAggregatesFilter<"Admission"> | string | null
    bedId?: StringNullableWithAggregatesFilter<"Admission"> | string | null
    doctorId?: StringWithAggregatesFilter<"Admission"> | string
  }

  export type MainStoreWhereInput = {
    AND?: MainStoreWhereInput | MainStoreWhereInput[]
    OR?: MainStoreWhereInput[]
    NOT?: MainStoreWhereInput | MainStoreWhereInput[]
    id?: StringFilter<"MainStore"> | string
    name?: StringFilter<"MainStore"> | string
    inventory?: InventoryListRelationFilter
    subStores?: SubStoreListRelationFilter
  }

  export type MainStoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    inventory?: InventoryOrderByRelationAggregateInput
    subStores?: SubStoreOrderByRelationAggregateInput
  }

  export type MainStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MainStoreWhereInput | MainStoreWhereInput[]
    OR?: MainStoreWhereInput[]
    NOT?: MainStoreWhereInput | MainStoreWhereInput[]
    name?: StringFilter<"MainStore"> | string
    inventory?: InventoryListRelationFilter
    subStores?: SubStoreListRelationFilter
  }, "id">

  export type MainStoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MainStoreCountOrderByAggregateInput
    _max?: MainStoreMaxOrderByAggregateInput
    _min?: MainStoreMinOrderByAggregateInput
  }

  export type MainStoreScalarWhereWithAggregatesInput = {
    AND?: MainStoreScalarWhereWithAggregatesInput | MainStoreScalarWhereWithAggregatesInput[]
    OR?: MainStoreScalarWhereWithAggregatesInput[]
    NOT?: MainStoreScalarWhereWithAggregatesInput | MainStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MainStore"> | string
    name?: StringWithAggregatesFilter<"MainStore"> | string
  }

  export type SubStoreWhereInput = {
    AND?: SubStoreWhereInput | SubStoreWhereInput[]
    OR?: SubStoreWhereInput[]
    NOT?: SubStoreWhereInput | SubStoreWhereInput[]
    id?: StringFilter<"SubStore"> | string
    name?: StringFilter<"SubStore"> | string
    mainStoreId?: StringFilter<"SubStore"> | string
    mainStore?: XOR<MainStoreRelationFilter, MainStoreWhereInput>
    inventory?: InventoryListRelationFilter
    pharmacies?: PharmacyListRelationFilter
  }

  export type SubStoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mainStoreId?: SortOrder
    mainStore?: MainStoreOrderByWithRelationInput
    inventory?: InventoryOrderByRelationAggregateInput
    pharmacies?: PharmacyOrderByRelationAggregateInput
  }

  export type SubStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubStoreWhereInput | SubStoreWhereInput[]
    OR?: SubStoreWhereInput[]
    NOT?: SubStoreWhereInput | SubStoreWhereInput[]
    name?: StringFilter<"SubStore"> | string
    mainStoreId?: StringFilter<"SubStore"> | string
    mainStore?: XOR<MainStoreRelationFilter, MainStoreWhereInput>
    inventory?: InventoryListRelationFilter
    pharmacies?: PharmacyListRelationFilter
  }, "id">

  export type SubStoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mainStoreId?: SortOrder
    _count?: SubStoreCountOrderByAggregateInput
    _max?: SubStoreMaxOrderByAggregateInput
    _min?: SubStoreMinOrderByAggregateInput
  }

  export type SubStoreScalarWhereWithAggregatesInput = {
    AND?: SubStoreScalarWhereWithAggregatesInput | SubStoreScalarWhereWithAggregatesInput[]
    OR?: SubStoreScalarWhereWithAggregatesInput[]
    NOT?: SubStoreScalarWhereWithAggregatesInput | SubStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubStore"> | string
    name?: StringWithAggregatesFilter<"SubStore"> | string
    mainStoreId?: StringWithAggregatesFilter<"SubStore"> | string
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    id?: StringFilter<"Pharmacy"> | string
    name?: StringFilter<"Pharmacy"> | string
    subStoreId?: StringFilter<"Pharmacy"> | string
    subStore?: XOR<SubStoreRelationFilter, SubStoreWhereInput>
    inventory?: InventoryListRelationFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subStoreId?: SortOrder
    subStore?: SubStoreOrderByWithRelationInput
    inventory?: InventoryOrderByRelationAggregateInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    name?: StringFilter<"Pharmacy"> | string
    subStoreId?: StringFilter<"Pharmacy"> | string
    subStore?: XOR<SubStoreRelationFilter, SubStoreWhereInput>
    inventory?: InventoryListRelationFilter
  }, "id">

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subStoreId?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pharmacy"> | string
    name?: StringWithAggregatesFilter<"Pharmacy"> | string
    subStoreId?: StringWithAggregatesFilter<"Pharmacy"> | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    itemName?: StringFilter<"Inventory"> | string
    category?: EnumInventoryCategoryFilter<"Inventory"> | $Enums.InventoryCategory
    quantity?: IntFilter<"Inventory"> | number
    price?: FloatFilter<"Inventory"> | number
    reorderLevel?: IntFilter<"Inventory"> | number
    lastOrderDate?: DateTimeFilter<"Inventory"> | Date | string
    stockBatches?: JsonNullableListFilter<"Inventory">
    mainStoreId?: StringNullableFilter<"Inventory"> | string | null
    subStoreId?: StringNullableFilter<"Inventory"> | string | null
    pharmacyId?: StringNullableFilter<"Inventory"> | string | null
    mainStore?: XOR<MainStoreNullableRelationFilter, MainStoreWhereInput> | null
    subStore?: XOR<SubStoreNullableRelationFilter, SubStoreWhereInput> | null
    pharmacy?: XOR<PharmacyNullableRelationFilter, PharmacyWhereInput> | null
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    itemName?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
    lastOrderDate?: SortOrder
    stockBatches?: SortOrder
    mainStoreId?: SortOrderInput | SortOrder
    subStoreId?: SortOrderInput | SortOrder
    pharmacyId?: SortOrderInput | SortOrder
    mainStore?: MainStoreOrderByWithRelationInput
    subStore?: SubStoreOrderByWithRelationInput
    pharmacy?: PharmacyOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    itemName?: StringFilter<"Inventory"> | string
    category?: EnumInventoryCategoryFilter<"Inventory"> | $Enums.InventoryCategory
    quantity?: IntFilter<"Inventory"> | number
    price?: FloatFilter<"Inventory"> | number
    reorderLevel?: IntFilter<"Inventory"> | number
    lastOrderDate?: DateTimeFilter<"Inventory"> | Date | string
    stockBatches?: JsonNullableListFilter<"Inventory">
    mainStoreId?: StringNullableFilter<"Inventory"> | string | null
    subStoreId?: StringNullableFilter<"Inventory"> | string | null
    pharmacyId?: StringNullableFilter<"Inventory"> | string | null
    mainStore?: XOR<MainStoreNullableRelationFilter, MainStoreWhereInput> | null
    subStore?: XOR<SubStoreNullableRelationFilter, SubStoreWhereInput> | null
    pharmacy?: XOR<PharmacyNullableRelationFilter, PharmacyWhereInput> | null
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    itemName?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
    lastOrderDate?: SortOrder
    stockBatches?: SortOrder
    mainStoreId?: SortOrderInput | SortOrder
    subStoreId?: SortOrderInput | SortOrder
    pharmacyId?: SortOrderInput | SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    itemName?: StringWithAggregatesFilter<"Inventory"> | string
    category?: EnumInventoryCategoryWithAggregatesFilter<"Inventory"> | $Enums.InventoryCategory
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    price?: FloatWithAggregatesFilter<"Inventory"> | number
    reorderLevel?: IntWithAggregatesFilter<"Inventory"> | number
    lastOrderDate?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    stockBatches?: JsonNullableListFilter<"Inventory">
    mainStoreId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    subStoreId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    pharmacyId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
  }

  export type DoctorsCreateInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    department: DepartmentsCreateNestedOneWithoutDoctorsInput
    opdQueue?: OPDQueueCreateNestedManyWithoutDoctorInput
    admissions?: AdmissionCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    departmentId: string
    opdQueue?: OPDQueueUncheckedCreateNestedManyWithoutDoctorInput
    admissions?: AdmissionUncheckedCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    department?: DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput
    opdQueue?: OPDQueueUpdateManyWithoutDoctorNestedInput
    admissions?: AdmissionUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    opdQueue?: OPDQueueUncheckedUpdateManyWithoutDoctorNestedInput
    admissions?: AdmissionUncheckedUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsCreateManyInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    departmentId: string
  }

  export type DoctorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentsCreateInput = {
    id?: string
    name: string
    headOfDepartmentId?: string
    doctors?: DoctorsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateInput = {
    id?: string
    name: string
    headOfDepartmentId?: string
    doctors?: DoctorsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headOfDepartmentId?: StringFieldUpdateOperationsInput | string
    doctors?: DoctorsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headOfDepartmentId?: StringFieldUpdateOperationsInput | string
    doctors?: DoctorsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsCreateManyInput = {
    id?: string
    name: string
    headOfDepartmentId?: string
  }

  export type DepartmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headOfDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headOfDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type OPDQueueCreateInput = {
    id?: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
    patientInstance: PatientInstanceCreateNestedOneWithoutOpqueueInput
    doctor: DoctorsCreateNestedOneWithoutOpdQueueInput
  }

  export type OPDQueueUncheckedCreateInput = {
    id?: string
    patientInstanceId: string
    doctorId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
  }

  export type OPDQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patientInstance?: PatientInstanceUpdateOneRequiredWithoutOpqueueNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutOpdQueueNestedInput
  }

  export type OPDQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientInstanceId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OPDQueueCreateManyInput = {
    id?: string
    patientInstanceId: string
    doctorId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
  }

  export type OPDQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OPDQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientInstanceId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BedCreateInput = {
    id?: string
    bedNumber: string
    status: $Enums.BedStatus
    ward: WardCreateNestedOneWithoutBedsInput
    admissions?: AdmissionCreateNestedManyWithoutBedInput
  }

  export type BedUncheckedCreateInput = {
    id?: string
    bedNumber: string
    wardId: string
    status: $Enums.BedStatus
    admissions?: AdmissionUncheckedCreateNestedManyWithoutBedInput
  }

  export type BedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
    ward?: WardUpdateOneRequiredWithoutBedsNestedInput
    admissions?: AdmissionUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    wardId?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
    admissions?: AdmissionUncheckedUpdateManyWithoutBedNestedInput
  }

  export type BedCreateManyInput = {
    id?: string
    bedNumber: string
    wardId: string
    status: $Enums.BedStatus
  }

  export type BedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
  }

  export type BedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    wardId?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
  }

  export type WardCreateInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
    beds?: BedCreateNestedManyWithoutWardInput
    admissions?: AdmissionCreateNestedManyWithoutWardInput
  }

  export type WardUncheckedCreateInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
    beds?: BedUncheckedCreateNestedManyWithoutWardInput
    admissions?: AdmissionUncheckedCreateNestedManyWithoutWardInput
  }

  export type WardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
    beds?: BedUpdateManyWithoutWardNestedInput
    admissions?: AdmissionUpdateManyWithoutWardNestedInput
  }

  export type WardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
    beds?: BedUncheckedUpdateManyWithoutWardNestedInput
    admissions?: AdmissionUncheckedUpdateManyWithoutWardNestedInput
  }

  export type WardCreateManyInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
  }

  export type WardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
  }

  export type WardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
  }

  export type PatientInstanceCreateInput = {
    id?: string
    abhaId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    doctor: DoctorsCreateNestedOneWithoutPatientInstancesInput
    opqueue?: OPDQueueCreateNestedManyWithoutPatientInstanceInput
    admission?: AdmissionCreateNestedManyWithoutPatinetInput
  }

  export type PatientInstanceUncheckedCreateInput = {
    id?: string
    abhaId: string
    doctorId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    opqueue?: OPDQueueUncheckedCreateNestedManyWithoutPatientInstanceInput
    admission?: AdmissionUncheckedCreateNestedManyWithoutPatinetInput
  }

  export type PatientInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    doctor?: DoctorsUpdateOneRequiredWithoutPatientInstancesNestedInput
    opqueue?: OPDQueueUpdateManyWithoutPatientInstanceNestedInput
    admission?: AdmissionUpdateManyWithoutPatinetNestedInput
  }

  export type PatientInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    opqueue?: OPDQueueUncheckedUpdateManyWithoutPatientInstanceNestedInput
    admission?: AdmissionUncheckedUpdateManyWithoutPatinetNestedInput
  }

  export type PatientInstanceCreateManyInput = {
    id?: string
    abhaId: string
    doctorId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
  }

  export type PatientInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
  }

  export type PatientInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
  }

  export type AdmissionCreateInput = {
    id?: string
    patinet: PatientInstanceCreateNestedOneWithoutAdmissionInput
    ward?: WardCreateNestedOneWithoutAdmissionsInput
    bed?: BedCreateNestedOneWithoutAdmissionsInput
    doctor: DoctorsCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateInput = {
    id?: string
    patientId: string
    wardId?: string | null
    bedId?: string | null
    doctorId: string
  }

  export type AdmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patinet?: PatientInstanceUpdateOneRequiredWithoutAdmissionNestedInput
    ward?: WardUpdateOneWithoutAdmissionsNestedInput
    bed?: BedUpdateOneWithoutAdmissionsNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionCreateManyInput = {
    id?: string
    patientId: string
    wardId?: string | null
    bedId?: string | null
    doctorId: string
  }

  export type AdmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type MainStoreCreateInput = {
    id?: string
    name: string
    inventory?: InventoryCreateNestedManyWithoutMainStoreInput
    subStores?: SubStoreCreateNestedManyWithoutMainStoreInput
  }

  export type MainStoreUncheckedCreateInput = {
    id?: string
    name: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutMainStoreInput
    subStores?: SubStoreUncheckedCreateNestedManyWithoutMainStoreInput
  }

  export type MainStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUpdateManyWithoutMainStoreNestedInput
    subStores?: SubStoreUpdateManyWithoutMainStoreNestedInput
  }

  export type MainStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutMainStoreNestedInput
    subStores?: SubStoreUncheckedUpdateManyWithoutMainStoreNestedInput
  }

  export type MainStoreCreateManyInput = {
    id?: string
    name: string
  }

  export type MainStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MainStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubStoreCreateInput = {
    id?: string
    name: string
    mainStore: MainStoreCreateNestedOneWithoutSubStoresInput
    inventory?: InventoryCreateNestedManyWithoutSubStoreInput
    pharmacies?: PharmacyCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreUncheckedCreateInput = {
    id?: string
    name: string
    mainStoreId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutSubStoreInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStore?: MainStoreUpdateOneRequiredWithoutSubStoresNestedInput
    inventory?: InventoryUpdateManyWithoutSubStoreNestedInput
    pharmacies?: PharmacyUpdateManyWithoutSubStoreNestedInput
  }

  export type SubStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStoreId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutSubStoreNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutSubStoreNestedInput
  }

  export type SubStoreCreateManyInput = {
    id?: string
    name: string
    mainStoreId: string
  }

  export type SubStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStoreId?: StringFieldUpdateOperationsInput | string
  }

  export type PharmacyCreateInput = {
    id?: string
    name: string
    subStore: SubStoreCreateNestedOneWithoutPharmaciesInput
    inventory?: InventoryCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: string
    name: string
    subStoreId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStore?: SubStoreUpdateOneRequiredWithoutPharmaciesNestedInput
    inventory?: InventoryUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStoreId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateManyInput = {
    id?: string
    name: string
    subStoreId: string
  }

  export type PharmacyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStoreId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCreateInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStore?: MainStoreCreateNestedOneWithoutInventoryInput
    subStore?: SubStoreCreateNestedOneWithoutInventoryInput
    pharmacy?: PharmacyCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStoreId?: string | null
    subStoreId?: string | null
    pharmacyId?: string | null
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStore?: MainStoreUpdateOneWithoutInventoryNestedInput
    subStore?: SubStoreUpdateOneWithoutInventoryNestedInput
    pharmacy?: PharmacyUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    subStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCreateManyInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStoreId?: string | null
    subStoreId?: string | null
    pharmacyId?: string | null
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    subStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumDesignationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignationType | EnumDesignationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationTypeFilter<$PrismaModel> | $Enums.DesignationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DepartmentsRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type OPDQueueListRelationFilter = {
    every?: OPDQueueWhereInput
    some?: OPDQueueWhereInput
    none?: OPDQueueWhereInput
  }

  export type AdmissionListRelationFilter = {
    every?: AdmissionWhereInput
    some?: AdmissionWhereInput
    none?: AdmissionWhereInput
  }

  export type PatientInstanceListRelationFilter = {
    every?: PatientInstanceWhereInput
    some?: PatientInstanceWhereInput
    none?: PatientInstanceWhereInput
  }

  export type OPDQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    departmentId?: SortOrder
  }

  export type DoctorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    departmentId?: SortOrder
  }

  export type DoctorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    departmentId?: SortOrder
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

  export type EnumDesignationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignationType | EnumDesignationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationTypeWithAggregatesFilter<$PrismaModel> | $Enums.DesignationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignationTypeFilter<$PrismaModel>
    _max?: NestedEnumDesignationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DoctorsListRelationFilter = {
    every?: DoctorsWhereInput
    some?: DoctorsWhereInput
    none?: DoctorsWhereInput
  }

  export type DoctorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    headOfDepartmentId?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    headOfDepartmentId?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    headOfDepartmentId?: SortOrder
  }

  export type EnumQueueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusFilter<$PrismaModel> | $Enums.QueueStatus
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

  export type PatientInstanceRelationFilter = {
    is?: PatientInstanceWhereInput
    isNot?: PatientInstanceWhereInput
  }

  export type DoctorsRelationFilter = {
    is?: DoctorsWhereInput
    isNot?: DoctorsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OPDQueueCountOrderByAggregateInput = {
    id?: SortOrder
    patientInstanceId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    queueNumber?: SortOrder
    timeStamp?: SortOrder
  }

  export type OPDQueueAvgOrderByAggregateInput = {
    queueNumber?: SortOrder
  }

  export type OPDQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    patientInstanceId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    queueNumber?: SortOrder
    timeStamp?: SortOrder
  }

  export type OPDQueueMinOrderByAggregateInput = {
    id?: SortOrder
    patientInstanceId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    queueNumber?: SortOrder
    timeStamp?: SortOrder
  }

  export type OPDQueueSumOrderByAggregateInput = {
    queueNumber?: SortOrder
  }

  export type EnumQueueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusWithAggregatesFilter<$PrismaModel> | $Enums.QueueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueueStatusFilter<$PrismaModel>
    _max?: NestedEnumQueueStatusFilter<$PrismaModel>
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

  export type EnumBedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BedStatus | EnumBedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBedStatusFilter<$PrismaModel> | $Enums.BedStatus
  }

  export type WardRelationFilter = {
    is?: WardWhereInput
    isNot?: WardWhereInput
  }

  export type BedCountOrderByAggregateInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    wardId?: SortOrder
    status?: SortOrder
  }

  export type BedMaxOrderByAggregateInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    wardId?: SortOrder
    status?: SortOrder
  }

  export type BedMinOrderByAggregateInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    wardId?: SortOrder
    status?: SortOrder
  }

  export type EnumBedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BedStatus | EnumBedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBedStatusWithAggregatesFilter<$PrismaModel> | $Enums.BedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBedStatusFilter<$PrismaModel>
    _max?: NestedEnumBedStatusFilter<$PrismaModel>
  }

  export type BedListRelationFilter = {
    every?: BedWhereInput
    some?: BedWhereInput
    none?: BedWhereInput
  }

  export type BedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalBeds?: SortOrder
    availableBeds?: SortOrder
  }

  export type WardAvgOrderByAggregateInput = {
    totalBeds?: SortOrder
    availableBeds?: SortOrder
  }

  export type WardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalBeds?: SortOrder
    availableBeds?: SortOrder
  }

  export type WardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalBeds?: SortOrder
    availableBeds?: SortOrder
  }

  export type WardSumOrderByAggregateInput = {
    totalBeds?: SortOrder
    availableBeds?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EnumVisitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitType | EnumVisitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitTypeFilter<$PrismaModel> | $Enums.VisitType
  }

  export type PatientInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    abhaId?: SortOrder
    doctorId?: SortOrder
    queueNumber?: SortOrder
    medications?: SortOrder
    feedback?: SortOrder
    visitType?: SortOrder
  }

  export type PatientInstanceAvgOrderByAggregateInput = {
    queueNumber?: SortOrder
  }

  export type PatientInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    abhaId?: SortOrder
    doctorId?: SortOrder
    queueNumber?: SortOrder
    feedback?: SortOrder
    visitType?: SortOrder
  }

  export type PatientInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    abhaId?: SortOrder
    doctorId?: SortOrder
    queueNumber?: SortOrder
    feedback?: SortOrder
    visitType?: SortOrder
  }

  export type PatientInstanceSumOrderByAggregateInput = {
    queueNumber?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumVisitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitType | EnumVisitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitTypeWithAggregatesFilter<$PrismaModel> | $Enums.VisitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisitTypeFilter<$PrismaModel>
    _max?: NestedEnumVisitTypeFilter<$PrismaModel>
  }

  export type WardNullableRelationFilter = {
    is?: WardWhereInput | null
    isNot?: WardWhereInput | null
  }

  export type BedNullableRelationFilter = {
    is?: BedWhereInput | null
    isNot?: BedWhereInput | null
  }

  export type AdmissionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    wardId?: SortOrder
    bedId?: SortOrder
    doctorId?: SortOrder
  }

  export type AdmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    wardId?: SortOrder
    bedId?: SortOrder
    doctorId?: SortOrder
  }

  export type AdmissionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    wardId?: SortOrder
    bedId?: SortOrder
    doctorId?: SortOrder
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type SubStoreListRelationFilter = {
    every?: SubStoreWhereInput
    some?: SubStoreWhereInput
    none?: SubStoreWhereInput
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MainStoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MainStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MainStoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MainStoreRelationFilter = {
    is?: MainStoreWhereInput
    isNot?: MainStoreWhereInput
  }

  export type PharmacyListRelationFilter = {
    every?: PharmacyWhereInput
    some?: PharmacyWhereInput
    none?: PharmacyWhereInput
  }

  export type PharmacyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubStoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainStoreId?: SortOrder
  }

  export type SubStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainStoreId?: SortOrder
  }

  export type SubStoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainStoreId?: SortOrder
  }

  export type SubStoreRelationFilter = {
    is?: SubStoreWhereInput
    isNot?: SubStoreWhereInput
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subStoreId?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subStoreId?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subStoreId?: SortOrder
  }

  export type EnumInventoryCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryFilter<$PrismaModel> | $Enums.InventoryCategory
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MainStoreNullableRelationFilter = {
    is?: MainStoreWhereInput | null
    isNot?: MainStoreWhereInput | null
  }

  export type SubStoreNullableRelationFilter = {
    is?: SubStoreWhereInput | null
    isNot?: SubStoreWhereInput | null
  }

  export type PharmacyNullableRelationFilter = {
    is?: PharmacyWhereInput | null
    isNot?: PharmacyWhereInput | null
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
    lastOrderDate?: SortOrder
    stockBatches?: SortOrder
    mainStoreId?: SortOrder
    subStoreId?: SortOrder
    pharmacyId?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
    lastOrderDate?: SortOrder
    mainStoreId?: SortOrder
    subStoreId?: SortOrder
    pharmacyId?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
    lastOrderDate?: SortOrder
    mainStoreId?: SortOrder
    subStoreId?: SortOrder
    pharmacyId?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    reorderLevel?: SortOrder
  }

  export type EnumInventoryCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InventoryCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryCategoryFilter<$PrismaModel>
    _max?: NestedEnumInventoryCategoryFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type DepartmentsCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDoctorsInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type OPDQueueCreateNestedManyWithoutDoctorInput = {
    create?: XOR<OPDQueueCreateWithoutDoctorInput, OPDQueueUncheckedCreateWithoutDoctorInput> | OPDQueueCreateWithoutDoctorInput[] | OPDQueueUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutDoctorInput | OPDQueueCreateOrConnectWithoutDoctorInput[]
    createMany?: OPDQueueCreateManyDoctorInputEnvelope
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
  }

  export type AdmissionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AdmissionCreateWithoutDoctorInput, AdmissionUncheckedCreateWithoutDoctorInput> | AdmissionCreateWithoutDoctorInput[] | AdmissionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutDoctorInput | AdmissionCreateOrConnectWithoutDoctorInput[]
    createMany?: AdmissionCreateManyDoctorInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type PatientInstanceCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PatientInstanceCreateWithoutDoctorInput, PatientInstanceUncheckedCreateWithoutDoctorInput> | PatientInstanceCreateWithoutDoctorInput[] | PatientInstanceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutDoctorInput | PatientInstanceCreateOrConnectWithoutDoctorInput[]
    createMany?: PatientInstanceCreateManyDoctorInputEnvelope
    connect?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
  }

  export type OPDQueueUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<OPDQueueCreateWithoutDoctorInput, OPDQueueUncheckedCreateWithoutDoctorInput> | OPDQueueCreateWithoutDoctorInput[] | OPDQueueUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutDoctorInput | OPDQueueCreateOrConnectWithoutDoctorInput[]
    createMany?: OPDQueueCreateManyDoctorInputEnvelope
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AdmissionCreateWithoutDoctorInput, AdmissionUncheckedCreateWithoutDoctorInput> | AdmissionCreateWithoutDoctorInput[] | AdmissionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutDoctorInput | AdmissionCreateOrConnectWithoutDoctorInput[]
    createMany?: AdmissionCreateManyDoctorInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type PatientInstanceUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PatientInstanceCreateWithoutDoctorInput, PatientInstanceUncheckedCreateWithoutDoctorInput> | PatientInstanceCreateWithoutDoctorInput[] | PatientInstanceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutDoctorInput | PatientInstanceCreateOrConnectWithoutDoctorInput[]
    createMany?: PatientInstanceCreateManyDoctorInputEnvelope
    connect?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDesignationTypeFieldUpdateOperationsInput = {
    set?: $Enums.DesignationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDoctorsInput
    upsert?: DepartmentsUpsertWithoutDoctorsInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutDoctorsInput, DepartmentsUpdateWithoutDoctorsInput>, DepartmentsUncheckedUpdateWithoutDoctorsInput>
  }

  export type OPDQueueUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<OPDQueueCreateWithoutDoctorInput, OPDQueueUncheckedCreateWithoutDoctorInput> | OPDQueueCreateWithoutDoctorInput[] | OPDQueueUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutDoctorInput | OPDQueueCreateOrConnectWithoutDoctorInput[]
    upsert?: OPDQueueUpsertWithWhereUniqueWithoutDoctorInput | OPDQueueUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: OPDQueueCreateManyDoctorInputEnvelope
    set?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    disconnect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    delete?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    update?: OPDQueueUpdateWithWhereUniqueWithoutDoctorInput | OPDQueueUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: OPDQueueUpdateManyWithWhereWithoutDoctorInput | OPDQueueUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: OPDQueueScalarWhereInput | OPDQueueScalarWhereInput[]
  }

  export type AdmissionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AdmissionCreateWithoutDoctorInput, AdmissionUncheckedCreateWithoutDoctorInput> | AdmissionCreateWithoutDoctorInput[] | AdmissionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutDoctorInput | AdmissionCreateOrConnectWithoutDoctorInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutDoctorInput | AdmissionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AdmissionCreateManyDoctorInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutDoctorInput | AdmissionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutDoctorInput | AdmissionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type PatientInstanceUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PatientInstanceCreateWithoutDoctorInput, PatientInstanceUncheckedCreateWithoutDoctorInput> | PatientInstanceCreateWithoutDoctorInput[] | PatientInstanceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutDoctorInput | PatientInstanceCreateOrConnectWithoutDoctorInput[]
    upsert?: PatientInstanceUpsertWithWhereUniqueWithoutDoctorInput | PatientInstanceUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PatientInstanceCreateManyDoctorInputEnvelope
    set?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    disconnect?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    delete?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    connect?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    update?: PatientInstanceUpdateWithWhereUniqueWithoutDoctorInput | PatientInstanceUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PatientInstanceUpdateManyWithWhereWithoutDoctorInput | PatientInstanceUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PatientInstanceScalarWhereInput | PatientInstanceScalarWhereInput[]
  }

  export type OPDQueueUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<OPDQueueCreateWithoutDoctorInput, OPDQueueUncheckedCreateWithoutDoctorInput> | OPDQueueCreateWithoutDoctorInput[] | OPDQueueUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutDoctorInput | OPDQueueCreateOrConnectWithoutDoctorInput[]
    upsert?: OPDQueueUpsertWithWhereUniqueWithoutDoctorInput | OPDQueueUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: OPDQueueCreateManyDoctorInputEnvelope
    set?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    disconnect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    delete?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    update?: OPDQueueUpdateWithWhereUniqueWithoutDoctorInput | OPDQueueUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: OPDQueueUpdateManyWithWhereWithoutDoctorInput | OPDQueueUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: OPDQueueScalarWhereInput | OPDQueueScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AdmissionCreateWithoutDoctorInput, AdmissionUncheckedCreateWithoutDoctorInput> | AdmissionCreateWithoutDoctorInput[] | AdmissionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutDoctorInput | AdmissionCreateOrConnectWithoutDoctorInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutDoctorInput | AdmissionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AdmissionCreateManyDoctorInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutDoctorInput | AdmissionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutDoctorInput | AdmissionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type PatientInstanceUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PatientInstanceCreateWithoutDoctorInput, PatientInstanceUncheckedCreateWithoutDoctorInput> | PatientInstanceCreateWithoutDoctorInput[] | PatientInstanceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutDoctorInput | PatientInstanceCreateOrConnectWithoutDoctorInput[]
    upsert?: PatientInstanceUpsertWithWhereUniqueWithoutDoctorInput | PatientInstanceUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PatientInstanceCreateManyDoctorInputEnvelope
    set?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    disconnect?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    delete?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    connect?: PatientInstanceWhereUniqueInput | PatientInstanceWhereUniqueInput[]
    update?: PatientInstanceUpdateWithWhereUniqueWithoutDoctorInput | PatientInstanceUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PatientInstanceUpdateManyWithWhereWithoutDoctorInput | PatientInstanceUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PatientInstanceScalarWhereInput | PatientInstanceScalarWhereInput[]
  }

  export type DoctorsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentInput, DoctorsUncheckedCreateWithoutDepartmentInput> | DoctorsCreateWithoutDepartmentInput[] | DoctorsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentInput | DoctorsCreateOrConnectWithoutDepartmentInput[]
    createMany?: DoctorsCreateManyDepartmentInputEnvelope
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
  }

  export type DoctorsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentInput, DoctorsUncheckedCreateWithoutDepartmentInput> | DoctorsCreateWithoutDepartmentInput[] | DoctorsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentInput | DoctorsCreateOrConnectWithoutDepartmentInput[]
    createMany?: DoctorsCreateManyDepartmentInputEnvelope
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
  }

  export type DoctorsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentInput, DoctorsUncheckedCreateWithoutDepartmentInput> | DoctorsCreateWithoutDepartmentInput[] | DoctorsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentInput | DoctorsCreateOrConnectWithoutDepartmentInput[]
    upsert?: DoctorsUpsertWithWhereUniqueWithoutDepartmentInput | DoctorsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DoctorsCreateManyDepartmentInputEnvelope
    set?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    disconnect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    delete?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    update?: DoctorsUpdateWithWhereUniqueWithoutDepartmentInput | DoctorsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DoctorsUpdateManyWithWhereWithoutDepartmentInput | DoctorsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
  }

  export type DoctorsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentInput, DoctorsUncheckedCreateWithoutDepartmentInput> | DoctorsCreateWithoutDepartmentInput[] | DoctorsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentInput | DoctorsCreateOrConnectWithoutDepartmentInput[]
    upsert?: DoctorsUpsertWithWhereUniqueWithoutDepartmentInput | DoctorsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DoctorsCreateManyDepartmentInputEnvelope
    set?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    disconnect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    delete?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    update?: DoctorsUpdateWithWhereUniqueWithoutDepartmentInput | DoctorsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DoctorsUpdateManyWithWhereWithoutDepartmentInput | DoctorsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
  }

  export type PatientInstanceCreateNestedOneWithoutOpqueueInput = {
    create?: XOR<PatientInstanceCreateWithoutOpqueueInput, PatientInstanceUncheckedCreateWithoutOpqueueInput>
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutOpqueueInput
    connect?: PatientInstanceWhereUniqueInput
  }

  export type DoctorsCreateNestedOneWithoutOpdQueueInput = {
    create?: XOR<DoctorsCreateWithoutOpdQueueInput, DoctorsUncheckedCreateWithoutOpdQueueInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutOpdQueueInput
    connect?: DoctorsWhereUniqueInput
  }

  export type EnumQueueStatusFieldUpdateOperationsInput = {
    set?: $Enums.QueueStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientInstanceUpdateOneRequiredWithoutOpqueueNestedInput = {
    create?: XOR<PatientInstanceCreateWithoutOpqueueInput, PatientInstanceUncheckedCreateWithoutOpqueueInput>
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutOpqueueInput
    upsert?: PatientInstanceUpsertWithoutOpqueueInput
    connect?: PatientInstanceWhereUniqueInput
    update?: XOR<XOR<PatientInstanceUpdateToOneWithWhereWithoutOpqueueInput, PatientInstanceUpdateWithoutOpqueueInput>, PatientInstanceUncheckedUpdateWithoutOpqueueInput>
  }

  export type DoctorsUpdateOneRequiredWithoutOpdQueueNestedInput = {
    create?: XOR<DoctorsCreateWithoutOpdQueueInput, DoctorsUncheckedCreateWithoutOpdQueueInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutOpdQueueInput
    upsert?: DoctorsUpsertWithoutOpdQueueInput
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutOpdQueueInput, DoctorsUpdateWithoutOpdQueueInput>, DoctorsUncheckedUpdateWithoutOpdQueueInput>
  }

  export type WardCreateNestedOneWithoutBedsInput = {
    create?: XOR<WardCreateWithoutBedsInput, WardUncheckedCreateWithoutBedsInput>
    connectOrCreate?: WardCreateOrConnectWithoutBedsInput
    connect?: WardWhereUniqueInput
  }

  export type AdmissionCreateNestedManyWithoutBedInput = {
    create?: XOR<AdmissionCreateWithoutBedInput, AdmissionUncheckedCreateWithoutBedInput> | AdmissionCreateWithoutBedInput[] | AdmissionUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutBedInput | AdmissionCreateOrConnectWithoutBedInput[]
    createMany?: AdmissionCreateManyBedInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutBedInput = {
    create?: XOR<AdmissionCreateWithoutBedInput, AdmissionUncheckedCreateWithoutBedInput> | AdmissionCreateWithoutBedInput[] | AdmissionUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutBedInput | AdmissionCreateOrConnectWithoutBedInput[]
    createMany?: AdmissionCreateManyBedInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type EnumBedStatusFieldUpdateOperationsInput = {
    set?: $Enums.BedStatus
  }

  export type WardUpdateOneRequiredWithoutBedsNestedInput = {
    create?: XOR<WardCreateWithoutBedsInput, WardUncheckedCreateWithoutBedsInput>
    connectOrCreate?: WardCreateOrConnectWithoutBedsInput
    upsert?: WardUpsertWithoutBedsInput
    connect?: WardWhereUniqueInput
    update?: XOR<XOR<WardUpdateToOneWithWhereWithoutBedsInput, WardUpdateWithoutBedsInput>, WardUncheckedUpdateWithoutBedsInput>
  }

  export type AdmissionUpdateManyWithoutBedNestedInput = {
    create?: XOR<AdmissionCreateWithoutBedInput, AdmissionUncheckedCreateWithoutBedInput> | AdmissionCreateWithoutBedInput[] | AdmissionUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutBedInput | AdmissionCreateOrConnectWithoutBedInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutBedInput | AdmissionUpsertWithWhereUniqueWithoutBedInput[]
    createMany?: AdmissionCreateManyBedInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutBedInput | AdmissionUpdateWithWhereUniqueWithoutBedInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutBedInput | AdmissionUpdateManyWithWhereWithoutBedInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutBedNestedInput = {
    create?: XOR<AdmissionCreateWithoutBedInput, AdmissionUncheckedCreateWithoutBedInput> | AdmissionCreateWithoutBedInput[] | AdmissionUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutBedInput | AdmissionCreateOrConnectWithoutBedInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutBedInput | AdmissionUpsertWithWhereUniqueWithoutBedInput[]
    createMany?: AdmissionCreateManyBedInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutBedInput | AdmissionUpdateWithWhereUniqueWithoutBedInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutBedInput | AdmissionUpdateManyWithWhereWithoutBedInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type BedCreateNestedManyWithoutWardInput = {
    create?: XOR<BedCreateWithoutWardInput, BedUncheckedCreateWithoutWardInput> | BedCreateWithoutWardInput[] | BedUncheckedCreateWithoutWardInput[]
    connectOrCreate?: BedCreateOrConnectWithoutWardInput | BedCreateOrConnectWithoutWardInput[]
    createMany?: BedCreateManyWardInputEnvelope
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
  }

  export type AdmissionCreateNestedManyWithoutWardInput = {
    create?: XOR<AdmissionCreateWithoutWardInput, AdmissionUncheckedCreateWithoutWardInput> | AdmissionCreateWithoutWardInput[] | AdmissionUncheckedCreateWithoutWardInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutWardInput | AdmissionCreateOrConnectWithoutWardInput[]
    createMany?: AdmissionCreateManyWardInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type BedUncheckedCreateNestedManyWithoutWardInput = {
    create?: XOR<BedCreateWithoutWardInput, BedUncheckedCreateWithoutWardInput> | BedCreateWithoutWardInput[] | BedUncheckedCreateWithoutWardInput[]
    connectOrCreate?: BedCreateOrConnectWithoutWardInput | BedCreateOrConnectWithoutWardInput[]
    createMany?: BedCreateManyWardInputEnvelope
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutWardInput = {
    create?: XOR<AdmissionCreateWithoutWardInput, AdmissionUncheckedCreateWithoutWardInput> | AdmissionCreateWithoutWardInput[] | AdmissionUncheckedCreateWithoutWardInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutWardInput | AdmissionCreateOrConnectWithoutWardInput[]
    createMany?: AdmissionCreateManyWardInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type BedUpdateManyWithoutWardNestedInput = {
    create?: XOR<BedCreateWithoutWardInput, BedUncheckedCreateWithoutWardInput> | BedCreateWithoutWardInput[] | BedUncheckedCreateWithoutWardInput[]
    connectOrCreate?: BedCreateOrConnectWithoutWardInput | BedCreateOrConnectWithoutWardInput[]
    upsert?: BedUpsertWithWhereUniqueWithoutWardInput | BedUpsertWithWhereUniqueWithoutWardInput[]
    createMany?: BedCreateManyWardInputEnvelope
    set?: BedWhereUniqueInput | BedWhereUniqueInput[]
    disconnect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    delete?: BedWhereUniqueInput | BedWhereUniqueInput[]
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    update?: BedUpdateWithWhereUniqueWithoutWardInput | BedUpdateWithWhereUniqueWithoutWardInput[]
    updateMany?: BedUpdateManyWithWhereWithoutWardInput | BedUpdateManyWithWhereWithoutWardInput[]
    deleteMany?: BedScalarWhereInput | BedScalarWhereInput[]
  }

  export type AdmissionUpdateManyWithoutWardNestedInput = {
    create?: XOR<AdmissionCreateWithoutWardInput, AdmissionUncheckedCreateWithoutWardInput> | AdmissionCreateWithoutWardInput[] | AdmissionUncheckedCreateWithoutWardInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutWardInput | AdmissionCreateOrConnectWithoutWardInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutWardInput | AdmissionUpsertWithWhereUniqueWithoutWardInput[]
    createMany?: AdmissionCreateManyWardInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutWardInput | AdmissionUpdateWithWhereUniqueWithoutWardInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutWardInput | AdmissionUpdateManyWithWhereWithoutWardInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type BedUncheckedUpdateManyWithoutWardNestedInput = {
    create?: XOR<BedCreateWithoutWardInput, BedUncheckedCreateWithoutWardInput> | BedCreateWithoutWardInput[] | BedUncheckedCreateWithoutWardInput[]
    connectOrCreate?: BedCreateOrConnectWithoutWardInput | BedCreateOrConnectWithoutWardInput[]
    upsert?: BedUpsertWithWhereUniqueWithoutWardInput | BedUpsertWithWhereUniqueWithoutWardInput[]
    createMany?: BedCreateManyWardInputEnvelope
    set?: BedWhereUniqueInput | BedWhereUniqueInput[]
    disconnect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    delete?: BedWhereUniqueInput | BedWhereUniqueInput[]
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    update?: BedUpdateWithWhereUniqueWithoutWardInput | BedUpdateWithWhereUniqueWithoutWardInput[]
    updateMany?: BedUpdateManyWithWhereWithoutWardInput | BedUpdateManyWithWhereWithoutWardInput[]
    deleteMany?: BedScalarWhereInput | BedScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutWardNestedInput = {
    create?: XOR<AdmissionCreateWithoutWardInput, AdmissionUncheckedCreateWithoutWardInput> | AdmissionCreateWithoutWardInput[] | AdmissionUncheckedCreateWithoutWardInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutWardInput | AdmissionCreateOrConnectWithoutWardInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutWardInput | AdmissionUpsertWithWhereUniqueWithoutWardInput[]
    createMany?: AdmissionCreateManyWardInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutWardInput | AdmissionUpdateWithWhereUniqueWithoutWardInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutWardInput | AdmissionUpdateManyWithWhereWithoutWardInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type DoctorsCreateNestedOneWithoutPatientInstancesInput = {
    create?: XOR<DoctorsCreateWithoutPatientInstancesInput, DoctorsUncheckedCreateWithoutPatientInstancesInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutPatientInstancesInput
    connect?: DoctorsWhereUniqueInput
  }

  export type OPDQueueCreateNestedManyWithoutPatientInstanceInput = {
    create?: XOR<OPDQueueCreateWithoutPatientInstanceInput, OPDQueueUncheckedCreateWithoutPatientInstanceInput> | OPDQueueCreateWithoutPatientInstanceInput[] | OPDQueueUncheckedCreateWithoutPatientInstanceInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutPatientInstanceInput | OPDQueueCreateOrConnectWithoutPatientInstanceInput[]
    createMany?: OPDQueueCreateManyPatientInstanceInputEnvelope
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
  }

  export type AdmissionCreateNestedManyWithoutPatinetInput = {
    create?: XOR<AdmissionCreateWithoutPatinetInput, AdmissionUncheckedCreateWithoutPatinetInput> | AdmissionCreateWithoutPatinetInput[] | AdmissionUncheckedCreateWithoutPatinetInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatinetInput | AdmissionCreateOrConnectWithoutPatinetInput[]
    createMany?: AdmissionCreateManyPatinetInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type OPDQueueUncheckedCreateNestedManyWithoutPatientInstanceInput = {
    create?: XOR<OPDQueueCreateWithoutPatientInstanceInput, OPDQueueUncheckedCreateWithoutPatientInstanceInput> | OPDQueueCreateWithoutPatientInstanceInput[] | OPDQueueUncheckedCreateWithoutPatientInstanceInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutPatientInstanceInput | OPDQueueCreateOrConnectWithoutPatientInstanceInput[]
    createMany?: OPDQueueCreateManyPatientInstanceInputEnvelope
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutPatinetInput = {
    create?: XOR<AdmissionCreateWithoutPatinetInput, AdmissionUncheckedCreateWithoutPatinetInput> | AdmissionCreateWithoutPatinetInput[] | AdmissionUncheckedCreateWithoutPatinetInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatinetInput | AdmissionCreateOrConnectWithoutPatinetInput[]
    createMany?: AdmissionCreateManyPatinetInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumVisitTypeFieldUpdateOperationsInput = {
    set?: $Enums.VisitType
  }

  export type DoctorsUpdateOneRequiredWithoutPatientInstancesNestedInput = {
    create?: XOR<DoctorsCreateWithoutPatientInstancesInput, DoctorsUncheckedCreateWithoutPatientInstancesInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutPatientInstancesInput
    upsert?: DoctorsUpsertWithoutPatientInstancesInput
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutPatientInstancesInput, DoctorsUpdateWithoutPatientInstancesInput>, DoctorsUncheckedUpdateWithoutPatientInstancesInput>
  }

  export type OPDQueueUpdateManyWithoutPatientInstanceNestedInput = {
    create?: XOR<OPDQueueCreateWithoutPatientInstanceInput, OPDQueueUncheckedCreateWithoutPatientInstanceInput> | OPDQueueCreateWithoutPatientInstanceInput[] | OPDQueueUncheckedCreateWithoutPatientInstanceInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutPatientInstanceInput | OPDQueueCreateOrConnectWithoutPatientInstanceInput[]
    upsert?: OPDQueueUpsertWithWhereUniqueWithoutPatientInstanceInput | OPDQueueUpsertWithWhereUniqueWithoutPatientInstanceInput[]
    createMany?: OPDQueueCreateManyPatientInstanceInputEnvelope
    set?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    disconnect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    delete?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    update?: OPDQueueUpdateWithWhereUniqueWithoutPatientInstanceInput | OPDQueueUpdateWithWhereUniqueWithoutPatientInstanceInput[]
    updateMany?: OPDQueueUpdateManyWithWhereWithoutPatientInstanceInput | OPDQueueUpdateManyWithWhereWithoutPatientInstanceInput[]
    deleteMany?: OPDQueueScalarWhereInput | OPDQueueScalarWhereInput[]
  }

  export type AdmissionUpdateManyWithoutPatinetNestedInput = {
    create?: XOR<AdmissionCreateWithoutPatinetInput, AdmissionUncheckedCreateWithoutPatinetInput> | AdmissionCreateWithoutPatinetInput[] | AdmissionUncheckedCreateWithoutPatinetInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatinetInput | AdmissionCreateOrConnectWithoutPatinetInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutPatinetInput | AdmissionUpsertWithWhereUniqueWithoutPatinetInput[]
    createMany?: AdmissionCreateManyPatinetInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutPatinetInput | AdmissionUpdateWithWhereUniqueWithoutPatinetInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutPatinetInput | AdmissionUpdateManyWithWhereWithoutPatinetInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type OPDQueueUncheckedUpdateManyWithoutPatientInstanceNestedInput = {
    create?: XOR<OPDQueueCreateWithoutPatientInstanceInput, OPDQueueUncheckedCreateWithoutPatientInstanceInput> | OPDQueueCreateWithoutPatientInstanceInput[] | OPDQueueUncheckedCreateWithoutPatientInstanceInput[]
    connectOrCreate?: OPDQueueCreateOrConnectWithoutPatientInstanceInput | OPDQueueCreateOrConnectWithoutPatientInstanceInput[]
    upsert?: OPDQueueUpsertWithWhereUniqueWithoutPatientInstanceInput | OPDQueueUpsertWithWhereUniqueWithoutPatientInstanceInput[]
    createMany?: OPDQueueCreateManyPatientInstanceInputEnvelope
    set?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    disconnect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    delete?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    connect?: OPDQueueWhereUniqueInput | OPDQueueWhereUniqueInput[]
    update?: OPDQueueUpdateWithWhereUniqueWithoutPatientInstanceInput | OPDQueueUpdateWithWhereUniqueWithoutPatientInstanceInput[]
    updateMany?: OPDQueueUpdateManyWithWhereWithoutPatientInstanceInput | OPDQueueUpdateManyWithWhereWithoutPatientInstanceInput[]
    deleteMany?: OPDQueueScalarWhereInput | OPDQueueScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutPatinetNestedInput = {
    create?: XOR<AdmissionCreateWithoutPatinetInput, AdmissionUncheckedCreateWithoutPatinetInput> | AdmissionCreateWithoutPatinetInput[] | AdmissionUncheckedCreateWithoutPatinetInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatinetInput | AdmissionCreateOrConnectWithoutPatinetInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutPatinetInput | AdmissionUpsertWithWhereUniqueWithoutPatinetInput[]
    createMany?: AdmissionCreateManyPatinetInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutPatinetInput | AdmissionUpdateWithWhereUniqueWithoutPatinetInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutPatinetInput | AdmissionUpdateManyWithWhereWithoutPatinetInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type PatientInstanceCreateNestedOneWithoutAdmissionInput = {
    create?: XOR<PatientInstanceCreateWithoutAdmissionInput, PatientInstanceUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutAdmissionInput
    connect?: PatientInstanceWhereUniqueInput
  }

  export type WardCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<WardCreateWithoutAdmissionsInput, WardUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: WardCreateOrConnectWithoutAdmissionsInput
    connect?: WardWhereUniqueInput
  }

  export type BedCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: BedCreateOrConnectWithoutAdmissionsInput
    connect?: BedWhereUniqueInput
  }

  export type DoctorsCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<DoctorsCreateWithoutAdmissionsInput, DoctorsUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutAdmissionsInput
    connect?: DoctorsWhereUniqueInput
  }

  export type PatientInstanceUpdateOneRequiredWithoutAdmissionNestedInput = {
    create?: XOR<PatientInstanceCreateWithoutAdmissionInput, PatientInstanceUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: PatientInstanceCreateOrConnectWithoutAdmissionInput
    upsert?: PatientInstanceUpsertWithoutAdmissionInput
    connect?: PatientInstanceWhereUniqueInput
    update?: XOR<XOR<PatientInstanceUpdateToOneWithWhereWithoutAdmissionInput, PatientInstanceUpdateWithoutAdmissionInput>, PatientInstanceUncheckedUpdateWithoutAdmissionInput>
  }

  export type WardUpdateOneWithoutAdmissionsNestedInput = {
    create?: XOR<WardCreateWithoutAdmissionsInput, WardUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: WardCreateOrConnectWithoutAdmissionsInput
    upsert?: WardUpsertWithoutAdmissionsInput
    disconnect?: WardWhereInput | boolean
    delete?: WardWhereInput | boolean
    connect?: WardWhereUniqueInput
    update?: XOR<XOR<WardUpdateToOneWithWhereWithoutAdmissionsInput, WardUpdateWithoutAdmissionsInput>, WardUncheckedUpdateWithoutAdmissionsInput>
  }

  export type BedUpdateOneWithoutAdmissionsNestedInput = {
    create?: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: BedCreateOrConnectWithoutAdmissionsInput
    upsert?: BedUpsertWithoutAdmissionsInput
    disconnect?: BedWhereInput | boolean
    delete?: BedWhereInput | boolean
    connect?: BedWhereUniqueInput
    update?: XOR<XOR<BedUpdateToOneWithWhereWithoutAdmissionsInput, BedUpdateWithoutAdmissionsInput>, BedUncheckedUpdateWithoutAdmissionsInput>
  }

  export type DoctorsUpdateOneRequiredWithoutAdmissionsNestedInput = {
    create?: XOR<DoctorsCreateWithoutAdmissionsInput, DoctorsUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutAdmissionsInput
    upsert?: DoctorsUpsertWithoutAdmissionsInput
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutAdmissionsInput, DoctorsUpdateWithoutAdmissionsInput>, DoctorsUncheckedUpdateWithoutAdmissionsInput>
  }

  export type InventoryCreateNestedManyWithoutMainStoreInput = {
    create?: XOR<InventoryCreateWithoutMainStoreInput, InventoryUncheckedCreateWithoutMainStoreInput> | InventoryCreateWithoutMainStoreInput[] | InventoryUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMainStoreInput | InventoryCreateOrConnectWithoutMainStoreInput[]
    createMany?: InventoryCreateManyMainStoreInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type SubStoreCreateNestedManyWithoutMainStoreInput = {
    create?: XOR<SubStoreCreateWithoutMainStoreInput, SubStoreUncheckedCreateWithoutMainStoreInput> | SubStoreCreateWithoutMainStoreInput[] | SubStoreUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: SubStoreCreateOrConnectWithoutMainStoreInput | SubStoreCreateOrConnectWithoutMainStoreInput[]
    createMany?: SubStoreCreateManyMainStoreInputEnvelope
    connect?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutMainStoreInput = {
    create?: XOR<InventoryCreateWithoutMainStoreInput, InventoryUncheckedCreateWithoutMainStoreInput> | InventoryCreateWithoutMainStoreInput[] | InventoryUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMainStoreInput | InventoryCreateOrConnectWithoutMainStoreInput[]
    createMany?: InventoryCreateManyMainStoreInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type SubStoreUncheckedCreateNestedManyWithoutMainStoreInput = {
    create?: XOR<SubStoreCreateWithoutMainStoreInput, SubStoreUncheckedCreateWithoutMainStoreInput> | SubStoreCreateWithoutMainStoreInput[] | SubStoreUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: SubStoreCreateOrConnectWithoutMainStoreInput | SubStoreCreateOrConnectWithoutMainStoreInput[]
    createMany?: SubStoreCreateManyMainStoreInputEnvelope
    connect?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
  }

  export type InventoryUpdateManyWithoutMainStoreNestedInput = {
    create?: XOR<InventoryCreateWithoutMainStoreInput, InventoryUncheckedCreateWithoutMainStoreInput> | InventoryCreateWithoutMainStoreInput[] | InventoryUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMainStoreInput | InventoryCreateOrConnectWithoutMainStoreInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutMainStoreInput | InventoryUpsertWithWhereUniqueWithoutMainStoreInput[]
    createMany?: InventoryCreateManyMainStoreInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutMainStoreInput | InventoryUpdateWithWhereUniqueWithoutMainStoreInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutMainStoreInput | InventoryUpdateManyWithWhereWithoutMainStoreInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type SubStoreUpdateManyWithoutMainStoreNestedInput = {
    create?: XOR<SubStoreCreateWithoutMainStoreInput, SubStoreUncheckedCreateWithoutMainStoreInput> | SubStoreCreateWithoutMainStoreInput[] | SubStoreUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: SubStoreCreateOrConnectWithoutMainStoreInput | SubStoreCreateOrConnectWithoutMainStoreInput[]
    upsert?: SubStoreUpsertWithWhereUniqueWithoutMainStoreInput | SubStoreUpsertWithWhereUniqueWithoutMainStoreInput[]
    createMany?: SubStoreCreateManyMainStoreInputEnvelope
    set?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    disconnect?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    delete?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    connect?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    update?: SubStoreUpdateWithWhereUniqueWithoutMainStoreInput | SubStoreUpdateWithWhereUniqueWithoutMainStoreInput[]
    updateMany?: SubStoreUpdateManyWithWhereWithoutMainStoreInput | SubStoreUpdateManyWithWhereWithoutMainStoreInput[]
    deleteMany?: SubStoreScalarWhereInput | SubStoreScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutMainStoreNestedInput = {
    create?: XOR<InventoryCreateWithoutMainStoreInput, InventoryUncheckedCreateWithoutMainStoreInput> | InventoryCreateWithoutMainStoreInput[] | InventoryUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMainStoreInput | InventoryCreateOrConnectWithoutMainStoreInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutMainStoreInput | InventoryUpsertWithWhereUniqueWithoutMainStoreInput[]
    createMany?: InventoryCreateManyMainStoreInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutMainStoreInput | InventoryUpdateWithWhereUniqueWithoutMainStoreInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutMainStoreInput | InventoryUpdateManyWithWhereWithoutMainStoreInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type SubStoreUncheckedUpdateManyWithoutMainStoreNestedInput = {
    create?: XOR<SubStoreCreateWithoutMainStoreInput, SubStoreUncheckedCreateWithoutMainStoreInput> | SubStoreCreateWithoutMainStoreInput[] | SubStoreUncheckedCreateWithoutMainStoreInput[]
    connectOrCreate?: SubStoreCreateOrConnectWithoutMainStoreInput | SubStoreCreateOrConnectWithoutMainStoreInput[]
    upsert?: SubStoreUpsertWithWhereUniqueWithoutMainStoreInput | SubStoreUpsertWithWhereUniqueWithoutMainStoreInput[]
    createMany?: SubStoreCreateManyMainStoreInputEnvelope
    set?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    disconnect?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    delete?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    connect?: SubStoreWhereUniqueInput | SubStoreWhereUniqueInput[]
    update?: SubStoreUpdateWithWhereUniqueWithoutMainStoreInput | SubStoreUpdateWithWhereUniqueWithoutMainStoreInput[]
    updateMany?: SubStoreUpdateManyWithWhereWithoutMainStoreInput | SubStoreUpdateManyWithWhereWithoutMainStoreInput[]
    deleteMany?: SubStoreScalarWhereInput | SubStoreScalarWhereInput[]
  }

  export type MainStoreCreateNestedOneWithoutSubStoresInput = {
    create?: XOR<MainStoreCreateWithoutSubStoresInput, MainStoreUncheckedCreateWithoutSubStoresInput>
    connectOrCreate?: MainStoreCreateOrConnectWithoutSubStoresInput
    connect?: MainStoreWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutSubStoreInput = {
    create?: XOR<InventoryCreateWithoutSubStoreInput, InventoryUncheckedCreateWithoutSubStoreInput> | InventoryCreateWithoutSubStoreInput[] | InventoryUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutSubStoreInput | InventoryCreateOrConnectWithoutSubStoreInput[]
    createMany?: InventoryCreateManySubStoreInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type PharmacyCreateNestedManyWithoutSubStoreInput = {
    create?: XOR<PharmacyCreateWithoutSubStoreInput, PharmacyUncheckedCreateWithoutSubStoreInput> | PharmacyCreateWithoutSubStoreInput[] | PharmacyUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutSubStoreInput | PharmacyCreateOrConnectWithoutSubStoreInput[]
    createMany?: PharmacyCreateManySubStoreInputEnvelope
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutSubStoreInput = {
    create?: XOR<InventoryCreateWithoutSubStoreInput, InventoryUncheckedCreateWithoutSubStoreInput> | InventoryCreateWithoutSubStoreInput[] | InventoryUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutSubStoreInput | InventoryCreateOrConnectWithoutSubStoreInput[]
    createMany?: InventoryCreateManySubStoreInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type PharmacyUncheckedCreateNestedManyWithoutSubStoreInput = {
    create?: XOR<PharmacyCreateWithoutSubStoreInput, PharmacyUncheckedCreateWithoutSubStoreInput> | PharmacyCreateWithoutSubStoreInput[] | PharmacyUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutSubStoreInput | PharmacyCreateOrConnectWithoutSubStoreInput[]
    createMany?: PharmacyCreateManySubStoreInputEnvelope
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
  }

  export type MainStoreUpdateOneRequiredWithoutSubStoresNestedInput = {
    create?: XOR<MainStoreCreateWithoutSubStoresInput, MainStoreUncheckedCreateWithoutSubStoresInput>
    connectOrCreate?: MainStoreCreateOrConnectWithoutSubStoresInput
    upsert?: MainStoreUpsertWithoutSubStoresInput
    connect?: MainStoreWhereUniqueInput
    update?: XOR<XOR<MainStoreUpdateToOneWithWhereWithoutSubStoresInput, MainStoreUpdateWithoutSubStoresInput>, MainStoreUncheckedUpdateWithoutSubStoresInput>
  }

  export type InventoryUpdateManyWithoutSubStoreNestedInput = {
    create?: XOR<InventoryCreateWithoutSubStoreInput, InventoryUncheckedCreateWithoutSubStoreInput> | InventoryCreateWithoutSubStoreInput[] | InventoryUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutSubStoreInput | InventoryCreateOrConnectWithoutSubStoreInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutSubStoreInput | InventoryUpsertWithWhereUniqueWithoutSubStoreInput[]
    createMany?: InventoryCreateManySubStoreInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutSubStoreInput | InventoryUpdateWithWhereUniqueWithoutSubStoreInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutSubStoreInput | InventoryUpdateManyWithWhereWithoutSubStoreInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type PharmacyUpdateManyWithoutSubStoreNestedInput = {
    create?: XOR<PharmacyCreateWithoutSubStoreInput, PharmacyUncheckedCreateWithoutSubStoreInput> | PharmacyCreateWithoutSubStoreInput[] | PharmacyUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutSubStoreInput | PharmacyCreateOrConnectWithoutSubStoreInput[]
    upsert?: PharmacyUpsertWithWhereUniqueWithoutSubStoreInput | PharmacyUpsertWithWhereUniqueWithoutSubStoreInput[]
    createMany?: PharmacyCreateManySubStoreInputEnvelope
    set?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    disconnect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    delete?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    update?: PharmacyUpdateWithWhereUniqueWithoutSubStoreInput | PharmacyUpdateWithWhereUniqueWithoutSubStoreInput[]
    updateMany?: PharmacyUpdateManyWithWhereWithoutSubStoreInput | PharmacyUpdateManyWithWhereWithoutSubStoreInput[]
    deleteMany?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutSubStoreNestedInput = {
    create?: XOR<InventoryCreateWithoutSubStoreInput, InventoryUncheckedCreateWithoutSubStoreInput> | InventoryCreateWithoutSubStoreInput[] | InventoryUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutSubStoreInput | InventoryCreateOrConnectWithoutSubStoreInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutSubStoreInput | InventoryUpsertWithWhereUniqueWithoutSubStoreInput[]
    createMany?: InventoryCreateManySubStoreInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutSubStoreInput | InventoryUpdateWithWhereUniqueWithoutSubStoreInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutSubStoreInput | InventoryUpdateManyWithWhereWithoutSubStoreInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type PharmacyUncheckedUpdateManyWithoutSubStoreNestedInput = {
    create?: XOR<PharmacyCreateWithoutSubStoreInput, PharmacyUncheckedCreateWithoutSubStoreInput> | PharmacyCreateWithoutSubStoreInput[] | PharmacyUncheckedCreateWithoutSubStoreInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutSubStoreInput | PharmacyCreateOrConnectWithoutSubStoreInput[]
    upsert?: PharmacyUpsertWithWhereUniqueWithoutSubStoreInput | PharmacyUpsertWithWhereUniqueWithoutSubStoreInput[]
    createMany?: PharmacyCreateManySubStoreInputEnvelope
    set?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    disconnect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    delete?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    update?: PharmacyUpdateWithWhereUniqueWithoutSubStoreInput | PharmacyUpdateWithWhereUniqueWithoutSubStoreInput[]
    updateMany?: PharmacyUpdateManyWithWhereWithoutSubStoreInput | PharmacyUpdateManyWithWhereWithoutSubStoreInput[]
    deleteMany?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
  }

  export type SubStoreCreateNestedOneWithoutPharmaciesInput = {
    create?: XOR<SubStoreCreateWithoutPharmaciesInput, SubStoreUncheckedCreateWithoutPharmaciesInput>
    connectOrCreate?: SubStoreCreateOrConnectWithoutPharmaciesInput
    connect?: SubStoreWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type SubStoreUpdateOneRequiredWithoutPharmaciesNestedInput = {
    create?: XOR<SubStoreCreateWithoutPharmaciesInput, SubStoreUncheckedCreateWithoutPharmaciesInput>
    connectOrCreate?: SubStoreCreateOrConnectWithoutPharmaciesInput
    upsert?: SubStoreUpsertWithoutPharmaciesInput
    connect?: SubStoreWhereUniqueInput
    update?: XOR<XOR<SubStoreUpdateToOneWithWhereWithoutPharmaciesInput, SubStoreUpdateWithoutPharmaciesInput>, SubStoreUncheckedUpdateWithoutPharmaciesInput>
  }

  export type InventoryUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutPharmacyInput | InventoryUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutPharmacyInput | InventoryUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutPharmacyInput | InventoryUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutPharmacyInput | InventoryUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutPharmacyInput | InventoryUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutPharmacyInput | InventoryUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryCreatestockBatchesInput = {
    set: InputJsonValue[]
  }

  export type MainStoreCreateNestedOneWithoutInventoryInput = {
    create?: XOR<MainStoreCreateWithoutInventoryInput, MainStoreUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MainStoreCreateOrConnectWithoutInventoryInput
    connect?: MainStoreWhereUniqueInput
  }

  export type SubStoreCreateNestedOneWithoutInventoryInput = {
    create?: XOR<SubStoreCreateWithoutInventoryInput, SubStoreUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SubStoreCreateOrConnectWithoutInventoryInput
    connect?: SubStoreWhereUniqueInput
  }

  export type PharmacyCreateNestedOneWithoutInventoryInput = {
    create?: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutInventoryInput
    connect?: PharmacyWhereUniqueInput
  }

  export type EnumInventoryCategoryFieldUpdateOperationsInput = {
    set?: $Enums.InventoryCategory
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryUpdatestockBatchesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type MainStoreUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<MainStoreCreateWithoutInventoryInput, MainStoreUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MainStoreCreateOrConnectWithoutInventoryInput
    upsert?: MainStoreUpsertWithoutInventoryInput
    disconnect?: MainStoreWhereInput | boolean
    delete?: MainStoreWhereInput | boolean
    connect?: MainStoreWhereUniqueInput
    update?: XOR<XOR<MainStoreUpdateToOneWithWhereWithoutInventoryInput, MainStoreUpdateWithoutInventoryInput>, MainStoreUncheckedUpdateWithoutInventoryInput>
  }

  export type SubStoreUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<SubStoreCreateWithoutInventoryInput, SubStoreUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SubStoreCreateOrConnectWithoutInventoryInput
    upsert?: SubStoreUpsertWithoutInventoryInput
    disconnect?: SubStoreWhereInput | boolean
    delete?: SubStoreWhereInput | boolean
    connect?: SubStoreWhereUniqueInput
    update?: XOR<XOR<SubStoreUpdateToOneWithWhereWithoutInventoryInput, SubStoreUpdateWithoutInventoryInput>, SubStoreUncheckedUpdateWithoutInventoryInput>
  }

  export type PharmacyUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutInventoryInput
    upsert?: PharmacyUpsertWithoutInventoryInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutInventoryInput, PharmacyUpdateWithoutInventoryInput>, PharmacyUncheckedUpdateWithoutInventoryInput>
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

  export type NestedEnumDesignationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignationType | EnumDesignationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationTypeFilter<$PrismaModel> | $Enums.DesignationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumDesignationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignationType | EnumDesignationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignationType[] | ListEnumDesignationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationTypeWithAggregatesFilter<$PrismaModel> | $Enums.DesignationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignationTypeFilter<$PrismaModel>
    _max?: NestedEnumDesignationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQueueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusFilter<$PrismaModel> | $Enums.QueueStatus
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

  export type NestedEnumQueueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusWithAggregatesFilter<$PrismaModel> | $Enums.QueueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueueStatusFilter<$PrismaModel>
    _max?: NestedEnumQueueStatusFilter<$PrismaModel>
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

  export type NestedEnumBedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BedStatus | EnumBedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBedStatusFilter<$PrismaModel> | $Enums.BedStatus
  }

  export type NestedEnumBedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BedStatus | EnumBedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedStatus[] | ListEnumBedStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBedStatusWithAggregatesFilter<$PrismaModel> | $Enums.BedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBedStatusFilter<$PrismaModel>
    _max?: NestedEnumBedStatusFilter<$PrismaModel>
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

  export type NestedEnumVisitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitType | EnumVisitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitTypeFilter<$PrismaModel> | $Enums.VisitType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumVisitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitType | EnumVisitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitType[] | ListEnumVisitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitTypeWithAggregatesFilter<$PrismaModel> | $Enums.VisitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisitTypeFilter<$PrismaModel>
    _max?: NestedEnumVisitTypeFilter<$PrismaModel>
  }

  export type NestedEnumInventoryCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryFilter<$PrismaModel> | $Enums.InventoryCategory
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

  export type NestedEnumInventoryCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InventoryCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryCategoryFilter<$PrismaModel>
    _max?: NestedEnumInventoryCategoryFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type DepartmentsCreateWithoutDoctorsInput = {
    id?: string
    name: string
    headOfDepartmentId?: string
  }

  export type DepartmentsUncheckedCreateWithoutDoctorsInput = {
    id?: string
    name: string
    headOfDepartmentId?: string
  }

  export type DepartmentsCreateOrConnectWithoutDoctorsInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
  }

  export type OPDQueueCreateWithoutDoctorInput = {
    id?: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
    patientInstance: PatientInstanceCreateNestedOneWithoutOpqueueInput
  }

  export type OPDQueueUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientInstanceId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
  }

  export type OPDQueueCreateOrConnectWithoutDoctorInput = {
    where: OPDQueueWhereUniqueInput
    create: XOR<OPDQueueCreateWithoutDoctorInput, OPDQueueUncheckedCreateWithoutDoctorInput>
  }

  export type OPDQueueCreateManyDoctorInputEnvelope = {
    data: OPDQueueCreateManyDoctorInput | OPDQueueCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionCreateWithoutDoctorInput = {
    id?: string
    patinet: PatientInstanceCreateNestedOneWithoutAdmissionInput
    ward?: WardCreateNestedOneWithoutAdmissionsInput
    bed?: BedCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    wardId?: string | null
    bedId?: string | null
  }

  export type AdmissionCreateOrConnectWithoutDoctorInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutDoctorInput, AdmissionUncheckedCreateWithoutDoctorInput>
  }

  export type AdmissionCreateManyDoctorInputEnvelope = {
    data: AdmissionCreateManyDoctorInput | AdmissionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PatientInstanceCreateWithoutDoctorInput = {
    id?: string
    abhaId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    opqueue?: OPDQueueCreateNestedManyWithoutPatientInstanceInput
    admission?: AdmissionCreateNestedManyWithoutPatinetInput
  }

  export type PatientInstanceUncheckedCreateWithoutDoctorInput = {
    id?: string
    abhaId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    opqueue?: OPDQueueUncheckedCreateNestedManyWithoutPatientInstanceInput
    admission?: AdmissionUncheckedCreateNestedManyWithoutPatinetInput
  }

  export type PatientInstanceCreateOrConnectWithoutDoctorInput = {
    where: PatientInstanceWhereUniqueInput
    create: XOR<PatientInstanceCreateWithoutDoctorInput, PatientInstanceUncheckedCreateWithoutDoctorInput>
  }

  export type PatientInstanceCreateManyDoctorInputEnvelope = {
    data: PatientInstanceCreateManyDoctorInput | PatientInstanceCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentsUpsertWithoutDoctorsInput = {
    update: XOR<DepartmentsUpdateWithoutDoctorsInput, DepartmentsUncheckedUpdateWithoutDoctorsInput>
    create: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutDoctorsInput, DepartmentsUncheckedUpdateWithoutDoctorsInput>
  }

  export type DepartmentsUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headOfDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentsUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headOfDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type OPDQueueUpsertWithWhereUniqueWithoutDoctorInput = {
    where: OPDQueueWhereUniqueInput
    update: XOR<OPDQueueUpdateWithoutDoctorInput, OPDQueueUncheckedUpdateWithoutDoctorInput>
    create: XOR<OPDQueueCreateWithoutDoctorInput, OPDQueueUncheckedCreateWithoutDoctorInput>
  }

  export type OPDQueueUpdateWithWhereUniqueWithoutDoctorInput = {
    where: OPDQueueWhereUniqueInput
    data: XOR<OPDQueueUpdateWithoutDoctorInput, OPDQueueUncheckedUpdateWithoutDoctorInput>
  }

  export type OPDQueueUpdateManyWithWhereWithoutDoctorInput = {
    where: OPDQueueScalarWhereInput
    data: XOR<OPDQueueUpdateManyMutationInput, OPDQueueUncheckedUpdateManyWithoutDoctorInput>
  }

  export type OPDQueueScalarWhereInput = {
    AND?: OPDQueueScalarWhereInput | OPDQueueScalarWhereInput[]
    OR?: OPDQueueScalarWhereInput[]
    NOT?: OPDQueueScalarWhereInput | OPDQueueScalarWhereInput[]
    id?: StringFilter<"OPDQueue"> | string
    patientInstanceId?: StringFilter<"OPDQueue"> | string
    doctorId?: StringFilter<"OPDQueue"> | string
    status?: EnumQueueStatusFilter<"OPDQueue"> | $Enums.QueueStatus
    queueNumber?: IntFilter<"OPDQueue"> | number
    timeStamp?: DateTimeNullableFilter<"OPDQueue"> | Date | string | null
  }

  export type AdmissionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutDoctorInput, AdmissionUncheckedUpdateWithoutDoctorInput>
    create: XOR<AdmissionCreateWithoutDoctorInput, AdmissionUncheckedCreateWithoutDoctorInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutDoctorInput, AdmissionUncheckedUpdateWithoutDoctorInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutDoctorInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AdmissionScalarWhereInput = {
    AND?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
    OR?: AdmissionScalarWhereInput[]
    NOT?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
    id?: StringFilter<"Admission"> | string
    patientId?: StringFilter<"Admission"> | string
    wardId?: StringNullableFilter<"Admission"> | string | null
    bedId?: StringNullableFilter<"Admission"> | string | null
    doctorId?: StringFilter<"Admission"> | string
  }

  export type PatientInstanceUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PatientInstanceWhereUniqueInput
    update: XOR<PatientInstanceUpdateWithoutDoctorInput, PatientInstanceUncheckedUpdateWithoutDoctorInput>
    create: XOR<PatientInstanceCreateWithoutDoctorInput, PatientInstanceUncheckedCreateWithoutDoctorInput>
  }

  export type PatientInstanceUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PatientInstanceWhereUniqueInput
    data: XOR<PatientInstanceUpdateWithoutDoctorInput, PatientInstanceUncheckedUpdateWithoutDoctorInput>
  }

  export type PatientInstanceUpdateManyWithWhereWithoutDoctorInput = {
    where: PatientInstanceScalarWhereInput
    data: XOR<PatientInstanceUpdateManyMutationInput, PatientInstanceUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PatientInstanceScalarWhereInput = {
    AND?: PatientInstanceScalarWhereInput | PatientInstanceScalarWhereInput[]
    OR?: PatientInstanceScalarWhereInput[]
    NOT?: PatientInstanceScalarWhereInput | PatientInstanceScalarWhereInput[]
    id?: StringFilter<"PatientInstance"> | string
    abhaId?: StringFilter<"PatientInstance"> | string
    doctorId?: StringFilter<"PatientInstance"> | string
    queueNumber?: IntNullableFilter<"PatientInstance"> | number | null
    medications?: JsonNullableFilter<"PatientInstance">
    feedback?: StringNullableFilter<"PatientInstance"> | string | null
    visitType?: EnumVisitTypeFilter<"PatientInstance"> | $Enums.VisitType
  }

  export type DoctorsCreateWithoutDepartmentInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    opdQueue?: OPDQueueCreateNestedManyWithoutDoctorInput
    admissions?: AdmissionCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    opdQueue?: OPDQueueUncheckedCreateNestedManyWithoutDoctorInput
    admissions?: AdmissionUncheckedCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsCreateOrConnectWithoutDepartmentInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutDepartmentInput, DoctorsUncheckedCreateWithoutDepartmentInput>
  }

  export type DoctorsCreateManyDepartmentInputEnvelope = {
    data: DoctorsCreateManyDepartmentInput | DoctorsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type DoctorsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: DoctorsWhereUniqueInput
    update: XOR<DoctorsUpdateWithoutDepartmentInput, DoctorsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<DoctorsCreateWithoutDepartmentInput, DoctorsUncheckedCreateWithoutDepartmentInput>
  }

  export type DoctorsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: DoctorsWhereUniqueInput
    data: XOR<DoctorsUpdateWithoutDepartmentInput, DoctorsUncheckedUpdateWithoutDepartmentInput>
  }

  export type DoctorsUpdateManyWithWhereWithoutDepartmentInput = {
    where: DoctorsScalarWhereInput
    data: XOR<DoctorsUpdateManyMutationInput, DoctorsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DoctorsScalarWhereInput = {
    AND?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
    OR?: DoctorsScalarWhereInput[]
    NOT?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
    id?: StringFilter<"Doctors"> | string
    name?: StringFilter<"Doctors"> | string
    gender?: StringFilter<"Doctors"> | string
    designation?: EnumDesignationTypeFilter<"Doctors"> | $Enums.DesignationType
    contact?: StringFilter<"Doctors"> | string
    email?: StringFilter<"Doctors"> | string
    password?: StringFilter<"Doctors"> | string
    active?: BoolFilter<"Doctors"> | boolean
    departmentId?: StringFilter<"Doctors"> | string
  }

  export type PatientInstanceCreateWithoutOpqueueInput = {
    id?: string
    abhaId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    doctor: DoctorsCreateNestedOneWithoutPatientInstancesInput
    admission?: AdmissionCreateNestedManyWithoutPatinetInput
  }

  export type PatientInstanceUncheckedCreateWithoutOpqueueInput = {
    id?: string
    abhaId: string
    doctorId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    admission?: AdmissionUncheckedCreateNestedManyWithoutPatinetInput
  }

  export type PatientInstanceCreateOrConnectWithoutOpqueueInput = {
    where: PatientInstanceWhereUniqueInput
    create: XOR<PatientInstanceCreateWithoutOpqueueInput, PatientInstanceUncheckedCreateWithoutOpqueueInput>
  }

  export type DoctorsCreateWithoutOpdQueueInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    department: DepartmentsCreateNestedOneWithoutDoctorsInput
    admissions?: AdmissionCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateWithoutOpdQueueInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    departmentId: string
    admissions?: AdmissionUncheckedCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsCreateOrConnectWithoutOpdQueueInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutOpdQueueInput, DoctorsUncheckedCreateWithoutOpdQueueInput>
  }

  export type PatientInstanceUpsertWithoutOpqueueInput = {
    update: XOR<PatientInstanceUpdateWithoutOpqueueInput, PatientInstanceUncheckedUpdateWithoutOpqueueInput>
    create: XOR<PatientInstanceCreateWithoutOpqueueInput, PatientInstanceUncheckedCreateWithoutOpqueueInput>
    where?: PatientInstanceWhereInput
  }

  export type PatientInstanceUpdateToOneWithWhereWithoutOpqueueInput = {
    where?: PatientInstanceWhereInput
    data: XOR<PatientInstanceUpdateWithoutOpqueueInput, PatientInstanceUncheckedUpdateWithoutOpqueueInput>
  }

  export type PatientInstanceUpdateWithoutOpqueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    doctor?: DoctorsUpdateOneRequiredWithoutPatientInstancesNestedInput
    admission?: AdmissionUpdateManyWithoutPatinetNestedInput
  }

  export type PatientInstanceUncheckedUpdateWithoutOpqueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    admission?: AdmissionUncheckedUpdateManyWithoutPatinetNestedInput
  }

  export type DoctorsUpsertWithoutOpdQueueInput = {
    update: XOR<DoctorsUpdateWithoutOpdQueueInput, DoctorsUncheckedUpdateWithoutOpdQueueInput>
    create: XOR<DoctorsCreateWithoutOpdQueueInput, DoctorsUncheckedCreateWithoutOpdQueueInput>
    where?: DoctorsWhereInput
  }

  export type DoctorsUpdateToOneWithWhereWithoutOpdQueueInput = {
    where?: DoctorsWhereInput
    data: XOR<DoctorsUpdateWithoutOpdQueueInput, DoctorsUncheckedUpdateWithoutOpdQueueInput>
  }

  export type DoctorsUpdateWithoutOpdQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    department?: DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput
    admissions?: AdmissionUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutOpdQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    admissions?: AdmissionUncheckedUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type WardCreateWithoutBedsInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
    admissions?: AdmissionCreateNestedManyWithoutWardInput
  }

  export type WardUncheckedCreateWithoutBedsInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
    admissions?: AdmissionUncheckedCreateNestedManyWithoutWardInput
  }

  export type WardCreateOrConnectWithoutBedsInput = {
    where: WardWhereUniqueInput
    create: XOR<WardCreateWithoutBedsInput, WardUncheckedCreateWithoutBedsInput>
  }

  export type AdmissionCreateWithoutBedInput = {
    id?: string
    patinet: PatientInstanceCreateNestedOneWithoutAdmissionInput
    ward?: WardCreateNestedOneWithoutAdmissionsInput
    doctor: DoctorsCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateWithoutBedInput = {
    id?: string
    patientId: string
    wardId?: string | null
    doctorId: string
  }

  export type AdmissionCreateOrConnectWithoutBedInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutBedInput, AdmissionUncheckedCreateWithoutBedInput>
  }

  export type AdmissionCreateManyBedInputEnvelope = {
    data: AdmissionCreateManyBedInput | AdmissionCreateManyBedInput[]
    skipDuplicates?: boolean
  }

  export type WardUpsertWithoutBedsInput = {
    update: XOR<WardUpdateWithoutBedsInput, WardUncheckedUpdateWithoutBedsInput>
    create: XOR<WardCreateWithoutBedsInput, WardUncheckedCreateWithoutBedsInput>
    where?: WardWhereInput
  }

  export type WardUpdateToOneWithWhereWithoutBedsInput = {
    where?: WardWhereInput
    data: XOR<WardUpdateWithoutBedsInput, WardUncheckedUpdateWithoutBedsInput>
  }

  export type WardUpdateWithoutBedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
    admissions?: AdmissionUpdateManyWithoutWardNestedInput
  }

  export type WardUncheckedUpdateWithoutBedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
    admissions?: AdmissionUncheckedUpdateManyWithoutWardNestedInput
  }

  export type AdmissionUpsertWithWhereUniqueWithoutBedInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutBedInput, AdmissionUncheckedUpdateWithoutBedInput>
    create: XOR<AdmissionCreateWithoutBedInput, AdmissionUncheckedCreateWithoutBedInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutBedInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutBedInput, AdmissionUncheckedUpdateWithoutBedInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutBedInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutBedInput>
  }

  export type BedCreateWithoutWardInput = {
    id?: string
    bedNumber: string
    status: $Enums.BedStatus
    admissions?: AdmissionCreateNestedManyWithoutBedInput
  }

  export type BedUncheckedCreateWithoutWardInput = {
    id?: string
    bedNumber: string
    status: $Enums.BedStatus
    admissions?: AdmissionUncheckedCreateNestedManyWithoutBedInput
  }

  export type BedCreateOrConnectWithoutWardInput = {
    where: BedWhereUniqueInput
    create: XOR<BedCreateWithoutWardInput, BedUncheckedCreateWithoutWardInput>
  }

  export type BedCreateManyWardInputEnvelope = {
    data: BedCreateManyWardInput | BedCreateManyWardInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionCreateWithoutWardInput = {
    id?: string
    patinet: PatientInstanceCreateNestedOneWithoutAdmissionInput
    bed?: BedCreateNestedOneWithoutAdmissionsInput
    doctor: DoctorsCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateWithoutWardInput = {
    id?: string
    patientId: string
    bedId?: string | null
    doctorId: string
  }

  export type AdmissionCreateOrConnectWithoutWardInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutWardInput, AdmissionUncheckedCreateWithoutWardInput>
  }

  export type AdmissionCreateManyWardInputEnvelope = {
    data: AdmissionCreateManyWardInput | AdmissionCreateManyWardInput[]
    skipDuplicates?: boolean
  }

  export type BedUpsertWithWhereUniqueWithoutWardInput = {
    where: BedWhereUniqueInput
    update: XOR<BedUpdateWithoutWardInput, BedUncheckedUpdateWithoutWardInput>
    create: XOR<BedCreateWithoutWardInput, BedUncheckedCreateWithoutWardInput>
  }

  export type BedUpdateWithWhereUniqueWithoutWardInput = {
    where: BedWhereUniqueInput
    data: XOR<BedUpdateWithoutWardInput, BedUncheckedUpdateWithoutWardInput>
  }

  export type BedUpdateManyWithWhereWithoutWardInput = {
    where: BedScalarWhereInput
    data: XOR<BedUpdateManyMutationInput, BedUncheckedUpdateManyWithoutWardInput>
  }

  export type BedScalarWhereInput = {
    AND?: BedScalarWhereInput | BedScalarWhereInput[]
    OR?: BedScalarWhereInput[]
    NOT?: BedScalarWhereInput | BedScalarWhereInput[]
    id?: StringFilter<"Bed"> | string
    bedNumber?: StringFilter<"Bed"> | string
    wardId?: StringFilter<"Bed"> | string
    status?: EnumBedStatusFilter<"Bed"> | $Enums.BedStatus
  }

  export type AdmissionUpsertWithWhereUniqueWithoutWardInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutWardInput, AdmissionUncheckedUpdateWithoutWardInput>
    create: XOR<AdmissionCreateWithoutWardInput, AdmissionUncheckedCreateWithoutWardInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutWardInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutWardInput, AdmissionUncheckedUpdateWithoutWardInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutWardInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutWardInput>
  }

  export type DoctorsCreateWithoutPatientInstancesInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    department: DepartmentsCreateNestedOneWithoutDoctorsInput
    opdQueue?: OPDQueueCreateNestedManyWithoutDoctorInput
    admissions?: AdmissionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateWithoutPatientInstancesInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    departmentId: string
    opdQueue?: OPDQueueUncheckedCreateNestedManyWithoutDoctorInput
    admissions?: AdmissionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsCreateOrConnectWithoutPatientInstancesInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutPatientInstancesInput, DoctorsUncheckedCreateWithoutPatientInstancesInput>
  }

  export type OPDQueueCreateWithoutPatientInstanceInput = {
    id?: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
    doctor: DoctorsCreateNestedOneWithoutOpdQueueInput
  }

  export type OPDQueueUncheckedCreateWithoutPatientInstanceInput = {
    id?: string
    doctorId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
  }

  export type OPDQueueCreateOrConnectWithoutPatientInstanceInput = {
    where: OPDQueueWhereUniqueInput
    create: XOR<OPDQueueCreateWithoutPatientInstanceInput, OPDQueueUncheckedCreateWithoutPatientInstanceInput>
  }

  export type OPDQueueCreateManyPatientInstanceInputEnvelope = {
    data: OPDQueueCreateManyPatientInstanceInput | OPDQueueCreateManyPatientInstanceInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionCreateWithoutPatinetInput = {
    id?: string
    ward?: WardCreateNestedOneWithoutAdmissionsInput
    bed?: BedCreateNestedOneWithoutAdmissionsInput
    doctor: DoctorsCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateWithoutPatinetInput = {
    id?: string
    wardId?: string | null
    bedId?: string | null
    doctorId: string
  }

  export type AdmissionCreateOrConnectWithoutPatinetInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutPatinetInput, AdmissionUncheckedCreateWithoutPatinetInput>
  }

  export type AdmissionCreateManyPatinetInputEnvelope = {
    data: AdmissionCreateManyPatinetInput | AdmissionCreateManyPatinetInput[]
    skipDuplicates?: boolean
  }

  export type DoctorsUpsertWithoutPatientInstancesInput = {
    update: XOR<DoctorsUpdateWithoutPatientInstancesInput, DoctorsUncheckedUpdateWithoutPatientInstancesInput>
    create: XOR<DoctorsCreateWithoutPatientInstancesInput, DoctorsUncheckedCreateWithoutPatientInstancesInput>
    where?: DoctorsWhereInput
  }

  export type DoctorsUpdateToOneWithWhereWithoutPatientInstancesInput = {
    where?: DoctorsWhereInput
    data: XOR<DoctorsUpdateWithoutPatientInstancesInput, DoctorsUncheckedUpdateWithoutPatientInstancesInput>
  }

  export type DoctorsUpdateWithoutPatientInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    department?: DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput
    opdQueue?: OPDQueueUpdateManyWithoutDoctorNestedInput
    admissions?: AdmissionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutPatientInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    opdQueue?: OPDQueueUncheckedUpdateManyWithoutDoctorNestedInput
    admissions?: AdmissionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type OPDQueueUpsertWithWhereUniqueWithoutPatientInstanceInput = {
    where: OPDQueueWhereUniqueInput
    update: XOR<OPDQueueUpdateWithoutPatientInstanceInput, OPDQueueUncheckedUpdateWithoutPatientInstanceInput>
    create: XOR<OPDQueueCreateWithoutPatientInstanceInput, OPDQueueUncheckedCreateWithoutPatientInstanceInput>
  }

  export type OPDQueueUpdateWithWhereUniqueWithoutPatientInstanceInput = {
    where: OPDQueueWhereUniqueInput
    data: XOR<OPDQueueUpdateWithoutPatientInstanceInput, OPDQueueUncheckedUpdateWithoutPatientInstanceInput>
  }

  export type OPDQueueUpdateManyWithWhereWithoutPatientInstanceInput = {
    where: OPDQueueScalarWhereInput
    data: XOR<OPDQueueUpdateManyMutationInput, OPDQueueUncheckedUpdateManyWithoutPatientInstanceInput>
  }

  export type AdmissionUpsertWithWhereUniqueWithoutPatinetInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutPatinetInput, AdmissionUncheckedUpdateWithoutPatinetInput>
    create: XOR<AdmissionCreateWithoutPatinetInput, AdmissionUncheckedCreateWithoutPatinetInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutPatinetInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutPatinetInput, AdmissionUncheckedUpdateWithoutPatinetInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutPatinetInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutPatinetInput>
  }

  export type PatientInstanceCreateWithoutAdmissionInput = {
    id?: string
    abhaId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    doctor: DoctorsCreateNestedOneWithoutPatientInstancesInput
    opqueue?: OPDQueueCreateNestedManyWithoutPatientInstanceInput
  }

  export type PatientInstanceUncheckedCreateWithoutAdmissionInput = {
    id?: string
    abhaId: string
    doctorId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
    opqueue?: OPDQueueUncheckedCreateNestedManyWithoutPatientInstanceInput
  }

  export type PatientInstanceCreateOrConnectWithoutAdmissionInput = {
    where: PatientInstanceWhereUniqueInput
    create: XOR<PatientInstanceCreateWithoutAdmissionInput, PatientInstanceUncheckedCreateWithoutAdmissionInput>
  }

  export type WardCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
    beds?: BedCreateNestedManyWithoutWardInput
  }

  export type WardUncheckedCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    totalBeds: number
    availableBeds: number
    beds?: BedUncheckedCreateNestedManyWithoutWardInput
  }

  export type WardCreateOrConnectWithoutAdmissionsInput = {
    where: WardWhereUniqueInput
    create: XOR<WardCreateWithoutAdmissionsInput, WardUncheckedCreateWithoutAdmissionsInput>
  }

  export type BedCreateWithoutAdmissionsInput = {
    id?: string
    bedNumber: string
    status: $Enums.BedStatus
    ward: WardCreateNestedOneWithoutBedsInput
  }

  export type BedUncheckedCreateWithoutAdmissionsInput = {
    id?: string
    bedNumber: string
    wardId: string
    status: $Enums.BedStatus
  }

  export type BedCreateOrConnectWithoutAdmissionsInput = {
    where: BedWhereUniqueInput
    create: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
  }

  export type DoctorsCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    department: DepartmentsCreateNestedOneWithoutDoctorsInput
    opdQueue?: OPDQueueCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
    departmentId: string
    opdQueue?: OPDQueueUncheckedCreateNestedManyWithoutDoctorInput
    patientInstances?: PatientInstanceUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsCreateOrConnectWithoutAdmissionsInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutAdmissionsInput, DoctorsUncheckedCreateWithoutAdmissionsInput>
  }

  export type PatientInstanceUpsertWithoutAdmissionInput = {
    update: XOR<PatientInstanceUpdateWithoutAdmissionInput, PatientInstanceUncheckedUpdateWithoutAdmissionInput>
    create: XOR<PatientInstanceCreateWithoutAdmissionInput, PatientInstanceUncheckedCreateWithoutAdmissionInput>
    where?: PatientInstanceWhereInput
  }

  export type PatientInstanceUpdateToOneWithWhereWithoutAdmissionInput = {
    where?: PatientInstanceWhereInput
    data: XOR<PatientInstanceUpdateWithoutAdmissionInput, PatientInstanceUncheckedUpdateWithoutAdmissionInput>
  }

  export type PatientInstanceUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    doctor?: DoctorsUpdateOneRequiredWithoutPatientInstancesNestedInput
    opqueue?: OPDQueueUpdateManyWithoutPatientInstanceNestedInput
  }

  export type PatientInstanceUncheckedUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    opqueue?: OPDQueueUncheckedUpdateManyWithoutPatientInstanceNestedInput
  }

  export type WardUpsertWithoutAdmissionsInput = {
    update: XOR<WardUpdateWithoutAdmissionsInput, WardUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<WardCreateWithoutAdmissionsInput, WardUncheckedCreateWithoutAdmissionsInput>
    where?: WardWhereInput
  }

  export type WardUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: WardWhereInput
    data: XOR<WardUpdateWithoutAdmissionsInput, WardUncheckedUpdateWithoutAdmissionsInput>
  }

  export type WardUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
    beds?: BedUpdateManyWithoutWardNestedInput
  }

  export type WardUncheckedUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalBeds?: IntFieldUpdateOperationsInput | number
    availableBeds?: IntFieldUpdateOperationsInput | number
    beds?: BedUncheckedUpdateManyWithoutWardNestedInput
  }

  export type BedUpsertWithoutAdmissionsInput = {
    update: XOR<BedUpdateWithoutAdmissionsInput, BedUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
    where?: BedWhereInput
  }

  export type BedUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: BedWhereInput
    data: XOR<BedUpdateWithoutAdmissionsInput, BedUncheckedUpdateWithoutAdmissionsInput>
  }

  export type BedUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
    ward?: WardUpdateOneRequiredWithoutBedsNestedInput
  }

  export type BedUncheckedUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    wardId?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
  }

  export type DoctorsUpsertWithoutAdmissionsInput = {
    update: XOR<DoctorsUpdateWithoutAdmissionsInput, DoctorsUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<DoctorsCreateWithoutAdmissionsInput, DoctorsUncheckedCreateWithoutAdmissionsInput>
    where?: DoctorsWhereInput
  }

  export type DoctorsUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: DoctorsWhereInput
    data: XOR<DoctorsUpdateWithoutAdmissionsInput, DoctorsUncheckedUpdateWithoutAdmissionsInput>
  }

  export type DoctorsUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    department?: DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput
    opdQueue?: OPDQueueUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    opdQueue?: OPDQueueUncheckedUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type InventoryCreateWithoutMainStoreInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    subStore?: SubStoreCreateNestedOneWithoutInventoryInput
    pharmacy?: PharmacyCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutMainStoreInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    subStoreId?: string | null
    pharmacyId?: string | null
  }

  export type InventoryCreateOrConnectWithoutMainStoreInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutMainStoreInput, InventoryUncheckedCreateWithoutMainStoreInput>
  }

  export type InventoryCreateManyMainStoreInputEnvelope = {
    data: InventoryCreateManyMainStoreInput | InventoryCreateManyMainStoreInput[]
    skipDuplicates?: boolean
  }

  export type SubStoreCreateWithoutMainStoreInput = {
    id?: string
    name: string
    inventory?: InventoryCreateNestedManyWithoutSubStoreInput
    pharmacies?: PharmacyCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreUncheckedCreateWithoutMainStoreInput = {
    id?: string
    name: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutSubStoreInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreCreateOrConnectWithoutMainStoreInput = {
    where: SubStoreWhereUniqueInput
    create: XOR<SubStoreCreateWithoutMainStoreInput, SubStoreUncheckedCreateWithoutMainStoreInput>
  }

  export type SubStoreCreateManyMainStoreInputEnvelope = {
    data: SubStoreCreateManyMainStoreInput | SubStoreCreateManyMainStoreInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutMainStoreInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutMainStoreInput, InventoryUncheckedUpdateWithoutMainStoreInput>
    create: XOR<InventoryCreateWithoutMainStoreInput, InventoryUncheckedCreateWithoutMainStoreInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutMainStoreInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutMainStoreInput, InventoryUncheckedUpdateWithoutMainStoreInput>
  }

  export type InventoryUpdateManyWithWhereWithoutMainStoreInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutMainStoreInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    itemName?: StringFilter<"Inventory"> | string
    category?: EnumInventoryCategoryFilter<"Inventory"> | $Enums.InventoryCategory
    quantity?: IntFilter<"Inventory"> | number
    price?: FloatFilter<"Inventory"> | number
    reorderLevel?: IntFilter<"Inventory"> | number
    lastOrderDate?: DateTimeFilter<"Inventory"> | Date | string
    stockBatches?: JsonNullableListFilter<"Inventory">
    mainStoreId?: StringNullableFilter<"Inventory"> | string | null
    subStoreId?: StringNullableFilter<"Inventory"> | string | null
    pharmacyId?: StringNullableFilter<"Inventory"> | string | null
  }

  export type SubStoreUpsertWithWhereUniqueWithoutMainStoreInput = {
    where: SubStoreWhereUniqueInput
    update: XOR<SubStoreUpdateWithoutMainStoreInput, SubStoreUncheckedUpdateWithoutMainStoreInput>
    create: XOR<SubStoreCreateWithoutMainStoreInput, SubStoreUncheckedCreateWithoutMainStoreInput>
  }

  export type SubStoreUpdateWithWhereUniqueWithoutMainStoreInput = {
    where: SubStoreWhereUniqueInput
    data: XOR<SubStoreUpdateWithoutMainStoreInput, SubStoreUncheckedUpdateWithoutMainStoreInput>
  }

  export type SubStoreUpdateManyWithWhereWithoutMainStoreInput = {
    where: SubStoreScalarWhereInput
    data: XOR<SubStoreUpdateManyMutationInput, SubStoreUncheckedUpdateManyWithoutMainStoreInput>
  }

  export type SubStoreScalarWhereInput = {
    AND?: SubStoreScalarWhereInput | SubStoreScalarWhereInput[]
    OR?: SubStoreScalarWhereInput[]
    NOT?: SubStoreScalarWhereInput | SubStoreScalarWhereInput[]
    id?: StringFilter<"SubStore"> | string
    name?: StringFilter<"SubStore"> | string
    mainStoreId?: StringFilter<"SubStore"> | string
  }

  export type MainStoreCreateWithoutSubStoresInput = {
    id?: string
    name: string
    inventory?: InventoryCreateNestedManyWithoutMainStoreInput
  }

  export type MainStoreUncheckedCreateWithoutSubStoresInput = {
    id?: string
    name: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutMainStoreInput
  }

  export type MainStoreCreateOrConnectWithoutSubStoresInput = {
    where: MainStoreWhereUniqueInput
    create: XOR<MainStoreCreateWithoutSubStoresInput, MainStoreUncheckedCreateWithoutSubStoresInput>
  }

  export type InventoryCreateWithoutSubStoreInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStore?: MainStoreCreateNestedOneWithoutInventoryInput
    pharmacy?: PharmacyCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutSubStoreInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStoreId?: string | null
    pharmacyId?: string | null
  }

  export type InventoryCreateOrConnectWithoutSubStoreInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutSubStoreInput, InventoryUncheckedCreateWithoutSubStoreInput>
  }

  export type InventoryCreateManySubStoreInputEnvelope = {
    data: InventoryCreateManySubStoreInput | InventoryCreateManySubStoreInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyCreateWithoutSubStoreInput = {
    id?: string
    name: string
    inventory?: InventoryCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutSubStoreInput = {
    id?: string
    name: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutSubStoreInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutSubStoreInput, PharmacyUncheckedCreateWithoutSubStoreInput>
  }

  export type PharmacyCreateManySubStoreInputEnvelope = {
    data: PharmacyCreateManySubStoreInput | PharmacyCreateManySubStoreInput[]
    skipDuplicates?: boolean
  }

  export type MainStoreUpsertWithoutSubStoresInput = {
    update: XOR<MainStoreUpdateWithoutSubStoresInput, MainStoreUncheckedUpdateWithoutSubStoresInput>
    create: XOR<MainStoreCreateWithoutSubStoresInput, MainStoreUncheckedCreateWithoutSubStoresInput>
    where?: MainStoreWhereInput
  }

  export type MainStoreUpdateToOneWithWhereWithoutSubStoresInput = {
    where?: MainStoreWhereInput
    data: XOR<MainStoreUpdateWithoutSubStoresInput, MainStoreUncheckedUpdateWithoutSubStoresInput>
  }

  export type MainStoreUpdateWithoutSubStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUpdateManyWithoutMainStoreNestedInput
  }

  export type MainStoreUncheckedUpdateWithoutSubStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutMainStoreNestedInput
  }

  export type InventoryUpsertWithWhereUniqueWithoutSubStoreInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutSubStoreInput, InventoryUncheckedUpdateWithoutSubStoreInput>
    create: XOR<InventoryCreateWithoutSubStoreInput, InventoryUncheckedCreateWithoutSubStoreInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutSubStoreInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutSubStoreInput, InventoryUncheckedUpdateWithoutSubStoreInput>
  }

  export type InventoryUpdateManyWithWhereWithoutSubStoreInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutSubStoreInput>
  }

  export type PharmacyUpsertWithWhereUniqueWithoutSubStoreInput = {
    where: PharmacyWhereUniqueInput
    update: XOR<PharmacyUpdateWithoutSubStoreInput, PharmacyUncheckedUpdateWithoutSubStoreInput>
    create: XOR<PharmacyCreateWithoutSubStoreInput, PharmacyUncheckedCreateWithoutSubStoreInput>
  }

  export type PharmacyUpdateWithWhereUniqueWithoutSubStoreInput = {
    where: PharmacyWhereUniqueInput
    data: XOR<PharmacyUpdateWithoutSubStoreInput, PharmacyUncheckedUpdateWithoutSubStoreInput>
  }

  export type PharmacyUpdateManyWithWhereWithoutSubStoreInput = {
    where: PharmacyScalarWhereInput
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyWithoutSubStoreInput>
  }

  export type PharmacyScalarWhereInput = {
    AND?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
    OR?: PharmacyScalarWhereInput[]
    NOT?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
    id?: StringFilter<"Pharmacy"> | string
    name?: StringFilter<"Pharmacy"> | string
    subStoreId?: StringFilter<"Pharmacy"> | string
  }

  export type SubStoreCreateWithoutPharmaciesInput = {
    id?: string
    name: string
    mainStore: MainStoreCreateNestedOneWithoutSubStoresInput
    inventory?: InventoryCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreUncheckedCreateWithoutPharmaciesInput = {
    id?: string
    name: string
    mainStoreId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreCreateOrConnectWithoutPharmaciesInput = {
    where: SubStoreWhereUniqueInput
    create: XOR<SubStoreCreateWithoutPharmaciesInput, SubStoreUncheckedCreateWithoutPharmaciesInput>
  }

  export type InventoryCreateWithoutPharmacyInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStore?: MainStoreCreateNestedOneWithoutInventoryInput
    subStore?: SubStoreCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutPharmacyInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStoreId?: string | null
    subStoreId?: string | null
  }

  export type InventoryCreateOrConnectWithoutPharmacyInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput>
  }

  export type InventoryCreateManyPharmacyInputEnvelope = {
    data: InventoryCreateManyPharmacyInput | InventoryCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type SubStoreUpsertWithoutPharmaciesInput = {
    update: XOR<SubStoreUpdateWithoutPharmaciesInput, SubStoreUncheckedUpdateWithoutPharmaciesInput>
    create: XOR<SubStoreCreateWithoutPharmaciesInput, SubStoreUncheckedCreateWithoutPharmaciesInput>
    where?: SubStoreWhereInput
  }

  export type SubStoreUpdateToOneWithWhereWithoutPharmaciesInput = {
    where?: SubStoreWhereInput
    data: XOR<SubStoreUpdateWithoutPharmaciesInput, SubStoreUncheckedUpdateWithoutPharmaciesInput>
  }

  export type SubStoreUpdateWithoutPharmaciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStore?: MainStoreUpdateOneRequiredWithoutSubStoresNestedInput
    inventory?: InventoryUpdateManyWithoutSubStoreNestedInput
  }

  export type SubStoreUncheckedUpdateWithoutPharmaciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStoreId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutSubStoreNestedInput
  }

  export type InventoryUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutPharmacyInput, InventoryUncheckedUpdateWithoutPharmacyInput>
    create: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutPharmacyInput, InventoryUncheckedUpdateWithoutPharmacyInput>
  }

  export type InventoryUpdateManyWithWhereWithoutPharmacyInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type MainStoreCreateWithoutInventoryInput = {
    id?: string
    name: string
    subStores?: SubStoreCreateNestedManyWithoutMainStoreInput
  }

  export type MainStoreUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    subStores?: SubStoreUncheckedCreateNestedManyWithoutMainStoreInput
  }

  export type MainStoreCreateOrConnectWithoutInventoryInput = {
    where: MainStoreWhereUniqueInput
    create: XOR<MainStoreCreateWithoutInventoryInput, MainStoreUncheckedCreateWithoutInventoryInput>
  }

  export type SubStoreCreateWithoutInventoryInput = {
    id?: string
    name: string
    mainStore: MainStoreCreateNestedOneWithoutSubStoresInput
    pharmacies?: PharmacyCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    mainStoreId: string
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutSubStoreInput
  }

  export type SubStoreCreateOrConnectWithoutInventoryInput = {
    where: SubStoreWhereUniqueInput
    create: XOR<SubStoreCreateWithoutInventoryInput, SubStoreUncheckedCreateWithoutInventoryInput>
  }

  export type PharmacyCreateWithoutInventoryInput = {
    id?: string
    name: string
    subStore: SubStoreCreateNestedOneWithoutPharmaciesInput
  }

  export type PharmacyUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    subStoreId: string
  }

  export type PharmacyCreateOrConnectWithoutInventoryInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
  }

  export type MainStoreUpsertWithoutInventoryInput = {
    update: XOR<MainStoreUpdateWithoutInventoryInput, MainStoreUncheckedUpdateWithoutInventoryInput>
    create: XOR<MainStoreCreateWithoutInventoryInput, MainStoreUncheckedCreateWithoutInventoryInput>
    where?: MainStoreWhereInput
  }

  export type MainStoreUpdateToOneWithWhereWithoutInventoryInput = {
    where?: MainStoreWhereInput
    data: XOR<MainStoreUpdateWithoutInventoryInput, MainStoreUncheckedUpdateWithoutInventoryInput>
  }

  export type MainStoreUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStores?: SubStoreUpdateManyWithoutMainStoreNestedInput
  }

  export type MainStoreUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStores?: SubStoreUncheckedUpdateManyWithoutMainStoreNestedInput
  }

  export type SubStoreUpsertWithoutInventoryInput = {
    update: XOR<SubStoreUpdateWithoutInventoryInput, SubStoreUncheckedUpdateWithoutInventoryInput>
    create: XOR<SubStoreCreateWithoutInventoryInput, SubStoreUncheckedCreateWithoutInventoryInput>
    where?: SubStoreWhereInput
  }

  export type SubStoreUpdateToOneWithWhereWithoutInventoryInput = {
    where?: SubStoreWhereInput
    data: XOR<SubStoreUpdateWithoutInventoryInput, SubStoreUncheckedUpdateWithoutInventoryInput>
  }

  export type SubStoreUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStore?: MainStoreUpdateOneRequiredWithoutSubStoresNestedInput
    pharmacies?: PharmacyUpdateManyWithoutSubStoreNestedInput
  }

  export type SubStoreUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainStoreId?: StringFieldUpdateOperationsInput | string
    pharmacies?: PharmacyUncheckedUpdateManyWithoutSubStoreNestedInput
  }

  export type PharmacyUpsertWithoutInventoryInput = {
    update: XOR<PharmacyUpdateWithoutInventoryInput, PharmacyUncheckedUpdateWithoutInventoryInput>
    create: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutInventoryInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutInventoryInput, PharmacyUncheckedUpdateWithoutInventoryInput>
  }

  export type PharmacyUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStore?: SubStoreUpdateOneRequiredWithoutPharmaciesNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subStoreId?: StringFieldUpdateOperationsInput | string
  }

  export type OPDQueueCreateManyDoctorInput = {
    id?: string
    patientInstanceId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
  }

  export type AdmissionCreateManyDoctorInput = {
    id?: string
    patientId: string
    wardId?: string | null
    bedId?: string | null
  }

  export type PatientInstanceCreateManyDoctorInput = {
    id?: string
    abhaId: string
    queueNumber?: number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: string | null
    visitType: $Enums.VisitType
  }

  export type OPDQueueUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patientInstance?: PatientInstanceUpdateOneRequiredWithoutOpqueueNestedInput
  }

  export type OPDQueueUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientInstanceId?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OPDQueueUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientInstanceId?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmissionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patinet?: PatientInstanceUpdateOneRequiredWithoutAdmissionNestedInput
    ward?: WardUpdateOneWithoutAdmissionsNestedInput
    bed?: BedUpdateOneWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdmissionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientInstanceUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    opqueue?: OPDQueueUpdateManyWithoutPatientInstanceNestedInput
    admission?: AdmissionUpdateManyWithoutPatinetNestedInput
  }

  export type PatientInstanceUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
    opqueue?: OPDQueueUncheckedUpdateManyWithoutPatientInstanceNestedInput
    admission?: AdmissionUncheckedUpdateManyWithoutPatinetNestedInput
  }

  export type PatientInstanceUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    abhaId?: StringFieldUpdateOperationsInput | string
    queueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: EnumVisitTypeFieldUpdateOperationsInput | $Enums.VisitType
  }

  export type DoctorsCreateManyDepartmentInput = {
    id?: string
    name: string
    gender: string
    designation: $Enums.DesignationType
    contact: string
    email: string
    password: string
    active: boolean
  }

  export type DoctorsUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    opdQueue?: OPDQueueUpdateManyWithoutDoctorNestedInput
    admissions?: AdmissionUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    opdQueue?: OPDQueueUncheckedUpdateManyWithoutDoctorNestedInput
    admissions?: AdmissionUncheckedUpdateManyWithoutDoctorNestedInput
    patientInstances?: PatientInstanceUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationTypeFieldUpdateOperationsInput | $Enums.DesignationType
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdmissionCreateManyBedInput = {
    id?: string
    patientId: string
    wardId?: string | null
    doctorId: string
  }

  export type AdmissionUpdateWithoutBedInput = {
    id?: StringFieldUpdateOperationsInput | string
    patinet?: PatientInstanceUpdateOneRequiredWithoutAdmissionNestedInput
    ward?: WardUpdateOneWithoutAdmissionsNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutBedInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionUncheckedUpdateManyWithoutBedInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type BedCreateManyWardInput = {
    id?: string
    bedNumber: string
    status: $Enums.BedStatus
  }

  export type AdmissionCreateManyWardInput = {
    id?: string
    patientId: string
    bedId?: string | null
    doctorId: string
  }

  export type BedUpdateWithoutWardInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
    admissions?: AdmissionUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateWithoutWardInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
    admissions?: AdmissionUncheckedUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateManyWithoutWardInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumBedStatusFieldUpdateOperationsInput | $Enums.BedStatus
  }

  export type AdmissionUpdateWithoutWardInput = {
    id?: StringFieldUpdateOperationsInput | string
    patinet?: PatientInstanceUpdateOneRequiredWithoutAdmissionNestedInput
    bed?: BedUpdateOneWithoutAdmissionsNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutWardInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionUncheckedUpdateManyWithoutWardInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type OPDQueueCreateManyPatientInstanceInput = {
    id?: string
    doctorId: string
    status: $Enums.QueueStatus
    queueNumber: number
    timeStamp?: Date | string | null
  }

  export type AdmissionCreateManyPatinetInput = {
    id?: string
    wardId?: string | null
    bedId?: string | null
    doctorId: string
  }

  export type OPDQueueUpdateWithoutPatientInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: DoctorsUpdateOneRequiredWithoutOpdQueueNestedInput
  }

  export type OPDQueueUncheckedUpdateWithoutPatientInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OPDQueueUncheckedUpdateManyWithoutPatientInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    queueNumber?: IntFieldUpdateOperationsInput | number
    timeStamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmissionUpdateWithoutPatinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    ward?: WardUpdateOneWithoutAdmissionsNestedInput
    bed?: BedUpdateOneWithoutAdmissionsNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutPatinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionUncheckedUpdateManyWithoutPatinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    wardId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCreateManyMainStoreInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    subStoreId?: string | null
    pharmacyId?: string | null
  }

  export type SubStoreCreateManyMainStoreInput = {
    id?: string
    name: string
  }

  export type InventoryUpdateWithoutMainStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    subStore?: SubStoreUpdateOneWithoutInventoryNestedInput
    pharmacy?: PharmacyUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutMainStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    subStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUncheckedUpdateManyWithoutMainStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    subStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubStoreUpdateWithoutMainStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUpdateManyWithoutSubStoreNestedInput
    pharmacies?: PharmacyUpdateManyWithoutSubStoreNestedInput
  }

  export type SubStoreUncheckedUpdateWithoutMainStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutSubStoreNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutSubStoreNestedInput
  }

  export type SubStoreUncheckedUpdateManyWithoutMainStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCreateManySubStoreInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStoreId?: string | null
    pharmacyId?: string | null
  }

  export type PharmacyCreateManySubStoreInput = {
    id?: string
    name: string
  }

  export type InventoryUpdateWithoutSubStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStore?: MainStoreUpdateOneWithoutInventoryNestedInput
    pharmacy?: PharmacyUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutSubStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUncheckedUpdateManyWithoutSubStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PharmacyUpdateWithoutSubStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutSubStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateManyWithoutSubStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCreateManyPharmacyInput = {
    id?: string
    itemName: string
    category: $Enums.InventoryCategory
    quantity: number
    price: number
    reorderLevel: number
    lastOrderDate?: Date | string
    stockBatches?: InventoryCreatestockBatchesInput | InputJsonValue[]
    mainStoreId?: string | null
    subStoreId?: string | null
  }

  export type InventoryUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStore?: MainStoreUpdateOneWithoutInventoryNestedInput
    subStore?: SubStoreUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    subStoreId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    category?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    lastOrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stockBatches?: InventoryUpdatestockBatchesInput | InputJsonValue[]
    mainStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    subStoreId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DoctorsCountOutputTypeDefaultArgs instead
     */
    export type DoctorsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsCountOutputTypeDefaultArgs instead
     */
    export type DepartmentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BedCountOutputTypeDefaultArgs instead
     */
    export type BedCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BedCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WardCountOutputTypeDefaultArgs instead
     */
    export type WardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientInstanceCountOutputTypeDefaultArgs instead
     */
    export type PatientInstanceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientInstanceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MainStoreCountOutputTypeDefaultArgs instead
     */
    export type MainStoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MainStoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubStoreCountOutputTypeDefaultArgs instead
     */
    export type SubStoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubStoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PharmacyCountOutputTypeDefaultArgs instead
     */
    export type PharmacyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PharmacyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorsDefaultArgs instead
     */
    export type DoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsDefaultArgs instead
     */
    export type DepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OPDQueueDefaultArgs instead
     */
    export type OPDQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OPDQueueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BedDefaultArgs instead
     */
    export type BedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WardDefaultArgs instead
     */
    export type WardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientInstanceDefaultArgs instead
     */
    export type PatientInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientInstanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdmissionDefaultArgs instead
     */
    export type AdmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdmissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MainStoreDefaultArgs instead
     */
    export type MainStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MainStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubStoreDefaultArgs instead
     */
    export type SubStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PharmacyDefaultArgs instead
     */
    export type PharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PharmacyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDefaultArgs instead
     */
    export type InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDefaultArgs<ExtArgs>

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