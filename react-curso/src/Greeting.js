export function Greeting() {
  function add(x, y) {
    return x + y;
  }

  return <h1>{add(30, 50)}</h1>;
}
