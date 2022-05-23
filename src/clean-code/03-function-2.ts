const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}) => {
  /* if(isDead) return 1500;
  if(isSeparated) return 2500;
  return isRetired ? 3000 : 4000; */
  return isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;
};

console.log(
  getPayAmount({ isDead: false, isRetired: false, isSeparated: false })
);
