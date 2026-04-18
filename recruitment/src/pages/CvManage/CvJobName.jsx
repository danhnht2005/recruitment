import { useEffect, useState } from "react";
import { getDetailJob } from "../../services/jobService";

function CvJobName({ record }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailJob(record.idJob);
      setData(response);
    };
    fetchApi();
  }, [record.idJob]);

  return (
    <>
      {data?.name}
    </>
  );
}

export default CvJobName;