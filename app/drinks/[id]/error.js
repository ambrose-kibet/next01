'use client';
const error = (error) => {
  return <h2 className="text-center">{error.error.message}</h2>;
};
export default error;
