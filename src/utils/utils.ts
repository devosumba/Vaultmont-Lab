const getImagePrefix = () => {
  // Return a root-relative prefix so image paths become `/images/...`.
  // This ensures assets served from the `public/` folder resolve correctly both
  // on localhost and in production (Vercel, etc.).
  return "/";
};

export { getImagePrefix };
 
