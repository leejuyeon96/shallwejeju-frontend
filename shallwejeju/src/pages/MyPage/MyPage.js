import styled from "styled-components";
// import "../resources/profileImg.jpg";
import React, { useState, useEffect } from "react";
import beach from "../../assets/beach-1867436_1280.jpg";

const StyleMain = styled.main`
 
.background-img {
    position: relative;
    width: 100%;
    height: 800px;
    opacity: 0.3;
  }
.profile-image {
    
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 40px;
  }
  .profile {
    display: flex;
    border: 3px solid #babebc;
    justify-content: center; /* 수평 가운데 정렬 */
    // align-items: center; /* 수직 가운데 정렬 */
    top: 15%;
    width: 400px;
    right: 50px;
    height: 30vh;
    position: absolute;
    border-radius: 20px;
    box-shadow: #fff;
    background-color: whitesmoke;
  }

 .name {
  font-size: 25px;
  margin-top: 60px;
  font-family: "IBM";
  margin-right: 20px;

  
 }
 .email {
  font-size: 20px;
  font-family: "YeongDeok";
  margin-right: 20px;

 }

 .input-button{
  padding: 5px 20px;
  background-color:#FF6600;
  border-radius: 4px;
  margin-top: 30px;
  color: white;
  cursor: pointer;
  width: auto;

}

label {
  font-family: "IBM";
 
}

.friend {
  position: absolute;
  bottom: 200px;
  left: 10px;
}

.table-wrapper {
  border-radius: 15px;
  box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babebc;
  position: absolute;
  overflow: hidden;
  margin-top: 10px;
}
table {
  
  width: 300px;
  border-collapse: collapse;
  
 
}

thead ::before {
  background-color: #333;
  color: white;
  
}

th {
  background-color: #FF6600;
}

th, td {
  padding: 8px;
  /* border: 1px solid #ccc; */
  text-align: center;
  border-bottom: 1px solid #CD5C5C;
  pointer-events: none;
}

tr {
  background-color: bisque;
}

/* tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #e0e0e0;
} */



`;

const MyPage = () => {

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataURL = reader.result;
        setProfileImage(imageDataURL);
        localStorage.setItem("profileImage", imageDataURL);
      };
      reader.readAsDataURL(file);
    }


};


  useEffect(() => {
    // 페이지가 로드될 때, 로컬 스토리지에서 이미지 데이터를 가져옴
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
    const storedFriends = localStorage.getItem('friends');
    if (storedFriends) {
    setFriends(JSON.parse(storedFriends));
  }
  }, []);


    // 프로필 이미지를 관리할 상태
    const [profileImage, setProfileImage] = useState(null);

    const [profileInfo, setProfileInfo] = useState({
      name: "돌맹이", // 기본 이름
      email: "doldol@example.com", // 기본 이메일
    });

    
      const [friends, setFriends] = useState([]);
      const [searchName, setSearchName] = useState('');

      const generateUniqueId =() => {
        const min = 1;
        const max = 999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString().padStart(3, '0');
      };

      const addFriend = () => {
        if (searchName) { const newFriend = {
          id: generateUniqueId(),
          name: searchName,
        };
        const updatedFriends = [...friends, newFriend];
         setFriends(updatedFriends);
         setSearchName('');
        localStorage.setItem('friends', JSON.stringify(updatedFriends));
      }  
    // 빈 배열을 전달하여 최초 렌더링 시에만 실행
    // 이미지 업로드 핸들러
   
      
    }   
  return (
    <StyleMain>
      <div className="background">
        <img src={beach} className="background-img"></img>
      <div className="profile">
      
       {profileImage && <img className="profile-image" src={profileImage}/>}  
       <div>
        <div className="name">
         {profileInfo.name}
        </div>
        <br></br>
        <div className="email">
         {profileInfo.email}
        </div>
         <br></br>
         <label className="input-button" for="input-file">프로필사진 변경</label>
         <input type="file" accept="image/*" id="input-file" onChange={handleImageUpload} style={{display: "none"}} />
         </div>
       </div> 
       
          <div className="friend">
            <h1>Friends</h1>
              <input type="text" placeholder="친구 검색" value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
              <button onClick={addFriend}>친구 추가</button>
              <ul>
                {friends.map(friend => (
                  <li key={friend.id}>{friend.name}</li>
                ))}
              </ul>

              <h1>친구 목록</h1>
                  <div className="table-wrapper">
                    <table>
                        <thead>
                          <tr>
                            
                            <th>친구 이름</th>
                          </tr>
                        </thead>
                        <tbody>
                          {friends.map((friend) => (
                            <tr key={friend.id}>
                              <td><img src={friend.profileImageUrl}/></td>
                              <td>{friend.id}</td>
                              <td>{friend.name}</td>
                            </tr>
                          ))}
                        </tbody>
                    </table>
                  </div>
            </div>
       
          <div>
           <a href="/LikeList">
            좋아요 목록
           </a>
           <a href="/Schedule">
            여행 일정
           </a>
          </div>
      </div>    
    </StyleMain>
  );
}

export default MyPage;
