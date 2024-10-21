"use client"
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface propsType {
 name:string ,  
 label: string , 
 placeholder: string

}
const PasswordInput = ({name , label , placeholder}:propsType) => { 
    const  form = Form.useFormInstance() 

    useEffect(()=>{ 
        form.setFieldsValue({name:"default"})
    },[form])
    return (
        <Form.Item name={name}  
        rules={[{ required: true, message: `Please input your ${label}!` }]}> 

        <Input.Password   
        placeholder={placeholder}
        style={{
            border: "1px solid #BABABA",
            height: "45px",
            background: "",
            borderRadius: "8px",
            outline: "none",
            width: "100%",
            padding: "8px",
            marginBottom:"10px"
        }}/>
            
        </Form.Item>
    );
};

export default PasswordInput;