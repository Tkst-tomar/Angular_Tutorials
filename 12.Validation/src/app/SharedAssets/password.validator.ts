import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function passwordValidator(control:AbstractControl):ValidatorFn {
//   return (control : AbstractControl) : {[key : string] : any} | null => {
//     console.log("FORM DATA", control)

//     if(control){
//       return {"passwordStatus" : {value : true}}
//     }else{
//       return null
//     }
//   }
// }

export function passwordValidator(control : AbstractControl):{[key:string] : any} |{[key:string] : number} {
  const pass = control.get('password')?.value
  const confirm = control.get('confirmPassword')?.value
  console.log("pASS",confirm ? pass === confirm ? {"isMatched" : {value:true}} : 1 : 2 )
  return confirm ? pass === confirm ? {"isMatched" : {value:true}} : {"isMatched" : {value:1}} :{"isMatched" : {value:2}}
}
