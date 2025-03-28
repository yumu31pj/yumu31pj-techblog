import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ContactFormFieldSchema } from "~/src/schemas/contact";
import styles from "./PortfolioContactForm.module.scss";

export const PortfolioContactForm = () => {

  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm<z.infer<typeof ContactFormFieldSchema>>({
    resolver: zodResolver(ContactFormFieldSchema),
    defaultValues: {
      name: '',
      mailaddress: '',
      message: ""
    }
  })

  const onSubmitHandler = (values: z.infer<typeof ContactFormFieldSchema>) => {
    alert(JSON.stringify(values));
  }

  return (
    <form className={styles["c-form-container"]} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles["c-form-filed-wrapper"]}>
        <label htmlFor="name">NAME</label>
        <div className={styles["c-form-field"]}>
          <input 
            type="text"
            className={styles["c-form-field__text"]} 
            {...register('name')}
          />
          {errors.name && <p className={styles['c-error-message']}>{errors.name?.message}</p>}

        </div>
      </div>
      <div className={styles["c-form-filed-wrapper"]}>
        <label htmlFor="email">E-mail</label>
        <div className={styles["c-form-field"]}>
          <input
            type="text"
            className={styles["c-form-field__text"]} 
            {...register('mailaddress')}
          />
          {errors.mailaddress && <p className={styles['c-error-message']}>{errors.mailaddress.message}</p>}
        </div>
      </div>
      <div className={styles["c-form-filed-wrapper"]}>
        <label htmlFor="">MESSAGE</label>
        <div className={styles["c-form-field"]}>
          <textarea id="" className={styles["c-input-textarea"]} rows={6} {...register('message')}></textarea>
        </div>
      </div>

      <div className={styles["c-form-submit"]}>
        <button type="submit" className={styles["c-btn-submit"]}>送信</button>
      </div>
    </form>
  )
}