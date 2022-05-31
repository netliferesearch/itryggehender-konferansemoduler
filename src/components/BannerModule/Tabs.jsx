import React from "react";
import ProgramModule from "../ProgramModule/ProgramModule";
import SpeakersModule from "../SpeakersModule/SpeakersModule";
import Richtext from "../Richtext";
import programModuleData from "../ProgramModule/ProgramModule.data";
import speakersModuleData from "../SpeakersModule/SpeakersModule.data";

const Tabs = () => (
  <>
    <div className="container mt-5 c-tabs">
      <ul
        className="row nav align-items-center c-tabs__list"
        id="tabs"
        role="tablist"
      >
        <li
          className="col-sm text-center nav-item c-tabs__tab"
          role="presentation"
        >
          <a
            className="nav-link active c-tabs__link"
            id="forside-tab"
            data-toggle="tab"
            href="#forside"
            role="tab"
            aria-controls="forside"
            aria-selected="true"
          >
            Forside
          </a>
        </li>
        <li
          className="col-sm text-center nav-item c-tabs__tab"
          role="presentation"
        >
          <a
            className="nav-link c-tabs__link"
            id="program-tab"
            data-toggle="tab"
            href="#program"
            role="tab"
            aria-controls="program"
            aria-selected="false"
          >
            Program
          </a>
        </li>
        <li
          className="col-sm text-center nav-item c-tabs__tab"
          role="presentation"
        >
          <a
            className="nav-link c-tabs__link"
            id="foredragsholdere-tab"
            data-toggle="tab"
            href="#foredragsholdere"
            role="tab"
            aria-controls="foredragsholdere"
            aria-selected="false"
          >
            Foredragsholdere
          </a>
        </li>
        <li
          className="col-sm text-center nav-item c-tabs__tab"
          role="presentation"
        >
          <a
            className="nav-link c-tabs__link"
            id="praktisk-tab"
            data-toggle="tab"
            href="#praktisk"
            role="tab"
            aria-controls="praktisk"
            aria-selected="false"
          >
            Praktisk informasjon
          </a>
        </li>
      </ul>
    </div>

    <div className="tab-content" id="tabsContent">
      <div
        className="tab-pane fade show active"
        id="forside"
        role="tabpanel"
        aria-labelledby="forside-tab"
      >
        <Richtext />
      </div>
      <div
        className="tab-pane fade"
        id="program"
        role="tabpanel"
        aria-labelledby="program-tab"
      >
        <ProgramModule {...programModuleData} />
      </div>
      <div
        className="tab-pane fade"
        id="foredragsholdere"
        role="tabpanel"
        aria-labelledby="foredragsholdere-tab"
      >
        <SpeakersModule {...speakersModuleData} />
      </div>
      <div
        className="tab-pane fade"
        id="praktisk"
        role="tabpanel"
        aria-labelledby="praktisk-tab"
      >
        <Richtext />
      </div>
    </div>
  </>
);

export default Tabs;
