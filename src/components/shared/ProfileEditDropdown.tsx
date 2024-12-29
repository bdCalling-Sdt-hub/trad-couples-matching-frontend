"use client"
import { ConfigProvider, Form, Select } from 'antd';
import React, { useEffect } from 'react';

interface propsType {
    name: string
    label: string|number
    options: Array<{ value: string | number; label: string | number; }>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
}

const ProfileEditDropdown = ({ name, label, options, icon }: propsType) => {
    const form = Form.useFormInstance()

    useEffect(() => {
        form.setFieldsValue({ name: "default" })
    }, [form])  

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
        <Form.Item name={name}
            label={<div className='flex items-center gap-2 text-start'>
                <div className={`${label === "" ? "" : "flex justify-center items-center bg-primary h-7 w-7 rounded-full"}`}  > <p className='text-white text-lg'>{icon}</p></div>
                <p className='text-[#4E4E4E]  text-[15px] font-medium'>{label}</p>
            </div>}>

            <Select  options={options} style={{ height: "45px" }} />

        </Form.Item>
      
       </ConfigProvider>
    )
};

export default ProfileEditDropdown;