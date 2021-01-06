import Bible from './Bibles/kjv/Books.json';
import Genesis from './Bibles/kjv/Genesis.json'
import Exodus from './Bibles/kjv/Exodus.json'
import Leviticus from './Bibles/kjv/Leviticus.json'
import Numbers from './Bibles/kjv/Numbers.json'
import Deuteronomy from './Bibles/kjv/Deuteronomy.json'
import Joshua from './Bibles/kjv/Joshua.json'
import Judges from './Bibles/kjv/Judges.json'
import Ruth from './Bibles/kjv/Ruth.json'
import OneSamuel from './Bibles/kjv/1Samuel.json'
import TwoSamuel from './Bibles/kjv/2Samuel.json'
import OneKings from './Bibles/kjv/1Kings.json'
import TwoKings from './Bibles/kjv/2Kings.json'
import OneChronicles from './Bibles/kjv/1Chronicles.json'
import TwoChronicles from './Bibles/kjv/2Chronicles.json'
import Ezra from './Bibles/kjv/Ezra.json'
import Nehemiah from './Bibles/kjv/Nehemiah.json'
import Esther from './Bibles/kjv/Esther.json'
import Job from './Bibles/kjv/Job.json'
import Psalms from './Bibles/kjv/Psalms.json'
import Proverbs from './Bibles/kjv/Proverbs.json'
import Ecclesiastes from './Bibles/kjv/Ecclesiastes.json'
import SongofSolomon from './Bibles/kjv/SongofSolomon.json'
import Isaiah from './Bibles/kjv/Isaiah.json'
import Jeremiah from './Bibles/kjv/Jeremiah.json'
import Lamentations from './Bibles/kjv/Lamentations.json'
import Ezekiel from './Bibles/kjv/Ezekiel.json'
import Daniel from './Bibles/kjv/Daniel.json'
import Hosea from './Bibles/kjv/Hosea.json'
import Joel from './Bibles/kjv/Joel.json'
import Amos from './Bibles/kjv/Amos.json'
import Obadiah from './Bibles/kjv/Obadiah.json'
import Jonah from './Bibles/kjv/Jonah.json'
import Micah from './Bibles/kjv/Micah.json'
import Nahum from './Bibles/kjv/Nahum.json'
import Habakkuk from './Bibles/kjv/Habakkuk.json'
import Zephaniah from './Bibles/kjv/Zephaniah.json'
import Haggai from './Bibles/kjv/Haggai.json'
import Zechariah from './Bibles/kjv/Zechariah.json'
import Malachi from './Bibles/kjv/Malachi.json'
import Matthew from './Bibles/kjv/Matthew.json'
import Mark from './Bibles/kjv/Mark.json'
import Luke from './Bibles/kjv/Luke.json'
import John from './Bibles/kjv/John.json'
import Acts from './Bibles/kjv/Acts.json'
import Romans from './Bibles/kjv/Romans.json'
import OneCorinthians from './Bibles/kjv/1Corinthians.json'
import TwoCorinthians from './Bibles/kjv/2Corinthians.json'
import Galatians from './Bibles/kjv/Galatians.json'
import Ephesians from './Bibles/kjv/Ephesians.json'
import Philippians from './Bibles/kjv/Philippians.json'
import Colossians from './Bibles/kjv/Colossians.json'
import OneThessalonians from './Bibles/kjv/1Thessalonians.json'
import TwoThessalonians from './Bibles/kjv/2Thessalonians.json'
import OneTimothy from './Bibles/kjv/1Timothy.json'
import TwoTimothy from './Bibles/kjv/2Timothy.json'
import Titus from './Bibles/kjv/Titus.json'
import Philemon from './Bibles/kjv/Philemon.json'
import Hebrews from './Bibles/kjv/Hebrews.json'
import James from './Bibles/kjv/James.json'
import OnePeter from './Bibles/kjv/1Peter.json'
import TwoPeter from './Bibles/kjv/2Peter.json'
import OneJohn from './Bibles/kjv/1John.json'
import TwoJohn from './Bibles/kjv/2John.json'
import ThreeJohn from './Bibles/kjv/3John.json'
import Jude from './Bibles/kjv/Jude.json'
import Revelation from './Bibles/kjv/Revelation.json'




const BibleObjs = {
    "Genesis": Genesis,
    "Exodus": Exodus,
    "Leviticus": Leviticus,
    "Numbers": Numbers,
    "Deuteronomy": Deuteronomy,
    "Joshua": Joshua,
    "Judges": Judges,
    "Ruth": Ruth,
    "OneSamuel": OneSamuel,
    "TwoSamuel": TwoSamuel,
    "OneKings": OneKings,
    "TwoKings": TwoKings,
    "OneChronicles": OneChronicles,
    "TwoChronicles": TwoChronicles,
    "Ezra": Ezra,
    "Nehemiah": Nehemiah,
    "Esther": Esther,
    "Job": Job,
    "Psalms": Psalms,
    "Proverbs": Proverbs,
    "Ecclesiastes": Ecclesiastes,
    "Song of Solomon": SongofSolomon,
    "Isaiah": Isaiah,
    "Jeremiah": Jeremiah,
    "Lamentations": Lamentations,
    "Ezekiel": Ezekiel,
    "Daniel": Daniel,
    "Hosea": Hosea,
    "Joel": Joel,
    "Amos": Amos,
    "Obadiah": Obadiah,
    "Jonah": Jonah,
    "Micah": Micah,
    "Nahum": Nahum,
    "Habakkuk": Habakkuk,
    "Zephaniah": Zephaniah,
    "Haggai": Haggai,
    "Zechariah": Zechariah,
    "Malachi": Malachi,
    "Matthew": Matthew,
    "Mark": Mark,
    "Luke": Luke,
    "John": John,
    "Acts": Acts,
    "Romans": Romans,
    "OneCorinthians": OneCorinthians,
    "TwoCorinthians": TwoCorinthians,
    "Galatians": Galatians,
    "Ephesians": Ephesians,
    "Philippians": Philippians,
    "Colossians": Colossians,
    "OneThessalonians": OneThessalonians,
    "TwoThessalonians": TwoThessalonians,
    "OneTimothy": OneTimothy,
    "TwoTimothy": TwoTimothy,
    "Titus": Titus,
    "Philemon": Philemon,
    "Hebrews": Hebrews,
    "James": James,
    "OnePeter": OnePeter,
    "TwoPeter": TwoPeter,
    "OneJohn": OneJohn,
    "TwoJohn": TwoJohn,
    "Three John": ThreeJohn,
    "Jude": Jude,
    "Revelation": Revelation
};

export default function Retriever(book) {
    //console.log(book);
    var BibleBook = BibleObjs[book];
    const totalChapters = BibleBook.chapters.length; 
    return ({
        "book": BibleBook,
        "length": totalChapters
    });

}
