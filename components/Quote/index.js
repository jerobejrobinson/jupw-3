import { MultiStepForm, Step } from 'react-multi-form';
import {useState, useEffect} from 'react'
import styles from '../../styles/GetQuote.module.css'
import axios from 'axios';

export const Quote = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState([])

    const getElements = () => {
        const checkboxes = Array.from(document.querySelectorAll('.checkboxInput'))
        const textFields = Array.from(document.querySelectorAll('.inputField'))
        const btns = document.querySelectorAll('.next')
        return [checkboxes, textFields, btns]
    }    

    useEffect(() => {
        const [checkboxes, textFields, btns] = getElements();
        const info = []
        
        checkboxes.map(cbx => {
            cbx.addEventListener('click', () => {
                info.push(cbx.defaultValue)
            })
            cbx.addEventListener('keydown', e => {
                if(e.keyCode == 13) {
                    setActiveStep(prev => prev + 1)
                    setData(prev => [...prev, info])
                    textFields[0].focus()
                }
            })
        })

        textFields.map(txt => {
            txt.addEventListener('keydown', e => {
                if(e.keyCode == 13) {
                    setActiveStep(prev => prev + 1)
                    setData(prev => [...prev, txt.value])

                    if(txt == textFields[0]) {
                        textFields[1].focus()
                    } else if(txt == textFields[1]) {
                        textFields[2].focus()
                    } else if(txt == textFields[2]) {
                        textFields[3].focus()
                    } else if(txt == textFields[3]) {
                        setSubmit(true)
                        
                    }
                }
            })
        })
        btns[0].addEventListener('click', () => {
            setData(prev => [...prev, info])
            setActiveStep(prev => prev + 1)
            textFields[0].focus()
        })
        btns[1].addEventListener('click', () => {
            setData(prev => [...prev, textFields[0].value])
            setActiveStep(prev => prev + 1)
            textFields[1].focus()
        })
        btns[2].addEventListener('click', () => {
            setData(prev => [...prev, textFields[1].value])
            setActiveStep(prev => prev + 1)
            textFields[2].focus()
        })
        btns[3].addEventListener('click', () => {
            setData(prev => [...prev, textFields[2].value])
            setActiveStep(prev => prev + 1)
            textFields[3].focus()
        })
        btns[4].addEventListener('click', () => {
            setData(prev => [...prev, textFields[3].value])
            setActiveStep(prev => prev + 1)
            setSubmit(true)
            
        })

        console.log(submit == true ? data : 'not yet submited')
        if(submit){
            axios.post('/.netlify/functions/send-contact-email', {
                services: data[0],
                contactName: data[1],
                contactEmail: data[2],
                contactPhone: data[3],
                contactAddress: data[4]
            })
        }

    }, [submit])
    return (

        <div className={`${styles.container}`}>
            <div className={`${styles.textContent}`}>
                <h1>Get A Fast Quote</h1>
                <p>Fill out our contact form below. We usually respond in MINUTES</p>
            </div>
            <MultiStepForm activeStep={activeStep} accentColor={submit ? '#dbc51a' : '#fff'}>
                <Step label="Service">
                    <p>Select Service Needed</p>
                    <div className={`${styles.checkBoxWrapper} checkboxInput`}>
                        <label htmlFor="houseWashing">House Washing</label>
                        <input type="checkbox" value="House Washing" />
                    </div>
                    <div className={`${styles.checkBoxWrapper} checkboxInput`}>
                        <label htmlFor="roofCleaning">Roof Cleaning</label>
                        <input type="checkbox" value="Roof Cleaning" />
                    </div>
                    <div className={`${styles.checkBoxWrapper} checkboxInput`}>
                        <label htmlFor="gutterCleaning">Gutter Cleaning</label>
                        <input type="checkbox" value="Gutter Cleaning" />
                    </div>
                    <div className={`${styles.checkBoxWrapper} checkboxInput`}>
                        <label htmlFor="concreteCleaning">Concrete Cleaning</label>
                        <input type="checkbox" value="Concrete Cleaning" />
                    </div>
                    <button className={`${styles.button} next float-right`}>
                        Next
                    </button>
                </Step>
                <Step label="Name">
                    <div className='grid grid-cols-8'>
                        <label className={`${styles.inputLabel} col-span-8`}>Enter Full Name</label>
                        <input className={`${styles.input} inputField col-span-8`} type="text" placeholder="Enter your full name" autoFocus/>
                        <button className={`${styles.button} next col-span-2 col-start-7`}>
                            Next
                        </button>
                    </div>
                </Step>
                <Step label="Email">
                    <div className='grid grid-cols-8'>
                        <label className={`${styles.inputLabel} col-span-8`}>Enter your e-mail</label>
                        <input className={`${styles.input} inputField col-span-8`} type="email" placeholder="Enter your e-mail" autoFocus/>
                        <button className={`${styles.button} next col-span-2 col-start-7`}>
                            Next
                        </button>
                    </div>
                </Step>
                <Step label="Phone">
                    <div className='grid grid-cols-8'>
                        <label className={`${styles.inputLabel} col-span-8`}>Enter Phone Number</label>
                        <input className={`${styles.input} inputField col-span-8`} type="text" placeholder="901-555-5555" autoFocus/>
                        <button className={`${styles.button} next col-span-2 col-start-7`}>
                            Next
                        </button>
                    </div>
                </Step>
                <Step label="Address">
                    <div className='grid grid-cols-8'>
                        <label className={`${styles.inputLabel} col-span-8`}>Enter Address</label>
                        <input className={`${styles.input} inputField col-span-8`} type="text" placeholder="901 Street Ave" autoFocus/>
                        <button className={`${styles.button} next col-span-2 col-start-7`}>
                            Submit
                        </button>
                    </div>
                </Step>
                <Step label="">
                    <div className={`${styles.textContent}`}>
                        <p>Thank you we will be contacting you shortly!</p>
                    </div>
                </Step>
            </MultiStepForm>
            <div className={`${styles.textContent}`}>
                <p> For Immediate Assistance Call (901) 359-7672</p>
            </div>
        </div>
        // <Container>
        //     <TextContent>
        //         <h1>Get A Fast Quote</h1>
        //         <p>Fill out our contact form below. We usually respond in MINUTES</p>
        //     </TextContent>
        //     <MultiStepForm activeStep={activeStep} accentColor={submit ? '#dbc51a' : '#fff'}>
        //         <Step label="Service">
        //                 <p>Select Service Needed</p>
        //                 <Checkbox
        //                     className="checkboxInput" 
        //                     type="checkbox" 
        //                     value="House Washing" 
        //                     label="House Washing"
        //                     id="houseWashing"
        //                 />
        //                 <Checkbox
        //                     className="checkboxInput" 
        //                     type="checkbox" 
        //                     value="Roof Cleaning" 
        //                     label="Roof Cleaning"
        //                     id="roofCleaning"
        //                 />
        //                 <Checkbox
        //                     className="checkboxInput" 
        //                     type="checkbox" 
        //                     value="Gutter Cleaning" 
        //                     label="Gutter Cleaning"
        //                     id="gutterCleaning"
        //                 />
        //                 <Checkbox
        //                     className="checkboxInput" 
        //                     type="checkbox" 
        //                     value="Concrete Cleaning" 
        //                     label="Concrete Cleaning"
        //                     id="concreteCleaning"
        //                 />
        //                 <Button
        //                     style={{float: 'right'}}
        //                     className='next'
        //                 >
        //                     Next
        //                 </Button>
        //         </Step>
        //         <Step label="Name">
        //             <Input autoFocus className='inputField' type="text" placeholder="Enter your full name" label="Enter Full Name" />
        //             <Button
        //                     style={{float: 'right'}}
        //                     className='next'
        //                 >
        //                     Next
        //                 </Button>
        //         </Step>
        //         <Step label="Email">
        //             <Input className='inputField' type="email" placeholder="Enter your e-mail" label="Enter Email Address"/>
        //             <Button
        //                     style={{float: 'right'}}
        //                     className='next'
        //                 >
        //                     Next
        //                 </Button>
        //         </Step>
        //         <Step label="Phone">
        //             <Input className='inputField' type="text" placeholder="555-555-5555" label="Enter Phone Number" />
        //             <Button
        //                     style={{float: 'right'}}
        //                     className='next'
        //                 >
        //                     Next
        //                 </Button>
        //         </Step>
        //         <Step label="Address">
        //             <Input className='inputField' type="text" placeholder="555 Street Ave" label="Enter Address" />
        //             <Button
        //                     style={{float: 'right'}}
        //                     className='next'
        //                 >
        //                     Submit
        //                 </Button>
        //         </Step>
        //         <Step label="Thank You">
        //             <TextContent>
        //                 <p>Thank you we will be contacting you shortly!</p>
        //             </TextContent>
        //         </Step>
        //     </MultiStepForm>
        //     <TextContent>
        //         <p> For Immediate Assistance Call (901) 359-7672</p>
        //     </TextContent>
        // </Container>
    )
}
