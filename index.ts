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

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (isNumber(msg)) {
    console.log(msg);
  } else {
    console.log(msg);
  }
  console.log(msg);
}

printMsg(4);

function isNumber(n: string[] | number | boolean): n is number {
  return typeof n === "number";
}

interface Car {
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  engine: string;
  sail: string;
}

function repairVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    vehicle.wheels;
  } else if (isShip(vehicle)) {
    vehicle.sail;
  } else {
    vehicle;
  }
}

function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Car | Ship): ship is Ship {
  return "sail" in ship;
}
