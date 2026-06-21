// let userName: string = "";
// userName.isInteger()

// userName = "test";

// string: '', "", ``
// number: 0, 1, 0.5, 22, -10, 4e10
// boolean: true, false

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Happy Birthday, ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// }

const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Happy Birthday, ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return "Error";
  }
};

logBrtMsg(isBirthdayData, userNameData, 40);
