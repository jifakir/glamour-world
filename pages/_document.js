import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='scrollbar-thin scrollbar-track-pri scrollbar-thumb-sec'>
          <Main />
          <div id="modal" />
          <div id="tooltip" />
          <NextScript />
        </body>
      </Html>
    )
  }
};