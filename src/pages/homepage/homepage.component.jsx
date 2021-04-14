import React from "react";

import { ReactComponent as ListIco } from "../../assets/list-ico.svg";
import { ReactComponent as FleshDown } from "../../assets/flesh-down.svg";

import "./homepage.styles.scss";

const Homepage = () => (
  <>
    <div className="kavano-section">
      <div className="kavano-sidebar">
        <div className="kavano-user">
          <div className="kavano-user-logo"></div>
          <div className="kavano-user-message">
            <div className="kavano-morning-msg">Good morning,</div>
            <div className="kavano-username">Pooyan!</div>
          </div>
        </div>
        <div className="kavano-tasks">
          <div className="kavano-tasks-box">
            <a href="#" className="kavano-add-btn w-button">
              Add a Task
            </a>
            <div className="kavano-task-txt-container">
              <ListIco />
              <div className="kavano-task-title-sub-container">
                <div className="kavano-task-title">
                  Wireframe for contact page
                </div>
                <div className="kavano-task-sub">Today</div>
              </div>
            </div>
            <div className="kavano-task-txt-container">
              <ListIco />
              <div className="kavano-task-title-sub-container">
                <div className="kavano-task-title">Book return ticket</div>
                <div className="kavano-task-sub">Tommorow</div>
              </div>
            </div>
            <div className="kavano-task-txt-container">
              <ListIco />
              <div className="kavano-task-title-sub-container">
                <div className="kavano-task-title">Pay electricity bill</div>
                <div className="kavano-task-sub">2 Days Ahead</div>
              </div>
            </div>
          </div>
          <div className="kavano-completed-task">
            <div className="kavano-complete-title">Completed</div>
            <FleshDown />
          </div>
        </div>
      </div>
      <div className="kavano-main">
        <div className="kavano-main-top-div">
          <div className="kavano-nts-div">
            <div className="kavano-nts-my">November 2019</div>
            <div className="kavano-nts-date">
              <div className="kavano-nts-txt1">Today</div>
              <div className="kavano-nts-txt2">18, Mon</div>
            </div>
            <div className="form-block w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                className="kavano-form"
              >
                <input
                  type="submit"
                  value=""
                  data-wait="Please wait..."
                  className="kavano-search-btn w-button"
                />
                <input
                  type="text"
                  className="kavano-search-txt-field w-input"
                  maxlength="256"
                  name="name"
                  data-name="Name"
                  placeholder=""
                  id="name"
                />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="kavano-dwm-div">
            <div className="kavano-dwm-inside-container">
              <img
                src="https://uploads-ssl.webflow.com/5fa6539de1f11567b7272ea6/6076d12f9a719520ae896e3e_Group%205.svg"
                loading="lazy"
                alt=""
                className="kavano-leftflesh-ico"
              />
              <div className="kavano-dwm-txt">Day</div>
              <div className="kavano-dwm-txt">Week</div>
              <div className="kavano-dwm-txt kavano-dwm-txt-selected">
                Month
              </div>
              <img
                src="https://uploads-ssl.webflow.com/5fa6539de1f11567b7272ea6/6076d1aa757c58130bd6cde7_Group%203.svg"
                loading="lazy"
                alt=""
                className="kavano-rightflesh-ico"
              />
            </div>
          </div>
          <div className="kavano-days-div">
            <div className="kavano-days">Sun</div>
            <div className="kavano-days">Mon</div>
            <div className="kavano-days">Tue</div>
            <div className="kavano-days">Wed</div>
            <div className="kavano-days">Thu</div>
            <div className="kavano-days">Fri</div>
            <div className="kavano-days">Sat</div>
          </div>
        </div>
        <div className="kavano-main-bottom-div">
          <div className="w-layout-grid grid">
            <div
              id="w-node-b0372a8e-e545-09dc-7e7d-876a9cff1c90-71d91ec3"
              className="kavano-calandar-element"
            ></div>
            <div
              id="w-node-_855f9cfa-dec2-10ef-8978-9dcf6debd76b-71d91ec3"
              className="kavano-calandar-element"
            ></div>
            <div
              id="w-node-_6179744a-c969-ec9a-fd17-00341a1a52c4-71d91ec3"
              className="kavano-calandar-element"
            ></div>
            <div
              id="w-node-_0625397b-bbc9-0387-92cc-3404854f3dc9-71d91ec3"
              className="kavano-calandar-element"
            ></div>
            <div
              id="w-node-_289e6683-97af-3115-83e9-042cf3775892-71d91ec3"
              className="kavano-calandar-element"
            ></div>
            <div
              id="w-node-_242196e7-d566-cf19-d10f-34a4bb63152c-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">1</div>
            </div>
            <div
              id="w-node-_016cfbca-b9b5-2509-6500-0a9467b9acb0-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">2</div>
            </div>
            <div
              id="w-node-_6c128ec4-30f4-03fa-34c7-d91984491fc6-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">3</div>
            </div>
            <div
              id="w-node-_82d48b6d-a064-f258-cee7-0495d896ad30-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">4</div>
            </div>
            <div
              id="w-node-c8adf373-5191-7cc1-e1a9-7ae2b5e6a95d-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">5</div>
            </div>
            <div
              id="w-node-_72d12fde-6120-7895-9297-4962f585670e-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">6</div>
            </div>
            <div
              id="w-node-_0728ee62-6e75-ecbe-0cea-e3c26de83d77-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">7</div>
            </div>
            <div
              id="w-node-b30169ba-3ec0-872a-7ab8-4bf7dd250587-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">8</div>
            </div>
            <div
              id="w-node-_428a86fd-c8f3-2dd9-8340-bd22d44412d2-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">9</div>
            </div>
            <div
              id="w-node-_1cf60d9f-6232-bd6b-e210-6fcb7d14c830-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">10</div>
            </div>
            <div
              id="w-node-_4ede901d-bd23-e783-d143-838a9dafa7ce-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">11</div>
            </div>
            <div
              id="w-node-_2946ebb3-73f1-7dea-11ab-21043f5eb805-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">12</div>
            </div>
            <div
              id="w-node-bc1a549d-4579-829b-d77f-eb10c257d06e-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">13</div>
            </div>
            <div
              id="w-node-_3aecc927-7e26-508d-0da4-a39d115fb6a9-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">14</div>
            </div>
            <div
              id="w-node-_57b9a297-d5a9-ca1b-40c0-3ad2a53468df-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">15</div>
            </div>
            <div
              id="w-node-_6512bd9f-8176-2c59-38da-e64e4d06e2b2-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">16</div>
            </div>
            <div
              id="w-node-cc75380e-ab38-3653-5400-1d4938f035ac-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">17</div>
            </div>
            <div
              id="w-node-_9f018955-fc22-e669-0c02-2d36118bc0e3-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">18</div>
            </div>
            <div
              id="w-node-c352cb12-17e7-1e80-e057-e64ea2755a95-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">19</div>
            </div>
            <div
              id="w-node-_6a72b6ee-6812-753f-1932-ab63ebb230b2-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">20</div>
            </div>
            <div
              id="w-node-d59898e3-e01c-7123-720d-1dd840b92c88-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">21</div>
            </div>
            <div
              id="w-node-_5dc7bf6d-e7f3-deba-cdc1-4819c75475c2-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">22</div>
            </div>
            <div
              id="w-node-_3a42c27e-46bb-5d8d-b1a1-ff0d819fd669-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">23</div>
            </div>
            <div
              id="w-node-_245c7ea9-8d7c-f0e5-a226-3187bb177d41-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">24</div>
            </div>
            <div
              id="w-node-_4a660d67-79e4-2542-0f22-41028940a0e7-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">25</div>
            </div>
            <div
              id="w-node-_3b4fe5b6-7023-2003-299e-1564180acff4-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">26</div>
            </div>
            <div
              id="w-node-_43ace079-13bc-9782-128e-a2bf85757cfc-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">27</div>
            </div>
            <div
              id="w-node-_05631de2-191b-d8b0-6c37-e686cc7d7d41-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">28</div>
            </div>
            <div
              id="w-node-_5dcbf895-4533-041b-cd41-df0d25ddead7-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">29</div>
            </div>
            <div
              id="w-node-_615c2dba-f888-0a9d-cfe3-2c330530b9cb-71d91ec3"
              className="kavano-calandar-element"
            >
              <div className="kavano-cal-num">30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Homepage;
