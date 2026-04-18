import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

function JobManage() {
  return (
    <>  
      <h1>Danh sách việc làm</h1>
      <Link to="/create-job">
        <Button icon={<PlusOutlined />}>Tạo việc mới</Button>
      </Link>
    </>
  );
}

export default JobManage;