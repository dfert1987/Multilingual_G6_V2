import React, { useState, useEffect } from 'react';
import { Unit6Letter } from '../../Assets/Data/Unit6Letter';
import { Unit6AuthenticText } from '../../Assets/Data/Unit6AuthenticText';
import { Unit6SelectionSupport } from '../../Assets/Data/Unit6SelectionSupport';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
import TOCEditIcon from '../../Assets/Icons/TOCEditIcon.svg';
import '../../Styles/Resources.css';

export const Unit6Resources = () => {
    const [spanish, setSpanish] = useState();
    const [portuguese, setPortuguese] = useState();
    const [haitian, setHaitian] = useState();

    useEffect(() => {
        let justSpanish = Unit6Letter.map((item) => {
            return item.Spanish;
        });
        setSpanish(justSpanish);
        let justPort = Unit6Letter.map((item) => {
            return item.Portuguese;
        });
        setPortuguese(justPort);
        let justHaitian = Unit6Letter.map((item) => {
            return item.HaitianCreole;
        });
        setHaitian(justHaitian);
    }, []);

    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'white';
        } else {
            return 'tan';
        }
    };

    const firstColumn = () => {
        if (Unit6Letter) {
            return Unit6Letter.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons gloss ${stripes(
                                index
                            )}`}>
                            <p className='icon-input'> </p>
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const showSpan = () => {
        if (spanish) {
            return spanish.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='icon-input svg'
                                        alt='Spanish Parent Letter Icon'
                                        src={TOCEditIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <p className='icon-input'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const showPort = () => {
        if (portuguese) {
            return portuguese.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='icon-input svg'
                                        alt='Portuguese Parent Letter Icon'
                                        src={TOCEditIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <p className='icon-input'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const showHaitian = () => {
        if (haitian) {
            return haitian.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='icon-input svg'
                                        alt='Haitian Parent Letter Icon'
                                        src={TOCEditIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <p className='icon-input'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const bookColumn = () => {
        if (Unit6AuthenticText) {
            return (
                <div className='info-row book'>
                    <p className='text-title'>{Unit6AuthenticText.Title}</p>
                    <p className='type-author'>
                        {Unit6AuthenticText.Type} by {Unit6AuthenticText.Author}
                    </p>
                </div>
            );
        }
    };

    const bookIcon = () => {
        if (Unit6AuthenticText) {
            return (
                <div className='info-row book icon'>
                    <a href={Unit6AuthenticText.Link}>
                        <img
                            className='icon-input tall-grid unit6'
                            alt='Authentic Text PDF Icon'
                            src={PDFIcon}
                        />
                    </a>
                </div>
            );
        }
    };

    const selectionsColumn = () => {
        if (Unit6SelectionSupport) {
            return Unit6SelectionSupport.map((item, index) => {
                if (
                    item.Selection === 'Into the Lifeboat from Titanic Survivor'
                ) {
                    return (
                        <React.Fragment key={index}>
                            <div className={`info-row ${stripes(index)} tall`}>
                                \
                                <p className='title-from'>
                                    Into the Lifeboat <i>from</i> Titanic
                                    Survivor
                                </p>
                            </div>
                        </React.Fragment>
                    );
                } else {
                    return (
                        <React.Fragment key={index}>
                            <div className={`info-row ${stripes(index)} tall`}>
                                {item.Excerpt ? (
                                    <p className='title-from'>
                                        <i className='from'>from </i>
                                        {item.Selection}
                                    </p>
                                ) : (
                                    <p className='title-from'>
                                        {item.Selection}
                                    </p>
                                )}
                            </div>
                        </React.Fragment>
                    );
                }
            });
        }
    };

    const multiSummariesColumn = () => {
        if (Unit6SelectionSupport) {
            return Unit6SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.MultilingualSummary !== 'NA' ? (
                                <a href={item.MultilingualSummary}>
                                    <img
                                        className='icon-input tall'
                                        alt='Multilingual Summary PDF'
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

    const adoptedColumn = () => {
        if (Unit6SelectionSupport) {
            return Unit6SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.Summary !== 'NA' ? (
                                <a href={item.Summary}>
                                    <img
                                        className='icon-input tall'
                                        alt='Adapted Text PDF'
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

    const englishSketch = () => {
        if (Unit6SelectionSupport) {
            return Unit6SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.TextSketchEnglish !== 'NA' ? (
                                <a href={item.TextSketchEnglish}>
                                    <img
                                        className='icon-input tall'
                                        alt='English Text Sketch PDF'
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

    const spanishSketch = () => {
        if (Unit6SelectionSupport) {
            return Unit6SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall`}>
                            {item.TextSketchSpanish !== 'NA' ? (
                                <a href={item.TextSketchSpanish}>
                                    <img
                                        className='icon-input tall'
                                        alt='Spanish Text Sketch PDF'
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

    return (
        <div className='unit-container'>
            <section className='above-table unit'>
                <h3 className='unit-title not-one'>Unit 6 Resources</h3>
            </section>
            {/* <table className='one-table opener'>
                <section className='column topic home-language one'>
                    <div className='header-row multi topic-header oneTable'>
                        <h4 className='header-text topic-header-text home-text'>
                            Spanish Unit Opener
                        </h4>
                    </div>
                </section>
                <section className='column topic multi one'>
                    <div className='main-column links vocab v1'>
                        <div className='info-row icons gloss v1'>
                            <a href='https://www.hmhco.com/content/literature/read_studio/g6/student/pdf/06le_03_ese_U6_sp.pdf'>
                                <img
                                    className='icon-input glossary'
                                    alt='Critical Vocabulary PDF'
                                    src={PDFIcon}
                                />
                            </a>
                        </div>
                    </div>
                </section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
            </table> */}
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header multilingual-column'>
                        <h4 className='header-text topic-header-text charts-text'>
                            Multilingual Parent/Guardian Letter
                        </h4>
                    </div>
                    <div className='main-column topics-text unit'>
                        {firstColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header language'>
                        <h5 className='header-text small threeLanguages'>
                            Spanish
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit'>
                        {showSpan()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header language'>
                        <h5 className='header-text small threeLanguages'>
                            Portuguese
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit'>
                        {showPort()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small right'>
                    <div className='header-row note topic-header right language'>
                        <h5 className='header-text small threeLanguages haitian'>
                            Haitian Creole
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right'>
                        {showHaitian()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
            </table>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header'>
                        <h4 className='header-text topic-header-text charts-text'>
                            Spanish Authentic Text
                        </h4>
                    </div>
                    <div className='main-column topics-text unit authentic unit6'>
                        {bookColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header right'>
                        <h5 className='header-text small'>Spanish</h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall authentic unit6'>
                        {bookIcon()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
            </table>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header tall'>
                        <h5 className='header-text topic-header-text charts-text tall'>
                            Selection
                        </h5>
                    </div>
                    <div className='main-column topics-text unit'>
                        {selectionsColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h5 className='header-text small tall-short multiling'>
                            Multilingual Summary
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {multiSummariesColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h5 className='header-text small tall-short summary'>
                            Summary / Adapted Text
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {adoptedColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h5 className='header-text small tall-short english'>
                            Text Sketch (English)
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {englishSketch()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short right'>
                        <h5 className='header-text small tall-short spanish'>
                            Text Sketch (Spanish)
                        </h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {spanishSketch()}
                    </div>
                </section>
            </table>
        </div>
    );
};

export default Unit6Resources;
