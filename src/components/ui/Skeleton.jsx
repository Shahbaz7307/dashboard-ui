const Skeleton = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-[var(--color-skeleton)] ${className}`}
    />
  );
};
export default Skeleton;
