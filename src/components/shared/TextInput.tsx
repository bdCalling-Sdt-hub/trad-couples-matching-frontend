"use client"
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

const TextInput = ({name , label , placeholder }:{name:string , label:string  , placeholder:string}) => { 
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        // form.setFieldsValue({name: ""}) 
    },[form])
    return (
        <Form.Item name={name}  
        rules={[{ required: true, message: `Please input your ${label}!` }]}
        > 
        <Input   
        placeholder={placeholder}
        style={{
            border: "1px solid #BABABA",
            height: "45px",
            background: "white",
            borderRadius: "8px",
            outline: "none",
            width: "100%",
            padding: "8px", 
            
          }} />     
        </Form.Item>
    );
};

export default TextInput;