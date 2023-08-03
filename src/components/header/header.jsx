import React, { useState } from "react";
import * as H from './header.style';
import logo from "../../asset/img/logo.svg";
import searchButton from "../../asset/img/searchButton.svg";
import profile from "../../asset/img/profile.svg";

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const [userID, setUserID] = useState('권예림');

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        console.log(searchTerm);
    };

    return (
        <>
            <H.header>
                <H.logo src={logo}></H.logo>
                <H.searchfiled>
                    <H.search placeholder="검색어를 입력해주세요" type="text" value={searchTerm} onChange={handleInputChange}></H.search>
                    <H.searchButton src={searchButton}></H.searchButton>
                </H.searchfiled>
                <H.profile>
                    {userID}님
                    <H.profileImg src={profile}></H.profileImg>
                </H.profile>
            </H.header>
        </>
    );
}
export default Header;