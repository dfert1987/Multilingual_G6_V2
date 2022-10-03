import React from 'react';
import Adapted from '../../Assets/SVGs/SumAdapted_pop.png';
import Anchor from '../../Assets/SVGs/AnchorChart_pop.png';
import Authentic from '../../Assets/SVGs/AuthenticText_pop.png';
import Glossaries from '../../Assets/SVGs/Glossaries_pop.png';
import Letters from '../../Assets/SVGs/Letters_pop.png';
import MultilingualSummaries from '../../Assets/SVGs/Summaries_pop.png';
import Notice from '../../Assets/SVGs/NoticeNote_pop.png';
import Text from '../../Assets/SVGs/TextSketch_pop.png';
import Fresh from '../../Assets/SVGs/HMHFreshLit_pop.png';
import Opener from '../../Assets/SVGs/SPUnit.png';
import { motion, AnimatePresence } from 'framer-motion';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Styles/Modals.css';

export const Modals = ({
    anchorCharts,
    setAnchorCharts,
    multiGlossaries,
    setMultiGlossaries,
    notice,
    setNotice,
    multiParent,
    setMultiParent,
    multiSummaries,
    setMultiSummaries,
    authentic,
    setAuthentic,
    summaries,
    setSummaries,
    textSketch,
    setTextSketch,
    setFreshLit,
    freshLit,
    setOpener,
    opener,
}) => {
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: '0px',
            opacity: 1,
            transition: { delay: 0.5 },
        },
    };

    const getAlt = () => {
        if (anchorCharts) {
            return 'Anchor Charts. Text: High-Level Visual summaries of skills and ideas. Includes English, Spanish, and slide versions. Ideal for whole-class insturction. Image: Example Anchor chart on the identification of irony in Spanish';
        } else if (multiGlossaries) {
            return 'Multilingual Glossaries. Text: Definitions of Critical Vocabulary words from Into Literature selections plus grade-level Literary Terms and Academic Vocabulary. Available in ten languages from around the world. Image: Example of an English to Chinese glossary.';
        } else if (notice) {
            return 'Notice & Note. Text: Independent reading signposts for literary and informational texts. Anchor Charts and Bookmarks available in English and Spanish. Image: An example of a Notice & Note Signpost with an image of a boy reading a bookd and text in Spanish.';
        } else if (multiParent) {
            return 'Multilingual Parent/Guardian Letters. Text: Editable letters provide families with an overview of each unit of study in Into Literature. Available in Spanish, Portuguese, and Haitian Creole as well as English. Image: An image of an example Parent/Guardian Letter. ';
        } else if (multiSummaries) {
            return 'Multilingual Summaries. Text: Brief synopses for every selection in Into Literature. Available in English, Spanish, Haitian Creole, and Brazilian Portuguese. Example of Unit 1 Selection summaries with text in all four languages.';
        } else if (authentic) {
            return 'Spanish Authentic Text. Text: Additional texts tat support unit themes in Into Literature grades 6-8. High-quality texts written in Spanish by well-known Hispanic authors. Image: Example Text wtih a drawing fo a woman and her maid on the beach sitting on a towe. Entitled El delental blanco. ';
        } else if (summaries) {
            return "Summaries and Adapted Texts. Text: For selected texts, an extended summary with targeted passages or an adapted version in simplified English support comprehension. Suitable to bridge English learners toward fluency. Image: Example of an adapted text entitled 'Selfie: The Changing Facce of Self-Portraits'";
        } else if (textSketch) {
            return "Text Sketch. Text: Visual summaries of key ideas available for selected Into Literature texts. Available in accessible English and Spanish. Image: Example of a text sketch in Spanish entitled 'Entra en la Zona: La psicologia del diseno de videojuegos'. Features an image of a girl enthusiastically playing video games.";
        } else if (freshLit) {
            return 'HMH Fresh Lit Preview. Relevant and engaging new short stories in Spanish, available online as printable PDFs. Spanish lessons teaching key skills and critical thinking, available in slide format';
        } else if (opener) {
            return 'Spanish Unit Openers. Essential Question and Response Log for Spanish-speaking students. Academic Vocabulary instruction and glossary in Spanish. Selection summaries in Spanish and accesible English.';
        }
    };

    const handleClose = () => {
        setAnchorCharts(false);
        setAuthentic(false);
        setMultiGlossaries(false);
        setMultiParent(false);
        setMultiSummaries(false);
        setNotice(false);
        setSummaries(false);
        setTextSketch(false);
        setFreshLit(false);
        setOpener(false);
    };

    const setImage = () => {
        if (anchorCharts) {
            return Anchor;
        } else if (multiGlossaries) {
            return Glossaries;
        } else if (notice) {
            return Notice;
        } else if (multiParent) {
            return Letters;
        } else if (multiSummaries) {
            return MultilingualSummaries;
        } else if (authentic) {
            return Authentic;
        } else if (summaries) {
            return Adapted;
        } else if (textSketch) {
            return Text;
        } else if (freshLit) {
            return Fresh;
        } else if (opener) {
            return Opener;
        } else return null;
    };

    const type = () => {
        if (anchorCharts) {
            return 'anchor-charts';
        } else if (multiGlossaries) {
            return 'multi-glossaries';
        } else if (notice) {
            return 'notice';
        } else if (multiParent) {
            return 'parent';
        } else if (multiSummaries) {
            return 'multi-summaries';
        } else if (authentic) {
            return 'authentic';
        } else if (summaries) {
            return 'summaries';
        } else if (textSketch) {
            return 'text-sketch';
        } else if (freshLit) {
            return 'fresh-lit';
        } else if (opener) {
            return 'unit-opener';
        }
    };

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {anchorCharts ||
                multiGlossaries ||
                notice ||
                multiParent ||
                multiSummaries ||
                authentic ||
                summaries ||
                freshLit ||
                opener ||
                textSketch ? (
                    <motion.div
                        className={`outerModal flex centerFlex ${type()}`}
                        variants={backdrop}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'>
                        <motion.div
                            className={`flex flexColumn innerModal ${type()}`}
                            variants={modal}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'>
                            <div className={`whole-modal ${type()}`}>
                                <div className='button-row'>
                                    <button
                                        className='close-button'
                                        onClick={handleClose}>
                                        <FontAwesomeIcon
                                            className='x-icon free'
                                            icon={faXmark}
                                            alt={'close pop-up botton'}
                                        />
                                    </button>
                                </div>
                                <div className='main-modal'>
                                    <img
                                        className={`modal-pic ${type()}`}
                                        alt={getAlt()}
                                        src={setImage()}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default Modals;
