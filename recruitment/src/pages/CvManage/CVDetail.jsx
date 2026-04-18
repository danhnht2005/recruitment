import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { useEffect, useState } from "react";
import { changeStatusCV, getDetailCV } from "../../services/cvService";
import { getDetailJob } from "../../services/jobService";
import { Card, Tag } from "antd";

function CVDetail() {
  const params = useParams();
  const [cv, setCv] = useState();
  const [job, setJob] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCV(params.id);
      if (response) {
        setCv(response);
        const responseJob = await getDetailJob(response.idJob);
        if (responseJob) {
          setJob(responseJob);
        }
      }

      changeStatusCV(params.id, { statusRead: true });
    };
    fetchApi();
  }, [params.id]);

  return (
    <>
      <GoBack />

      {cv && job && (
        <>
          <Card title={`Ứng viên: ${cv.name}`} className="mt-20">
            <div className="mb-20">
              Ngày gửi: <strong>{cv.createAt}</strong>
            </div>
            <div className="mb-20">
              Số điện thoại: <strong>{cv.phone}</strong>
            </div>
            <div className="mb-20">
              Email: <strong>{cv.email}</strong>
            </div>
            <div className="mb-20">
              Thành phố ứng tuyển: <strong>{cv.city}</strong>
            </div>
            <div className="mb-20">
              <div className="mb-10">Giới thiệu bản thân:</div>
              <div>{cv.description}</div>
            </div>
            <div className="mb-20">
              <div className="mb-10">Link project:</div>
              <div>{cv.linkProject}</div>
            </div>
          </Card>

          <Card title={`Thông tin job: ${job.name}`} className="mt-20">
            <div className="mb-20">
              <span>Tags: </span>
              {(job.tags || []).map((item, index) => (
                <Tag color="blue" key={index}>
                  {item}
                </Tag>
              ))}
            </div>
            <div className="mb-20">
              Mức lương: <strong>{job.salary}$</strong>
            </div>
            <div className="mb-20">
              <div className="mb-10">Mô tả:</div>
              <div>{job.description}</div>
            </div>
          </Card>
        </>
      )}
    </>
  )
}

export default CVDetail;