import styles from "../styles/Contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  // formik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    //validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Email is required")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <form
            action="https://formsubmit.co/cordiscobrian@gmail.com"
            method="POST"
          >
            <div className={styles.form_info}>
              <div className={styles.name}>
                <label
                  className={`${styles.name_label}${
                    formik.touched.name && formik.errors.name
                      ? "text-error"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  arial-label="Please input name"
                  type="text"
                  name="name"
                  placeholder="Please input name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.email}>
                <label
                  className={`${styles.email_label}${
                    formik.touched.email && formik.errors.email
                      ? " text-error"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  arial-label="Please input email address"
                  type="email"
                  name="email"
                  placeholder="Please input email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <input
                type="hidden"
                name="_next"
                // value="https://gulsah-bayar.vercel.app/success"
              />
            </div>
            <div>
              <div className={styles.message}>
                <label
                  className={`${styles.message_label}${
                    formik.touched.message && formik.errors.message
                      ? " text-error"
                      : ""
                  }`}
                >
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : "Message"}
                </label>
                <textarea
                  aria-label="leave a message"
                  type="text"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className={styles.terms_title}>
              <p>Terms of Service</p>
            </div>
            <div className={styles.terms}>
              <label htmlFor="terms" className="">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                  className=""
                />
              </label>
              <p className={styles.paragraph}>
                By clicking submit you agree to our terms of service and your
                data is protected.
              </p>
            </div>
            <div className={styles.submit}>
              <button className={styles.btn} type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
