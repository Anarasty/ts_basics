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

let msg: "Hello" = "Hello";

msg = "Hello";

// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
interface Config {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}
// type Role = { role: string };
// type ConfigWithRole = Config & Role;

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {}

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
  log: (msg: string): void => console.log(msg),
};

// const backupConfig: ConfigWithRole = {
//   protocol: "http",
//   port: 3000,
//   role: "sysadmin",
// };

type StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "ablsolute",
  top: "20px",
  left: "50px",
};

// type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
// type AnimationID = string | number;

// function createAnimation(
//   id: AnimationID,
//   animName: string,
//   timingFunc: AnimationTimingFunc = "ease",
//   duration: number,
//   iterCount: "infinite" | number
// ): void {
//   console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
// }

// createAnimation("id", "fadeAnim", "ease-in", 5, "infinite");

let salary: number;
salary = 500;

interface UserData {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}

const userData = `{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}`;

const userObj: UserData = JSON.parse(userData);
// console.log(userObj.smth); //! Property 'smth' does not exist on type 'UserData'.

const isOkay = true;
let movement: boolean | string = false;

if (isOkay) {
  movement = "moving";
}

interface User {
  login: string;
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first",
  password: "passw1",
  age: 23,
  addr: "adddr",
};

const dbName = "12345";

function sendUserData(obj: User, db?: string): void {
  console.log(
    obj.parents?.father?.toLocaleLowerCase(),
    db?.toLocaleLowerCase()
  );
}
