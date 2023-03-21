import styles  from './styles.module.css' 

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>DR. ESTÁGIO</div>
            <div>
                <ul className={styles.menu}>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Programas</li>
                    <li>Vagas</li>
                </ul>
            </div>
        </div>
    )
}