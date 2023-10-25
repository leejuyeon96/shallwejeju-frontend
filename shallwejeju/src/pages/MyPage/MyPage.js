import styled from "styled-components";
// import "../resources/profileImg.jpg";
import React, { useState, useEffect } from "react";
import beach from "../../assets/beach-1867436_1280.jpg";

const StyleMain = styled.main`
 
.background-img {
    position: relative;
    width: 100%;
    height: 800px;
    opacity: 0.5;
  }
.profile-image {
    
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 40px;
    margin-right: 90px;
  }
  .profile {
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    // align-items: center; /* 수직 가운데 정렬 */
    top: 20%;
    left: 35%;
    height: 100vh;
    position: absolute;
  }

 .name {
  font-size: 25px;
  margin-top: 40px;
  font-family: "IBM";

  
 }
 .email {
  font-size: 20px;
  font-family: "YeongDeok";

 }

 .input-button{
  padding: 5px 20px;
  background-color:#FF6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  width: auto;

}

label {
  font-family: "IBM";
 
}

`;
const MyPage = () => {

    // 프로필 이미지를 관리할 상태
    const [profileImage, setProfileImage] = useState(null);

    const [profileInfo, setProfileInfo] = useState({
      name: "돌맹이", // 기본 이름
      email: "doldol@example.com", // 기본 이메일
    });
    useEffect(() => {
      // 페이지가 로드될 때, 로컬 스토리지에서 이미지 데이터를 가져옴
      const savedProfileImage = localStorage.getItem("profileImage");
      if (savedProfileImage) {
        setProfileImage(savedProfileImage);
      }
    }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행
    // 이미지 업로드 핸들러
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
     </div>
    </StyleMain>
  );
};

export default MyPage;
