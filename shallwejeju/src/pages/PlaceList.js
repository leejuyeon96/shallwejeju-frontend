import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { setSelected } from "../api/user";

const StyleMain = styled.main`

max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;

  h2 {
    margin-bottom: 20px;
  }

  .category-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    ul {
      list-style: none;
      padding: 0;
    }

    .selected-category {
      background-color: #007BFF;
      color: #fff;
      padding: 5px 10px;
      margin: 5px 0;
      border-radius: 5px;
    }

    .available-list {
      list-style: none;
      padding: 0;
    }
  }
`;

const PlaceList = () => {
       
        const [selected, setSelected] = useState([]);
        const categories = ['자연', '숲', '바다', '액티비티'];

        const categoryAPI = async () => {
          try {
            const response = await axios.get("category"); // axios로 데이터 가져오기
            const data = response.data;
            setSelected(data);
          } catch (error) {
            console.error('카테고리 데이터를 가져오는 중 오류 발생:', error);
          }
        };

        useEffect(() => {
          categoryAPI();
        }, []);

        const handleCategorySelect = (category) => {
          if (selected.includes(category)) {
            setSelected(selected.filter((c) => c !== category));
            } else {
              setSelected([...selected, category]);
            };

        };
        
        const renderCategories = () => {
            return categories.map((category) => (
            <label key={category}>
                <input type='checkbox' checked={selected.includes(category)}
                onChange={() => handleCategorySelect(category)}/>
                {category}
            </label>));
        }

    return(
        <StyleMain>
             <div>
                <h2>카테고리 선택</h2>
                <div>
                  <h3>선택한 카테고리:</h3>
                  <ul>
                     {selected.map((category) => (
                        <li key={category}>{category}</li>
                     ))}
                  </ul>
                    </div>
                    <div>
                        <h3>사용 가능한 카테고리:</h3>
                         {renderCategories()}
                    </div>
              </div>
        </StyleMain>
    );
};
export default PlaceList;