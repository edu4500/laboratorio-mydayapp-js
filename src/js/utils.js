export const sayHello = (text) => {
  return text;
};

export const Util = () => {
  let hiddenMain = () => {
    document.getElementsByClassName("main")[0].setAttribute("hidden","hidden")
  }
  let hiddenFooter = () => {
    document.getElementsByClassName("footer")[0].setAttribute("hidden","hidden")
  }
  return {
    hiddenMain,
    hiddenFooter
  }
}