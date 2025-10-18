const getImagePrefix = () => {
  // Use root-relative paths so `public/` assets resolve as `/images/...` in production.
  return "/";
};

export { getImagePrefix };
 
