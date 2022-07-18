import React from "react";

function Service(props) {
  return (
    <section className="text_wrap">

            <div className="text_container">
                <div className="text01">
                    <span>Sign Up</span>
                    <h2>WHY Artek</h2>
                    <p>100년 역사의 아르텍의 특별한 <br/>서비스를 제공드립니다.</p>
                </div>
                <div className="text_box1">
                    <div className="text">
                        <h2>정밀검사</h2>
                        <p>고객님들께 최상의 제품을 전달드리기위해<br/>꼼꼼히 검수하여 배송 드립니다.
                            <br/>정밀검사를 마친 제품은 실시간 확인 가능합니다.
                        </p>
                    </div>
                    <div className="text">
                        <h2>전문 AS 지원</h2>
                        <p>수령 시 제품 문제 AS는 제품 리콜 후<br/> 수리,새 제품 발송,부품 발송 등의 방식이
                            사용됩니다.<br/>1개월 이상 소요 시 100% 환불됩니다.
                        </p>
                    </div>
                </div>
                <div className="text_box2">
                    <div className="text">
                        <h2>정품 보장</h2>
                        <p>저희 Aretek은 현재까지 판매한 상품 중<br/>
                            단 하나의 가품도 없었습니다.<br/>브랜드 공식 딜러십을 가진 업체만 거래합니다.</p>
                    </div>
                    <div className="text">
                        <h2>가장 빠른 배송</h2>
                        <p>미리 제작되어 있는 따끈따끈한<br/>
                            상품을 구매하면 2~3달이 걸리는 긴 제작과정 없이<br/>
                            가장 빠르게 받아보실 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Service;
