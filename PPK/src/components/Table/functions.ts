import { UserData } from "./Types";

  export const total = 200;

  const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const generateRandomEmail = (): string => {
    const username = generateRandomString(8);
    const domain = generateRandomString(6);
    return `${username}@${domain}.com`;
  };
  
  const generateRandomRole = (): string => {
    const roles = ['Admin', 'User', 'Guest'];
    return roles[Math.floor(Math.random() * roles.length)];
  };
  
 export const generateRandomData = (): UserData[] => {
    const data: UserData[] = [];
    for (let i = 1; i <= total; i++) {
      const firstname = generateRandomString(8);
      const lastname = generateRandomString(10);
      const email = generateRandomEmail();
      const role = generateRandomRole();
      data.push({ firstname, lastname, email, role });
    }
    return data;
  };
  