// let result = joinClassName(str, obj, arr, 'test class')
export function joinClassName(...args: any[]): string {
  let template = "";
  args.forEach((arg) => {
    if (typeof arg === "string") {
      template += " " + arg;
      return;
    }
    if (arg.join) {
      arg.forEach((ag: string) => {
        template += " " + ag;
      });
      return;
    }
    let entries = Object.entries(arg);
    if (entries.length) {
      entries.forEach((entry) => {
        if (entry[1]) template += " " + entry[0];
      });
    }
  });
  return template.trim();
}
