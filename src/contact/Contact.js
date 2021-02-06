import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './contact.module.css';
import axios from 'axios';


class Contact extends Component{
    state={
        submitted: ''
    }

    formSubmit =()=>{
        axios({
            method: "POST", 
            url:"http://localhost:3000/send", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success') {
                this.setState({submitted: 'yes'});
            } else if(response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          })
          this.setState({submitted:'y'})

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
         // same shape as initial values
         console.log(values);
         resetForm({values: ''});
         this.formSubmit();

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
                    <Field name="message" className='form-control' style={stylee}/>
                     {errors.message && touched.message ? (
                        <div className={styles.error}>{errors.message}</div>
                     ) : null}
                </div>
            </div>
            {/* bootstrap */}
           <button type="submit" className='btn btn-primary' style={{fontSize: '25px', marginTop: '25px', marginBottom:'25px'}}>Submit</button>
         </Form>
       )}
       
     </Formik>
     {this.state.submitted ? submit : null}
     
        </>
    )
                     }
}

export default Contact;