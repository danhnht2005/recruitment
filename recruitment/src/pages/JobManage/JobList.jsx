import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getListJob } from "../../services/jobService";
import { Button, Table, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

function JobList() {
  const idCompany = getCookie("id");
  const [jobs, setJobs] = useState([]);

  const fetchApi = async () => {
    const response = await getListJob(idCompany);
    if (response) {
      setJobs(response.reverse());
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchApi();
  }, []);

  // const handleReload = () => {
  //   fetchApi();
  // };

  const columns = [
    {
      title: "Tên job",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, record) =>
        (record.tags || []).map((item, index) => (
          <Tag className="mb-5" color="blue" key={index}>
            {item}
          </Tag>
        )),
    },
    {
      title: "Mức lương ($)",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Thời gian ",
      dataIndex: "time",
      render: (_, record) => (
        <>
          <small>Ngày tạo: {record.createAt}</small>
          <br/>
          <small>Cập nhật: {record.updateAt}</small>
        </>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (_, record) => (
        <>
          {record.status ? (
          <Tag color="green">Đang bật</Tag>
        ) : (
          <Tag color="red">Đang tắt</Tag>
        )}
        </>
      ),
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <>
          <Link to={`/detail-job/${record.id}`}>
            <Tooltip title="Xem chi tiết">
              <Button icon={<EyeOutlined />}></Button>
            </Tooltip>
          </Link>
          {/* <EditJob record={record} onReload={handleReload} />
          <DeleteJob record={record} onReload={handleReload} /> */}
        </>
      ),
    },
  ];

  return (
    <>
      <div className='mt-20'>
        <Table dataSource={jobs} columns={columns} rowKey="id" />
      </div>
    </>
  );
}

export default JobList;