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

const usePasswordStore=create<PasswordState>((set)=>({
  length:12,
  includeSymbols:false,
  includeLowercase:true,
  includeNumbers:true,
  includeUppercase:true,
  generatedPassword:'',
  setLength:(length)=>set({length}),
  toggleNumbers:()=>set(state=>({includeNumbers:!state.includeNumbers})),
  toggleSymbols:()=>set(state=>({includeSymbols:!state.includeSymbols})),
  toggleLowercase:()=>set(state=>({includeLowercase:!state.includeLowercase})),
  toggleUppercase:()=>set(state=>({includeUppercase:!state.includeUppercase})),
  generatePassword:()=>set((state)=>{
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+-=[]{}|;:,.<>?";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase="abcdefghijklmnopqrstuvwxyz";

    let chars="";

    if(state.includeNumbers) chars+=numbers;
    if(state.includeSymbols) chars+=symbols;
    if(state.includeLowercase) chars+=lowercase;
    if(state.includeUppercase) chars==uppercase;

    if(!chars) return {generatedPassword:""}

  })
}))