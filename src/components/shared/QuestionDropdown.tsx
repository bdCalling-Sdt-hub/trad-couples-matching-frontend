"use client"
import { ConfigProvider, Form, Select } from 'antd';
import React, { useEffect } from 'react';

interface propsType {
  name: string
  placeholder: string
  options: { value: string|boolean ; label: string | JSX.Element }[]; 
  onChange: (value: any) => void;
}

const QuestionDropdown = ({ name, placeholder, options , onChange  }: propsType) => {
  const form = Form.useFormInstance()

  useEffect(() => {
    form.setFieldsValue({ name: "default" })
  }, [form])

  return (

    <ConfigProvider
      theme={{
        components: {
          Select: {
            activeBorderColor: "#BABABA",
            hoverBorderColor: "#BABABA"
          },
        },
      }}
    >

      <Form.Item
        name={name} className=' lg:w-1/3 w-full '
      >
        <Select placeholder={placeholder} options={options} style={{ height: 45 }}   onChange={(value) => onChange(value)} />

      </Form.Item>

    </ConfigProvider>

  )
};

export default QuestionDropdown;