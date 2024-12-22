"use client"
import { ConfigProvider, Form, Input } from 'antd';
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
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'Poppins, sans-serif',
                    colorTextPlaceholder: "#6B6B6B"
                }
            }}
        > 
        
        <Form.Item name={name}  
        rules={[{ required: true, message: `Please input your ${label}!` } , {
            min: 8,
            message: "Password must be at least 8 characters long!",
        }, ]}> 
 
        <Input.Password   
        placeholder={placeholder}
        style={{
            border: "1px solid #BABABA",
            height: "56px",
            background:"transparent"  ,
            borderRadius: "8px",
            outline: "none",
            width: "100%",
            padding: "8px",
            marginBottom:"10px"  ,

        }}
        className={` placeholder:font-semibold`}
        />
            
        </Form.Item>
        </ConfigProvider>
    );
};

export default PasswordInput;