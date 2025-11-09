import styles from './container.module.css'

interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return <div className={styles.container}>{children}</div>;
}
