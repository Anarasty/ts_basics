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

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Happy Birthday, ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return createError("Error");
  }
};

logBrtMsg(isBirthdayData, userNameData, 40);

const test: null = null; //OKAY
const test1: any = null; //OKAY
const test2: string = null; //BAD
const test3: number = null; //BAD

const test4: undefined = undefined; //OKAY
const test5: any = undefined; //OKAY
const test6: string = undefined; //BAD
