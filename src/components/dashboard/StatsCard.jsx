import clsx from "clsx";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  highlight = false,
}) => {
  return (
    <div
      className={clsx(
        "rounded-xl p-4 transition",
        highlight
          ? "bg-primary text-white shadow-[var(--shadow-card-lg)]"
          : "bg-card border border-border shadow-[var(--shadow-card)]",
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={clsx(
            "text-sm",
            highlight ? "text-white/80" : "text-text-secondary",
          )}
        >
          {title}
        </p>

        {Icon && (
          <Icon
            className={clsx(
              "h-5 w-5",
              highlight ? "text-white" : "text-text-secondary",
            )}
          />
        )}
      </div>

      <h2 className="mt-2 text-2xl font-semibold">{value}</h2>

      {subtitle && (
        <p
          className={clsx(
            "text-xs mt-1",
            highlight ? "text-white/70" : "text-text-secondary",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatsCard;
