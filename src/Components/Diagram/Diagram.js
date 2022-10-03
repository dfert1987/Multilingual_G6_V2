import React from 'react';
import Modals from './Modals';
// import SVGDiagram from './SVGDiagram';
import SVGDiagramV2 from './SVGDiagramV2';
// import Key from '../Diagram/Key';
import KeyV2 from '../Diagram/KeyV2';
import '../../Styles/App.css';

export const Diagram = ({
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
    opener,
    setOpener,
}) => {
    return (
        <div className='main-diagram'>
            <div className='diagram-container'>
                <SVGDiagramV2
                    className='diagram-svg'
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
                    opener={opener}
                    setOpener={setOpener}
                />
                <KeyV2 className='key' />
            </div>

            <div className='modals-container'>
                <Modals
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
                    opener={opener}
                    setOpener={setOpener}
                    className='modals'
                />
            </div>
        </div>
    );
};

export default Diagram;
