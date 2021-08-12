export function PromptDelete(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any) {
    const res = confirm("Are you sure?");

    if (res){
      return originalMethod.apply(this, args);
    }
  };

  return descriptor;
}
