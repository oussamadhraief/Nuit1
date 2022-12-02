import developer from './assets/pc.gif'
import { useState, useEffect, useRef } from 'react'

function App() {

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const ageRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmationPasswordRef = useRef(null)

  const [form, setForm] = useState({firstName: '',lastName: '', age: '', phone: '', gender: 'male', email: '', password: '', confirmPassword: ''});
  const [filling, setFilling] = useState(true);
  const [correction, setCorrection] = useState(false);

  useEffect(() => {
      const root = document.querySelector(':root')
      const top = confirmationPasswordRef.current.getBoundingClientRect().top
      const right = firstNameRef.current.offsetWidth /2
      
      root.style.setProperty('--buttons_top', top + 60 +'px')        
      root.style.setProperty('--buttons_right', right +'px')        

  }, []);

  useEffect(() => {
    if(form.firstName == '' || form.lastName == '' || form.age == '' || form.phone == '' || form.email == '' || form.password == '' || form.confirmPassword == ''){
      setFilling(true)
    }else{
      setFilling(false)
    }
    
  }, [form]);

  const handleChange = (e) => {
    setCorrection(false)
    const root = document.querySelector(':root')
      const top = confirmationPasswordRef.current.getBoundingClientRect().top
      const right = firstNameRef.current.offsetWidth /2
      
      root.style.setProperty('--buttons_top', top + 60 +'px')        
      root.style.setProperty('--buttons_right', right +'px')   
    const target = e.target
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const root = document.querySelector(':root')
        
    if(form.lastName.length < 4 || form.lastName.length > 20){
      const top = lastNameRef.current.getBoundingClientRect().top
      const right = 0
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }else if(form.email.length < 4 || form.email.length > 20){
      const top = emailRef.current.getBoundingClientRect().top
      const right = -20
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }else if(form.firstName.length < 4 || form.firstName.length > 20){
      const top = firstNameRef.current.getBoundingClientRect().top
      const right = -20
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }else if(form.phone.length < 4 || form.phone.length > 20){
      const top = phoneRef.current.getBoundingClientRect().top
      const right = -20
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }else if(form.age.length != 2){
      const top = ageRef.current.getBoundingClientRect().top
      const right = -20
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }else if(form.password.length < 6 || form.password.length > 20){
      const top = passwordRef.current.getBoundingClientRect().top
      const right = -20
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }else if(form.confirmPassword.length < 6 || form.confirmPassword.length > 20 || form.confirmPassword != form.password){
      const top = passwordRef.current.getBoundingClientRect().top
      const right = -20
      
      root.style.setProperty('--buttons_top', top +'px')        
      root.style.setProperty('--buttons_right', right +'px') 
      setCorrection(true)
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-x-hidden">
        <div className='w-1/2 h-full flex justify-center items-start py-10 mb-10'>
            <form className='w-11/12 flex flex-col justify-center items-center relative ' onSubmit={handleSubmit}>
                <h1 className='text-2xl text-emerald-700 w-full text-center mb-8'>S'inscrire</h1>
                <input ref={lastNameRef} type="text" placeholder='Nom' name="lastName" value={form.lastName} onChange={handleChange} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <input ref={firstNameRef} type="text" placeholder='Prénom' name="firstName" value={form.firstName} onChange={handleChange} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <input ref={ageRef}  type="text" placeholder='Age' name="age" value={form.age} onChange={handleChange} minLength={2} maxLength={2} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <input ref={phoneRef} type="text" placeholder='Num. de tél' name="phone" value={form.phone} onChange={handleChange} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <p className='w-11/12 text-left text-emerald-700'>Sexe:</p>
                <div className='w-full flex justify-center items-center gap-[25%] mb-4'>
                <label className='w-fit flex items-center justify-center gap-2 text-emerald-700'><input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} /> Homme</label>
                <label className='w-fit flex items-center justify-center gap-2 text-emerald-700'><input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} /> Femme</label>
                </div>
                <input ref={emailRef} type="text" placeholder='Adresse e-mail' name="email" value={form.email} onChange={handleChange} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <input ref={passwordRef} type="password" placeholder='Mot de passe' name="password" value={form.password} onChange={handleChange} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <input ref={confirmationPasswordRef} type="password" placeholder='Confirmation du mot de passe' name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className='w-11/12 h-10 border-b border-green-500 mb-6 placeholder:text-emerald-500 text-emerald-500 outline-none' />
                <button className={filling ? 'w-14 h-fit bg-[#10A425] px-5 py-2 rounded text-white mb-5 transition-all duration-300 submit-button' : correction ? 'w-10 h-10 bg-[#10A425] pl-2 pr-1.5 pb-2 pt-1 rounded-full rotate-90 text-white mb-5 transition-all duration-300 submit-button' : 'w-32 h-10 bg-[#10A425] px-5 py-2 rounded text-white mb-5 transition-all duration-300 submit-button'} disabled={filling}>{filling ? "..." : correction ? ":(" : "Soumettre"}</button>
            </form>
        </div>
        <div className='w-1/2 h-full'>
            <img src={developer} />
        </div>
    </div>
  );
}

export default App;
