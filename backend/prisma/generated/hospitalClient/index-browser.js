
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DoctorsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  gender: 'gender',
  designation: 'designation',
  contact: 'contact',
  email: 'email',
  password: 'password',
  active: 'active',
  departmentId: 'departmentId',
  hospitalCode: 'hospitalCode'
};

exports.Prisma.DepartmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  headOfDepartmentId: 'headOfDepartmentId'
};

exports.Prisma.OPDQueueScalarFieldEnum = {
  id: 'id',
  patientInstanceId: 'patientInstanceId',
  doctorId: 'doctorId',
  status: 'status',
  queueNumber: 'queueNumber',
  timeStamp: 'timeStamp'
};

exports.Prisma.BedScalarFieldEnum = {
  id: 'id',
  bedNumber: 'bedNumber',
  wardId: 'wardId',
  status: 'status'
};

exports.Prisma.WardScalarFieldEnum = {
  id: 'id',
  name: 'name',
  totalBeds: 'totalBeds',
  availableBeds: 'availableBeds'
};

exports.Prisma.PatientInstanceScalarFieldEnum = {
  id: 'id',
  abhaId: 'abhaId',
  name: 'name',
  age: 'age',
  Gender: 'Gender',
  reason: 'reason',
  doctorId: 'doctorId',
  queueNumber: 'queueNumber',
  medications: 'medications',
  feedback: 'feedback',
  visitType: 'visitType'
};

exports.Prisma.AdmissionScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  wardId: 'wardId',
  bedId: 'bedId',
  doctorId: 'doctorId'
};

exports.Prisma.MainStoreScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SubStoreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  mainStoreId: 'mainStoreId'
};

exports.Prisma.PharmacyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  subStoreId: 'subStoreId'
};

exports.Prisma.InventoryScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.DesignationType = exports.$Enums.DesignationType = {
  Trainee: 'Trainee',
  Assistant: 'Assistant',
  Senior: 'Senior',
  HeadOfDepartment: 'HeadOfDepartment'
};

exports.QueueStatus = exports.$Enums.QueueStatus = {
  Pending: 'Pending',
  Inprogress: 'Inprogress',
  Completed: 'Completed'
};

exports.BedStatus = exports.$Enums.BedStatus = {
  Available: 'Available',
  Occupied: 'Occupied',
  Under_Maintainence: 'Under_Maintainence'
};

exports.VisitType = exports.$Enums.VisitType = {
  FreshVisit: 'FreshVisit',
  Revisit: 'Revisit'
};

exports.InventoryCategory = exports.$Enums.InventoryCategory = {
  Medicine: 'Medicine',
  Surgical_Tools: 'Surgical_Tools',
  Others: 'Others'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
