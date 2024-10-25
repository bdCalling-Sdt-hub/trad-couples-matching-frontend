"use client"
import { ConfigProvider, Form, Input } from 'antd';
import React, { useEffect } from 'react'; 

const TextInput = ({name , label , placeholder }:{name:string , label:string  , placeholder:string}) => { 
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        // form.setFieldsValue({name: ""}) 
    },[form])
    return ( 
        <ConfigProvider
        theme={{
            token: {
                fontFamily: 'Poppins, sans-serif',
                colorTextPlaceholder: "#6B6B6B"
            }
        }}
    >  
        <Form.Item name={name}  
        rules={[{ required: true, message: `Please input your ${label}!` }]}
        > 
        <Input   
        placeholder={placeholder}
        style={{
            border: "1px solid #BABABA",
            height: "56px",
            borderRadius: "8px",
            outline: "none",
            width: "100%",
            padding: "8px",  
            background:"transparent"  ,   
          }} 
          className={` `}
          />     
        </Form.Item> 
        </ConfigProvider>
    );
};

export default TextInput;