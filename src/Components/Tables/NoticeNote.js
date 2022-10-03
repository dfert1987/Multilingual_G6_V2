import React, { useState, useEffect } from "react";
import { NoticeAndNote } from "../../Assets/Data/NoticeAndNote";
import PDFIcon from "../../Assets/Icons/PDFIcon.png";
import PPTIcon from "../../Assets/Icons/PPTIcon.png";
import "../../Styles/NoticeNote.css";

export const NoticeNote = () => {
  const [titles, setTitles] = useState();
  const [englishPDFs, setEnglishPDFs] = useState();
  const [spanishPDFs, setSpansishPDFs] = useState();
  const [presentations, setPresentations] = useState();

  useEffect(() => {
    let justTitles = NoticeAndNote.map((item) => {
      return item.Title;
    });
    setTitles(justTitles);

    let justEnglish = NoticeAndNote.map((item) => {
      return item.EnglishPDFLink;
    });
    setEnglishPDFs(justEnglish);

    let justSpanish = NoticeAndNote.map((item) => {
      return item.SpanishPDFLink;
    });
    setSpansishPDFs(justSpanish);

    let justPresentations = NoticeAndNote.map((item) => {
      return item.PresentationLink;
    });
    setPresentations(justPresentations);
  }, []);

  const stripes = (index) => {
    if (index === 0 || index % 2 === 0) {
      return "white";
    } else {
      return "tan";
    }
  };

  const showTitles = () => {
    if (titles) {
      return titles.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row gloss ${stripes(index)}`}>
              <p className="topic-item">{item}</p>
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const showEnglish = () => {
    if (englishPDFs) {
      return englishPDFs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons gloss ${stripes(index)}`}>
                <a href={item}>
                  <img className="icon-input" alt="English PDF" src={PDFIcon} />
                </a>
              </div>
            ) : (
              <div className={`info-row icons gloss ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        );
      });
    }
  };

  const showSpanish = () => {
    if (spanishPDFs) {
      return spanishPDFs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons gloss ${stripes(index)}`}>
                <a href={item}>
                  <img className="icon-input" alt="Spanish PDF" src={PDFIcon} />
                </a>
              </div>
            ) : (
              <div className={`info-row icons gloss ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        );
      });
    }
  };

  const showPresentations = () => {
    if (presentations) {
      return presentations.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons gloss ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input"
                    alt="PPT Presentation"
                    src={PPTIcon}
                  />
                </a>
              </div>
            ) : (
              <div className={`info-row icons gloss ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        );
      });
    }
  };

  return (
    <div className="notice-note-container">
      <section className="above-table">
        <div className="left-side">
          <h4 className="paragraph-header">Notice & Note</h4>
          <p className="above-paragraph">
            The <b>Notice & Note</b> protocol gives students the tools they need
            to become proficient independent readers, in English or Spanish.
            Look in the <b>Notice & Note</b> section on Ed for more resources.
          </p>
        </div>
        <div className="right-side">
          <div className="key-container">
            <b className="key-header">Key to Icons</b>
            <div className="key-main">
              <span className="key-item">
                <img src={PDFIcon} alt="PDF Icon" className="key-icon" />
                <p className="key-text anchorKey">Printable</p>
              </span>
              <span className="key-item">
                <img src={PPTIcon} alt="PPT Icon" className="key-icon" />
                <p className="key-text anchorKey">Slides</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <table className="notice-note-table-container">
        <section className="column topic note-charts-big">
          <div className="header-row note topic-header">
            <h4 className="header-text topic-header-text charts-text">
              Notice & Note Anchor Charts
            </h4>
          </div>
          <div className="main-column topics-text">{showTitles()}</div>
        </section>
        <section className="column topic note-charts-pdfs">
          <div className="header-row note topic-header small">
            <h4 className="header-text topic-header-text charts-text pdf">
              English PDF
            </h4>
          </div>
          <div className="main-column topics-text">{showEnglish()}</div>
        </section>
        <section className="column topic note-charts-pdfs">
          <div className="header-row note topic-header small">
            <h4 className="header-text topic-header-text charts-text pdf">
              Presentation
            </h4>
          </div>
          <div className="main-column topics-text">{showPresentations()}</div>
        </section>
        <section className="column topic note-charts-pdfs">
          <div className="header-row note topic-header small spanish">
            <h4 className="header-text topic-header-text charts-text pdf">
              Spanish PDF
            </h4>
          </div>
          <div className="main-column topics-text">{showSpanish()}</div>
        </section>
      </table>
    </div>
  );
};

export default NoticeNote;
