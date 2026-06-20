import {create} from "zustand";

type PasswordState={
  length:number;
  includeNumbers:boolean;
  includeSymbols:boolean;
  includeUppercase:boolean;
  includeLowercase:boolean;
  generatedPassword:string;
  setLength:(length:number)=>void;
  toggleNumbers:()=>void;
  toggleSymbols:()=>void;
  toggleUppercase:()=>void;
  toggleLowercase:()=>void;
  generatePassword:()=>void;
}

const usePasswordStore=create((set)=>({

}))