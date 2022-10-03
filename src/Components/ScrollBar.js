import React from 'react';
import { AnchorChart } from '../Assets/Data/AnchorChart';

// only for v2
import { MultilingualResourceData } from '../Assets/Data/MultilingualResourceData';

import { NoticeAndNote } from '../Assets/Data/NoticeAndNote';
import { Unit1Letter } from '../Assets/Data/Unit1Letter';
import { FreshLitData } from '../Assets/Data/FreshLitData';
import { Link } from 'react-scroll';
import '../Styles/ScrollBar.css';

export const ScrollBar = () => {
    return (
        <div className='scroll-bar'>
            <div className='title-and-buttons'>
                <ul className='choices-container'>
                    {AnchorChart ? (
                        <li className='navButton'>
                            <Link
                                activeClass='active'
                                to='AnchorCharts'
                                spy={true}
                                smooth={true}>
                                Anchor Charts
                            </Link>
                        </li>
                    ) : null}
                    {NoticeAndNote ? (
                        <li className='navButton'>
                            <Link
                                to='NoticeAndNote'
                                activeClass='active'
                                spy={true}
                                smooth={true}>
                                Notice and Note
                            </Link>
                        </li>
                    ) : null}
                    {/* only v2 */}
                    {MultilingualResourceData ? (
                        <li className='navButton'>
                            <Link
                                to='MultilingualResource'
                                activeClass='active'
                                spy={true}
                                smooth={true}>
                                Multilingual Glossaries
                            </Link>
                        </li>
                    ) : null}
                    {Unit1Letter ? (
                        <li className='navButton'>
                            <Link
                                to='Unit1'
                                spy={true}
                                smooth={true}
                                activeClass='active'>
                                {/* Text-Specifc Resources */}
                                Unit Resources
                            </Link>
                        </li>
                    ) : null}
                    {FreshLitData ? (
                        <li className='navButton'>
                            <Link
                                to='FreshLit'
                                spy={true}
                                smooth={true}
                                activeClass='active'>
                                HMH Fresh Lit
                            </Link>
                        </li>
                    ) : null}
                </ul>
            </div>
        </div>
    );
};

export default ScrollBar;
