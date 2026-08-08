// let userName: string = "";
// userName.isInteger()

// userName = "test";

// string: '', "", ``
// number: 0, 1, 0.5, 22, -10, 4e10
// boolean: true, false

// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Happy Birthday, ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// }

// let salary; //this type would be ANY
// salary = 300;

// const userData =
//   '{"isBirthdayData" : true, "ageData": 40, "userNameData": "John"}';

// const userObj: {
//   isBirthday: boolean;
//   userName: string;
//   age: number;
// } = JSON.parse(userData);
// console.log(userObj.smt());

// const test: null = null; //OKAY
// const test1: any = null; //OKAY
// const test2: string = null; //BAD
// const test3: number = null; //BAD

// const test4: undefined = undefined; //OKAY
// const test5: any = undefined; //OKAY
// const test6: string = undefined; //BAD

// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";

// const userData = {
//   isBirthdayData: true,
//   ageData: 40,
//   userNameData: "John",
//   messages: {
//     error: "Error",
//   },
// };

// const userDataTuple: [boolean, number, string] = [true, 40, "John"];

// const res = userDataTuple.map((t) => `${t} - data`);

// const [bthd, age, userName] = userDataTuple;

// const createError = (msg: string) => {
//   throw new Error(msg);
// };

// const logBrtMsg = ({
//   isBirthdayData,
//   userNameData,
//   ageData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   ageData: number;
//   messages: { error: string };
// }): string => {
//   if (isBirthdayData) {
//     return `Happy Birthday, ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
//   } else {
//     return createError(error);
//   }
// };

// console.log(logBrtMsg(userData));

// const departments: string[] = ["dev", "design", "marketing"];

// const department = departments[0];

// // departments.push(5) //!ERROR
// const report = departments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);

// const nums: number[][] = [
//   //!Matrix
//   [3, 5, 6],
//   [4, 7, 8],
// ];

// const message: string | number = 5;
// const messages: string[] | number[] = ["a", "b"];

// function printMsg2(msg: string | number | boolean): void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// }

// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (typeof msg === "number") {
//     console.log(msg.toFixed());
//   } else {
//     console.log(msg);
//   }
// }

// printMsg(3);

// const printReadings = (a: number | string, b: number | string) => {
//   if (a === b) {
//     console.log(a, b);
//   }
// };

// const printReadings2 = (a: number[] | string) => {
//   console.log(a.slice(0, 3));
// };

// function checkReadings(readings: { system: number } | { user: string }): void {
//   if ("system" in readings) {
//     console.log(readings.system);
//   } else {
//     console.log(readings.user);
//   }
// }

// function logValue(x: string | Date) {
//   if (x instanceof Date) {
//     console.log(x.getDate());
//   } else {
//     console.log(x.trim());
//   }
// }

// let msg: "Hello" = "Hello";

// msg = "Hello";

// // type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
// interface Config {
//   protocol: "http" | "https";
//   port: 3000 | 3001;
//   log: (msg: string) => void;
// }
// // type Role = { role: string };
// // type ConfigWithRole = Config & Role;

// interface Role {
//   role: string;
// }

// interface ConfigWithRole extends Config, Role {}

// const serverConfig: ConfigWithRole = {
//   protocol: "https",
//   port: 3001,
//   role: "admin",
//   log: (msg: string): void => console.log(msg),
// };

// // const backupConfig: ConfigWithRole = {
// //   protocol: "http",
// //   port: 3000,
// //   role: "sysadmin",
// // };

// type StartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void,
// ) => string;

// const startServer: StartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void,
// ): "Server started" => {
//   log(`Server started on ${protocol}://server:${port}`);

//   return "Server started";
// };

// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// interface Styles {
//   [key: string]: string;
// }

// const styles: Styles = {
//   position: "ablsolute",
//   top: "20px",
//   left: "50px",
// };

// // type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
// // type AnimationID = string | number;

// // function createAnimation(
// //   id: AnimationID,
// //   animName: string,
// //   timingFunc: AnimationTimingFunc = "ease",
// //   duration: number,
// //   iterCount: "infinite" | number
// // ): void {
// //   console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
// // }

// // createAnimation("id", "fadeAnim", "ease-in", 5, "infinite");

// let salary: number;
// salary = 500;

// interface UserData {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// }

// const userData = `{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}`;

// const userObj: UserData = JSON.parse(userData);
// // console.log(userObj.smth); //! Property 'smth' does not exist on type 'UserData'.

// const isOkay = true;
// let movement: boolean | string = false;

// if (isOkay) {
//   movement = "moving";
// }

// interface User {
//   readonly login: string;
//   password: string;
//   age: number;
//   readonly addr?: string;
//   // readonly addr: string | undefined;
//   parents?: {
//     mother?: string;
//     father?: string;
//   };
// }

// const user: User = {
//   login: "first",
//   password: "passw1",
//   age: 23,
//   addr: "adddr",
// };

// user.login = 'sdsd' //!Cannot assign to 'login' because it is a read-only property.
// user.password = "sdsd";

// const dbName = "12345";
// let dbName: string;
// sendUserData(user, "qwerty");
// console.log(dbName!);

// function sendUserData(obj: User, db?: string): void {
//   console.log(
//     obj.parents!.father?.toLocaleLowerCase(),
//     db!.toLocaleLowerCase(),
//   );
// }

// const TOP = "Top";
// const RIGHT = "Right";

// enum Directions {
//   TOP,
//   RIGHT,
//   LEFT,
//   BOTTOM,
// }

// enum TimingFunc {
//   EASE = "ease",
//   EASE_IN = "ease-in",
//   LINEAR = "linear",
// }

// enum TimingFunc1 {
//   EASE = 1,
//   EASE_IN = 2,
//   LINEAR = EASE * 2,
// }

// function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
//   if (dir === Directions.RIGHT) {
//     console.log(tFunc);
//   }
// }

// frame("id", Directions.RIGHT, TimingFunc.LINEAR);

// let smth: unknown;

// smth = "str";

// let data: string[] = smth;
// data.find((e) => e);

// const someValue: unknown = 10
// someValue.method()

// function fetchData(data: unknown): void {
//   if (typeof data === "string") {
//     console.log(data.toLocaleLowerCase());
//   }
//   // data.method(); //!Error = 'data' is of type 'unknown'
// }

// const userData = `{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}`;

// function safeParse(s: string): unknown {
//   return JSON.parse(s);
// }

// const data = safeParse(userData);

// function transferData(d: unknown): void {
//   if (typeof d === "string") {
//     console.log(d.toLocaleLowerCase());
//   } else if (typeof d === "object" && d) {
//     console.log(data);
//   } else {
//     console.error("error");
//   }
// }

// transferData(data);

// try {
//   if (1) {
//     throw new Error("error");
//   }
// } catch (e) {
//   if (e instanceof Error) {
//     console.log(e.message);
//   } else if (typeof e === "string") {
//     console.log(e);
//   }
// }

// type T0 = any | unknown; //? type T0 = any UNION TYPE
// type T1 = number | unknown; //? type T1 = unknown UNION TYPE
// type T2 = any & unknown; //? type T2 = any INTERSECTION TYPE
// type T3 = number & unknown; //? type T3 = number INTERSECTION TYPE

// const dataFromControl = {
//   water: 200,
//   el: 350,
// };

// function checkReadings(data: typeof dataFromControl): boolean {
//   const dataFromUser = {
//     water: 200,
//     el: 350,
//   };

//   if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const PI = 3.14;
// let PIClone: typeof PI;

// const fetchData = (url: string, method: "GET" | "POST"): void => {
//   console.log(method);
// };

// const reqOptions = {
//   url: "https://someurl.com",
//   method: "GETqqq",
// };

// const str = "str";
// const method = "GET";

// fetchData("qqq", "GET");
// // fetchData(reqOptions.url, reqOptions.method as "GET");
// fetchData(reqOptions.url, <"GET">reqOptions.method);

// const box = document.querySelector(".box") as HTMLElement;
// const input = <HTMLInputElement>document.querySelector("input");

// // const someNumber: number = +input.value;
// const someNumber: number = +input.value;
// console.log(someNumber.toFixed());

// // !----

// let a = "value" as const;

// let b = { f: 100 } as const;
// let c = [] as const;

// let value = "value";
// let arr = ["ad", "ddas"];
// let obj = { f: 100 };

// let T0 = obj as const; //!A 'const' assertion can only be applied to references to enum members, or string, number, boolean, array, or object literals.

// let T5 = (Math.round(Math.random() * 1) ? "yes" : "no") as const;

// let num: Number = new Number(5);
// let num2: number = 5;
// let num3: number = Number(5);

// num = num2;
// num2 = num; //! Type 'Number' is not assignable to type 'number'. 'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible

// const num = 5;
// const strNum: string = num.toString();
// const str = "5";
// const numStr: number = +str;

// interface Department {
//   name: string;
//   budget: number;
// }

// const department: Department = {
//   name: "web-dev",
//   budget: 5000,
// };

// interface Project {
//   name: string;
//   projectBudget: number;
// }

// // const mainProject: Project = {
// //   ...department,
// //   projectBudget: 5000,
// // };

// function transformDepartment(department: Department, amount: number): Project {
//   return {
//     name: department.name,
//     projectBudget: amount,
//   };
// }

// const mainProject = transformDepartment(department, 4000);

// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (isNumber(msg)) {
//     console.log(msg);
//   } else {
//     console.log(msg);
//   }
//   console.log(msg);
// }

// printMsg(4);

// function isNumber(n: string[] | number | boolean): n is number {
//   return typeof n === "number";
// }

// interface Car {
//   engine: string;
//   wheels: {
//     number: number;
//     type: string;
//   };
// }

// interface Ship {
//   engine: string;
//   sail: string;
// }

// function repairVehicle(vehicle: Car | Ship) {
//   if (isCar(vehicle)) {
//     vehicle.wheels;
//   } else if (isShip(vehicle)) {
//     vehicle.sail;
//   } else {
//     vehicle;
//   }
// }

// function isCar(car: Car | Ship): car is Car {
//   return (car as Car).wheels.number !== undefined;
// }

// function isShip(ship: Car | Ship): ship is Ship {
//   return "sail" in ship;
// }

// interface Square {
//   side: number;
//   area: number;
// }

// interface Rect {
//   a: number;
//   b: number;
//   area: number;
// }

// function calculateArea(side: number): Square;
// function calculateArea(a: number, b: number): Rect;
// function calculateArea(a: number, b?: number): Square | Rect {
//   if (b) {
//     const rect: Rect = {
//       a,
//       b,
//       area: a * b,
//     };

//     return rect;
//   } else {
//     const square: Square = {
//       side: a,
//       area: a * a,
//     };

//     return square;
//   }
// }

// calculateArea(1, 5)

// const box = document.querySelector(".box") as HTMLElement;
// const input = document.querySelector("input");
// const link = document.querySelector("a");
// const p = document.querySelector(".paragraph") as HTMLParagraphElement;
// const links = document.querySelectorAll(".a");

// if (link) {
//   link.href = "asdasd";
// }

// input?.value;

// const elem = document.createElement("a");

// link?.addEventListener("scroll", (e) => {
//   e.preventDefault();
// });

//!!!GENERICS

// function processingData<T, S>(data: T[], options: S): string {
//   data.length;
//   switch (typeof data) {
//     case "string":
//       return `${data}, speed: ${options}`;
//       break;
//     case "number":
//       return `${data}, speed: ${options}`;
//       break;
//     default:
//       return "Not valid";
//   }
// }

// let res1 = processingData([1], "fast");
// let res2 = processingData(["1"], "slow");

// const num = 10;

// const res3 = processingData<number, string>([num], "slow");

// function processing<T>(data: T): T {
//   return data;
// }

// interface ProcessingFn {
//   <T>(data: T): T;
// }

// let newFunc: ProcessingFn = processing;

// interface DataSaver {
//   processing: ProcessingFn;
// }

// const saver: DataSaver = {
//   processing: processing,
// };

// interface PrintUK {
//   design: number;
// }
// interface PrintES {
//   design: string;
// }

// interface Print<Type> {
//   design: Type;
// }

// const somePrint: Print<string> = {
//   design: "ten",
// };

// const someOtherPrint: Print<number> = {
//   design: 10,
// };

// interface ProcessingFn {
//   <T>(data: T): T;
// }

// function processing<T>(data: T): T {
//   return data;
// }

// let newFunc: ProcessingFn = processing;

// type Smth<T> = T;

// const num: Smth<number> = 5;

// interface ParentsOfUser {
//   mother: string;
//   father: string;
// }

// interface User<ParentsData extends ParentsOfUser> {
//   login: string;
//   age: number;
//   parents: ParentsData;
// }

// const user: User<{ mother: string; father: string; married: boolean }> = {
//   login: "str",
//   age: 54,
//   parents: { mother: "Anna", father: "no data", married: true },
// };

// type OrNull<Type> = Type | null;
// type OneOrMany<Type> = Type | Type[];

// const data: OneOrMany<number[]> = [5];

// // const depositMoney = <T extends number | string>(amount: T): T => {
// //   console.log(`req to server with amount: ${amount}`);
// //   return amount;
// // };

// // depositMoney(500);
// // depositMoney("500");
// // depositMoney(false);

// const depositMoney = (amount: number | string): number | string => {
//   console.log(`req to server with amount: ${amount}`);
//   return amount;
// };

// depositMoney(500);
// depositMoney("500");
// // depositMoney(false); //!Error

// class User<T, S> {
//   name: T;
//   age: S;
//   constructor(name: T, age: S) {
//     this.name = name;
//     this.age = age;
//   }

//   sayMyFullName<T>(surname: T): string {
//     if (typeof surname !== "string") {
//       return `I have only name: ${this.name}`;
//     } else {
//       return `${this.name} ${surname}`;
//     }
//   }
// }

// const ivan = new User("Ivan", 30);
// console.log(ivan.sayMyFullName("Smith"));

// const nameData = "Alex";
// const ageData = 31;

// const alex = new User<string, number>(nameData, ageData);

// const arr: Array<number> = [1, 2, 3];
// const arr1: number[] = [1, 2, 3];

// const roarr: ReadonlyArray<string> = ["ddsds"];
// // roarr[0] = "wewew";

// interface IState {
//   data: {
//     name: string;
//   };
//   tag?: string;
// }

// const state: Partial<IState> = {
//   data: {
//     name: "John",
//   },
// };

// const strictState: Required<IState> = {
//    data: {
//     name: "sadas",
//   },
//   tag: "asdasd"
// }

// function action(state: Readonly<IState>) {
//   state.data.name = "abc";
// }

// interface ICompany {
//   name: string;
//   debts: number;
//   departments: Department[];
//   management: {
//     owner: string;
//   };
// }

// interface Department {
//   [key: string]: string;
// }

// const debts = "debts";
// type CompanyDebtsType = ICompany[typeof debts];

// // type CompanyDebtsType = ICompany["debts"];
// type CompanyOwnerType = ICompany["management"]["owner"];
// type CompanyDepartmentsType = ICompany["departments"][number];
// type CompanyDepartmentsTypes = ICompany["departments"];
// type Test = ICompany[keyof ICompany];

// type CompanyKeys = keyof ICompany;
// const keys: CompanyKeys = "debts";

// function printDebts<T, K extends keyof T, S extends keyof T>(
//   company: T,
//   name: K,
//   debts: S,
// ) {
//   console.log(`Company ${company[name]}, debts: ${company[name]}`);
// }

// // const hh: ICompany = {
// //   name: "HH",
// //   debts: 50000,
// // };

// // printDebts(hh, "name", "debts");

// const google: ICompany = {
//   name: "Google",
//   debts: 5000,
//   departments: {
//     sales: "sales",
//     developer: "dev",
//   },
//   management: {
//     owner: "John",
//   },
// };

// printDebts(google, "name", "debts");

// type GoogleKeys = keyof typeof google;
// const keys2: GoogleKeys = "name";

// Condition ? true : false
// SomeType extends OtherType ? TrueType : FalseType

// const str: string = "Hello";
// type Example = "string" extends "Hello" ? string : number;

// type FromUserOrFromBase<T extends string | number> = T extends string
//   ? IDataFromUser
//   : IDataFromBase;

// interface User<T extends "created" | Date> {
//   created: T extends "created" ? "created" : Date;
// }

// const user: User<"created"> = {
//   created: "created",
// };
// interface IDataFromUser {
//   weight: string;
// }
// interface IDataFromBase {
//   calories: number;
// }

// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(num: number): IDataFromBase;

// function calculateDailyCalories<T extends string | number>(
//   numOrStr: T,
// ): T extends string ? IDataFromUser : IDataFromBase {
//   if (typeof numOrStr === "string") {
//     const obj: IDataFromUser = {
//       weight: numOrStr,
//     };
//     return obj as FromUserOrFromBase<T>;
//   } else {
//     const obj: IDataFromBase = {
//       calories: numOrStr,
//     };
//     return obj as FromUserOrFromBase<T>;
//   }
// }

// type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
//   ? "hello"
//   : T extends "world"
//     ? "world"
//     : string;

// type GetFirstType<T> = T extends Array<infer First> ? First : T;

// type Ex = GetFirstType<number[]>;

// type ToArray<Type> = Type extends any ? Type[] : never;

// type ExArray = ToArray<Ex | string>;

// type Currencies = {
//   usa: "usd";
//   china?: "cny";
//   ukraine: "uah";
//   readonly kz: "tenge";
// };

// type CreateCustomCurr<T> = {
//   -readonly [P in keyof T]-?: string;
// };

// type CustomCurrencies = CreateCustomCurr<Currencies>;

// type ROnlyCurr = Readonly<Currencies>;

// // type CustomCurrencies = {
// //   usa: string;
// //   china: string;
// //   ukraine: string;
// //   kz: string;
// // };

// type Keys = "name" | "age" | "role";

// type User = {
//   [K in Keys]: string;
// };

// const alex: User = {
//   name: "Alex",
//   age: "25",
//   role: "admin",
// };

// type Currencies = {
//   usa: "usd";
//   ukraine: "uah";
//   china: "cny";
//   kz: "tenge";
// };

// type CreateCustomCurr<T> = {
//   [P in keyof T as `custom${Capitalize<string & P>}`]: string;
// };

// type CurrWithoutUSA = Omit<Currencies, "usa">; // исключение
// type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; // фильтрация по свойству
// type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;

// type FadeType = Exclude<MyAnimation, "swipe">; // удаление из union type
// type SwipeType = Extract<MyAnimation | Direction, "swipe">; // выбор подходящего типа

// type PlayerNames = "alex" | "john";
// type CustomCurrencies = CreateCustomCurr<Currencies>;
// type GameDataCurr = Record<PlayerNames, CustomCurrencies>;

// const gameData: GameDataCurr = {
//   alex: {
//     customChina: "111",
//     customKz: "222",
//     customUkraine: "333",
//     customUsa: "444",
//   },
//   john: {
//     customChina: "111",
//     customKz: "222",
//     customUkraine: "333",
//     customUsa: "444",
//   },
// };

// type MyAnimation = "fade" | "swipe";
// type Direction = "in" | "out";

// type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

// function calculate(a: number, b: number): number {
//   return a * b;
// }

// type CalculateRT = ReturnType<typeof calculate>;

// let anotherRes: CalculateRT = 5;

// type CalculatePT = Parameters<typeof calculate>[0];
// type PT1 = Parameters<(a: number) => number>;
// type PT2 = Parameters<<T>(a: T) => T>;

// class Example {
//   constructor(a: number) {}
// }

// type T0 = ConstructorParameters<typeof Example>;

// const jsonTest = '{"name": "Test", "data": "dadaaad"}';

// interface JSONTest {
//   name: string;
//   data: number;
// }

// const objFromJson: JSONTest = JSON.parse(jsonTest);

// let toDoList: ToDo[] = [];

// interface ToDo {
//   userId: number;
//   id: number;
//   title: string;
//   complete: boolean;
// }

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     if ("id" in json) {
//       toDoList.push(json);
//     } else if (Array.isArray(json)) {
//       toDoList = json;
//     } else {
//       console.log(`${json} - is a string`);
//     }
//     console.log(toDoList);
//   });

// const promise = new Promise<string>((resolve, reject) => {
//   resolve("Test");
// });

// promise.then((value) => {
//   console.log(value.toLowerCase());
// });

// type FromPromise = Awaited<Promise<Promise<number>>>;

// interface User {
//   name: string;
// }

// async function fetchUsers(): Promise<User[]> {
//   const users: User[] = [
//     {
//       name: "Alex",
//     },
//   ];

//   return users;
// }

// const users = fetchUsers();

// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

// type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
// type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>;

//! CLASSES

// class Box {
//   width: number;
//   height!: number;
//   volume: number | undefined;
//   content: string | undefined;

//   constructor(width: number, volume?: number, content?: string) {
//     this.width = width;
//     this.volume = volume;
//     this.content = content;
//     this.height = 500;
//   }

//   calculateVolume(): void {
//     if (!this.volume) {
//       this.volume = this.width * this.height;
//       console.log(`Item volume: ${this.volume}`);
//     } else {
//       console.log(`Item volume: ${this.volume}`);
//     }
//   }

//   checkBoxSize(transport: number): string;
//   checkBoxSize(transport: number[]): string;
//   checkBoxSize(transport: number | number[]): string {
//     if (typeof transport === "number") {
//       return transport >= this.width ? "Ok" : "Not ok";
//     } else {
//       return transport.some((t) => t >= this.width) ? "Ok" : "Not ok";
//     }
//   }

//   // get boxContent() {
//   //   return this.content;
//   // }

//   // set boxContent(value) {
//   //   this.content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
//   // }

//   async contented(value: string) {
//     const date = await new Date().toTimeString();
//     this.content = `Date: ${date}, Content: ${value}`;
//     console.log(this.content);
//     // return this.content;
//   }
// }

// const firstBox = new Box(250);
// // console.log(firstBox.calculateVolume());
// firstBox.volume = 5000;
// // console.log(firstBox.checkBoxSize(300));
// // console.log((firstBox.boxContent = "Test"));
// // console.log(firstBox.boxContent);

// // class User {
// //   name!: string;
// // }

// // const ivan = new User();
// // ivan.name = "Ivan";

// // console.log(ivan);

// class Styles {
//   [s: string]: string | ((s: string) => boolean);

//   // method() { //!Error, func void

//   // }
// }

// const style = new Styles();
// style.color = "red";
// style.font = "Roboto";

// class PresentBox extends Box {
//   wrap: string;
//   height: number = 600;

//   constructor(wrap: string, width: number) {
//     super(width);
//     this.wrap = wrap;
//   }

//   override async contented(value: string, text?: string) {
//     const date = await new Date().toTimeString();

//     if (!text) {
//       super.contented(value);
//     } else {
//       this.content = `Date: ${date}, Content: ${value}, Text: ${
//         text ? text : "No text"
//       }`;
//     }

//     console.log(this.content);
//     // return this.content;
//   }
// }

// new PresentBox("red", 500).contented("TV", "Gift");

// interface IUser {
//   login: string;
//   password: string;
//   token?: number;
// }

// interface IValidation {
//   valid: boolean;
//   isValid: (data: string) => boolean;
// }

// class UserForm implements IUser, IValidation {
//   login!: string;
//   password!: string;
//   valid: boolean = false;
//   token!: number;

//   isValid(login: string) {
//     return login.length > 3;
//   }
// }

// new UserForm().token;

function setName() {
  return "COD";
}

class Player {
  private static game: string = "COD";

  #login!: string;
  private _password!: string;
  public server!: string;
  protected consent!: boolean;

  constructor(login: string) {
    this.#login = login;
  }

  static {
    Player.game = setName();
  }

  get password() {
    return this._password;
  }

  set password(newPass: string) {
    //validation...
    this._password = newPass;
  }

  static getGameName() {
    return Player.game;
  }

  logIn = () => {
    return `Player ${this.#login} is online!`;
  };

  connect() {
    //Do smth
    return this;
  }

  isPro(): this is CompetitvePlayer {
    return this instanceof CompetitvePlayer;
  }
}

const player = new Player("test");
console.log(player.connect().logIn());

const test = player.logIn.bind(player);
test();
// new Player();
// new Player();
// new Player();
// console.log(Player.getGameName());

// const testPlayer = new Player();
// testPlayer.#login //! Error

class CompetitvePlayer extends Player {
  rank!: number;

  checkLogin() {
    return this.logIn();
  }

  private isConsented() {
    this.consent ? "Yes" : "No";
  }
}

const player2 = new CompetitvePlayer("Test2");
console.log(player2.connect().logIn());

const somePlayer: Player | CompetitvePlayer = new CompetitvePlayer("Test3");
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

// class User {
//   public email: string;
//   public name: string;

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// class User {
//   constructor(
//     public email: string,
//     public name: string,
//   ) {}
// }
