import React from "react";
import * as H from './header.style';
import logo from "../../asset/img/logo.svg";
import searchButton from "../../asset/img/searchButton.svg";
import profile from "../../asset/img/profile.svg";

function Header() {
    return (
        <>
            <H.header>
                <H.logo src={logo}></H.logo>
                <H.searchfiled>
                    <H.search placeholder="검색어를 입력해주세요" type="search"></H.search>
                    <H.searchButton src={searchButton}></H.searchButton>
                </H.searchfiled>
                <H.profile>
                    권예림님
                    <H.profileImg src={profile}></H.profileImg>
                </H.profile>
            </H.header>
        </>
    );
}
export default Header;