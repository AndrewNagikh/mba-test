import React, { useEffect, useState } from 'react'
import './discCSS.css';

const Disc = ({subject}) => {
  return (
    <div className="disc">
        <h2>{subject.title}</h2>
        <div className="modules">
            <div className="module col-xl-7 col-lg-7 col-md-7">
                <p className="moduleTitle">1 модуль</p>
                <div className="specSub">
                    <ul>
                    {subject.specializedSubjects.slice(0,5).map((spec) => <li key={spec.id}>{spec.string}</li>)}
                    </ul>
                </div>
            </div>
            <div className="module col-xl-7 col-lg-7 col-md-7">
                <p className="moduleTitle">2 модуль</p>
                <div className="specSub">
                    <ul>
                        {subject.specializedSubjects.slice(5,10).map((spec) => <li key={spec.id}>{spec.string}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Disc