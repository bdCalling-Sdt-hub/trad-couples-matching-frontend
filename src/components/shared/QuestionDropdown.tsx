"use client"
import { ConfigProvider, Form, Select } from 'antd';
import React, { useEffect } from 'react';

interface propsType {
  name: string
  placeholder: string
  options: { value: string; label: string | JSX.Element }[];
}

const QuestionDropdown = ({ name, placeholder, options }: propsType) => {
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
        <Select placeholder={placeholder} options={options} style={{ height: 45 }} />

      </Form.Item>

    </ConfigProvider>

  )
};

export default QuestionDropdown;