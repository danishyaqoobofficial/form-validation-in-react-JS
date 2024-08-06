import './App.css'
import { useFormik } from 'formik' 
import { signUpSchema } from './schemas';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
};

function App() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema : signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <section className='bg-[#f1f0ee] w-full flex items-center justify-center h-[100vh] '>
        <div className='max-w-[920px] w-full mx-auto rounded-[12px] overflow-hidden flex sm:shadow-sm'>
          <div className='flex-[6] bg-white py-[32px] px-[22px] '>
            <h2 className='text-center text-[21px] font-[400] 404040 '>Welcome Back Here!</h2>
            <form className='w-full mt-[22px]' onSubmit={formik.handleSubmit}>
              <div>
                <label className='text-[13px] 404040 ' htmlFor="username">Full Name</label>
                <input 
                  className='mt-[4px] flex-1 w-full outline-none border border-black/30 404040 px-[12px] text-[14px] py-[9px] rounded-[6px] ' 
                  type="text" 
                  name="name" 
                  id="username" 
                  placeholder='Full Name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name && <p className='text-[12px] text-red-300 '>{formik.errors.name}</p>}
              </div>
              <div className='mt-[14px] '>
                <label className='text-[13px] 404040 ' htmlFor="Email">Email</label>
                <input 
                  className='mt-[4px] flex-1 w-full outline-none border border-black/30 404040 px-[12px] text-[14px] py-[9px] rounded-[6px] ' 
                  type="email" 
                  name="email" 
                  id="Email" 
                  placeholder='Email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && <p className='text-[12px] text-red-300 '>{formik.errors.email}</p>}
              </div>
              <div className='mt-[14px] '>
                <label className='text-[13px] 404040 ' htmlFor="Password">Password</label>
                <input 
                  className='mt-[4px] flex-1 w-full outline-none border border-black/30 404040 px-[12px] text-[14px] py-[9px] rounded-[6px] ' 
                  type="password" 
                  name="password" 
                  id="Password" 
                  placeholder='Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && <p className='text-[12px] text-red-300 '>{formik.errors.password}</p>}
              </div>
              <div className='mt-[14px] '>
                <label className='text-[13px] 404040 ' htmlFor="Confirm Password">Confirm Password</label>
                <input 
                  className='mt-[4px] flex-1 w-full outline-none border border-black/30 404040 px-[12px] text-[14px] py-[9px] rounded-[6px] ' 
                  type="password" 
                  name="confirm_password" 
                  id="Confirm Password" 
                  placeholder='Confirm Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirm_password}
                />
                {formik.errors.confirm_password && formik.touched.confirm_password && <p className='text-[12px] text-red-300 '>{formik.errors.confirm_password}</p>}
              </div>
              <button 
                type="submit" 
                className='w-full rounded-[6px] px-[22px] py-[11px] text[14px] font-[400] flex items-center justify-center mt-[32px] bg-cyan-500 text-white '>
                Register
              </button>
            </form>
            <div className='flex items-center justify-center gap-[4px] mt-[22px] '>
              <p className='text-[12px] text-slate-600 font-[400] '>Already have an account?</p>
              <p className='text-[12px] text-cyan-500 font-[400] cursor-pointer '>Signup</p>
            </div>
          </div>
          <div className='flex-[7] bg-cover bg-center bg-no-repeat w-[400px] ' style={{ backgroundImage: 'url(https://orangefox.io/wp-content/uploads/2020/10/ben-kolde-FaPxZ88yZrw-unsplash.jpg)' }}></div>
        </div>
      </section>
    </>
  )
}

export default App