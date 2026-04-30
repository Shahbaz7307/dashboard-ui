import clsx from "clsx";

const Button = ({
  children,
  variant = "solid",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none";

  const variants = {
    solid: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-border text-text-primary hover:bg-card",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-3 gap-2.5",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}

      {children}

      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
    </button>
  );
};

export default Button;
