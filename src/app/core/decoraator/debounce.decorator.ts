export function DebounceDecorator(timeout: number) {

  let timeoutRef: string | number | any | undefined = null;

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const original = descriptor.value;
    descriptor.value = function debounce(...args: any[]) {
      // @ts-ignore
      clearTimeout(timeoutRef);
      timeoutRef = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
    }
    return descriptor;
  }
}
