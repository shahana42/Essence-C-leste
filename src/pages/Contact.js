import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(1200);
  const [form] = Form.useForm();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('name', values.name || '');
    formData.append('phone', values.phone || '');
    formData.append('email', values.email || '');
    formData.append('message', values.message || '');

    const xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://script.google.com/macros/s/AKfycby8Qp6IgkH7W4UHbmH2Hvb2oU4N6hLZRjMA8h3AU8BrSNHr1UARdhIyyVb1zEudzcCh/exec',
      true
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        alert('Message sent successfully!');
        form.resetFields(); // clear form fields
      } else {
        alert('Failed to send message. Please try again.');
      }
    };

    xhr.onerror = () => {
      alert('Error occurred while sending the form.');
    };

    xhr.send(formData);
  };

  const isSmallScreen = windowWidth < 768;

  const whisperFont = {
    fontFamily: 'Whisper, cursive',
  };

  const styles = {
    wrapper: {
      ...whisperFont,
      position: 'relative',
      backgroundColor: '#e7dbcc',
      minHeight: '100vh',
      padding: '80px 40px',
      overflow: 'hidden',
    },
    bigTitle: {
      fontSize: isSmallScreen ? '60px' : '160px',
      fontWeight: 700,
      color: 'white',
      lineHeight: 1,
      position: 'absolute',
      top: isSmallScreen ? '60px' : '80px', // pushed down on big screen
      left: 20,
      pointerEvents: 'none',
      zIndex: 1,
      fontFamily: 'Whisper, cursive',
      transition: 'all 0.3s ease',
    },
    container: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      gap: 60,
      flexWrap: 'wrap',
      maxWidth: 1200,
      margin: '0 auto',
    },
    left: {
      flex: 1,
      minWidth: 300,
    },
    right: {
      flex: 2,
      minWidth: 300,
    },
    contactInfo: {
      marginTop: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '50px',
    },
    text: {
      ...whisperFont,
      fontSize: 18,
      color: '#333',
      margin: '8px 0',
    },
    row: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
    },
    item: {
      flex: 1,
      minWidth: 150,
    },
    label: {
      ...whisperFont,
      fontSize: 20,
      color: '#333',
    },
    input: {
      ...whisperFont,
      fontSize: 18,
      borderBottom: '2px solid black',
      borderRadius: 0,
      padding: 5,
      backgroundColor: 'transparent',
    },
    textarea: {
      ...whisperFont,
      fontSize: 18,
      borderBottom: '2px solid black',
      borderRadius: 0,
      padding: 5,
      backgroundColor: 'transparent',
    },
    formFooter: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      marginTop: 40,
      flexWrap: 'wrap',
      gap: 20,
    },
    sendButton: {
      ...whisperFont,
      padding: '10px 30px',
      borderRadius: 50,
      border: 'none',
      fontWeight: 'bold',
      fontSize: 16,
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.wrapper}>
      <Title style={styles.bigTitle}>Contact</Title>

      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.contactInfo}>
            <p style={styles.text}>Essence Céleste</p>
            <p style={styles.text}>260 Spinnaker Way</p>
            <p style={styles.text}>Units 2-5</p>
            <p style={styles.text}>Concord, ON Canada</p>
            <p style={styles.text}>L4K 4P9</p>
          </div>
        </div>

        <div style={styles.right}>
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <div style={styles.row}>
              <Form.Item
                name="name"
                label={<span style={styles.label}>Name</span>}
                style={styles.item}
              >
                <Input
                  bordered={false}
                  placeholder="Your name"
                  style={styles.input}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span style={styles.label}>Phone</span>}
                style={styles.item}
              >
                <Input
                  type="number"
                  bordered={false}
                  placeholder="123-456-7890"
                  style={styles.input}
                />
              </Form.Item>
            </div>

            <div style={styles.row}>
              <Form.Item
                name="email"
                label={<span style={styles.label}>Email</span>}
                style={styles.item}
              >
                <Input
                  bordered={false}
                  placeholder="example@email.com"
                  style={styles.input}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              label={
                <span style={styles.label}>
                  Want to know more? Drop us a line!
                </span>
              }
              style={{ marginTop: 20 }}
            >
              <Input.TextArea
                bordered={false}
                rows={3}
                placeholder="Your message"
                style={styles.textarea}
              />
            </Form.Item>

            <div style={styles.formFooter}>
              <Button htmlType="submit" style={styles.sendButton}>
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
