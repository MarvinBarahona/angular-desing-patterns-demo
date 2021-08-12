import { isObject } from "rxjs/internal-compatibility";

declare type DecoratorType = 'class' | 'method' | 'accessor' | 'property' | 'parameter';

export function TestConsole(type: DecoratorType) {
  return (...args: any[]) => {
    console.log(`Arguments for ${type}: `, args.map(arg => isObject(arg) ? JSON.stringify(arg) : arg));
  }
}
