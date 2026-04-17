/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailCompany } from "../../services/companyService";
import { getListJob } from "../../services/jobService";
import { Col, Row } from "antd";
import JobItem from "../../components/JobItem";
import GoBack from "../../components/GoBack";

function CompanyDetail() {
  const params = useParams();
  const [company, setcompany] = useState();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCompany(params.id);
      setcompany(response);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListJob(params.id);
      setJobs(response);
    };
    fetchApi();
  }, []);

  return (
    <>
      <GoBack />

      {company && (
        <>
          <h1>{company.companyName}</h1>

          <div className="mb-20">
            Địa chỉ: <strong>{company.address}</strong>
          </div>

          <div className="mb-20">
            Số lượng nhân sự: <strong>{company.quantityPeople}</strong>
          </div>

          <div className="mb-20">
            Thời gian làm việc: <strong>{company.workingTime}</strong>
          </div>

          <div className="mb-20">
            Link website: <strong>{company.website}</strong>
          </div>

          <div className="mb-10">Mô tả ngắn:</div>
          <div className="mb-20">{company.description}</div>

          <div className="mb-10">Mô tả chi tiết:</div>
          <div className="mb-20">{company.detail}</div>

          <div className="mb-10">Danh sách các job:</div>
          <div className="mb-20">
            <Row gutter={[20, 20]}>
              {jobs.map((item) => (
                <Col span={8} key={item.id}>
                  <JobItem item={item} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  );
}

export default CompanyDetail;
