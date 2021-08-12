import { isObject } from "rxjs/internal-compatibility";

export function TestConsole(...args: any[]) {
  console.log(`Arguments: `, args.map(arg => isObject(arg) ? JSON.stringify(arg): arg))
}
