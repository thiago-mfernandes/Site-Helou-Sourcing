import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__container___box}>
          <p className={styles.contact__container___box____content}>
            Para solicitar um orçamento, entre em contato conosco por telefone
            ou e-mail e forneceremos serviços experientes, profissionais e
            confiáveis.
          </p>
          <h3 className={styles.contact__container___box____subTitle}>Contate-nos</h3>
          <p className={styles.contact__container___box____content}>
            Seu parceiro para materiais estratégicos: Óxidos, Metais, Ferro
            Ligas e Catalisadores
          </p>
        </div>

        <div className={styles.contact__container___box}>
          <form className={styles.contact__container___box____boxContent} action="">
            <h2 className={styles.contact__container___box____subTitle}>Formulário</h2>
            <div className={styles.contact__container___box}>
              <label htmlFor="name">Nome</label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="name" 
                required 
                placeholder="Complete Name"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input 
                className={styles.contact__container___box____input} 
                type="email" 
                name="email" 
                required 
                placeholder="name@domain.com"
              />
            </div>
            <div>
              <label htmlFor="subject">Assunto</label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="subject" 
                required 
                placeholder="About the Products.."
              />
            </div>
            <div>
              <label htmlFor="textArea">Mensagem</label>
              <textarea 
                className={styles.contact__container___box____textArea}
                type="text" 
                name="textArea" 
                required 
                placeholder="Short message"/>
            </div>
            <div>
              <input 
                className={styles.contact__container___box____btnForm} 
                type="submit" 
                value="Enviar Mensagem" 
              />
            </div>
          </form>
        </div>
        <div className={styles.contact__container___box____boxContent}>
          <p className={styles.contact__container___box____addressTitle}>endereco</p>
          <p className={styles.contact__container___box____addressContent}>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p className={styles.contact__container___box____addressTitle}>telefone</p>
          <p className={styles.contact__container___box____addressContent}>+123 456 789</p>
          <p className={styles.contact__container___box____addressTitle}>email</p>
          <p className={styles.contact__container___box____addressContent}>seuemail@dominio.com</p>
        </div>
      </div>
    </section>
  );
}