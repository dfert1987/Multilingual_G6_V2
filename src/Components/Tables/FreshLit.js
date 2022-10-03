import React from 'react';
import { FreshLitData } from '../../Assets/Data/FreshLitData';
import EbookIcon from '../../Assets/Icons/EbookIcon.png';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
import PPTIcon from '../../Assets/Icons/PPTIcon.png';
import FreshLitLogo from '../../Assets/Icons/FreshLitGreen2.svg';
import '../../Styles/Resources.css';

export const FreshLit = () => {
    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'white';
        } else {
            return 'tan';
        }
    };

    const selectionsColumn = () => {
        if (FreshLitData) {
            return FreshLitData.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row ${stripes(index)} tall fresh`}>
                            <p className='title-from fresh'>{item.Selection}</p>
                            <p className='type-author fresh'>
                                {item.Genre} {item.Author}
                            </p>
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const epubColumn = () => {
        if (FreshLitData) {
            return FreshLitData.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall fresh`}>
                            {item.SpanishEpubLink !== 'NA' ? (
                                <a href={item.SpanishEpubLink}>
                                    <img
                                        className='icon-input tall fresh'
                                        alt='Spanish Epub Link'
                                        src={EbookIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const pdfColumn = () => {
        if (FreshLitData) {
            return FreshLitData.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall fresh`}>
                            {item.SpanishPDFLink !== 'NA' ? (
                                <a href={item.SpanishPDFLink}>
                                    <img
                                        className='icon-input tall fresh'
                                        alt='Spanish PDF Link'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const pptColumn = () => {
        if (FreshLitData) {
            return FreshLitData.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall fresh`}>
                            {item.SpanishLessonSlidesLink !== 'NA' ? (
                                <a href={item.SpanishLessonSlidesLink}>
                                    <img
                                        className='icon-input tall fresh'
                                        alt='Spanish Slides Link'
                                        src={PPTIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    return (
        <div className='unit-container'>
            <section className='above-table'>
                <div className='left-side'>
                    <h3 className='paragraph-header anchor'>
                        <span className='fresh-header'>
                            <img
                                class='fresh-logo'
                                alt='Fresh Lit'
                                src={FreshLitLogo}
                            />
                            <p className='preview'>Preview</p>
                        </span>
                    </h3>
                    <p className='above-paragraph'>
                        Help students whose home language is Spanish master
                        reading skills and concepts using these engaging
                        Spanish-language stories (available online and in
                        printable form) with instructional support.
                    </p>
                </div>
                <div className='right-side'>
                    <div className='key-container'>
                        <b className='key-header'>Key to Icons</b>
                        <div className='key-main'>
                            <span className='key-item'>
                                <img
                                    src={EbookIcon}
                                    alt='Ebook Icon'
                                    className='key-icon'
                                />
                                <p className='key-text anchorKey'>Ebook</p>
                            </span>
                            <span className='key-item'>
                                <img
                                    src={PDFIcon}
                                    alt='PDF Icon'
                                    className='key-icon'
                                />
                                <p className='key-text anchorKey'>Printable</p>
                            </span>
                            <span className='key-item'>
                                <img
                                    src={PPTIcon}
                                    alt='PPT Icon'
                                    className='key-icon'
                                />
                                <p className='key-text anchorKey'>Slides</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit fresh'>
                    <div className='header-row note topic-header tall'>
                        <h5 className='header-text topic-header-text charts-text tall'>
                            Selection
                        </h5>
                    </div>
                    <div className='main-column topics-text unit fresh'>
                        {selectionsColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h5 className='header-text small tall-short multiling fresh-short'>
                            Spanish Epub
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {epubColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h5 className='header-text small tall-short multiling fresh-short'>
                            Spanish PDF
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {pdfColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short right'>
                        <h5 className='header-text small tall-short multiling fresh-long'>
                            Spanish Lesson Slides
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {pptColumn()}
                    </div>
                </section>
            </table>
        </div>
    );
};

export default FreshLit;
