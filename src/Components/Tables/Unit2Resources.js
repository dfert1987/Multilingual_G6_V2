import React, { useState, useEffect } from 'react';
// v1
import { Unit2Letter } from '../../Assets/Data/Unit2Letter';
import { Unit2AuthenticText } from '../../Assets/Data/Unit2AuthenticText';
import { Unit2SelectionSupport } from '../../Assets/Data/Unit2SelectionSupport';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
// v2
import TOCEditIcon from '../../Assets/Icons/TOCEditIcon.svg';
import '../../Styles/Resources.css';

export const Unit2Resources = () => {
    const [spanish, setSpanish] = useState();
    const [portuguese, setPortuguese] = useState();
    const [haitian, setHaitian] = useState();

    useEffect(() => {
        let justSpanish = Unit2Letter.map((item) => {
            return item.Spanish;
        });
        setSpanish(justSpanish);
        let justPort = Unit2Letter.map((item) => {
            return item.Portuguese;
        });
        setPortuguese(justPort);
        let justHaitian = Unit2Letter.map((item) => {
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
        if (Unit2Letter) {
            return Unit2Letter.map((item, index) => {
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
        if (Unit2AuthenticText) {
            return (
                <div className='info-row book'>
                    <p className='text-title'>{Unit2AuthenticText.Title}</p>
                    <p className='type-author'>
                        {Unit2AuthenticText.Type} by {Unit2AuthenticText.Author}
                    </p>
                </div>
            );
        }
    };

    const bookIcon = () => {
        if (Unit2AuthenticText) {
            return (
                <div className='info-row book icon'>
                    <a href={Unit2AuthenticText.Link}>
                        <img
                            className='icon-input tall-grid unit1 v1'
                            alt='Authentic Text PDF Icon'
                            src={PDFIcon}
                        />
                    </a>
                </div>
            );
        }
    };

    const englishSketch = () => {
        if (Unit2SelectionSupport) {
            return Unit2SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall v1`}>
                            {item.TextSketchEnglish !== 'NA' ? (
                                <a href={item.TextSketchEnglish}>
                                    <img
                                        className='icon-input tall v1'
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

    const multiSummariesColumn = () => {
        if (Unit2SelectionSupport) {
            return Unit2SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall v1`}>
                            {item.MultilingualSummary !== 'NA' ? (
                                <a href={item.MultilingualSummary}>
                                    <img
                                        className='icon-input tall v1'
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

    const selectionsColumn = () => {
        if (Unit2SelectionSupport) {
            return Unit2SelectionSupport.map((item, index) => {
                if (
                    item.Selection === "A Schoolgirl's Diary from I Am Malala"
                ) {
                    return (
                        <React.Fragment key={index}>
                            <div className={`info-row white tall`}>
                                <p className='title-from'>
                                    A Schoolgirl's Diary{' '}
                                    <i className='from'>from</i> I Am Malala
                                </p>
                            </div>
                        </React.Fragment>
                    );
                } else
                    return (
                        <React.Fragment key={index}>
                            <div
                                className={`info-row ${stripes(
                                    index
                                )} tall v1`}>
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
            });
        }
    };

    const spanishSketch = () => {
        if (Unit2SelectionSupport) {
            return Unit2SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall v1`}>
                            {item.TextSketchSpanish !== 'NA' ? (
                                <a href={item.TextSketchSpanish}>
                                    <img
                                        className='icon-input tall v1'
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

    const adoptedColumn = () => {
        if (Unit2SelectionSupport) {
            return Unit2SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections ${stripes(
                                index
                            )} tall v1`}>
                            {item.Summary !== 'NA' ? (
                                <a href={item.Summary}>
                                    <img
                                        className='icon-input tall v1'
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

    return (
        <div className='unit-container'>
            <section className='above-table unit'>
                <h3 className='unit-title not-one'>Unit 2 Resources</h3>
            </section>
            {/* v1 */}
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
                            <a href='https://www.hmhco.com/content/literature/read_studio/g6/student/pdf/06le_03_ese_U2_sp.pdf'>
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
                    <div className='main-column topics-text unit authentic unit5 v1'>
                        {bookColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header right'>
                        <h5 className='header-text small'>Spanish</h5>
                    </div>
                    <div className='main-column topics-text small-unit right tall authentic unit5'>
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

export default Unit2Resources;
