
"use client"
import { ConfigProvider, Form, Select } from 'antd';
import React, { useEffect } from 'react';
 
interface propsType {
    name: string 
    label: string 
   
    options: Array<{ value: string | number; label: string | number;}>;
}
const DropdownInput = ({name , label  , options}:propsType) => { 
    const form = Form.useFormInstance() 

    useEffect(()=>{ 
        form.setFieldsValue({name:"default"})
    },[form]) 

    return ( 
        <ConfigProvider
  theme={{
    components: {
      Select: {
        activeBorderColor:"#BABABA" , 
        hoverBorderColor:"#BABABA"
      },
    },
  }}
>
<Form.Item
        name={name} 
        label={ label === ""? "" : <div className='text-[#4E4E4E]  text-[15px] font-medium '>{label}</div> }
      >
        <Select   options={options}
         style={{height:"45px" }} />
          
      </Form.Item>
</ConfigProvider>
    );
};

export default DropdownInput;