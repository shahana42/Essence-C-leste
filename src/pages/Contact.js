// import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
// import { CheckOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Contact = () => {

  
const onFinish = async (values) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby8Qp6IgkH7W4UHbmH2Hvb2oU4N6hLZRjMA8h3AU8BrSNHr1UARdhIyyVb1zEudzcCh/exec', {
    method: 'POST',
    mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
    //   const result = await response.json();
      console.log('Google Sheet Response:',response);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };
  

  return (
    <div style={styles.wrapper}>
      {/* Big faint background title */}
      <Title style={styles.bigTitle}>Contact</Title>

      <div style={styles.container}>
        {/* Left Side: Contact Info */}
        <div style={styles.left}>
          <div style={styles.contactInfo}>
            <p style={styles.text}>Essence Céleste</p>
            <p style={styles.text}>260 Spinnaker Way</p>
            <p style={styles.text}>Units 2-5</p>
            <p style={styles.text}>Concord, ON Canada</p>
            <p style={styles.text}>L4K 4P9</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={styles.right}>
          <Form layout="vertical" onFinish={onFinish}>
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

              {/* <Form.Item
                name="phone"
                label={<span style={styles.label}>Phone</span>}
                style={styles.item}
              >
                <Input
                  bordered={false}
                  placeholder="123-456-7890"
                  style={styles.input}
                />
              </Form.Item> */}
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

              <Button
                htmlType="submit"
                style={{
                  ...styles.sendButton,
                }}
              >
                ● Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

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
    fontSize: '160px',
    fontWeight: 700,
    color: 'white',
    lineHeight: 1,
    position: 'absolute',
    top: -30,
    left: 20,
    pointerEvents: 'none',
    zIndex: 1,
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
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    padding:'50px'
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
    // type:'number'
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
//   checkbox: {
//     width: 20,
//     height: 20,
//     border: '1px solid #ccc',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 4,
//     backgroundColor: '#fff',
//   },
  sendButton: {
    ...whisperFont,
    // color: 'white',
    padding: '10px 30px',
    borderRadius: 50,
    border: 'none',
    fontWeight: 'bold',
    fontSize: 16,
    transition: 'all 0.3s ease',
  },
};

export default Contact;
