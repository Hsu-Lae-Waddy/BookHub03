import React from 'react';

const books = [
  {
    name: 'ချစ်သောပန်းကလေး',
    author: 'မင်းလူ',
    pdfLink: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1mv4NW-X6_WJZT-R95p-K6ZhRe2d2qkTA%2Fview%3Fusp%3Ddrivesdk%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3HuD_xlGkoPBwPE1JoSr_m-QE0dYRPnp74m5W1g0DWEf1gO3HDXpzSZwI_aem_q89QKAURerNNJhdZ06THMw&h=AT2ko757-heYzHX1z-E2Jo3fgL8b1aDS2GaoTJZ0LI1k3Z-neOisP2oig8uARG5GKpAsewF7Q4m5LdJTuvs9qNTG4Xjz45kb3cO6QhIIjNEZuGRB_VAU4gwsz-l7n84p6BHV&__tn__=R]-R&c[0]=AT22FWupagtxkf1BA9tWGcwazWJuu19iuNuTOVpT-Zo-0kPwYcJDYlH4M0VKYU05o3q2OPbszAo6RkbaJhcf4Wx2Ns2Mb0ralptNZ5kVDKjTU-14D-h7eDm6CLcPMdN3kaJQR98wjzkkxUJEvXIqIRXxBgO0LH87A5hlmogDFdP1JmtL2-2lbf2YSFI2vSs'
  },
  {
    name: 'Excel 2010',
    author: 'ဦးအောင်မြင့် ',
    pdfLink: 'http://pc.cd/rrgctalK'
  },
  {
    name:"Cambridge IELTS Official Book 17 (Academic) - PDF",
    author:"Cambridge",
    pdfLink: 'https://t.me/ielts24bd/3705'
  },
  {
    name:"iOSDeviceကိုကျွမ်းကျွမ်းကျင်ကျင်ကိုင်တွယ်ကြရအောင်",
    author:"စွမ်းပြည့်မျိုး ",
    pdfLink: 'http://pc.cd/n5CctalK'
  },
  // Add more books here
];

const BookShelfDraft = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Book Bookshelf</h1>
      <table style={{ width: '90%', margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Book Name</th>
            <th style={{ padding: '12px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Author</th>
            <th style={{ padding: '12px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Download</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{book.name}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{book.author}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                <a href={book.pdfLink} download>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}>Download</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookShelfDraft;
