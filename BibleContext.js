import React, {createContext, useState} from 'react';


export const BibleContext = createContext();

export function BibleProvider(props) {

    const [VerseToggle, VerseToggler] = useState(false);

    const [book, setBook] = useState('Genesis');

    const [chapter, setChapter] = useState(1);

    const value = {
        viewState: [VerseToggle, VerseToggler],
        bookState: [book, setBook],
        chapterState: [chapter, setChapter]
    };

    return(
        <BibleContext.Provider value={value}>
            {props.children}
        </BibleContext.Provider>
    );
}

