import styles from './FeedbackForm.module.css'

export default function DateInputForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="dateinput"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">First Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="name2">Last Name</label>
        <input id="name2" className={styles['form-field']} type="text" name="name2" />

        <label htmlFor="birthday">Birthday</label>
        <input id="birthday" className={styles['form-field']} type="text" name="birthday" />

        <label htmlFor="gender">Gender</label>
        <input id="gender" className={styles['form-field']} type="text" name="gender" />

        <label htmlFor="city">Place of Birth</label>
        <input id="city" className={styles['form-field']} type="text" name="city" />

        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
