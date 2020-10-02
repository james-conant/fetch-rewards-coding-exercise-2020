const stringChecker = (string1, string2) => {
  if ((string1.length || string2.length) < 3)
    return "Enter Valid Version Numbers";

  let i = 0;
  while (i <= Math.floor(string1.length, string2.length)) {
    if (
      !Number.isInteger(parseInt(string1[i])) ||
      !Number.isInteger(parseInt(string2[i]))
    )
      return "Enter Valid Version Numbers";

    if (i < string1.length - 1) {
      if (string1[i + 1] !== ".") return "Enter Valid Version Numbers";
    }
    if (i < string2.length - 1) {
      if (string2[i + 1] !== ".") return "Enter Valid Version Numbers";
    }
    if (parseInt(string1[i]) < parseInt(string2[i])) return "Before";

    if (parseInt(string1[i]) > parseInt(string2[i])) return "After";

    if (string1 === string2) return "Equal";
    i = i + 2;
  }
};

export default stringChecker;
