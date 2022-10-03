import React, { useState, useEffect } from 'react';
import { MultilingualResourceData } from '../../Assets/Data/MultilingualResourceData';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
import '../../Styles/MultilingualGlossariesV2.css';

export const MultilingualGlossaries = () => {
    const [languages, setLanguages] = useState();
    const [vocab, setVocab] = useState();
    const [litTerms, setLitTerms] = useState();

    useEffect(() => {
        let justLanguages = MultilingualResourceData.map((item) => {
            return item.Language;
        });
        setLanguages(justLanguages);

        let justVocab = MultilingualResourceData.map((item) => {
            return item.CriticalVocabulary;
        });
        setVocab(justVocab);

        let justTerms = MultilingualResourceData.map((item) => {
            return item.LiteraryTermsAndAcademicVocabulary;
        });
        setLitTerms(justTerms);
    }, []);

    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'white';
        } else {
            return 'tan';
        }
    };

    const showLanguages = () => {
        if (languages) {
            return languages.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className={`info-row gloss ${stripes(index)}`}>
                            <p className='topic-item'>{item}</p>
                        </div>
                    </React.Fragment>
                );
            });
        } else return null;
    };

    const showCriticalVocab = () => {
        if (vocab) {
            return vocab.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='v2 icon-input glossary'
                                        alt='Critical Vocabulary PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss${stripes(
                                    index
                                )}`}>
                                <p className='icon-input glossary'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const showLiteraryTerms = () => {
        if (litTerms) {
            return litTerms.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='v2 icon-input glossary'
                                        alt='Literary Terms and Academic Vocabulary PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <p className='icon-input glossary'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    return (
        <div className='glossaries-container'>
            <section className='above-table'>
                <div className='left-side'>
                    <h4 className='paragraph-header multi'>
                        Multilingual Glossaries
                    </h4>
                    <p className='above-paragraph'>
                        These glossaries use students’ home languages to define
                        Critical Vocabulary from grade 6 <i>Into Literature</i>{' '}
                        selections plus Literary Terms and Academic Vocabulary
                        that students will need as they develop English fluency.
                    </p>
                </div>
                <div className='right-side'>
                    <div className='key-container'>
                        <b className='key-header'>Key to Icons</b>
                        <div className='key-main'>
                            <span className='key-item'>
                                <img
                                    src={PDFIcon}
                                    className='key-icon'
                                    alt='PDF Icon'
                                />
                                <p className='key-text anchorKey'>Printable</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <table className='multilingual-table-container'>
                <section className='column topic home-language'>
                    <div className='header-row multi topic-header'>
                        <h4 className='header-text topic-header-text home-text'>
                            Home Languages
                        </h4>
                    </div>
                    <div className='main-column topics-text'>
                        {showLanguages()}
                    </div>
                </section>
                <section className='column topic multi'>
                    <div className='header-row multi topic-header'>
                        <h4 className='header-text topic-header-text multi-right critical-text'>
                            Critical Vocabulary
                        </h4>
                    </div>
                    <div className='main-column links vocab'>
                        {showCriticalVocab()}
                    </div>
                </section>
                <section className='column topic multi right'>
                    <div className='header-row multi topic-header right'>
                        <h4 className='header-text topic-header-text multi-right'>
                            Literary Terms and Academic Vocabulary
                        </h4>
                    </div>
                    <div className='main-column links vocab'>
                        {showLiteraryTerms()}
                    </div>
                </section>
            </table>
        </div>
    );
};

export default MultilingualGlossaries;
