
"use client"
import { Form, Select } from 'antd';
import React, { useEffect } from 'react';
 
interface propsType {
    name: string 
    label: string 
    placeholder: string 
    options: Array<{ value: string; label: string;}>;
}
const DropdownInput = ({name , label , placeholder , options}:propsType) => { 
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        form.setFieldsValue({name:"default"})
    },[form]) 

    return (
<Form.Item
        name={name}
       
        rules={[{ required: true, message: `Please select ${label}!` }]}
      >
        <Select placeholder={placeholder}   options={options} style={{height:"45px"}} />
          
      </Form.Item>
    );
};

export default DropdownInput;