import styles  from './styles.module.css' 

export function Header() {
    return (
    <>
        <div className={styles.contato}>
            <div className={styles.logo}>
                <span className={styles.titulo}>Dr.Estagio</span>
                <span className={styles.subtitulo}>Agente Integrador</span>
            </div>

            <div>

            </div>
        </div>
        <div className={styles.header}>
            <div className={styles.midias}>
                <ul>
                    <li>Ins</li>
                    <li>Face</li>
                    <li>Lin</li>
                    <li>whats</li>
                </ul>
            </div>
        
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
    </>
       
    )
}