export default defineNuxtRouteMiddleware((to, from) => {
  const parent = useState("parent");

  parent.value = "";

  if (to.path == "/") return;
  if (to.path.lastIndexOf("/") == 0) {
    parent.value = "/";
    return;
  }

  let path = to.path;

  //Check of path niet eindigd met een /
  if (path.slice(-1) == "/") path = to.path.substring(0, to.path.length - 1);

  // Parent url is de huidige url tot de laatse / (en slug)
  parent.value = path.substring(0, path.lastIndexOf("/"));

  // console.log(path);
  // console.log(path.lastIndexOf("/"));
  // console.log(path.substring(0, to.path.lastIndexOf("/")));
});
