import React, { useState } from 'react';
import Diagram from './Components/Diagram/Diagram';
import './Styles/App.css';

export const App = () => {
    const [anchorCharts, setAnchorCharts] = useState(false);
    const [multiGlossaries, setMultiGlossaries] = useState(false);
    const [notice, setNotice] = useState(false);
    const [multiParent, setMultiParent] = useState(false);
    const [multiSummaries, setMultiSummaries] = useState(false);
    const [authentic, setAuthentic] = useState(false);
    const [summaries, setSummaries] = useState(false);
    const [textSketch, setTextSketch] = useState(false);
    const [freshLit, setFreshLit] = useState(false);
    const [opener, setOpener] = useState(false);

    return (
        <div className='main-page'>
            <section className='above-diagram'>
                <p className='above-diagram-text'>
                    <b className='bold-above-diagram'>
                        Resources for Multilingual Learners
                    </b>{' '}
                    include unit- and selection-specific supports as well as the
                    following components that you may use flexibly with any
                    text.
                </p>
                <b className='instructions'>
                    Click a title in the diagram to learn about the component.
                </b>
            </section>
            <Diagram
                anchorCharts={anchorCharts}
                setAnchorCharts={setAnchorCharts}
                multiGlossaries={multiGlossaries}
                setMultiGlossaries={setMultiGlossaries}
                notice={notice}
                setNotice={setNotice}
                multiParent={multiParent}
                setMultiParent={setMultiParent}
                multiSummaries={multiSummaries}
                setMultiSummaries={setMultiSummaries}
                authentic={authentic}
                setAuthentic={setAuthentic}
                summaries={summaries}
                setSummaries={setSummaries}
                textSketch={textSketch}
                setTextSketch={setTextSketch}
                setFreshLit={setFreshLit}
                freshLit={freshLit}
                setOpener={setOpener}
                opener={opener}
                className='Diagram'
            />
        </div>
    );
};

export default App;
