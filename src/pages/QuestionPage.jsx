import axios from 'axios';
import React, { useEffect, useState } from 'react'

const QuestionPage = ({id}) => {
  console.log(id)

  const [question, setQuestion] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/questions/${id}`) // Replace with your API endpoint
        setQuestion(response.data);
        // setLoading(false);
      } catch (error) {
        console.log(error.message);
        // setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
    // console.log(props)
  return (
    <div>{question}</div>
  )
}

export default QuestionPage