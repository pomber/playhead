async function foo() {
  return 3;
}

export function createAnimation(type, preProps, ...children) {
  const props = Object.assign({ children }, preProps);

  if (typeof type === "string") {
    console.log(type, props);
  } else {
    console.log(type.name, props);
  }

  foo().then(console.log);
}
