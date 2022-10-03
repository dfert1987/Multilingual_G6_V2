import React from 'react';
import AnchorCharts from './Tables/AnchorCharts';
// only V2
import MultilingualGlossaries from './Tables/MultilingualGlossaries';

import NoticeNote from './Tables/NoticeNote';
import Bookmark from './Tables/Bookmark';
import Unit1Resources from './Tables/Unit1Resources';
import Unit2Resources from './Tables/Unit2Resources';
import Unit3Resources from './Tables/Unit3Resources';
import Unit4Resources from './Tables/Unit4Resources';
import Unit5Resources from './Tables/Unit5Resources';
import Unit6Resources from './Tables/Unit6Resources';
import FreshLit from './Tables/FreshLit';
import ScrollBar from './ScrollBar';
import '../Styles/Table.css';

export const TableSection = () => {
    return (
        <div className='main'>
            <ScrollBar />
            <div id='AnchorCharts'>
                <AnchorCharts />
            </div>
            <div id='NoticeAndNote'>
                <NoticeNote />
            </div>
            <div id='MultilingualResource'>
                <MultilingualGlossaries />
            </div>
            <Bookmark />
            <div id='Unit1'>
                <Unit1Resources />
            </div>
            <div id='Unit2'>
                <Unit2Resources />
            </div>
            <div id='Unit3'>
                <Unit3Resources />
            </div>
            <div id='Unit4'>
                <Unit4Resources />
            </div>
            <div id='Unit5'>
                <Unit5Resources />
            </div>
            <div id='Unit6'>
                <Unit6Resources />
            </div>
            <div id='FreshLit'>
                <FreshLit />
            </div>
        </div>
    );
};

export default TableSection;
