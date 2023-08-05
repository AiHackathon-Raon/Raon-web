import React, { useState } from "react";
import * as H from './header.style';
import { useNavigate } from "react-router-dom";
import logo from "../../asset/img/logo.svg";
import searchButton from "../../asset/img/searchButton.svg";
import profile from "../../asset/img/profile1.svg";

function Header() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const [userID, setUserID] = useState('내이름');

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        console.log(searchTerm);
    };

    return (
        <>
            <H.header>
                <H.logo src={logo} onClick={() => navigate("/")}></H.logo>
                <H.searchfiled>
                    <H.search placeholder="검색어를 입력해주세요" type="text" value={searchTerm} onChange={handleInputChange}></H.search>
                    <H.searchButton src={searchButton}></H.searchButton>
                </H.searchfiled>
                <H.profile>
                    {userID}님
                    <H.profileImg src={profile} onClick={() => navigate("/profile")}></H.profileImg>
                </H.profile>
            </H.header>
        </>
    );
}
export default Header;