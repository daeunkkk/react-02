import React from "react";

function Slider(props) {
  return (
    <section className="Slider">
    <div className="slider_wrap">
        <h2 className="ir_so">슬라이드 배너</h2>
        <div className="slider_inner">
            <div className="slider_img">
                <img src="assets/img/463d163fac17aa28e4b0ad080a2e4b6f_82616.jpg" alt=""/>
            </div>
            <i className="fas fa-chevron-left fa-2x prev"></i>
            <i className="fas fa-chevron-right fa-2x next"></i>
            <div></div>
            <div className="slider_dot">
                <ul className="dot">
                    <li><a href="/"><span className="ir_so">1</span></a></li>
                    <li><a href="/"><span className="ir_so">2</span></a></li>
                    <li><a href="/"><span className="ir_so">3</span></a></li>
                    <li><a href="/"><span className="ir_so">4</span></a></li>
                    <li><a href="/"><span className="ir_so">5</span></a></li>
                </ul>
            </div>
        </div>
    </div>


</section>
  );
}

export default Slider;
