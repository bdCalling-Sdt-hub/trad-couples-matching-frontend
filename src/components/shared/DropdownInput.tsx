
"use client"
import { Form, Select } from 'antd';
import React, { useEffect } from 'react';
 
interface propsType {
    name: string 
    label: string 
    defaultValue: string 
    options: Array<{ value: string | number; label: string | number;}>;
}
const DropdownInput = ({name , label , defaultValue , options}:propsType) => { 
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        form.setFieldsValue({name:"default"})
    },[form]) 

    return (
<Form.Item
        name={name} 
        label={ label === ""? "" : <div className='text-[#4E4E4E]  text-[15px] font-medium '>{label}</div> }
        // rules={[{ required: true, message: `Please select ${label}!` }]}
      >
        <Select defaultValue={defaultValue}   options={options}
         style={{height:"45px" }} />
          
      </Form.Item>
    );
};

export default DropdownInput;