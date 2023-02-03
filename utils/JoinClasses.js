const joinClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default joinClasses;
