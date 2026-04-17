import { useEffect, useState } from "react";
import { getListCity } from "../../services/cityService";
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const [city, setCity] = useState();

  useEffect(() => {
    const fecthAPI = async () => {
      const response = await getListCity();
      if (response) {
        const objAll = {
          key: 0,
          value: "All",
        }
        setCity([objAll, ...response]);
      };

    }
    fecthAPI();
  }, [])

  const handleSubmit = (values) =>  {
    let city = values.city || "";
    city = city === "All" ? "" : city;
    navigate(`/search?city=${city}&keyword=${values.keyword || ""}`);
  }

  return (
    <>
      <h1>1000+ Jobs For Developers</h1>
      {city && (
        <Form onFinish={handleSubmit}>
          <Row gutter={[12, 12]}>
            <Col xxl={6} xl={6} lg={6}>
              <Form.Item name="city">
                <Select options={city} placeholder="Chọn Thành phố" />
              </Form.Item>
            </Col>
            <Col xxl={15} xl={15} lg={15}>
              <Form.Item name="keyword">
                <Input placeholder="Nhập từ khóa tìm kiếm" />
              </Form.Item>
            </Col>
            <Col xxl={3} xl={3} lg={3}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  )
}

export default SearchForm;