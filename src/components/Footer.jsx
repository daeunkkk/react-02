import React from "react";

function Footer(props) {
  return (
    <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__menu">
                <div>
                    <h3>Artek</h3>
                    <ul>
                        <li><a href="/">Nils-Gustav Hahl</a></li>
                        <li><a href="/">Nils-Gustav</a></li>
                    </ul>
                </div>
                <div>
                    <h3>고객센터</h3>
                    <ul>
                        <li><a href="/">1688-1547</a></li>
                        <li><a href="/">채팅상담 09:00~18:00</a></li>
                        <li><a href="/">문의메일 artek@naver.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3>개인정보방침</h3>
                    <ul>
                        <li><a href="/">개인정보동의</a></li>
                        <li><a href="/">개인정보동의</a></li>
                        <li><a href="/">개인정보동의</a></li>
                    </ul>
                </div>
        
                <div>
                    <h3>공지사항</h3>
                    <ul>
                        <li><a href="/">배송공지</a></li>
                        <li><a href="/">이벤트공지</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Q&A</h3>
                    <ul>
                        <li><a href="/">많이하는질문</a></li>
                        <li><a href="/">1:1상담신청</a></li>
                        <li><a href="/">신고하기</a></li>
                    </ul>
                </div>
            </div>
            <address className="footer__right">
                ©2022 artek. All rights reserved.
            </address>
        </div>
    </footer>
  );
}

export default Footer;
