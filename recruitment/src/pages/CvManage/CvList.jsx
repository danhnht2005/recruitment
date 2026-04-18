import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { Button, Table, Tag, Tooltip } from "antd";
import { getListCV } from "../../services/cvService";
import CvJobName from "./CvJobName";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons"
import DeleteCV from "./DeleteCV";

function CvList() {
  const idCompany = getCookie("id");
  const [cv , setCv] = useState([]);

  const FetchApi = async () => {
    const response = await getListCV(idCompany);
    if (response) {
      setCv(response.reverse());
    }
  };

  useEffect(() => {
    FetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cv);

  const handleReload = () => {
    FetchApi();
  };

  const columns = [
    {
      title: "Tên job",
      dataIndex: "idJob",
      key: "idJob",
      render: ((_, record) => (
        <CvJobName record={record} />
      ))
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày gửi",
      dataIndex: "createAt",
      key: "createAt",
    },
    {
      title: "Trạng thái",
      dataIndex: "statusRead",
      key: "statusRead",
      render: (_, record) => (
        <>
          {record.statusRead ? (
            <Tag color="green">Đã đọc</Tag>
          ) : (
            <Tag color="grey">Chưa đọc</Tag>
          )}
        </>
      )
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <>
          <Link to={`/detail-cv/${record.id}`}>
            <Tooltip title="Xem chi tiết">
              <Button icon={<EyeOutlined />}></Button>
            </Tooltip>
          </Link>
          <DeleteCV record={record} onReload={handleReload} />
        </>
      )
    }
  ];

  return (
    <>
      <div className='mt-20'>
        <Table dataSource={cv} columns={columns} rowKey="id" />
      </div>
    </>
  );
}

export default CvList;