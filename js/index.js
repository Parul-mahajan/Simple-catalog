i = document.getElementById("1");
ii = document.getElementById("2");
iii = document.getElementById("3");
iv = document.getElementById("4");
v = document.getElementById("5");
vi = document.getElementById("6");

i.addEventListener("click", function () {
  i.classList.add("mystyle");
  ii.classList.remove("mystyle");
  iii.classList.remove("mystyle");
  iv.classList.remove("mystyle");
  v.classList.remove("mystyle");
  vi.classList.remove("mystyle");
});
ii.addEventListener("click", function () {
  ii.classList.add("mystyle");
  i.classList.remove("mystyle");
  iii.classList.remove("mystyle");
  iv.classList.remove("mystyle");
  v.classList.remove("mystyle");
  vi.classList.remove("mystyle");
});
iii.addEventListener("click", function () {
  iii.classList.add("mystyle");
  i.classList.remove("mystyle");
  ii.classList.remove("mystyle");
  iv.classList.remove("mystyle");
  v.classList.remove("mystyle");
  vi.classList.remove("mystyle");
});
iv.addEventListener("click", function () {
  iv.classList.add("mystyle");
  i.classList.remove("mystyle");
  iii.classList.remove("mystyle");
  ii.classList.remove("mystyle");
  v.classList.remove("mystyle");
  vi.classList.remove("mystyle");
});
v.addEventListener("click", function () {
  v.classList.add("mystyle");
  i.classList.remove("mystyle");
  iii.classList.remove("mystyle");
  iv.classList.remove("mystyle");
  ii.classList.remove("mystyle");
  vi.classList.remove("mystyle");
});
vi.addEventListener("click", function () {
  vi.classList.add("mystyle");
  i.classList.remove("mystyle");
  iii.classList.remove("mystyle");
  iv.classList.remove("mystyle");
  v.classList.remove("mystyle");
  ii.classList.remove("mystyle");
});
