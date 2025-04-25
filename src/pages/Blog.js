import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Blog = () => {
  return (
    <div style={{ padding: '40px 20px' }}>
      <Title level={2}>Beauty Blog</Title>
      <Paragraph>
        Stay updated with the latest skincare trends, beauty routines, and self-care tips curated by our experts.
      </Paragraph>
      {/* Add blog card layout or article preview grid here later */}
    </div>
  );
};

export default Blog;
