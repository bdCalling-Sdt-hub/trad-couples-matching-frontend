"use client"
import { Form, Select } from 'antd';
import React, { useEffect } from 'react';
 
interface propsType {
    name: string 
    placeholder: string 
    options: Array<{ value: string | number; label: string | number;}>;
}

const QuestionDropdown = ({name ,placeholder ,  options}:propsType) => {
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        form.setFieldsValue({name:"default"})
    },[form])  

    return <Form.Item
    name={name}  className=' lg:w-1/3 w-full '
  >
    <Select placeholder={placeholder}   options={options} className='h-[45px]'/>
      
  </Form.Item>
};

export default QuestionDropdown;