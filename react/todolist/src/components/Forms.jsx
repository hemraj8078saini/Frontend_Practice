// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const Forms = () => {
//     const { register, handleSubmit } = useForm();
//     const[datas,setdata]=useState([])
 

//     const onSubmit = (data) => {
//         console.log(data);
//         setdata(data)
//         console.log('Form submitted successfully');
//     };

//     return (
//         <div className='text-center max-auto'>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     Name:
//                     <input
//                         type='text'
//                         placeholder='Enter your name'
//                         {...register('name')}
//                     />
//                 </div>
//                 <div>
//                     Email:
//                     <input
//                         type='email'
//                         placeholder='Enter your email'
//                         {...register('email')}
//                     />
//                 </div>
//                 <div>
//                     Password:
//                     <input
//                         type='password'
//                         placeholder='Enter your password'
//                         {...register('password')}
//                     />
//                 </div>
//                 <button type='submit'>Submit</button>
//             </form>
//             {datas.name}
            
            
//         </div>
       
//     );
// };

// export default Forms;



import React, { useState } from 'react';

const Forms = () => {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChangedata = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(formdata); // Log the form data
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:
                    <input
                        type='text'
                        name='name' // Add the name attribute
                        placeholder='Enter your name'
                        value={formdata.name}
                        onChange={onChangedata}
                    />
                </div>
                <div>
                    Email:
                    <input
                        type='email'
                        name='email' // Add the name attribute
                        placeholder='Enter your email'
                        value={formdata.email}
                        onChange={onChangedata}
                    />
                </div>
                <div>
                    Password:
                    <input
                        type='password'
                        name='password' // Add the name attribute
                        placeholder='Enter your password'
                        value={formdata.password}
                        onChange={onChangedata}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Forms;
