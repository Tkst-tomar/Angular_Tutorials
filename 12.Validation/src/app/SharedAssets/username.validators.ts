import { AbstractControl, ValidatorFn } from "@angular/forms";

//! Hard Coded forbidden String
// export function forbiddenUserName(control : AbstractControl): {[key:string] : any} | null{
//   const forbidden = /admin/.test(control.value);
//   console.log("Forbidden >>", forbidden)
//   return forbidden ? {"ForbiddenName" : {value : control.value}} : null;
// }

//! Forbidden String is passed as an argument
export function forbiddenUserName(forbiddenName: RegExp) : ValidatorFn {
  return (control : AbstractControl): {[key:string] : any} | null => {
    const forbidden = forbiddenName.test(control.value);
    console.log("Forbidden >>", forbidden)
    return forbidden ? {"ForbiddenName" : {value : control.value}} : null;
  }
}
