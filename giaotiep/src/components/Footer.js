import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <Link to="/sign-up">Học viên tiêu biểu</Link>
                        <Link to="/">Điều khoản chính sách</Link>
                        <Link to="/">Quy chế hoạt động</Link>
                        <Link to="/">Chính sách bảo mật thông tin</Link>
                    </div>
                    <div className="footer-link-items">
                        <Link to="/">Thông tin liên hệ</Link>
                        <Link to="/">Hỗ trợ</Link>
                        <Link to="/">Tư vấn trực tuyến</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            GTNM
                            <i className="fas fa-graduation-cap"></i>
                        </Link>
                    </div>
                    <small className="website-rights">GTMT © 2021</small>
                    <div class="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
