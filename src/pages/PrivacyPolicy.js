import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const PrivacyPolicy = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://localhost:44349/umbraco/api/PrivacyPolicy/getPrivacyPolicyPageContent', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
              const result = await response.json();
              setData(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  }, []); // Empty dependency array means the effect runs once when the component mounts
  const description = {__html: data?.description}
  return (
    <>
    <Layout data={data}>
        <section class="terms-box info">
            <div class="inner">
                <article> 
                    <div dangerouslySetInnerHTML={description}/>
                </article> 
            </div>
        </section>
    </Layout>
    </>
  )
}

export default PrivacyPolicy
