import { useReportUserMutation } from "@/redux/features/details/detailsSlice";
import { Form, Input, message, Modal } from "antd";


const ReportModal = ({ open, setOpen , id }:{open:boolean , setOpen:(open:boolean)=>void , id:string} ) => { 
    const [form] = Form.useForm(); 
   const [reportUser] = useReportUserMutation()
    const handleClose = () => {
        setOpen(false);
        form.resetFields();
      };  

      const onFinish = async(values: any) => {
          const data = {
            reportTo: id, 
            reason: values?.reason
          } 

          await reportUser(data).then((res) => { 
            console.log(res);
            if(res?.data?.success){
              message.success(res?.data?.message) 
              handleClose()
            }
          })
      }
    return (
        <Modal
        centered
        open={open}
        onCancel={handleClose}
        width={500}
        footer={null}
      >
        <div className="">
          
          <Form form={form} layout='vertical' onFinish={onFinish}>
            <Form.Item
              label={<p className='text-[#6D6D6D] text-xl font-medium mb-1'> Report Reason  </p>}
              name="reason"
              rules={[{ required: true, message: "Please enter your reply" }]}
              className="text-[#6D6D6D] py-1"
            >
              <Input.TextArea rows={5} style={{resize:"none"}} className="w-full border outline-none px-3 py-[10px]" />
            </Form.Item>
  
            <Form.Item className="text-end mt-2">
              <button
                type="submit"
                className="bg-primary text-white w-40 h-11 rounded-lg"
              >
                Send
              </button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    );
};

export default ReportModal;