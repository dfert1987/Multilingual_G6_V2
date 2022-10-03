import React, { useState, useEffect } from "react";
import { Bookmarks } from "../../Assets/Data/Bookmarks";
import PDFIcon from "../../Assets/Icons/PDFIcon.png";
import "../../Styles/NoticeNote.css";

export const Bookmark = () => {
  const [titles, setTitles] = useState();
  const [englishPDFs, setEnglishPDFs] = useState();
  const [spanishPDFs, setSpansishPDFs] = useState();

  useEffect(() => {
    let justTitles = Bookmarks.map((item) => {
      return item.Title;
    });
    setTitles(justTitles);

    let justEnglish = Bookmarks.map((item) => {
      return item.EnglishPDFLink;
    });
    setEnglishPDFs(justEnglish);

    let justSpanish = Bookmarks.map((item) => {
      return item.SpanishPDFLink;
    });
    setSpansishPDFs(justSpanish);
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

  return (
    <table className="notice-note-table-container bookmark">
      <section className="column topic note-charts-bookmark-big">
        <div className="header-row note topic-header">
          <h4 className="header-text topic-header-text charts-text">
            Bookmarks
          </h4>
        </div>
        <div className="main-column topics-text withBottom">{showTitles()}</div>
      </section>

      <section className="column topic note-charts-pdfs">
        <div className="header-row note topic-header small">
          <h4 className="header-text topic-header-text charts-text pdf">
            English PDF
          </h4>
        </div>
        <div className="main-column topics-text withBottom">
          {showEnglish()}
        </div>
      </section>
      <section className="column topic note-charts-pdfs">
        <div className="header-row note topic-header small right">
          <h4 className="header-text topic-header-text charts-text pdf">
            Spanish PDF
          </h4>
        </div>
        <div className="main-column topics-text withBottom">
          {showSpanish()}
        </div>
      </section>
      <section className="column topic note-charts-pdfs invisible"></section>
    </table>
  );
};

export default Bookmark;
