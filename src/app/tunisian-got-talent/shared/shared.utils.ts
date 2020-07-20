export function StringFormat(myString: string, ...args: any[]): string {
    args = FlattenArray(args);
    args = args.filter((x) => typeof x === "string" || typeof x === "number");
    let res = myString;
    if (args != undefined && args != null && args.length > 0) {
      args.forEach((x, i) => {
        res = res.replace("{" + i + "}", x);
      });
    }
    return res;
  }
  
  export function FlattenArray(arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
      const value = arr[i];
      if (Array.isArray(value)) {
        FlattenArray(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  }
  