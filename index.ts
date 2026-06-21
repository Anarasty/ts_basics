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

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error",
  },
};

const userDataTuple: [boolean, number, string] = [true, 40, "John"];

const res = userDataTuple.map((t) => `${t} - data`);

const [bthd, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg = ({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string => {
  if (isBirthdayData) {
    return `Happy Birthday, ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
};

console.log(logBrtMsg(userData));

const departments: string[] = ["dev", "design", "marketing"];

const department = departments[0];

// departments.push(5) //!ERROR
const report = departments
  .filter((d: string) => d !== "dev")
  .map((d: string) => `${d} - done`);

const nums: number[][] = [
  //!Matrix
  [3, 5, 6],
  [4, 7, 8],
];
