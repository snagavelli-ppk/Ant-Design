import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import { generateRandomData, total } from "./functions";
import { UserData } from "./Types";
import "../Form/CompanyForm.css";

const AntTable: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const startIndex = (pagination.current - 1) * pagination.pageSize;
        const endIndex = startIndex + pagination.pageSize;
        const dataArray = generateRandomData().slice(startIndex, endIndex);
        const totalData = total;
        setData(dataArray);
        setPagination({
          ...pagination,
          total: totalData,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pagination.current, pagination.pageSize]);

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPagination({
      ...pagination,
      current: page,
      pageSize: pageSize,
    });
  };

  const columns = [
    {
      title: "First name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Table
        dataSource={data}
        columns={columns}
        loading={loading}
        pagination={false}
      />
      <Pagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={pagination.total}
        onChange={handlePaginationChange}
        showSizeChanger
        pageSizeOptions={["5"]}
        // showTotal={(total, range) => ${range[0]}-${range[1]} of ${total} items}
        
      />
    </div>
  );
};

export default AntTable;
