import styles from "./styles.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
}

export const StatsCards: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={styles.stats_cards}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
