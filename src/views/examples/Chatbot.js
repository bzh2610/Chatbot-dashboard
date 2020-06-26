import React from "react";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";


import setup from "assets/css/chatbot/setup.css"
import says from "assets/css/chatbot/says.css"
import reply from "assets/css/chatbot/reply.css"
import typing from "assets/css/chatbot/typing.css"
import input from "assets/css/chatbot/input.css"



function Chatbot() {
    return (
        <>

            <Container className="mt--12 pt-8 chatbot" fluid style={{ height: "100vh", background: "rgb(94, 114, 228)" }}>
                {/* Table */}
                <Row>
                    <div id="chat" class="bubble-container" style={{ background: "transparent" }}>
                        <div class="bubble-wrap" style={{ "padding-bottom": "100px" }}>
                            <div class="bubble say" style={{ "width": "19px" }}>
                                <span class="bubble-content">Hi</span>
                            </div>
                            <div class="bubble say" style={{ "width": "283px" }}>
                                <span class="bubble-content">
                                    Would you like banana or ice cream?
                                        </span>
                            </div>
                            <div class="bubble reply say bubble-hidden">
                                <span class="bubble-content">
                                    <span class="bubble-button" style={{ "animationDelay": "0ms", width: "99px" }} onclick="chatWindow.answer('ice-cream', 'Ice Cream');this.classList.add('bubble-pick')">Ice Cream</span>
                                    <span class="bubble-button" style={{ "animationDelay": "0ms", width: "79px" }} onclick="chatWindow.answer('banana', 'Banana');this.classList.add('bubble-pick')">Banana</span>
                                </span>
                            </div>
                            <div class="bubble reply reply-freeform say">
                                <span class="bubble-content">
                                    <span class="bubble-button bubble-pick">test</span>
                                </span>
                            </div>
                            <div class="bubble say" style={{ "width": "429px" }}>
                                <span class="bubble-content">Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇</span>
                            </div>
                            <div class="bubble reply say bubble-picked">
                                <span class="bubble-content"><span class="bubble-button" style={{ "animationDelay": "0ms", width: "0px" }}>Banana</span>
                                    <span class="bubble-button bubble-pick" style={{ "animationDelay": "100ms" }}>Ice Cream</span>
                                </span>
                            </div>
                            <div class="bubble-typing">
                                <div class="dots_0 dot" style={{"animationDelay": "0.45s"}}></div>
                                <div class="dots_1 dot" style={{"animationDelay": "1.05s"}}></div>
                                <div class="dots_2 dot" style={{"animationDelay": "1.35s"}}></div>
                            </div>
                            <div class="bubble say" style={{ width: "25px" }}>
                                <span class="bubble-content">🍦</span>
                            </div>
                            <div class="bubble reply say">
                                <span class="bubble-content">
                                    <span class="bubble-button" style={{ "animationDelay": "0ms", width: "99px" }} onclick="chatWindow.answer('ice', 'Start Over');this.classList.add('bubble-pick')">Start Over</span>
                                </span>
                            </div>
                            <div class="bubble-typing imagine">
                                <div class="dot_0 dot"></div>
                                <div class="dot_1 dot"></div>
                                <div class="dot_2 dot"></div>
                            </div></div><div class="input-wrap"><textarea placeholder="Ask me anything..."></textarea></div></div>


                        </Row>
            </Container>
        </>
    );
}

export default Chatbot;