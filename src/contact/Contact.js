import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './contact.module.css';
import emailjs from 'emailjs-com';



class Contact extends Component{
    state={
        // submitted: '',
        mailSent: '',
        error: null
    }

    formSubmit =(valu)=>{
          console.log(valu);
      }

    render(){
    const contactSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        subject: Yup.string().min(2, 'Too Short').required('Required'),
        message: Yup.string().min(2, 'Too Short').required('Required')
      });

      var stylee = {fontSize: '25px'}

      var labelFont = {fontFamily: "'Pathway Gothic One', sans-serif", fontSize: '34px', fontWeight: '700'};

      var submit = (<div className={styles.submitted}>Message has been sent!</div>)

      var erro = (<div className={styles.submitted}>{this.state.error}</div>)

      // const API_PATH = 'http://localhost:3000/src/api/index.php';
      

    return(
        <>
            <Formik
       initialValues={{
         name: '',
         email: '',
         subject: '',
         message:''
       }}
       validationSchema={contactSchema}
       onSubmit={(values, {resetForm}) => {
        //used emailjs to submit the form to personal email
        emailjs.send(process.env.REACT_APP_EMAILJS_YOUR_SERVICE_ID, process.env.REACT_APP_EMAILJS_YOUR_TEMPLATE_ID, values, process.env.REACT_APP_EMAILJS_YOUR_USER_ID)
          .then((result) => {
              this.setState({mailSent: result.text});
              resetForm({values: ''});
          }, (error) => {
            console.log('serviceid: '+ process.env.REACT_APP_EMAILJS_YOUR_SERVICE_ID + ' templateid: '+ process.env.REACT_APP_EMAILJS_YOUR_TEMPLATE_ID + ' userid: '+process.env.REACT_APP_EMAILJS_YOUR_USER_ID);
              this.setState({error: error.text});
              console.log(error.text);
          });
         

          // console.log(process.env.REACT_APP_EMAILJS_YOUR_SERVICE_ID + 'onsubmit');

       }}
     >
       {({ errors, touched }) => (
         <Form>


             {/* bootstrap */}
             <div class="form-row">
                <div class="form-group col-md-12">
                    <label style={labelFont}>Name</label>
                    <Field name="name" className='form-control' style={stylee} />
                     {errors.name && touched.name ? (
                        <div className={styles.error}>{errors.name}</div>
                     ) : null}
                </div>

                <div class="form-group col-md-12">
                    <label style={labelFont}>Email</label>
                    <Field name="email" className='form-control' style={stylee}/>
                     {errors.email && touched.email ? (
                        <div className={styles.error}>{errors.email}</div>
                     ) : null}
                </div>

                <div class="form-group col-md-12">
                    <label style={labelFont}>Subject</label>
                    <Field name="subject" className='form-control' style={stylee}/>
                     {errors.subject && touched.subject ? (
                        <div className={styles.error}>{errors.subject}</div>
                     ) : null}
                </div>

                <div class="form-group col-md-12">
                    <label style={labelFont}>Message</label>
                    <Field name="message" as='textarea' className='form-control' style={stylee}/>


                     {errors.message && touched.message ? (
                        <div className={styles.error}>{errors.message}</div>
                     ) : null}
                </div>
            </div>
            {/* bootstrap */}
           <div className={styles.btnParent}><button type="submit" className={['btn', styles.btnOrange].join(' ')} style={{fontSize: '25px', marginTop: '25px', marginBottom:'25px'}}>Submit</button></div>
         </Form>
       )}
       
     </Formik>
     {this.state.mailSent ? submit : erro}
     
        </>
    )
                     }
}

export default Contact;